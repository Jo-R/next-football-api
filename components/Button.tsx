import React from "react";
import { useButton } from "react-aria";

export const Button = (props: any) => {
  let ref = React.useRef(null);
  let { buttonProps } = useButton(props, ref);

  return (
    <button {...buttonProps} ref={ref}>
      {props.children}
    </button>
  );
};
