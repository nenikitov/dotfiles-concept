import { Application } from 'scripts/utils/application.jsx';
import { alacrittyApp } from 'scripts/apps/alacritty.jsx';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section className='rofi-search-bar'>
                <p className='drun'>drun</p>
                <p className='search'>|Search...</p>
                <p>30</p>
            </section>
        );
    }
}
class RofiApp extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section className='rofi-app'>
                <img src={this.props.app.icon} className='app-icon'/>
                <p className='app-name'>{this.props.app.name}</p>
            </section>
        );
    }
}
class AppList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section className='rofi-app-list'>
                <RofiApp app={alacrittyApp} />
                <RofiApp app={alacrittyApp} />
                <RofiApp app={alacrittyApp} />
                <RofiApp app={alacrittyApp} />
                <RofiApp app={alacrittyApp} />
                <RofiApp app={alacrittyApp} />
                <RofiApp app={alacrittyApp} />
                <RofiApp app={alacrittyApp} />
                <RofiApp app={alacrittyApp} />
                <RofiApp app={alacrittyApp} />
                <RofiApp app={alacrittyApp} />
                <RofiApp app={alacrittyApp} />
                <RofiApp app={alacrittyApp} />
                <RofiApp app={alacrittyApp} />
                <RofiApp app={alacrittyApp} />
                <RofiApp app={alacrittyApp} />
                <RofiApp app={alacrittyApp} />
                <RofiApp app={alacrittyApp} />
                <RofiApp app={alacrittyApp} />
                <RofiApp app={alacrittyApp} />
                <RofiApp app={alacrittyApp} />
                <RofiApp app={alacrittyApp} />
            </section>
        );
    }
}
class ModiBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section className='rofi-modi-bar'>
                <p>window</p>
                <p className='selected'>drun</p>
                <p>run</p>
            </section>
        );
    }
}

class RofiElement extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <article className='rofi'>
                <SearchBar />
                <AppList />
                <ModiBar />
            </article>
        );
    }
}

export let rofiApp = new Application(
    '',
    'Rofi',
    <RofiElement />
);
