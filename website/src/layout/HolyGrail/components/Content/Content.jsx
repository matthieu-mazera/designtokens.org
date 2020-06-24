import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Content = ({ element, className, children, ...rest }) => {
  const Element = element;
  const classes = classNames(className);

  return (
    <Element className={classes} {...rest}>
      {children}
    </Element>
  );
};

Content.propTypes = {
  element: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Content.defaultProps = {
  element: 'section',
  className: '',
};

export { Content };
