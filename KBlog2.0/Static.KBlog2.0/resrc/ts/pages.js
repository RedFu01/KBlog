/// <reference path="d.ts/jquery.d.ts" />
/// <reference path="../../Scripts/collections.ts" />
var PageLoader = (function () {
    function PageLoader() {
        this.moduleList = [];
        this.moduleTemplateDict = new collections.Dictionary();
        // this.getPage();
    }
    /* This function loads a list of all modules contained in current page.
    * It sends an ajax request with parameters page id (and user name)
    *
    */
    PageLoader.prototype.getPage = function () {
        var _this = this;
        var moduleList = [];
        var pageModuleList = [];

        var pageReq = $.getJSON('../HttpHandler/ajaxHandler.php', { name: "kwame" });
        pageReq.done(function (data) {
            $.each(data, function (key, val) {
                //console.log(val);
                pageModuleList.push(val);
            });
            _this.moduleList = pageModuleList;

            //console.log(this.moduleList);
            $(document).trigger('modulesLoaded');
        });
    };

    PageLoader.prototype.getModuleTemplates = function (moduleArr) {
        //todo: check if template is loaded before sending request
        var _this = this;
        var tmplReq = $.getJSON('../HttpHandler/templateHandler.php', { mdOrCp: "Module", template: moduleArr });

        //console.log(tmplReq);
        tmplReq.done(function (data) {
            for (var i = moduleArr.length - 1; i >= 0; i--) {
                _this.moduleTemplateDict.setValue(moduleArr[i], data[i]);
            }
            $(document).trigger('mdTemplatesLoaded');
        });
    };

    /* loads Contentpart templates
    *
    *
    */
    PageLoader.prototype.getCpTemplates = function (cpArr) {
        //todo: check if template is loaded before sending request
        var _this = this;
        var tmplReq = $.getJSON('../HttpHandler/templateHandler.php', { mdOrCp: "Contentpart", template: cpArr });

        //console.log(tmplReq);
        tmplReq.done(function (data) {
            for (var i = cpArr.length - 1; i >= 0; i--) {
                _this.moduleTemplateDict.setValue(cpArr[i], data[i]);
            }
            $(document).trigger('cpTemplatesLoaded');
        });
    };
    return PageLoader;
})();
//# sourceMappingURL=pages.js.map
