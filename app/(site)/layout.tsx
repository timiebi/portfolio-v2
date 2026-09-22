import { AmbientBackdrop } from "@/components/ambient-backdrop";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SiteMain } from "@/components/site-main";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-dvh flex-col">
      <AmbientBackdrop />
      <SiteHeader />
      <div id="top" className="flex min-w-0 flex-1 flex-col">
        <SiteMain>{children}</SiteMain>
        <SiteFooter />
      </div>
    </div>
  );
}
