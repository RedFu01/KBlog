/// <reference path="d.ts/jquery.d.ts" />
var KBlog;
(function (KBlog) {
    var PageLoader = (function () {
        function PageLoader(page, handler) {
            this.page = page;
            this.pageHandler = handler;
        }
        PageLoader.prototype.getRequestData = function () {
            var data = {};
            return data;
        };
        PageLoader.prototype.getPage = function () {
            var _this = this;
            //TODO GET DATA
            var request = $.ajax({
                data: this.getRequestData(),
                url: this.pageHandler
            });
            request.done(function (data) {
                return _this.ajaxSuccess(data);
            });
        };
        PageLoader.prototype.ajaxSuccess = function (data) {
            for (var i = 0; i < data.contentPartTemplates.length; i++) {
                this.page.setCpTemplate(data.contentPartTemplates[i].templateName, data.contentPartTemplates[i].template);
            }

            for (var i = 0; i < data.moduleTemplates.length; i++) {
                this.page.setModuleTemplate(data.moduleTemplates[i].templateName, data.moduleTemplates[i].template);
            }

            for (var i = 0; i < data.modules.length; i++) {
                this.page.modules.push(data.modules[i]);
            }
            this.page.renderer.renderModules(data.modules.length);
        };
        PageLoader.prototype.ajaxFail = function (data) {
            //SHOW FAIL MESSAGE
        };
        return PageLoader;
    })();
    KBlog.PageLoader = PageLoader;
})(KBlog || (KBlog = {}));
//# sourceMappingURL=PageLoader.js.map
