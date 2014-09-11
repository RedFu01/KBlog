/// <reference path="d.ts/jquery.tmpl.d.ts" />
module KBlog {
    export class Renderer {
        constructor() {

        }
        renderPage() {
            //var list = window.page.getModuleTemplates();

        }

        renderModule(mod: string, obj: Object) {
            var jq: JQuery = $.tmpl(mod, obj);
            jq.appendTo($('main'));
        }

        renderTemplate(tmpl, obj) {
            var jq: JQuery = $.tmpl(tmpl, obj);
            jq.appendTo($('main'));
        }
    }
} 