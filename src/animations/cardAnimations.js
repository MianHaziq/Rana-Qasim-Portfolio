export const cardHover = {
  rest: { y: 0, boxShadow: "0 0px 0px rgba(0,0,0,0)" },
  hover: {
    y: -6,
    boxShadow: "0 24px 48px -20px rgba(15, 15, 25, 0.35)",
    transition: { duration: 0.25, ease: [0.22, 1, 0.36, 1] },
  },
};

export const iconPop = {
  rest: { scale: 1, rotate: 0 },
  hover: { scale: 1.12, rotate: -4, transition: { duration: 0.2, ease: [0.22, 1, 0.36, 1] } },
};

export const buttonTap = { scale: 0.96 };
export const buttonHover = { scale: 1.03 };

export const linkArrow = {
  rest: { x: 0 },
  hover: { x: 3, transition: { duration: 0.18, ease: "easeOut" } },
};
