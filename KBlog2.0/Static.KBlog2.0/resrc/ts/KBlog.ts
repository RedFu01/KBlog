interface Window { page: KBlog.Page; }
module KBlog {
    export class Page {
        moduleTmpl: string[];
        cpTmpl: string[];
        loader: KBlog.PageLoader;
        renderer: KBlog.PageRenderer;
        constructor() {

        }
        getModuleTemplates() {
            var ret: string[];
            return ret;
        }
    }

}

$(document).ready(() => {
    window.page = new KBlog.Page();

});