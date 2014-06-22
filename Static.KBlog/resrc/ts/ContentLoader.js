/// <reference path="d.ts/jquery.d.ts" />
var ContentLoader = (function () {
    function ContentLoader() {
    }
    ContentLoader.prototype.getContent = function (start, screenSize, PHPhandler, callback) {
        var request = $.ajax({
            url: PHPhandler,
            data: {
                start: start,
                screenSize: screenSize
            }
        });
        request.done(function (data) {
            callback($(data));
        });
    };
    return ContentLoader;
})();
//# sourceMappingURL=ContentLoader.js.map
