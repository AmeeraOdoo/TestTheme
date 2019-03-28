odoo.define('odoo_background_theme', function(require) {
    "use strict";

    var backend_themeMenu = require('web.SystrayMenu');
    var web_client = require('web.web_client');

    /**
     * Widget Top Menu Notification Counter
     *
     * Counter of notification in the Systray Menu. Need to know if InstantMessagingView is displayed to
     * increment (or not) the counter. On click, should redirect to the client action.
     **/

    var ajax = require('web.ajax');
    var core = require('web.core');
    var session = require('web.session');
    var Widget = require('web.Widget');
    var base = require('web_editor.base');
    var QWeb = core.qweb;


    /* theme bakcend end */

    function theme_customize() {
        if (Theme.open && !Theme.open.isDestroyed()) return;
        Theme.open = new Theme();
        Theme.open.appendTo("body");


        var error = window.getComputedStyle(document.body, ':before').getPropertyValue('content');
        if (error && error !== 'none') {
            themeError(eval(error));
        }
    }
    backend_themeMenu.Items.push(customizemenu);


});