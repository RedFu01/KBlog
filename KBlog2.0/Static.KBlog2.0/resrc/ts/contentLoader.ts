/// <reference path="d.ts/jquery.d.ts" />
/// <reference path="d.ts/jquery.tmpl.d.ts" />


// TODO: content parts and contentpart templates
class ContentLoader {
    constructor() { }
    contentObj: Object = null;
    public cpTemplateDict = new collections.Dictionary<string, string>();
    getContent() {
        var contentReq = $.getJSON('../HttpHandler/DbHandler.php');
        contentReq.done((data) => {
            console.log(data);
            this.contentObj = data;
            console.log(this.contentObj);
            $(document).trigger('contentLoaded');
        });
    }

    getCpTemplates(cpName: string) {
        //todo: check if template is loaded before sending request

        var tmplReq = $.getJSON('../HttpHandler/templateHandler.php', { mdOrCp: "Contentpart", template: cpName });

        tmplReq.done((data) => {

            this.cpTemplateDict.setValue(cpName, data);

            $(document).trigger('cpTemplatesLoaded');
        });
    }

    renderContent(tmpl: string, obj: { content: Object; contentpart: boolean }) {
        if (obj.contentpart == false) {
            var jq: JQuery = $.tmpl(tmpl, obj.content);
            jq.appendTo($('main'));
        }

        if (obj.contentpart == true) {
            var x = this.getCpTemplates("image");
            console.log(x);
        }

    }
}
