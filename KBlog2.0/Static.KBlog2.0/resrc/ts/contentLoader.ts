/// <reference path="d.ts/jquery.d.ts" />
/// <reference path="d.ts/jquery.tmpl.d.ts" />


// TODO: content parts and contentpart templates
class ContentLoader {
    constructor() { }
    contentObj: Object = null;
    public cpTemplateDict = new collections.Dictionary<string, string>();
    getContent() {
        var contentReq = $.getJSON('../HttpHandler/DbHandler.php');
        //console.log(contentReq);
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
        //console.log(tmplReq);
        tmplReq.done((data) => {
           // console.log(data);

            this.cpTemplateDict.setValue(cpName, data);

            $(document).trigger('cpTemplatesLoaded');
        });
    }

    renderContent(tmpl: string, obj: { content: Object; contentpart: boolean }) {
        //console.log(obj);
        //console.log(tmpl);
        //console.log(obj.content);
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

// TODO: content parts and contentpart templates
//class ContentLoader {
//    constructor() { }
//    contentObj: Object = null;
//    getContent() {
//        var contentReq = $.getJSON('../HttpHandler/DbHandler.php');
//        // console.log(contentReq);
//        contentReq.done((data) => {
//            console.log(data);
//            this.contentObj = data;
//            console.log(this.contentObj[0]["data"]);
//            $(document).trigger('contentLoaded');
//        });
//    }

//    renderContent(tmpl: string, obj: Object) {
//        //console.log(obj);
//        var jq: JQuery = $.tmpl(tmpl, obj);
//        jq.appendTo($('main'));
//    }
//}