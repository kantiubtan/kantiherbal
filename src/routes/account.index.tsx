import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

export const Route = createFileRoute("/account/")({
  component: ProfilePage,
});

function ProfilePage() {
  const { user } = useAuth();
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (!user) return;
    supabase
      .from("profiles")
      .select("full_name, phone")
      .eq("user_id", user.id)
      .maybeSingle()
      .then(({ data }) => {
        setFullName(data?.full_name ?? "");
        setPhone(data?.phone ?? "");
        setLoading(false);
      });
  }, [user]);

  async function save(e: React.FormEvent) {
    e.preventDefault();
    if (!user) return;
    setSaving(true);
    const { error } = await supabase
      .from("profiles")
      .upsert({ user_id: user.id, full_name: fullName, phone }, { onConflict: "user_id" });
    setSaving(false);
    if (error) toast.error(error.message);
    else toast.success("Profile saved");
  }

  if (loading) return <div className="text-muted-foreground">Loading…</div>;

  return (
    <div className="rounded-3xl border border-border/60 bg-card p-8 shadow-card">
      <h2 className="font-display text-2xl font-700 text-foreground">Personal details</h2>
      <p className="mt-1 text-sm text-muted-foreground">Update your contact information.</p>
      <form onSubmit={save} className="mt-6 grid gap-4 sm:grid-cols-2">
        <Field label="Full name">
          <input value={fullName} onChange={(e) => setFullName(e.target.value)} className="ipt" />
        </Field>
        <Field label="Phone">
          <input value={phone} onChange={(e) => setPhone(e.target.value)} className="ipt" />
        </Field>
        <Field label="Email">
          <input value={user?.email ?? ""} disabled className="ipt opacity-60" />
        </Field>
        <div className="sm:col-span-2">
          <button
            disabled={saving}
            className="rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90 disabled:opacity-50"
          >
            {saving ? "Saving…" : "Save changes"}
          </button>
        </div>
      </form>
      <style>{`.ipt{display:block;width:100%;border-radius:.5rem;border:1px solid hsl(var(--border));background:transparent;padding:.625rem .875rem;font-size:.875rem;outline:none}.ipt:focus{border-color:hsl(var(--primary))}`}</style>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-muted-foreground">
        {label}
      </span>
      {children}
    </label>
  );
}
