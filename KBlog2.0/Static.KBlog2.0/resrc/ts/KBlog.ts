﻿///<reference path="PageLoader.ts" />
///<reference path="../libs/functions.lib.ts" />

interface Window { page: KBlog.Page; }
module KBlog {
    export class Page {
        moduleTmplDict: FunctionLib.Dictionary<string, string>;
        cpTmplDict: FunctionLib.Dictionary<string, string>;
        loader: KBlog.PageLoader;
        renderer: KBlog.Renderer;

        constructor() {
            /* initialisation */
            this.loader = new PageLoader();
            this.moduleTmplDict = new FunctionLib.Dictionary<string, string>();
            this.cpTmplDict = new FunctionLib.Dictionary<string, string>();

            /*page action*/
            this.loader.getPage(this);
        }

        /**
        *   This function returns all module templates loaded on current page.
        *   @this {KBlog.Page}
        *   @return {Array} array of strings with template names.
        */
        getModuleTemplates() {
            return this.moduleTmplDict.keys();
        }

        /**
        *   This function returns all contentpart templates loaded on current page.
        * 
        *   @this {KBlog.Page}
        *   @return {Array} array of strings with template names
        */
        getCpTemplates() {
            return this.cpTmplDict.keys();
        }

        /**
        *   This function sets a new module key-value pair to the module dictionary.
        *   The key is tha name of the module template and the value is a string containing the template.
        * 
        *   @this {KBlog.Page}
        *   param key {String} template name
        *   param value {String} template
        * 
        */
        setModuleTemplateNames(key: string, val: string) {
            this.moduleTmplDict.setValue(key, val);
        }

        /**
        *   This function sets a new contentpart key-value pair to the contentpart dictionary.
        *   The key is tha name of the content template and the value is a string containing the template.
        * 
        *   @this {KBlog.Page}
        *   param key {String} template name
        *   param value {String} template
        */
        setCpTemplateNames(key: string, val: string) {
            this.cpTmplDict.setValue(key, val);
        }
    }

}

$(document).ready(() => {
    window.page = new KBlog.Page();
});