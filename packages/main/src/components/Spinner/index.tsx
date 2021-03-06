import { StyleClassHelper } from '@ui5/webcomponents-react-base/lib/StyleClassHelper';
import { usePassThroughHtmlProps } from '@ui5/webcomponents-react-base/lib/usePassThroughHtmlProps';
import { Size } from '@ui5/webcomponents-react/lib/Size';
import React, { FC, forwardRef, RefObject, useEffect, useState } from 'react';
import { createComponentStyles } from '@ui5/webcomponents-react-base/lib/createComponentStyles';
import { CommonProps } from '../../interfaces/CommonProps';
import { styles } from './Spinner.jss';

export interface SpinnerProps extends CommonProps {
  /*
   * Delay in ms until the Spinner will be displayed
   */
  delay?: number;
  size?: Size;
}

const useStyles = createComponentStyles(styles, { name: 'Spinner' });

/**
 * <code>import { Spinner } from '@ui5/webcomponents-react/lib/Spinner';</code>
 */
const Spinner: FC<SpinnerProps> = forwardRef((props: SpinnerProps, ref: RefObject<HTMLDivElement>) => {
  const { className, size, tooltip, slot, style, delay } = props;
  const classes = useStyles();
  const [isVisible, setIsVisible] = useState(delay === 0);

  const spinnerClasses = StyleClassHelper.of(classes.spinner);
  if (className) {
    spinnerClasses.put(className);
  }

  spinnerClasses.put(classes[`spinner${size}`]);

  useEffect(() => {
    let timeout;
    if (delay > 0) {
      timeout = setTimeout(() => {
        setIsVisible(true);
      }, delay);
    }
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  const passThroughProps = usePassThroughHtmlProps(props);

  if (!isVisible) {
    return null;
  }

  return (
    <div
      ref={ref}
      className={spinnerClasses.valueOf()}
      data-component-name="Spinner"
      aria-busy="true"
      role="progressbar"
      tabIndex={0}
      aria-valuemin={0}
      aria-valuemax={100}
      title={tooltip || 'Please wait'}
      slot={slot}
      style={style}
      {...passThroughProps}
    >
      Loading...
    </div>
  );
});

Spinner.defaultProps = {
  delay: 0,
  size: Size.Medium
};

Spinner.displayName = 'Spinner';

export { Spinner };
