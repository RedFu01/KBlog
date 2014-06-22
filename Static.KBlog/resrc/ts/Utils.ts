module Utils {
    export function getStartNumber(): number {
        var result: number = 0;
        var content: JQuery = $('section[data-content-id]');
        for (var i: number = 0; i < content.length; i++) {
            result = Math.max(result, content.eq(i).data('content-id'));
        }
        return result;
    }

}