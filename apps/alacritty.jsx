import { ApplicationProperty, Application } from '../utils/application.jsx';

class AlacrittyElement extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return <p>Alacritty</p>
    }
}

export let alacrittyApp = new Application(
    './resources/icons/alacritty.svg',
    'Alacritty',
    [ ApplicationProperty.MINIMIZED ],
    <AlacrittyElement />
)
