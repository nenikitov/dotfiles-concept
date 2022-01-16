'use_strict';

import { alacrittyApp } from 'apps/alacritty.jsx';
import { firefoxApp } from 'apps/firefox.jsx';
import { Desktop } from 'desktop.jsx';

const wallpaper = './resources/backgrounds/Autumn.jpg';
const elements = {
    panel: true,
    titlebars: true,
    rofi: true,
    clients: true
}
const apps = [
    [
        firefoxApp,
    ],
    [
        alacrittyApp,
        alacrittyApp,
    ]
]

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
