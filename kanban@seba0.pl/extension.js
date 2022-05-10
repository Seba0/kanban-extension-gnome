const {St, Gio} = imports.gi;
const Main = imports.ui.main;
const Lang = imports.lang;

const Extension = imports.misc.extensionUtils.getCurrentExtension();
const KanbanIconPath = Extension.path + '/kanban-icon.svg';

const PanelMenu = imports.ui.panelMenu;


const PanelButton = new Lang.Class({
    Name: 'PanelButton',
    Extends: PanelMenu.Button,
    _init: function () {
        this.parent(0.0);

        let label = new St.Label({text: 'Button'});
        this.actor.add_child(label);
    }
});

let button;

function init() {
    button = new PanelButton();
}

function enable() {
    Main.panel._addToPanelBox('HelloWorld', button, 1, Main.panel._rightBox);
}

function disable() {
    Main.panel._addToPanelBox('HelloWorld', button, 1, Main.panel._rightBox);
}