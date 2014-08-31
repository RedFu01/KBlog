/// <reference path="d.ts/jquery.d.ts" />
/// <reference path="../../Scripts/collections.ts" />
var templateRenderer = (function () {
    function templateRenderer() {
    }
    templateRenderer.prototype.renderTemplate = function (tmpl, obj) {
        var jq = $.tmpl(tmpl, obj);
        jq.appendTo($('main'));
    };
    return templateRenderer;
})();
//# sourceMappingURL=enderer.js.map
