var Utils;
(function (Utils) {
    function getStartNumber() {
        var result = 0;
        var content = $('section[data-content-id]');
        for (var i = 0; i < content.length; i++) {
            result = Math.max(result, content.eq(i).data('content-id'));
        }
        return result;
    }
    Utils.getStartNumber = getStartNumber;
})(Utils || (Utils = {}));
//# sourceMappingURL=Utils.js.map
