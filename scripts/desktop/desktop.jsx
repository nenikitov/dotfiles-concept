import { StatusBar } from 'scripts/desktop/status-bar.jsx';
import { ClientLayout } from 'scripts/desktop/client-layout.jsx';

import { alacrittyApp } from 'apps/alacritty.jsx';
import { firefoxApp } from 'apps/firefox.jsx';
import { rofiApp } from 'scripts/apps/rofi.jsx';


export class Desktop extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            elements: {
                panel: true,
                titlebars: true,
                rofi: true,
                clients: true
            },
            apps: [
                [
                    firefoxApp
                ],
                [
                    alacrittyApp,
                    alacrittyApp
                ]
            ],
            wallpaper: 'resources/backgrounds/Autumn.jpg'
        }
    }

    render() {
        const rofi =
            this.state.elements.rofi ?
            (
                <section className='rofi-container client client-border'>
                    {rofiApp.contents}
                </section>
            )
            : null;

        const clients =
            this.state.elements.clients ?
            <ClientLayout
                apps={this.state.apps}
                titlebars={this.state.elements.titlebars}
            />
            : null;

        const panel =
            this.state.elements.panel ?
            <StatusBar />
            : null;

        return (
            <article className='desktop'>
                <img src={this.state.wallpaper} className='desktop-wallpaper'></img>
                <section className='desktop-contents'>
                    {panel}
                    {clients}
                </section>
                {rofi}
            </article>
        );
    }
}
