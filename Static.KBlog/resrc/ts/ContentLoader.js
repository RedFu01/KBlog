/// <reference path="d.ts/jquery.d.ts" />
var ContentLoader = (function () {
    function ContentLoader() {
    }
    ContentLoader.prototype.getContent = function (start, screenSize, PHPhandler) {
        var result;
        var request = $.ajax({
            url: PHPhandler,
            data: {
                start: start,
                screenSize: screenSize
            }
        });
        request.done(function (data) {
            result = $(data);
        });
        return result;
    };
    return ContentLoader;
})();
//# sourceMappingURL=ContentLoader.js.map
