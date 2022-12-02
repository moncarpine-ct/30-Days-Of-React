import React from "react";

import cssLogo from "./images/css_logo.png";
import htmlLogo from "./images/html_logo.png";
import jsLogo from "./images/js_logo.png";
import reactLogo from "./images/react_logo.png";

const imageStyle = {
  objectFit: 'cover', width: '200px', height: '200px'
};

const centerFlex = { display: 'flex', justifyContent: 'center', padding: '20px' }


const FrontEnd = () => (
  <React.Fragment>
  <h5 style={centerFlex}>Front End Technologies</h5>
  <div style={centerFlex}>
    <div style={{ display: 'grid', gridAutoFlow: 'column', gridTemplateColumns: 'repeat(4, fit-content(100%))', gap: '150px' }}>
      <img style={imageStyle} src={cssLogo} alt="CSS logo" />
      <img style={imageStyle} src={htmlLogo} alt="HTML logo" />
      <img style={imageStyle} src={jsLogo} alt="JavaScript logo" />
      <img style={imageStyle} src={reactLogo} alt="React logo" />
    </div>
  </div>
  </React.Fragment>
);

export default FrontEnd;