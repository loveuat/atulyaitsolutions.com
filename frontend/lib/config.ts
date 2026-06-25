export const CONFIG = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL!,

  wordpressUrl: process.env.NEXT_PUBLIC_WORDPRESS_URL!,

  leadEndpoint:
    `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-json/ais/v1/lead`,

  getFormEndpoint: (id: number) =>
    `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-json/ais/v1/form/${id}`,

  turnstileSiteKey:
    process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!,

  gtmId:
    process.env.NEXT_PUBLIC_GTM_ID || "",

  gaId:
    process.env.NEXT_PUBLIC_GA_ID || "",
};