/// <reference path="d.ts/dropzone.d.ts" />
/// <reference path="d.ts/jquery.d.ts" />
class KBlogBackend {

    /** START -> ADD HERE TEMPORARY VARIABLES **/
    moduleTypes: Object[] = [
        {
            type: 'blogppost',
            index: 0,
            markup: '',
        }
    ];

    contentPartTypes: Object[] = [
        {
            type: 'text',
            index: 0,
            markup: '<article></article>',
        }, {
            type: 'image',
            index: 1,
            markup: '<figure></figure>',
        }, {
            type: 'soundcloud',
            index: 2,
            markup: '<iframe></iframe>'
        }
    ];

    /** END <- ADD HERE TEMPORARY VARIABLES **/

    editable: JQuery;
    modules: Object[] = [];

    constructor() {

        $(document).on('contentAdded', () => this.init())
    }
    init() {
        this.editable = $('*[data-field-name], *[data-array-name], *[data-object-field]');
        this.refactorContent();
        this.addEditButtons();
    }

    public refactorContent() {
        this.modules = [];
        var modules = $('*[data-template-id]');
        var type = '';
        var templateId = 0;
        var index = 0;
        var contentParts: Object[] = [];
        var obj: Object;
        var value: string;
        var relatedObjects: JQuery;
        var json: string;
        for (var i: number = 0; i < modules.length; i++) {
            var currentModule = modules.eq(i);
            type = currentModule.attr('class');
            templateId = currentModule.data('template-id');
            index = currentModule.data('content-id');

            var content: JQuery = $('*[data-field-name], *[data-array-name]', currentModule);
            for (var j: number = 0; j < content.length; j++) {
                var currentContent: JQuery = content.eq(j);
                if (currentContent.is('*[data-field-name]')) {
                    value = currentContent.data('field-value') != undefined ? currentContent.data('field-value') : currentContent.text().replace(/"/g, '\\"');
                    obj = JSON.parse("{\"" + currentContent.data('field-name') + "\":\"" + value + "\"}");
                    contentParts.push(obj);
                } else {
                    var selector = '*[data-array-name=' + currentContent.data('array-name') + ']'
                    relatedObjects = $(selector, currentModule);
                    json = "{\"" + currentContent.data('array-name') + "\":[";
                    for (var k: number = 0; k < relatedObjects.length; k++) {
                        var cro = relatedObjects.eq(k);
                        if (cro.is('article')) {
                            json += "{\"text\":\"" + cro.html().replace(/"/g, '\\"') + "\"}";
                        } else if (cro.is('figure')) {
                            json += "{\"src\":\"" + $('img', cro).attr('src') + "\",\"caption\":\"" + $('figcaption', cro).text().replace(/"/g, '\\"') + "\"}";
                        } else {
                            var of = $('*[data-object-field]', cro);
                            json += "{";
                            for (var k: number; k < of.length; k++) {
                                json += "\"" + of.data('object-field') + "\":\"" + of.html() + "\",";
                            }
                            json += "}";

                        }
                        if (k != (relatedObjects.length - 1)) {
                            json += ",";
                        }
                    }
                    json += "]}";
                    json = json.replace(/\n/g, '');
                    obj = JSON.parse(json);
                    contentParts.push(obj);
                    content = content.not(relatedObjects);


                }

            }
            var mo = new Module(type, index, templateId, contentParts)
            this.modules.push(mo);
        }
    }
    addEditButtons() {
        $('.edit-icon').remove();
        this.editable.css('position', 'relative').append('<span class="edit-icon"></span>');
        $('.edit-icon').click((e) => {
            this.editField($(e.currentTarget).parent());
        })

    }

    addSaveButton(field: JQuery) {
        field.append('<span class="save-icon"></span>');
    }

    editField(field: JQuery) {
        if (field.is('article')) {
            //replace with rte
        }
        if (field.is('figure')) {
            var value = $('img', field).attr('src');
            field.append('<div class="dropzone"></div>')
            $('.dropzone').dropzone({
                url: "/file/post",
                uploadMultiple: true
            });
        }
        if (field.is('h2,.date')) {

        }
        if (field.is('figcaption')) {

        }
    }
}

class Module {
    public type: string;
    public templateId: number;
    public index: number;
    public contentParts: Object[];

    constructor(type: string, index: number, tempalteId: number, contentParts: Object[]= null) {
        this.type = type;
        this.templateId = tempalteId;
        this.contentParts = contentParts;
    }
}
class ContentPart {
    public type: string;
    public index: number;
    public markup: string;
    public data: Object[];

}