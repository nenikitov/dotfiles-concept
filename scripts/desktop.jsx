class TopPanel extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <p style={{color: 'white'}}>Top bar</p>
        );
    }
}

class Clients extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const clientColumns = this.props.apps.map?.(
            (column) => {
                const clients = column.map?.(
                    (client) => {
                        return client.contents;
                    }
                );

                return (
                    <section className='client-column'>
                        {clients}
                    </section>
                );
            }
        );

        return (
            <section className='visible-clients'>
                {clientColumns}
            </section>
        );
    }
}




export class Desktop extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <article className='desktop'>
                <img src={this.props.wallpaper}></img>
                <article className='contents'>
                    <TopPanel />
                    <Clients apps={this.props.apps} />
                </article>
            </article>
        );
    }
}
