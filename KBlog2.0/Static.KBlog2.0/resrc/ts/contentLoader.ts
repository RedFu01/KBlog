/// <reference path="d.ts/jquery.d.ts" />
/// <reference path="d.ts/jquery.tmpl.d.ts" />

// TODO: content parts and contentpart templates
class ContentLoader {
    constructor() { }
    contentObj: Object = null;
    getContent() {
            var contentReq = $.getJSON('../HttpHandler/DbHandler.php');
            //console.log("content");
           // console.log(contentReq);
            contentReq.done((data) => {
                //console.log(data);
                this.contentObj = data;
                $(document).trigger('contentLoaded');
            });
    }

    renderContent(tmpl: string, obj: Object) {
        //console.log(obj);
        var jq: JQuery = $.tmpl(tmpl, obj);
        jq.appendTo($('main'));
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