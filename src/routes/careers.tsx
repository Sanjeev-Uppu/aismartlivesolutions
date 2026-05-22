import { createFileRoute } from "@tanstack/react-router";
import CareersPage from "@/components/site/CareersPage";

export const Route = createFileRoute("/careers")({
  component: Careers,
});

function Careers() {
  return <CareersPage />;
}