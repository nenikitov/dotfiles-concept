import { Application } from 'scripts/utils/application.jsx';

class RofiElement extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <article className='rofi'>
                <p>Rofi</p>
            </article>
        );
    }
}

export let rofiApp = new Application(
    '',
    'Rofi',
    <RofiElement />
);
