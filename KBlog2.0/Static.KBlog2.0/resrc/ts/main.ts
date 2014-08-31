/// <reference path="d.ts/jquery.d.ts" />
/// <reference path="pages.ts" />
/// <reference path="contentLoader.ts" />
interface Content {
    contentpart: boolean;
    content: Array<Object>;
}

$(document).ready(function () {
    var page = new PageLoader();
    var cont = new ContentLoader();
   // var modules: String[] = [];
    page.getPage();
   // modules = page.moduleList;
    $(document).on('modulesLoaded', function () {
        page.getModuleTemplates(page.moduleList);
        cont.getContent();
        //console.log(cont.getContent());
    });
    
    $(document).on('mdTemplatesLoaded', function () {
        //console.log(page.moduleTemplateDict.getValue("headline"));
        $(document).on('contentLoaded', function () {
            // decode json
            //console.log(cont.contentObj);
            for (var i = page.moduleList.length - 2; i >= 0; i--) {
                //var k = jQuery.parseJSON(cont.contentObj[i]);
              //  console.log(cont.contentObj[i]);
                //var obj = jQuery.parseJSON("{ \"contentpart\":false, \"content\": [{ \"headline\": \"test Headline\" }] }");
                //console.log(obj);

                cont.renderContent(page.moduleTemplateDict.getValue(page.moduleList[i]), cont.contentObj[i]);
            }
        });
    });
});