export const springConfig = {
  tension: 300,
  friction: 15,
  popperOptions: {
    modifiers: {
      preventOverflow: {
        enabled: false,
      },
      hide: { enabled: false },
    },
  },
};
export const springInitialStyles = { opacity: 0, transform: "scale(0.5)" };
export const onMountSetSpringConfig = {
  opacity: 1,
  transform: "scale(1)",
  onRest: () => {},
  config: springConfig,
};
