'use client';

import Script from 'next/script';
import { usePathname } from 'next/navigation';
import { useCallback, useEffect, useRef } from 'react';
import { GOATCOUNTER_CODE } from '@/lib/site';

declare global {
  interface Window {
    goatcounter?: { count?: (vars: { path: string }) => void };
  }
}

/**
 * GoatCounter pageview tracking — cookieless, so no consent banner is needed.
 *
 * GoatCounter's own onload counter is disabled via `no_onload`, and every view
 * is sent from the effect below instead. That is not incidental: `next/link`
 * navigates on the client, so the stock snippet would only ever record the
 * first page of a visit. A reader landing on the home page and opening three
 * essays would count once rather than four times, and the per-essay numbers —
 * the only ones worth having here — would be missing entirely.
 *
 * Renders nothing while GOATCOUNTER_CODE is empty, so the site ships with no
 * third-party script until a site code is set.
 */
export default function Analytics() {
  const pathname = usePathname();
  const loaded = useRef(false);
  const pending = useRef<string | null>(null);

  /** Queues the view if count.js has not finished loading yet. */
  const send = useCallback((path: string) => {
    if (!GOATCOUNTER_CODE) return;
    if (!loaded.current || typeof window.goatcounter?.count !== 'function') {
      pending.current = path;
      return;
    }
    window.goatcounter.count({ path });
  }, []);

  useEffect(() => {
    // location.pathname rather than the router's pathname: the router strips
    // basePath, and the dashboard is easier to read when its paths match the
    // URLs people actually visit (/portfolio/posts/... not /posts/...).
    send(window.location.pathname);
  }, [pathname, send]);

  if (!GOATCOUNTER_CODE) return null;

  return (
    <Script
      src="https://gc.zgo.at/count.js"
      strategy="afterInteractive"
      data-goatcounter={`https://${GOATCOUNTER_CODE}.goatcounter.com/count`}
      data-goatcounter-settings='{"no_onload": true}'
      onLoad={() => {
        loaded.current = true;
        const path = pending.current ?? window.location.pathname;
        pending.current = null;
        window.goatcounter?.count?.({ path });
      }}
    />
  );
}
