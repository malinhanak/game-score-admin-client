import React from 'react';
import PropTypes from 'prop-types';
import { Styles } from '../styles/TextStyles';

const Typography = ({ classname, variant, children, ...props }) => {
  return (
    <Styles className={classname} as={variant} {...props}>
      {children}
    </Styles>
  );
};

Typography.propTypes = {
  classname: PropTypes.string,
  as: PropTypes.string
};

export default Typography;
