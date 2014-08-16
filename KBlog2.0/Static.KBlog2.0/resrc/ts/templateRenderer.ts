/// <reference path="d.ts/jquery.d.ts" />
/// <reference path="../../Scripts/collections.ts" />

class templateRenderer {
    constructor() {

    }

    renderTemplate(tmpl, obj) {
        var jq: JQuery = $.tmpl(tmpl, obj);
        jq.appendTo($('main'));
    }
}