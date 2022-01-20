class StatusbarWidget extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section className='statusbar-widget'>
                {this.props.contents}
            </section>
        );
    }
}

class StatusbarSection extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const widgetElements = this.props.widgets.map(
            (widget, index) => {
                return <StatusbarWidget contents={widget} key={index} />
            }
        )

        return (
            <article className={`statusbar-section section-${this.props.name}`}>
                {widgetElements}
            </article>
        );
    }
}

export class StatusBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <article className='status-bar'>
                <StatusbarSection
                    name='left'
                    widgets={[
                        'launcher',
                        'rofi',
                        'tags',
                    ]}
                />
            </article>
        );
    }
}
