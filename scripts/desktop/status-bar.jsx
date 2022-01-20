class StatusbarSection extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section className={`statusbar-section ${this.props.name}`}>{this.props.contents}</section>
        );
    }
}

export class StatusBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <article className='status-bar' >
                <StatusbarSection name='launcher' contents='fjdlask'/>
            </article>
        );
    }
}
