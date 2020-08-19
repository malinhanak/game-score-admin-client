import React from 'react';
import { TextStyles } from '../styles/TextStyles';

const Typography = ({ classname, variant, children }, props) => {
  const getElement = (variant, children, props) => {
    return React.createElement(variant || 'p', props, children);
  };

  return (
    <TextStyles className={classname} {...props}>
      {getElement(variant, children, props)}
    </TextStyles>
  );
};

export default Typography;
