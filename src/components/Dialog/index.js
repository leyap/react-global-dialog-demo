/**
 *  author: lisper <leyapin@gmail.com>
 */

import React from 'react';
import ReactDom from 'react-dom';
import Dialog from './dialog';

const div = document.createElement('div');
document.body.appendChild(div);
const dialog = ReactDom.render(<Dialog/>, div);

export default dialog;
