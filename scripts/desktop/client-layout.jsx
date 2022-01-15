class TitleBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section className='client-title-bar'>
                <p>Titlebar</p>
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
        return (
            <article className='client'>
                <TitleBar client={this.props.client} />
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
        const generateClient = (client) => {
            if (client.contents) {
                return (
                    <Client client={client} />
                );
            }
        };
        const generateClientColumn = (clients) => {
            return (
                <section className='client-column'>
                    {clients.map(generateClient)}
                </section>
            );
        }

        return (
            <section className='client-layout'>
                {this.props.apps.map(generateClientColumn)}
            </section>
        );
    }
}
