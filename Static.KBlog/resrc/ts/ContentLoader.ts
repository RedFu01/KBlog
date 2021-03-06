﻿/// <reference path="d.ts/jquery.d.ts" />

class ContentLoader {
    constructor() {

    }
    getContent(start: number, screenSize: number, PHPhandler: string, callback: any) {
        var request = $.ajax({
            url: PHPhandler,
            cache: false,
            data: {
                start: start,
                screenSize: screenSize,
            }
        });
        request.done((data) => {
            callback($(data));
            $(document).trigger('contentAdded');
        });
    }
}
