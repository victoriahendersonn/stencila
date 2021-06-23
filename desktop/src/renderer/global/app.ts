import { CHANNEL } from '../../preload/channels'
import { enableCrashReports } from '../../preload/errors'

const isErrorReportingEnabled = () =>
  window.api.invoke(CHANNEL.GET_APP_CONFIG, 'REPORT_ERRORS') as Promise<boolean>

/**
 * The code to be executed should be placed within a default function that is
 * exported by the global script. Ensure all of the * code in the global script
 * is wrapped in the function that is exported.
 * @see https://stenciljs.com/docs/config#globalscript
 */
export default async () => {
  // Due to `nodeIntegration: false` and `contextIsolation: true`, Sentry needs
  // to be instantiated in both the `preload` script AND here, the `web` context.
  enableCrashReports(isErrorReportingEnabled)
}
