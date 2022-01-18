import { StatusBar } from 'scripts/desktop/status-bar.jsx';
import { ClientLayout } from 'scripts/desktop/client-layout.jsx';
import { PreviewSettings } from 'scripts/desktop/preview-settings.jsx';

import { alacrittyApp } from 'apps/alacritty.jsx';
import { firefoxApp } from 'apps/firefox.jsx';
import { rofiApp } from 'scripts/apps/rofi.jsx';

const layouts = [
    {
        name: 'Empty',
        clients: []
    },
    {
        name: 'Full Terminal',
        clients: [
            [ alacrittyApp ]
        ]
    },
    {
        name: 'Firefox and terminal',
        clients: [
            [ firefoxApp ],
            [ alacrittyApp ]
        ]
    },
    {
        name: 'Firefox and 2 terminals',
        clients: [
            [ firefoxApp ],
            [ alacrittyApp, alacrittyApp ]
        ]
    }
];

export class Desktop extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            elements: {
                panel: true,
                rofi: true,
                titlebars: true
            },
            clients: [
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

    setShowPanel = (show) => {
        let elements = this.state.elements;
        elements.panel = show;

        this.setState({
            elements: elements
        });
    }
    setShowTitlebars = (show) => {
        let elements = this.state.elements;
        elements.titlebars = show;

        this.setState({
            elements: elements
        });
    }
    setShowRofi = (show) => {
        let elements = this.state.elements;
        elements.rofi = show;

        this.setState({
            elements: elements
        });
    }
    setShowClients = (show) => {
        let elements = this.state.elements;
        elements.clients = show;

        this.setState({
            elements: elements
        });
    }
    setClients = (clients) => {
        this.setState({
            clients: clients
        });
    }
    setWallpaper = (wallpaper) => {
        this.setState({
            wallpaper: wallpaper
        });
    }

    render() {
        const rofi =
            this.state.elements.rofi ?
                rofiApp.contents
            : null;

        const panel =
            this.state.elements.panel ?
            <StatusBar />
            : null;

        return (
            <article className='desktop'>
                <img src={this.state.wallpaper} className='desktop-wallpaper'></img>
                <section className='desktop-contents-container'>
                    {panel}
                    <ClientLayout
                        clients={this.state.clients}
                        titlebars={this.state.elements.titlebars}
                    />
                </section>
                <section className='rofi-container client client-border'>
                    {rofi}
                </section>
                <section className='preview-settings-container'>
                    <PreviewSettings layouts={layouts}/>
                </section>
            </article>
        );
    }
}
