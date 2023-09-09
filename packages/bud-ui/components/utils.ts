export const clx = (...args: (string | undefined)[]) =>
  args.filter(str => !!str).join(' ');
