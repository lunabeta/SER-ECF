import { Navigate } from "react-router-dom";
import { Loader2, ShieldAlert } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import SiteHeader from "@/components/SiteHeader";
import { Link } from "react-router-dom";

const RequireAdmin = ({ children }: { children: React.ReactNode }) => {
  const { user, isAdmin, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Loader2 className="w-6 h-6 animate-spin text-secondary" />
      </div>
    );
  }

  if (!user) return <Navigate to="/auth" replace />;

  if (!isAdmin) {
    return (
      <main className="min-h-screen bg-background">
        <SiteHeader />
        <section className="pt-40 pb-20 min-h-screen flex items-center justify-center">
          <div className="card-elevated max-w-md text-center">
            <ShieldAlert className="w-10 h-10 text-ethiopian-red mx-auto mb-4" />
            <h1 className="font-display text-2xl font-bold text-foreground mb-2">Admin access required</h1>
            <p className="text-sm text-muted-foreground mb-5">
              Your account is signed in but does not have the admin role. Ask an existing admin to grant you access.
            </p>
            <Link to="/" className="text-secondary hover:underline text-sm">← Return home</Link>
          </div>
        </section>
      </main>
    );
  }

  return <>{children}</>;
};

export default RequireAdmin;
