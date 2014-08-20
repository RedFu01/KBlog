/// <reference path="d.ts/jquery.d.ts" />
/// <reference path="d.ts/jquery.tmpl.d.ts" />
// TODO: content parts and contentpart templates
var ContentLoader = (function () {
    function ContentLoader() {
        this.contentObj = null;
        this.cpTemplateDict = new collections.Dictionary();
    }
    ContentLoader.prototype.getContent = function () {
        var _this = this;
        var contentReq = $.getJSON('../HttpHandler/DbHandler.php');

        //console.log(contentReq);
        contentReq.done(function (data) {
            console.log(data);
            _this.contentObj = data;
            console.log(_this.contentObj);
            $(document).trigger('contentLoaded');
        });
    };

    ContentLoader.prototype.getCpTemplates = function (cpName) {
        //todo: check if template is loaded before sending request
        var _this = this;
        var tmplReq = $.getJSON('../HttpHandler/templateHandler.php', { mdOrCp: "Contentpart", template: cpName });

        //console.log(tmplReq);
        tmplReq.done(function (data) {
            // console.log(data);
            _this.cpTemplateDict.setValue(cpName, data);

            $(document).trigger('cpTemplatesLoaded');
        });
    };

    ContentLoader.prototype.renderContent = function (tmpl, obj) {
        //console.log(obj);
        //console.log(tmpl);
        //console.log(obj.content);
        if (obj.contentpart == false) {
            var jq = $.tmpl(tmpl, obj.content);
            jq.appendTo($('main'));
        }

        if (obj.contentpart == true) {
            var x = this.getCpTemplates("image");
            console.log(x);
        }
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
