/// <reference path="d.ts/jquery.d.ts" />
module KBlog {
    export class PageLoader {
        pageHandler: string;
        page: Page;
        constructor(page: Page, handler: string) {
            this.page = page;
            this.pageHandler = handler;
        }
        getRequestData(): {} {
            var data = {};
            return data;
        }
        getPage() {
            //TODO GET DATA
            var request: JQueryXHR = $.ajax({
                data: this.getRequestData(),
                url: this.pageHandler,
            })
            request.done((data) => this.ajaxSuccess(data));
        }
        ajaxSuccess(data: { contentPartTemplates: { templateName: string; template: string }[]; moduleTemplates: { templateName: string; template: string }[]; modules: { templateName: string; contentParts: { templateName: string }[] }[] }) {
            //ADD CP TEMPLATES
            for (var i: number = 0; i < data.contentPartTemplates.length; i++) {
                this.page.setCpTemplate(data.contentPartTemplates[i].templateName, data.contentPartTemplates[i].template);
            }
            //ADD MODULE TEMPLATES
            for (var i: number = 0; i < data.moduleTemplates.length; i++) {
                this.page.setModuleTemplate(data.moduleTemplates[i].templateName, data.moduleTemplates[i].template);
            }
            //STORE MODULES
            for (var i: number = 0; i < data.modules.length; i++) {
                this.page.modules.push(data.modules[i]);
            }
            this.page.renderer.renderModules(data.modules.length);
        }
        ajaxFail(data: {}) {
            //SHOW FAIL MESSAGE
        }
        //getPage(page: Page) {
        //    var moduleList = page.getModuleTemplateKey();
        //    var cpList = page.getCpTemplateKey();

        //    var id = 1; // Todo: delete
        //    moduleList = ["headline"];// Todo: delete
        //    var tmplReq = $.getJSON('../HttpHandler/pageLoadHandler.php', { pageId: id, moduleList: moduleList, cpList: cpList });
        //    /**
        //     *  data[0] :   mdTmpl
        //     *  data[1] :   cpTmpl
        //     *  data[2] :   data
        //     */
        //    tmplReq.done((data) => {
        //        console.log(data);
        //        var p = data["page"];
        //        var c = data["cp"];
        //        var modules = data["mdTmpl"]; 
        //        var cp = data["cpTmpl"];
        //        var da = data["data"];

        //        for (var i = 0; i < c.length-1; i++) {
        //            page.setCpTemplate(c[i], cp[c[i]]);
        //            console.log(page.getCpTemplate(c[i]));
        //        }

        //        for (var i = 0; i < p.length-1; i++) {
        //            page.setModuleTemplate(p[i], modules[p[i]]);
        //            console.log(da[i]);
        //            page.renderer.renderModule(page.getModuleTemplate(p[i]), da[i]);
        //            //TODO: render contentparts
        //        }

        //        console.log();
        //        //page.setModuleTemplateNames();
        //    });
        //}
    }
}