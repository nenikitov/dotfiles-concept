export class Desktop extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <article className='desktop'>
                <img src={this.props.wallpaper}></img>
            </article>
        );
        /*
        <article className='contents'>
            <section className='visible-clients'>
                {this.props.apps.visible[0].contents}
                {this.props.apps.visible[0].contents}
                {this.props.apps.visible[0].contents}
            </section>
        </article>
        */
    }
}
