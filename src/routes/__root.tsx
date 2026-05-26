import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";

import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";

import { Toaster } from "sonner";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">
          404
        </h1>

        <h2 className="mt-4 text-xl font-semibold text-foreground">
          Page not found
        </h2>

        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't
          exist or has been moved.
        </p>

        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  console.error(error);

  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>

        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end.
          You can try refreshing or head back
          home.
        </p>

        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>

          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route =
  createRootRouteWithContext<{
    queryClient: QueryClient;
  }>()({
    head: () => ({
      meta: [
        {
          charSet: "utf-8",
        },

        {
          name: "viewport",
          content:
            "width=device-width, initial-scale=1",
        },

        {
          title:
            "AISmartLive — Next-Gen AI Solutions for Enterprise",
        },

        {
          name: "description",
          content:
            "AI Smart Live Solutions Pvt Ltd builds intelligent products like Sense Minds 360, Alankara AI, and AstraVidya AI to help businesses automate, create, and learn.",
        },

        {
          name: "author",
          content:
            "AI Smart Live Solutions Pvt Ltd",
        },

        {
          property: "og:title",
          content:
            "AISmartLive — Next-Gen AI Solutions",
        },

        {
          property: "og:description",
          content:
            "Enterprise-grade AI products and custom solutions for automation, education, and intelligent sensing.",
        },

        {
          property: "og:type",
          content: "website",
        },

        {
          name: "twitter:card",
          content: "summary",
        },

        {
          name: "twitter:site",
          content: "@Lovable",
        },
      ],

      links: [
        {
          rel: "stylesheet",
          href: appCss,
        },
      ],
    }),

    component: RootComponent,

    notFoundComponent:
      NotFoundComponent,

    errorComponent: ErrorComponent,
  });

function RootComponent() {
  const { queryClient } =
    Route.useRouteContext();

  return (
    <>
      <HeadContent />

      <QueryClientProvider
        client={queryClient}
      >
        <Navbar />

        <main className="min-h-screen">
          <Outlet />
        </main>

        <Footer />

        <Toaster
          richColors
          position="top-right"
        />
      </QueryClientProvider>

      <Scripts />
    </>
  );
}