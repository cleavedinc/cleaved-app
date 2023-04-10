import React, { FunctionComponent } from "react";
import Tippy, { TippyProps } from "@tippyjs/react/headless";
import { useSpring } from "react-spring";

import { PopupWrapper } from "./tooltip-popup-base";
import { onMountSetSpringConfig, springConfig, springInitialStyles } from "./animation-configs";

export type TooltipProps = TippyProps & {
  tooltip: React.ReactNode | string;
};

/**
 *
 * @param children wrapper needs to be a styled component or you need to forward the ref
 * Importing a component that uses styled components does not work
 * https://github.com/atomiks/tippyjs-react#component-children
 */
export const Tooltip: FunctionComponent<TooltipProps> = (props) => {
  const { allowHTML, children, className, delay, interactive, tooltip, zIndex } = props;

  // animation configs
  // this mirrors the "multiple-tooltip" animation section updates should be applied to both files
  const [styleProps, setSpring] = useSpring(() => springInitialStyles);

  const onMount = () => {
    setSpring(onMountSetSpringConfig);
  };

  const onHide = ({ unmount }: { unmount: any }) => {
    setSpring({
      ...springInitialStyles,
      onRest: unmount,
      config: { ...springConfig, clamp: true },
    });
  };
  // end animation configs section

  return (
    <Tippy
      allowHTML={allowHTML}
      animation
      delay={delay}
      interactive={interactive}
      onMount={onMount}
      onHide={onHide}
      render={(attrs) => (
        <PopupWrapper
          className={className}
          data-escaped={attrs["data-escaped"]}
          data-placement={attrs["data-placement"]}
          data-reference-hidden={attrs["data-reference-hidden"]}
          style={styleProps}
        >
          {tooltip}
        </PopupWrapper>
      )}
      zIndex={zIndex}
    >
      {children}
    </Tippy>
  );
};
