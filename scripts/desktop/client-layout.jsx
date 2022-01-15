class TitleBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section className='client-title-bar'>
                <section className='title-bar-left'>
                    <img src={this.props.client.icon} className='client-icon' alt={this.props.client.name} />
                </section>
                <section className='title-bar-center'>
                    <p className='client-name'>{this.props.client.name}</p>
                </section>
                <section className='title-bar-right'>
                    <img src='resources/other/square.png' className='circle close'/>
                    <img src='resources/other/square.png' className='circle close'/>
                    <img src='resources/other/square.png' className='circle close'/>
                    <img src='resources/other/square.png' className='circle close'/>
                </section>
            </section>
        );
        /*
        <div className='circle floating'/>
                    <div className='circle on-top'/>
                    <div className='circle minimize'/>
                    <div className='circle maximize'/>
        */
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
