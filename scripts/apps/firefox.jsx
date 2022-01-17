import { Application } from 'scripts/utils/application.jsx';

class Tab extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <section className='firefox-tab'>
                <img src={this.props.icon} className='tab-icon' alt={this.props.name} />
                <p className='tab-name'>{this.props.name}</p>
                <p className='tab-close'>&#x1F7A8;</p>
            </section>
        );
    }
}

class TabBar extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <section className='firefox-tab-bar'>
                <Tab icon='resources/icons/firefox.svg' name='New Tab'/>
                <Tab icon='resources/icons/firefox.svg' name='New Tab'/>
                <p className='tab-new'>+</p>
            </section>
        );
    }
}
class SearchBar extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <section className='firefox-search-bar'>
                <section className='search-bar-left'>
                    <p>&lt;</p>
                    <p>&gt;</p>
                    <p>&#x27F3;</p>
                </section>
                <section className='search-bar-center'>
                    <p>&#x1F50D;&#xFE0E; Search with DuckDuckGo or enter address</p>
                </section>
                <section className='search-bar-left'>
                    <p>&#x2630;</p>
                </section>
            </section>
        );
    }
}
class HomePage extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <section className='firefox-home-page'>
                <section className='home-firefox-logo'>
                    <img src='resources/icons/firefox.svg' className='firefox-icon' alt='Firefox logo' />
                    <p className='firefox-name'>Firefox</p>
                </section>
                <section className='home-search-bar'>
                    <p>&#x1F50D;&#xFE0E; Search with DuckDuckGo or enter address</p>
                </section>
            </section>
        );
    }
}

class FirefoxElement extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <article className='firefox'>
                <TabBar />
                <SearchBar />
                <HomePage />
            </article>
        );
    }
}

export let firefoxApp = new Application(
    'resources/icons/firefox.svg',
    'Firefox',
    <FirefoxElement />
);
