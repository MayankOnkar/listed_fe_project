import React from 'react';
import PropTypes from 'prop-types'
//import '../index.css'
import '../css/loginPageCss.css'

const Card = ({ width, height, bgColor, borderRadius, styleName, children}) => {
    let className = 'card'

    if (styleName === 'style1') {
        className += ' cardStyle1'
    } else if (styleName === 'style2') {
        className += ' cardStyle2'
    } else if (styleName === 'style3') {
        className += ' cardStyle3'
    } else if (styleName === 'style4') {
        className += ' cardStyle4'
    }


  return (
    <div
      className={className}
      style={{ width: width, height: height, backgroundColor: bgColor, borderRadius: borderRadius}}
    >
    {children}
    </div>
  );
};

Card.propTypes = {
    children : PropTypes.node.isRequired,
  }
  
export default Card;
