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
        name: 'Full Firefox',
        clients: [
            [ firefoxApp ]
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
                panel: false,
                rofi: false,
                titlebars: true
            },
            clientLayout: 1,
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
    setClientLayout = (clientLayout) => {
        this.setState({
            clientLayout: clientLayout
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
            <section className='rofi-container client client-border'>
                {rofiApp.contents}
            </section>
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
                        clients={layouts[this.state.clientLayout].clients}
                        titlebars={this.state.elements.titlebars}
                    />
                </section>
                {rofi}
                <section className='preview-settings-container'>
                    <PreviewSettings
                        layouts={layouts}
                        elements={this.state.elements}
                        clientLayout={this.state.clientLayout}
                        setShowPanel={this.setShowPanel}
                        setShowTitlebars={this.setShowTitlebars}
                        setShowRofi={this.setShowRofi}
                        setShowClients={this.setShowClients}
                        setClientLayout={this.setClientLayout}
                        setWallpaper={this.setWallpaper}
                    />
                </section>
            </article>
        );
    }
}
