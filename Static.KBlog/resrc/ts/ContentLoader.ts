/// <reference path="d.ts/jquery.d.ts" />

class ContentLoader {
    constructor() {

    }
    getContent(start: number, screenSize: number, PHPhandler: string): JQuery {
        var result: JQuery;
        var request = $.ajax({
            url: PHPhandler,
            data: {
                start: start,
                screenSize: screenSize,
            }
        });
        request.done((data) => {
            result = $(data);
        });
        return result;

    }
}
