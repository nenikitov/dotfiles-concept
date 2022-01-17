import { Application } from 'scripts/utils/application.jsx';
import { rofiApps } from 'scripts/utils/rofiApps.jsx';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section className='rofi-search-bar'>
                <p className='drun'>drun</p>
                <p className='search'>|Search...</p>
                <p>{this.props.apps.length}</p>
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
                <img src={this.props.app.icon} className='app-icon' alt={this.props.app.name} />
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
        const appElements = this.props.apps.map(
            (app) => {
                return <RofiApp app={app} key={app.name}/>
            }
        );

        return (
            <section className='rofi-app-list-scroll'>
                <section className='rofi-scroll'>
                    <div className='scroll-bar'/>
                </section>
                <section className='rofi-app-list'>
                    {appElements}
                </section>
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
                <SearchBar apps={rofiApps} />
                <AppList apps={rofiApps} />
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
