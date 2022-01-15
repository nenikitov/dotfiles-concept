export let ApplicationProperty = {
    STICKY      : { display: '▪' },
    MINIMIZED   : { display: '⌃' },
    FLOATING    : { display: '✈' },
    MAXIMIZED   : { display: '+' },
    MAXIMIZED_H : { display: '⬌' },
    MAXIMIZED_V : { display: '⬍' },
}

export class Application {
    icon;
    name;
    properties;
    contents;

    constructor(icon, name, properties, contents) {
        this.icon = icon;
        this.name = name;
        this.properties = properties;
        this.contents = contents;
    }

    getPropertiesText() {
        return this.properties.join('');
    }
}
