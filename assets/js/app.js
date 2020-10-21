// We need to import the CSS so that webpack will load it.
// The MiniCssExtractPlugin is used to separate it out into
// its own CSS file.
import "../css/app.scss"
import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Atendimento from './atendimento.js';


// import {Socket} from "phoenix"
// import socket from "./socket"

// webpack automatically bundles all modules in your
// entry points. Those entry points can be configured
// in "webpack.config.js".
//
// Import deps with the dep name or local files with a relative path, for example:
//

//
import "phoenix_html"

ReactDOM.render(
  <Atendimento/>,
  document.getElementById('root')
);