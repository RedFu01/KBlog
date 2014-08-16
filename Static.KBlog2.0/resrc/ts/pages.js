/// <reference path="d.ts/jquery.d.ts" />
var PageLoader = (function () {
    function PageLoader() {
        this.test = "<li>${Name} ${id}</li>";
        this.obj = {
            "Name": "kwame",
            "id": 1
        };
        $.tmpl(this.test, this.obj).appendTo("main");
    }
    return PageLoader;
})();

$(document).ready(function () {
    new PageLoader();
});
//# sourceMappingURL=pages.js.map
