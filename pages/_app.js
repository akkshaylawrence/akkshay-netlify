import '@styles/globals.scss'
import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";

Sentry.init({
  dsn: "https://3b78dbb9b9d54521901945856d308309@o505218.ingest.sentry.io/5593120",
  autoSessionTracking: true,
  integrations: [
    new Integrations.BrowserTracing(),
  ],

  // We recommend adjusting this value in production, or using tracesSampler
  // for finer control
  tracesSampleRate: 0.5,
});

function Application({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default Application
