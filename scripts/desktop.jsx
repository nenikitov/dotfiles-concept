export class Desktop extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <article className='desktop'>
                <img src={this.props.wallpaper}></img>
                <article className='contents'>
                    <p style={{color: 'white'}}>Top bar</p>
                    <section className='visible-clients'>
                        <section className='client-column'>
                            {this.props.apps.visible[0].contents}
                        </section>
                        <section className='client-column'>
                            {this.props.apps.visible[0].contents}
                            {this.props.apps.visible[0].contents}
                        </section>
                    </section>
                </article>
            </article>
        );
    }
}
