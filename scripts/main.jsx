'use_strict';

import { alacrittyApp } from 'apps/alacritty.jsx';
import { Desktop } from 'desktop.jsx';

const wallpaper = './resources/backgrounds/Autumn.jpg';
const elements = {
    panel: true,
    titlebars: true,
    rofi: true,
    clients: true
}
const apps = {
    visible: [
        alacrittyApp
    ],
    minimized: [
        alacrittyApp
    ]
}

function init() {
    ReactDOM.render(
        <Desktop
            wallpaper={wallpaper}
            elements={elements}
            apps={apps}
        />,
        document.querySelector('main')
    );
}

init();
