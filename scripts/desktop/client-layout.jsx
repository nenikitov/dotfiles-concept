class TitleBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section className={`client-title-bar ${this.props.client.name.replaceAll(' ', '-')}`}>
                <section className='title-bar-left'>
                    <img src={this.props.client.icon} className='client-icon' alt={this.props.client.name} />
                </section>
                <section className='title-bar-center'>
                    <p className='client-name'>{this.props.client.name}</p>
                </section>
                <section className='title-bar-right'>
                    <img src='resources/other/square.png' className='circle client-button-floating'/>
                    <img src='resources/other/square.png' className='circle client-button-on-top'/>
                    <img src='resources/other/square.png' className='circle client-button-minimize'/>
                    <img src='resources/other/square.png' className='circle client-button-maximize'/>
                    <img src='resources/other/square.png' className='circle client-button-close'/>
                </section>
            </section>
        );
    }
}
class Contents extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section className='client-contents'>
                {this.props.client.contents}
            </section>
        );
    }
}

class Client extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const titlebar =
            this.props.titlebars ?
            <TitleBar client={this.props.client} />
            : null;

        return (
            <article className='client client-border'>
                {titlebar}
                <Contents client={this.props.client} />
            </article>
        );
    }
}

export class ClientLayout extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const generateClient = (client, index) => {
            if (client.contents) {
                return (
                    <Client client={client} key={index} titlebars={this.props.titlebars} />
                );
            }
        };
        const generateClientColumn = (clients, index) => {
            return (
                <section className='client-column' key={index}>
                    {clients.map(generateClient)}
                </section>
            );
        }

        return (
            <section className='client-layout'>
                {this.props.clients.map(generateClientColumn)}
            </section>
        );
    }
}
