import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {greet,cssStyle} from "./Application";



ReactDOM.render(
<>
<div>
  <h1 >Hello Sir,<span style={cssStyle}>{greet}</span></h1>
</div>
</>,
document.getElementById("root"));