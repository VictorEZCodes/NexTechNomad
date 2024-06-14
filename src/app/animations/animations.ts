export const fastWakeAnimation = {
  start: { opacity: 0, y: 10 },
  end: (d: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: d * 0.1, ease: "easeOut", duration: 0.2 },
  }),
};
export const bigWakeAnimation = {
  start: { opacity: 0, y: 40 },
  end: (d: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: d * 0.13, ease: "easeOut" },
  }),
};
export const downAnimationTop = {
  start: { top: -10, opacity: 0 },
  end: (d: number) => ({
    opacity: 1,
    top: 0,
    transition: { delay: d * 0.13, ease: "easeOut" },
  }),
};
export const wakeAnimationTop = {
  start: { top: 10, opacity: 0 },
  end: (d: number) => ({
    opacity: 1,
    top: 0,
    transition: { delay: d * 0.13, ease: "easeOut" },
  }),
};

export const wakeAnimation = {
  start: { opacity: 0, y: 10 },
  end: (d: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: d * 0.13, ease: "easeOut" },
  }),
};

export const litleDownAnimation = {
  start: { opacity: 0, y: -10 },
  end: (d: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: d * 0.13, ease: "easeOut" },
  }),
};
export const litleRightAnimation = {
  start: { opacity: 0, x: -10 },
  end: (d: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: d * 0.13, ease: "easeOut" },
  }),
};
export const opacityAnimation = {
  start: { opacity: 0 },
  end: (d: number) => ({
    opacity: 1,
    transition: { delay: d * 0.13, ease: "easeOut" },
  }),
};
