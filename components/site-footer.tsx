import Link from "next/link";
import { Instagram, Mail } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="w-full border-t py-6 md:py-0">
      <div className="container flex flex-col md:flex-row justify-between items-center gap-4 md:h-24">
        <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} NAMAH Model United Nations. All rights reserved.
          </p>
        </div>
        <nav className="flex gap-4 md:gap-6 items-center">
          <Link href="/privacy-policy" className="text-xs text-muted-foreground hover:underline underline-offset-4">
            Privacy Policy
          </Link>
          <Link href="/terms" className="text-xs text-muted-foreground hover:underline underline-offset-4">
            Terms
          </Link>
          <Link href="https://instagram.com/your_instagram" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-gray-800">
            <Instagram size={18} />
          </Link>
          <Link href="mailto:your@email.com" className="text-muted-foreground hover:text-gray-800">
            <Mail size={18} />
          </Link>
        </nav>
      </div>
    </footer>
  );
}
