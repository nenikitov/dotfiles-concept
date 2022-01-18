'use_strict';

import { Desktop } from 'desktop.jsx';

function init() {
    ReactDOM.render(
        <Desktop />,
        document.querySelector('main')
    );
}

init();
