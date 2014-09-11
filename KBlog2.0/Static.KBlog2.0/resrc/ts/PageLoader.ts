module KBlog {
    export class PageLoader {
        constructor() {

        }
        getPage(page: Page) {
            var moduleList = page.getModuleTemplateKey();
            var cpList = page.getCpTemplateKey();

            var id = 1; // Todo: delete
            moduleList = ["headline"];// Todo: delete
            var tmplReq = $.getJSON('../HttpHandler/pageLoadHandler.php', { pageId: id, moduleList: moduleList, cpList: cpList });
            /**
             *  data[0] :   mdTmpl
             *  data[1] :   cpTmpl
             *  data[2] :   data
             */
            tmplReq.done((data) => {
                console.log(data);
                var p = data["page"];
                var c = data["cp"];
                var modules = data["mdTmpl"]; 
                var cp = data["cpTmpl"];
                var da = data["data"];

                for (var i = 0; i < c.length-1; i++) {
                    page.setCpTemplate(c[i], cp[c[i]]);
                    console.log(page.getCpTemplate(c[i]));
                }

                for (var i = 0; i < p.length-1; i++) {
                    page.setModuleTemplate(p[i], modules[p[i]]);
                    console.log(da[i]);
                    page.renderer.renderModule(page.getModuleTemplate(p[i]), da[i]);
                    //TODO: render contentparts
                }

                console.log();
                //page.setModuleTemplateNames();
            });
        }
    }
}