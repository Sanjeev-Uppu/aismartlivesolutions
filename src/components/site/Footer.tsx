import { Link } from "@tanstack/react-router";
import { Mail, Sparkles } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface/40 mt-24">

      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-14">

        <div className="grid gap-12 lg:grid-cols-3">

          {/* Company Info */}
          <div>
            <Link
              to="/"
              className="flex items-center gap-2"
            >
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-primary">
                <Sparkles className="h-5 w-5 text-primary-foreground" />
              </span>

              <span className="font-display font-semibold text-lg">
                AI
                <span className="text-gradient">
                  SmartLive Solutions
                </span>
              </span>
            </Link>

            <p className="mt-4 max-w-md text-sm text-muted-foreground leading-relaxed">
              AI Smart Live Solutions Pvt Ltd builds next-generation AI
              products that help enterprises automate, create, and learn
              at scale.
            </p>

            {/* Mail */}
            <div className="mt-5">
              <a
                href="mailto:aismartlivesolutions5@gmail.com"
                aria-label="Mail"
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border text-muted-foreground hover:text-foreground hover:border-primary/60 transition-colors"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Right Side Sections */}
          <div className="lg:col-span-2 flex flex-col sm:flex-row sm:justify-between gap-10">

            {/* Company Links */}
            <div>
              <h4 className="text-sm font-semibold mb-4">
                Company
              </h4>

              <ul className="space-y-2 text-sm text-muted-foreground">

                <li>
                  <Link
                    to="/about"
                    className="hover:text-foreground transition-colors"
                  >
                    About
                  </Link>
                </li>

                <li>
                  <Link
                    to="/products"
                    className="hover:text-foreground transition-colors"
                  >
                    Products
                  </Link>
                </li>

                <li>
                  <Link
                    to="/process"
                    className="hover:text-foreground transition-colors"
                  >
                    Process
                  </Link>
                </li>

                <li>
                  <Link
                    to="/careers"
                    className="hover:text-foreground transition-colors"
                  >
                    Careers
                  </Link>
                </li>

                <li>
                  <Link
                    to="/faqs"
                    className="hover:text-foreground transition-colors"
                  >
                    FAQs
                  </Link>
                </li>

                <li>
                  <Link
                    to="/contact"
                    className="hover:text-foreground transition-colors"
                  >
                    Contact
                  </Link>
                </li>

              </ul>
            </div>

            {/* Products */}
            <div>
              <h4 className="text-sm font-semibold mb-4">
                Products
              </h4>

              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Alankara AI</li>
                <li>AstraVidya AI</li>
                <li>SenseMinds 360</li>
              </ul>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-5 flex items-center justify-center text-xs text-muted-foreground text-center">
          <p>
            © {new Date().getFullYear()} AI Smart Live Solutions Pvt Ltd.
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}