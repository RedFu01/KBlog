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
        contentReq.done(function (data) {
            //console.log(data);
            _this.contentObj = data;

            //console.log(this.contentObj);
            $(document).trigger('contentLoaded');
        });
    };

    ContentLoader.prototype.getCpTemplates = function (cpName) {
        //todo: check if template is loaded before sending request
        var _this = this;
        var tmplReq = $.getJSON('../HttpHandler/templateHandler.php', { mdOrCp: "Contentpart", template: cpName });

        tmplReq.done(function (data) {
            _this.cpTemplateDict.setValue(cpName, data);

            $(document).trigger('cpTemplatesLoaded');
        });
    };

    ContentLoader.prototype.renderContent = function (tmpl, obj) {
        if (obj.contentpart == false) {
            var jq = $.tmpl(tmpl, obj.content);
            jq.appendTo($('main'));
        }

        if (obj.contentpart == true) {
            var x = this.getCpTemplates("image");
            //console.log(x);
        }
    };
    return ContentLoader;
})();
//# sourceMappingURL=contentLoader.js.map
