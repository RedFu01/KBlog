/// <reference path="d.ts/jquery.tmpl.d.ts" />
module KBlog {
    export class Renderer {
        page: Page;
        constructor(page: Page) {
            this.page = page;
        }

        renderModules(moduleCount: number) {
            for (var i: number = this.page.modules.length - moduleCount; i < this.page.modules.length; i++) {
                var moduleObject: { templateName: string; contentParts: { templateName: string }[] } = this.page.modules[i];
                var moduleTemplate: string = this.page.getModuleTemplate(moduleObject.templateName);
                var moduleMarkup: JQuery = this.renderTemplate(moduleTemplate, moduleObject);
                moduleMarkup.appendTo($('main'));

                //Go through all CPS
                for (var j:number = 0; j < moduleObject.contentParts.length; j++) {
                    var contentPart: { templateName: string } = moduleObject.contentParts[j];
                    var contentpartTemplate: string = this.page.getCpTemplate(contentPart.templateName);
                    var contentpartMarkup: JQuery = this.renderTemplate(contentpartTemplate, contentPart);
                    contentpartMarkup.appendTo($('.contentparts', moduleMarkup));
                }
            }
        }
        renderTemplate(template: string, object: {}): JQuery {
            var markup: JQuery = $.tmpl(template, object);
            return markup;
        }
    }
} 