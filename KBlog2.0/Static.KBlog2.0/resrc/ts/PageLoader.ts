module KBlog {
    export class PageLoader {
        constructor() {

        }
        getPage(page: Page) {
            var moduleList = page.getModuleTemplates();
            var cpList = page.getCpTemplates();

            var id = 1; // Todo: delete
            moduleList = ["headline"];// Todo: delete
            var tmplReq = $.getJSON('../HttpHandler/pageLoadHandler.php', { pageId: id, moduleList: moduleList, cpList: cpList });
            tmplReq.done((data) => {
                console.log(data);
                //page.setModuleTemplateNames();
            });
        }
    }
}