/**
 * Compute a SHA-256 fingerprint hash from device signals.
 * Format: `${ip}|${screenInfo}|${language}|${timezone}`
 *
 * Screen info uses CSS logical pixels (not physical):
 *   - Landing page: `${window.screen.width}x${window.screen.height}`
 *   - React Native: `${Dimensions.get('screen').width}x${Dimensions.get('screen').height}`
 */
export async function computeFingerprintHash(
  ip: string,
  screenInfo: string,
  language: string,
  timezone: string
): Promise<string> {
  const raw = `${ip}|${screenInfo}|${language}|${timezone}`;
  const encoded = new TextEncoder().encode(raw);
  const hashBuffer = await crypto.subtle.digest("SHA-256", encoded);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
}
