const transition = { duration: 1, ease: [0.77, 0, 0.18, 1] };

export const opacity = {
  open: {
    opacity: 1,
    transition,
  },
  close: {
    opacity: 0,
    transition,
  },
};

export const height = {
  enter: {
    height: "auto",
    transition,
  },
  exit: {
    height: 0,
    transition: { ...transition, delay: 0.2 },
  },
};

export const backgroundHeight = {
  open: {
    height: "100dvh",
    transition,
  },
  close: {
    height: 0,
    transition: { ...transition, delay: 0.2 },
  },
};

export const translate = {
  enter: (i) => ({
    y: 0,
    opacity: 1,
    transition: { ...transition, delay: i[0] + 0.1 },
  }),
  exit: (i) => ({
    y: "100%",
    opacity: 0,
    transition: { ...transition, transition: 0.7, delay: i[1] },
  }),
};

export const blur = {
  open: {
    filter: "blur(5px)",
    transition: { ...transition, duration: 0.2 },
  },
  close: {
    filter: "blur(0)",
    transition: { ...transition, duration: 0.2 },
  },
};
