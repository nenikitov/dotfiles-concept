import { StatusBar } from 'scripts/desktop/status-bar.jsx';
import { ClientLayout } from 'scripts/desktop/client-layout.jsx';
import { rofiApp } from 'scripts/apps/rofi.jsx';


export class Desktop extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const rofi =
            (this.props.elements.rofi) ?
            (
                <section className='rofi-container client client-border'>
                    {rofiApp.contents}
                </section>
            ) : null;

        return (
            <article className='desktop'>
                <img src={this.props.wallpaper} className='desktop-wallpaper'></img>
                <section className='desktop-contents'>
                    <StatusBar />
                    <ClientLayout apps={this.props.apps} />
                </section>
                {rofi}
            </article>
        );
    }
}
