'use_strict';

import { alacrittyApp } from 'apps/alacritty.jsx';


function init() {
    ReactDOM.render(
        alacrittyApp.contents,
        document.querySelector('main')
    );
}

init();
