export class PreviewSettings extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            visible: false
        }
    }

    componentDidMount() {
        this.setVisible(false);
    }

    setVisible = (visible) => {
        const button = document.querySelector('.preview-settings #hide-show');
        const settings = document.querySelector('.preview-settings #settings');

        this.setState({
            visible: visible
        });

        if (visible) {
            button.textContent = '>';
            settings.classList.remove('hidden');
        }
        else {
            button.textContent = '<';
            settings.classList.add('hidden');
        }
    }

    render() {
        const setWallpaper = (e) => {
            const file = e.target.files[0];
            const reader = new FileReader();
            reader.onload = () => {
                this.props.setWallpaper(reader.result);
            }
            reader.readAsDataURL(file);
        }

        return (
            <section className='preview-settings'>
                <button id='hide-show' onClick={() => this.setVisible(! this.state.visible)}>
                    &gt;
                </button>
                <section id='settings'>
                    <fieldset>
                        <legend>Element visibility</legend>
                        {/* Show panel */}
                        <input
                            type='checkbox' id='show-panel' name='show-panel'
                            defaultChecked={this.props.elements.panel}
                            onChange={(e) => this.props.setShowPanel(e.target.checked)}
                        />
                        <label htmlFor='show-panel'>Panel</label>
                        <br />
                        {/* Show rofi */}
                        <input
                            type='checkbox' id='show-rofi' name='show-rofi'
                            defaultChecked={this.props.elements.rofi}
                            onChange={(e) => this.props.setShowRofi(e.target.checked)}
                        />
                        <label htmlFor='show-rofi'>Rofi</label>
                        <br />
                        {/* Show title bars */}
                        <input
                            type='checkbox' id='show-titlebars' name='show-titlebars'
                            defaultChecked={this.props.elements.titlebars}
                            onChange={(e) => this.props.setShowTitlebars(e.target.checked)}
                        />
                        <label htmlFor='show-titlebars'>Title bars</label>
                        <br />
                    </fieldset>
                    <fieldset>
                        <legend>Other</legend>
                        {/* Opened clients */}
                        <label htmlFor='client-layout'>Clients: </label>
                        <select
                            name='client-layout' id='client-layout'
                            value={this.props.clientLayout}
                            onChange={(e) => this.props.setClientLayout(e.target.value) }
                        >
                            {this.props.layouts?.map?.(
                                (layout, index) =>
                                    <option key={index} value={index}>{layout.name}</option>
                            )}
                        </select>
                        <br />
                        {/* Wallpaper */}
                        <label htmlFor='wallpaper'>Wallpaper: </label>
                        <input type='file'
                            id='wallpaper' name='wallpaper'
                            accept='image/png, image/jpeg'
                            onChange={ setWallpaper }
                        />
                    </fieldset>
                </section>
            </section>
        );
    }
}
