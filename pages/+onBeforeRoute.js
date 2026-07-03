// pages/+onBeforeRoute.js
import { redirect } from "vike/abort";

export function onBeforeRoute(pageContext) {
  // Only perform the trailing-slash redirect on the server (during SSR /
  // prerender). Running redirect() on the client during the initial
  // hydration pass can stall hydration on trailing-slash URLs, leaving the
  // page non-interactive (forms fall back to native submit, etc.).
  if (!pageContext.isClientSide) {
    const { urlPathname } = pageContext;
    if (urlPathname !== "/" && urlPathname.endsWith("/")) {
      throw redirect(urlPathname.slice(0, -1));
    }
  }
}