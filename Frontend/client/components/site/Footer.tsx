import { Github, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container py-8 grid gap-6 md:grid-cols-2 items-center">
        <div>
          <p className="font-semibold">Nextgen Innovation</p>
          <p className="text-sm text-muted-foreground mt-1">
            Empowering the next generation of AI innovators.
          </p>
        </div>
        <div className="flex md:justify-end gap-4">
          <a aria-label="GitHub" href="https://github.com" target="_blank" rel="noreferrer" className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border hover:bg-secondary">
            <Github className="h-5 w-5" />
          </a>
          <a aria-label="LinkedIn" href="https://linkedin.com" target="_blank" rel="noreferrer" className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border hover:bg-secondary">
            <Linkedin className="h-5 w-5" />
          </a>
          <a aria-label="Instagram" href="https://instagram.com" target="_blank" rel="noreferrer" className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border hover:bg-secondary">
            <Instagram className="h-5 w-5" />
          </a>
        </div>
      </div>
      <div className="text-center text-xs text-muted-foreground pb-6">© {new Date().getFullYear()} Nextgen Innovation Club. All rights reserved.</div>
    </footer>
  );
}
