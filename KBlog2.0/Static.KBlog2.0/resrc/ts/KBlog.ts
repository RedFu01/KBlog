///<reference path="PageLoader.ts" />
///<reference path="TemplateRenderer.ts" />
///<reference path="../libs/functions.lib.ts" />

/*CR:
Allgemein:
- Warum gibt es ContentLoader und pageLoader?
- was ist die pages.ts, noch ein Pageloader?
- enderer.ts = Renderer.ts (TypescriptDateien, die Klassen enthalten Schreibt man groß)
- Die Steuerung sollte in der KBlog.ts stattfinden, nicht in der main.ts
- Wir müssen mal aufräumen, alle unnützen scripts und plugins raus
- Das Collectionsplugin in den libs ordner

TemplateRenderer.ts :
- ich würde den renderer ein JQuery zurück geben lassen und es nicht direkt an main anhängen, ist generischer
  und dann funktioniert er auch für cps
- dann vllt eine neue methode die gerenderten content generisch an ein element hängen kann, welches du als übergabeparamter angibst
- (enderer.ts löschen)

PageLoader.ts
- Der PageLoader hat zu viel Steuerung, er sollte nichts tun außer daten laden, das ganze zusammensetzten sollte in der page geschehen
- variablennamen sollten aussagekräftiger sein
- typen angeben für die variablen (kein Muss aber hilfreich zum entwickeln)
- den handler als klassenvariable im Constructor ablegen
*/

interface Window { page: KBlog.Page; }
module KBlog {
    export class Page {
        moduleTmplDict: FunctionLib.Dictionary<string, string>;
        cpTmplDict: FunctionLib.Dictionary<string, string>;
        modules: { templateName: string; contentParts: { templateName: string }[] }[];
        loader: KBlog.PageLoader;
        renderer: KBlog.Renderer;

        constructor() {
            /* initialisation */
            this.loader = new PageLoader(this, "");
            this.renderer = new Renderer(this);
            this.moduleTmplDict = new FunctionLib.Dictionary<string, string>();
            this.cpTmplDict = new FunctionLib.Dictionary<string, string>();

            /*page action*/
            this.loader.getPage();
        }

        /**
        *   This function returns all module templates loaded on current page.
        *   @this {KBlog.Page}
        *   @return {Array} array of strings with template names.
        */
        getModuleTemplateKey() {
            return this.moduleTmplDict.keys();
        }

        /**
        *   This function returns all contentpart templates loaded on current page.
        * 
        *   @this {KBlog.Page}
        *   @return {Array} array of strings with template names
        */
        getCpTemplateKey() {
            return this.cpTmplDict.keys();
        }

        /**
*   This function returns all contentpart templates loaded on current page.
* 
*   @this {KBlog.Page}
*   @return {Array} array of strings with template names
*/
        getModuleTemplate(key: string) {
            return this.moduleTmplDict.getValue(key);
        }

        /**
        *   This function returns all contentpart templates loaded on current page.
        * 
        *   @this {KBlog.Page}
        *   @return {Array} array of strings with template names
        */
        getCpTemplate(key: string) {
            return this.cpTmplDict.getValue(key);
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
        setModuleTemplate(key: string, val: string) {
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
        setCpTemplate(key: string, val: string) {
            this.cpTmplDict.setValue(key, val);
        }
    }

}

$(document).ready(() => {
    window.page = new KBlog.Page();
});