import { Application } from 'scripts/utils/application.jsx';
import { alacrittyApp } from "scripts/app/alacritty.jsx";
import { firefoxApp } from "scripts/app/firefox.jsx";

export let rofiApps = [
    firefoxApp,
    new Application('resources/icons/brave.svg', 'Brave', null),
    new Application('resources/icons/visualstudiocode.svg', 'Code', null),
    new Application('resources/icons/discord.svg', 'Discord', null),
    new Application('resources/icons/file-manager.svg', 'PCManFM', null),
    new Application('resources/icons/calc.svg', 'Qualculate!', null),
    new Application('resources/icons/gimp.svg', 'GNU Image...', null),
    new Application('resources/icons/xonotic.svg', 'Xonotic', null),
    new Application('resources/icons/neovim.svg', 'NeoVim', null),
    new Application('resources/icons/blender.svg', 'Blender', null),
    new Application('resources/icons/audacity.svg', 'Audacity', null),
    new Application('resources/icons/vim.svg', 'Vim', null),
    new Application('resources/icons/cmake.svg', 'CMake', null),
    new Application('resources/icons/preferences-system.svg', 'Settings', null),
    alacrittyApp,
    new Application('resources/icons/network-workgroup.svg', 'Network', null),
    new Application('resources/icons/obs.svg', 'OBS', null),
];
