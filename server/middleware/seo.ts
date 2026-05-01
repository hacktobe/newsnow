export default defineEventHandler((event) => {
  const url = getRequestURL(event)
  if (url.hostname.endsWith(".pages.dev")) {
    setResponseHeader(event, "X-Robots-Tag", "noindex, nofollow")
  }
})
