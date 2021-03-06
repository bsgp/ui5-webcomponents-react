import { LinkDesign } from '@ui5/webcomponents-react/lib/LinkDesign';
import { withWebComponent } from '@ui5/webcomponents-react/lib/withWebComponent';
import '@ui5/webcomponents/dist/Link';
import React, { FC, ReactNode } from 'react';
import { WithWebComponentPropTypes } from '../../internal/withWebComponent';

export interface LinkPropTypes extends Omit<WithWebComponentPropTypes, 'onClick'> {
  /**
   * Defines the <code>ui5-link</code> design. <br><br> <b>Note:</b> Avaialble options are <code>Default</code>, <code>Subtle</code>, and <code>Emphasized</code>.
   */
  design?: LinkDesign;
  /**
   * Defines whether the <code>ui5-link</code> is disabled. <br><br> <b>Note:</b> When disabled, the <code>ui5-link</code> cannot be triggered by the user.
   */
  disabled?: boolean;
  /**
   * Defines the <code>ui5-link</code> href. <br><br> <b>Note:</b> Standard hyperlink behavior is supported.
   */
  href?: string;
  /**
   * Defines the <code>ui5-link</code> target. <br><br> <b>Notes:</b> <ul> <li>Available options are the standard values: <code>_self</code>, <code>_top</code>, <code>_blank</code>, <code>_parent</code>, and <code>_search</code>.</li> <li>This property must only be used when the <code>href</code> property is set.</li> </ul>
   */
  target?: string;
  /**
   * Defines whether the <code>ui5-link</code> text should wrap when there is no sufficient space. <br><br> <b>Note:</b> The text is truncated by default.
   */
  wrap?: boolean;
  /**
   * Defines the text of the <code>ui5-link</code>. <br><b>Note:</b> Аlthough this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.
   */
  children?: ReactNode | ReactNode[];
  /**
   * Fired when the <code>ui5-link</code> is triggered either with a mouse/tap or by using the Enter key.
   */
  onClick?: (event: CustomEvent<{}>) => void;
}

/**
 * <code>import { Link } from '@ui5/webcomponents-react/lib/Link';</code>
 * <br />
 * <a href="https://sap.github.io/ui5-webcomponents/playground/components/Link" target="_blank">UI5 Web Components Playground</a>
 */
const Link: FC<LinkPropTypes> = withWebComponent<LinkPropTypes>(
  'ui5-link',
  ['design', 'href', 'target'],
  ['disabled', 'wrap'],
  [],
  ['click']
);

Link.displayName = 'Link';

Link.defaultProps = {
  design: LinkDesign.Default,
  disabled: false,
  href: '',
  target: '',
  wrap: false
};

export { Link };
