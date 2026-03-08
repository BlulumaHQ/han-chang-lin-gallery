import { Link, useLocation } from "react-router-dom";

function ScrollLink({ to, className, children }: { to: string; className?: string; children: React.ReactNode }) {
  const location = useLocation();
  const handleClick = () => {
    if (location.pathname === to) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };
  return <Link to={to} className={className} onClick={handleClick}>{children}</Link>;
}

export default function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <p className="font-serif text-xl font-light text-foreground">John Han-Chang Lin</p>
            <p className="font-serif text-lg text-muted-foreground mt-1">林漢章</p>
            <p className="text-sm text-muted-foreground mt-3">Vancouver, Canada</p>
          </div>
          <div className="flex flex-col gap-2">
            <ScrollLink to="/gallery" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Gallery</ScrollLink>
            <ScrollLink to="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">About</ScrollLink>
            <ScrollLink to="/exhibitions" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Exhibitions</ScrollLink>
            <ScrollLink to="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contact</ScrollLink>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">
              For acquisition inquiries and exhibition opportunities.
            </p>
            <ScrollLink to="/contact" className="text-sm text-foreground underline underline-offset-4 mt-2 inline-block">
              Contact the Studio
            </ScrollLink>
          </div>
        </div>
        <div className="mt-12 pt-6 border-t border-border flex flex-col md:flex-row justify-between items-start md:items-center gap-2">
          <p className="text-xs text-muted-foreground">
            © 2026 John Han-Chang Lin Gallery. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Web Design by{" "}
            <a
              href="https://bluluma.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:underline underline-offset-4 transition-colors"
            >
              Bluluma
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
