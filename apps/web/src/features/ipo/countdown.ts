const DAY_MS = 86_400_000;

export function countdownLabel(closingDate: string, now: Date): string {
  const close = Date.parse(`${closingDate}T00:00:00Z`);
  const today = Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate());
  const diffDays = Math.round((close - today) / DAY_MS);

  if (diffDays < 0) {
    return 'Balloting closed';
  }
  if (diffDays === 0) {
    return 'Closes today';
  }
  if (diffDays === 1) {
    return 'Closes in 1 day';
  }
  return `Closes in ${diffDays} days`;
}
