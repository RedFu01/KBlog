/// <reference path="d.ts/jquery.d.ts" />
/// <reference path="d.ts/jquery.tmpl.d.ts" />
// TODO: content parts and contentpart templates
var ContentLoader = (function () {
    function ContentLoader() {
        this.contentObj = null;
    }
    ContentLoader.prototype.getContent = function () {
        var _this = this;
        var contentReq = $.getJSON('../HttpHandler/DbHandler.php');

        //console.log("content");
        // console.log(contentReq);
        contentReq.done(function (data) {
            //console.log(data);
            _this.contentObj = data;
            $(document).trigger('contentLoaded');
        });
    };

    ContentLoader.prototype.renderContent = function (tmpl, obj) {
        //console.log(obj);
        var jq = $.tmpl(tmpl, obj);
        jq.appendTo($('main'));
    };
    return ContentLoader;
})();
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
//# sourceMappingURL=contentLoader.js.map
