/// <reference path="d.ts/jquery.d.ts" />
    class PageLoader {
        constructor() {
            $.tmpl(this.test, this.obj).appendTo("main");
        }    

        test: string = "<li>${Name} ${id}</li>";
        obj = {
            "Name": "kwame",
            "id": 1
        }       
}

    $(document).ready(function () {
        new PageLoader();
    });
