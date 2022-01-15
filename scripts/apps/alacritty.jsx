import { Application } from '../utils/application.jsx';

class NeofetchLogo extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <section className='neofetch-logo'>
                <p>                   -`                    </p>
                <p>                  .o+`                   </p>
                <p>                 `ooo/                   </p>
                <p>                `+oooo:                  </p>
                <p>               `+oooooo:                 </p>
                <p>               -+oooooo+:                </p>
                <p>             `/:-:++oooo+:               </p>
                <p>            `/++++/+++++++:              </p>
                <p>           `/++++++++++++++:             </p>
                <p>          `/+++ooooooooooooo/`           </p>
                <p>         ./ooosssso++osssssso+`          </p>
                <p>        .oossssso-````/ossssss+`         </p>
                <p>       -osssssso.      :ssssssso.        </p>
                <p>      :osssssss/        osssso+++.       </p>
                <p>     /ossssssss/        +ssssooo/-       </p>
                <p>   `/ossssso+/:-        -:/+osssso+-     </p>
                <p>  `+sso+:-`                 `.-/+oso:    </p>
                <p> `++:.                           `-/+/   </p>
                <p> .`                                 `/   </p>
            </section>
        );
    }
}
class NeofetchStatusLine extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <p><span className='property'>{this.props.property}: </span>{this.props.value}</p>
        );
    }
}
class NeofetchSquares extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const colorSquares = this.props.colors.map((colorName) => {
            const cssColor = `var(--${this.props.varName}${colorName})`;

            return <span style={{backgroundColor: cssColor}} key={colorName}>   </span>
        });

        return (
            <p>
                {colorSquares}
            </p>
        );
    }
}
class NeofetchStatus extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const colors = [
            'black', 'red', 'green', 'yellow', 'blue', 'magenta', 'cyan', 'white'
        ];
        return (
            <section className='neofetch-status'>
                <p className='host-name'>name@host</p>
                <p className='separator'>---------</p>
                <NeofetchStatusLine property='OS' value='Arch Linux x86_64'/>
                <NeofetchStatusLine property='Host' value='My Laptop'/>
                <NeofetchStatusLine property='Kernel' value='Linux 5.16.0-arch1-1'/>
                <NeofetchStatusLine property='Shell' value='bash 5.1.16'/>
                <p className='separator'>------------------</p>
                <NeofetchStatusLine property='Resolution' value='1920x1080'/>
                <NeofetchStatusLine property='WM' value='awesome'/>
                <NeofetchStatusLine property='Terminal' value='alacritty'/>
                <p className='separator'>-------------------</p>
                <NeofetchStatusLine property='Uptime' value='1m'/>
                <NeofetchStatusLine property='Packages' value='604 (pacman)'/>
                <p className='separator'>----------------------</p>
                <NeofetchStatusLine property='CPU' value='11th Gen Intel'/>
                <NeofetchStatusLine property='GPU' value='Intel Device 9a78'/>
                <p className='separator'>----------------------</p>
                <NeofetchStatusLine property='CPU Usage' value='8%'/>
                <NeofetchStatusLine property='Memory' value='1531MiB / 7748MiB (19%)'/>
                <p className='separator'>-------------------------------</p>
                <p> </p>
                <NeofetchSquares varName='term-normal-' colors={colors}/>
                <NeofetchSquares varName='term-bright-' colors={colors}/>
            </section>
        );
    }
}
class Neofetch extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <section className='neofetch'>
                <NeofetchLogo/>
                <NeofetchStatus/>
            </section>
        );
    }
}

class AlacrittyElement extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <article className='alacritty'>
                <p>[user@host ~]$ neofetch</p>
                <Neofetch/>
                <p>[user@host ~]$ &#x2588;</p>
            </article>
        );
    }
}

export let alacrittyApp = new Application(
    './resources/icons/alacritty.svg',
    'Alacritty',
    [ ],
    <AlacrittyElement />
)
