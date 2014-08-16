/// <reference path="d.ts/jquery.d.ts" />
/// <reference path="heroTeaser.ts" />
/// <reference path="pages.ts" />
/// <reference path="contentLoader.ts" />
$(document).ready(function () {
    var page = new PageLoader();
    var cont = new ContentLoader();
    var modules = [];
    page.getPage();
    modules = page.moduleList;

    $(document).on('modulesLoaded', function () {
        page.getModuleTemplates(page.moduleList);
        cont.getContent();
    });

    $(document).on('mdTemplatesLoaded', function () {
        console.log(page.moduleTemplateDict.getValue("headline"));
        $(document).on('contentLoaded', function () {
            // decode json
            console.log(cont.contentObj[0]);
            for (var i = page.moduleList.length - 1; i >= 0; i--) {
                cont.renderContent(page.moduleTemplateDict.getValue(page.moduleList[i]), cont.contentObj["content"]);
            }
        });
    });
});
//# sourceMappingURL=main.js.map
