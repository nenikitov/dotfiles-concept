import { StatusBar } from './scripts/desktop/status-bar.jsx';
import { ClientLayout } from './scripts/desktop/client-layout.jsx';

export class Desktop extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <article className='desktop'>
                <img src={this.props.wallpaper} className='desktop-wallpaper'></img>
                <section className='desktop-contents'>
                    <StatusBar />
                    <ClientLayout apps={this.props.apps} />
                </section>
            </article>
        );
    }
}
