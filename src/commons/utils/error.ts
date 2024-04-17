// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export function onError(e: any): string {
  if (e instanceof Error) {
    return e.message;
  }

  return JSON.stringify(e);
}
