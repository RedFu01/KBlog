var KBlog;
(function (KBlog) {
    var PageLoader = (function () {
        function PageLoader() {
        }
        PageLoader.prototype.getPage = function (page) {
            var moduleList = page.getModuleTemplates();
            var cpList = page.getCpTemplates();

            var id = 1;
            moduleList = ["headline"]; // Todo: delete
            var tmplReq = $.getJSON('../HttpHandler/pageLoadHandler.php', { pageId: id, moduleList: moduleList, cpList: cpList });
            tmplReq.done(function (data) {
                console.log(data);
                //page.setModuleTemplateNames();
            });
        };
        return PageLoader;
    })();
    KBlog.PageLoader = PageLoader;
})(KBlog || (KBlog = {}));
//# sourceMappingURL=PageLoader.js.map
