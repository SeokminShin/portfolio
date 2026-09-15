'use client';

import Script from 'next/script';
import { usePathname } from 'next/navigation';
import { useCallback, useEffect, useRef } from 'react';
import { GOATCOUNTER_CODE } from '@/lib/site';

declare global {
  interface Window {
    goatcounter?: { count?: (vars: { path: string; title: string }) => void };
  }
}

/** How long to wait for the title before counting anyway, in ms. */
const TITLE_SETTLE_TIMEOUT = 300;

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
    window.goatcounter.count({ path, title: document.title });
  }, []);

  useEffect(() => {
    if (!GOATCOUNTER_CODE) return;

    // The title has to be read late. On a client-side navigation the App
    // Router commits the new page's metadata *after* effects run, so
    // document.title is still empty here and GoatCounter — which falls back to
    // reading it itself — files the view under "(no title)". Two frames is
    // enough for the title to land, but requestAnimationFrame is paused in a
    // background tab, so a timeout races it and the first one through wins.
    let sent = false;
    const fire = () => {
      if (sent) return;
      sent = true;
      // location.pathname rather than the router's pathname: the router strips
      // basePath, and the dashboard is easier to read when its paths match the
      // URLs people actually visit (/portfolio/posts/... not /posts/...).
      send(window.location.pathname);
    };

    const frame = requestAnimationFrame(() => requestAnimationFrame(fire));
    const timer = window.setTimeout(fire, TITLE_SETTLE_TIMEOUT);

    return () => {
      cancelAnimationFrame(frame);
      clearTimeout(timer);
    };
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
        window.goatcounter?.count?.({ path, title: document.title });
      }}
    />
  );
}
