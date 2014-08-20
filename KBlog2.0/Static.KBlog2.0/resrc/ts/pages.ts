/// <reference path="d.ts/jquery.d.ts" />
/// <reference path="heroTeaser.ts" />
/// <reference path="../../Scripts/collections.ts" />

class PageLoader {
    constructor() {
        // this.getPage();
    }
    public moduleList: string[] = [];
    public moduleTemplateDict = new collections.Dictionary<string, string>();


    /* This function loads a list of all modules contained in current page.
     * It sends an ajax request with parameters page id (and user name)
     * 
     */
    getPage() {
        var moduleList: string[] = []; //all modules 
        var pageModuleList: string[] = []; //modules listet on current page

        var pageReq = $.getJSON('../HttpHandler/ajaxHandler.php', { name: "kwame" });
        pageReq.done((data) => {
            $.each(data, function (key, val) {
                //console.log(val);
                pageModuleList.push(val);
            });
            this.moduleList = pageModuleList;
            //console.log(this.moduleList);
            $(document).trigger('modulesLoaded');
        });
    }

    getModuleTemplates(moduleArr: string[]) {
        //todo: check if template is loaded before sending request

        var tmplReq = $.getJSON('../HttpHandler/templateHandler.php', { mdOrCp: "Module", template: moduleArr });
        //console.log(tmplReq);
        tmplReq.done((data) => {
            //console.log(data);
            for (var i = moduleArr.length - 1; i >= 0; i--) {
                this.moduleTemplateDict.setValue(moduleArr[i], data[i]);
            }
            $(document).trigger('mdTemplatesLoaded');
        });
    }
    /* loads Contentpart templates
     * 
     * 
     */
    getCpTemplates(cpArr: string[]) {
        //todo: check if template is loaded before sending request

        var tmplReq = $.getJSON('../HttpHandler/templateHandler.php', { mdOrCp: "Contentpart", template: cpArr });
        //console.log(tmplReq);
        tmplReq.done((data) => {
            //console.log(data);
            for (var i = cpArr.length - 1; i >= 0; i--) {
                this.moduleTemplateDict.setValue(cpArr[i], data[i]);
            }
            $(document).trigger('cpTemplatesLoaded');
        });
    }
}