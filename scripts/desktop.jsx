export class Desktop extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <article className='desktop'>
                <img src={this.props.wallpaper}></img>
                <article className='contents'>
                    <section className='visible-clients'>
                        <section className='client-column'>
                        </section>
                        <section className='client-column'>
                        </section>
                    </section>
                </article>
            </article>
        );
    }
    //{this.props.apps.visible[0].contents}
}
