import { AmbientBackdrop } from "@/components/ambient-backdrop";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { siteShell } from "@/lib/layout";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-dvh flex-col">
      <AmbientBackdrop />
      <SiteHeader />
      <div id="top" className="flex min-w-0 flex-1 flex-col">
        <main
          className={`${siteShell} min-w-0 flex-1 pb-20 pt-6 sm:pb-24 sm:pt-8 lg:pb-32 lg:pt-12`}
        >
          {children}
        </main>
        <SiteFooter />
      </div>
    </div>
  );
}
