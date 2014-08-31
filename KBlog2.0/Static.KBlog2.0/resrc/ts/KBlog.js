///<reference path="PageLoader.ts" />
///<reference path="../libs/functions.lib.ts" />
var KBlog;
(function (KBlog) {
    var Page = (function () {
        function Page() {
            /* initialisation */
            this.loader = new KBlog.PageLoader();
            this.moduleTmplDict = new FunctionLib.Dictionary();
            this.cpTmplDict = new FunctionLib.Dictionary();

            /*page action*/
            this.loader.getPage(this);
        }
        /**
        *   This function returns all module templates loaded on current page.
        *   @this {KBlog.Page}
        *   @return {Array} array of strings with template names.
        */
        Page.prototype.getModuleTemplates = function () {
            return this.moduleTmplDict.keys();
        };

        /**
        *   This function returns all contentpart templates loaded on current page.
        *
        *   @this {KBlog.Page}
        *   @return {Array} array of strings with template names
        */
        Page.prototype.getCpTemplates = function () {
            return this.cpTmplDict.keys();
        };

        /**
        *   This function sets a new module key-value pair to the module dictionary.
        *   The key is tha name of the module template and the value is a string containing the template.
        *
        *   @this {KBlog.Page}
        *   param key {String} template name
        *   param value {String} template
        *
        */
        Page.prototype.setModuleTemplateNames = function (key, val) {
            this.moduleTmplDict.setValue(key, val);
        };

        /**
        *   This function sets a new contentpart key-value pair to the contentpart dictionary.
        *   The key is tha name of the content template and the value is a string containing the template.
        *
        *   @this {KBlog.Page}
        *   param key {String} template name
        *   param value {String} template
        */
        Page.prototype.setCpTemplateNames = function (key, val) {
            this.cpTmplDict.setValue(key, val);
        };
        return Page;
    })();
    KBlog.Page = Page;
})(KBlog || (KBlog = {}));

$(document).ready(function () {
    window.page = new KBlog.Page();
});
//# sourceMappingURL=KBlog.js.map
