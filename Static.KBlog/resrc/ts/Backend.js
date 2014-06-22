/// <reference path="d.ts/dropzone.d.ts" />
/// <reference path="d.ts/jquery.d.ts" />
var KBlogBackend = (function () {
    function KBlogBackend() {
        var _this = this;
        /** START -> ADD HERE TEMPORARY VARIABLES **/
        this.moduleTypes = [
            {
                type: 'blogppost',
                index: 0,
                markup: ''
            }
        ];
        this.contentPartTypes = [
            {
                type: 'text',
                index: 0,
                markup: '<article></article>'
            }, {
                type: 'image',
                index: 1,
                markup: '<figure></figure>'
            }, {
                type: 'soundcloud',
                index: 2,
                markup: '<iframe></iframe>'
            }
        ];
        this.modules = [];
        $(document).on('contentAdded', function () {
            return _this.init();
        });
    }
    KBlogBackend.prototype.init = function () {
        this.editable = $('*[data-field-name], *[data-array-name], *[data-object-field]');
        this.refactorContent();
        this.addEditButtons();
    };

    KBlogBackend.prototype.refactorContent = function () {
        this.modules = [];
        var modules = $('*[data-template-id]');
        var type = '';
        var templateId = 0;
        var index = 0;
        var contentParts = [];
        var obj;
        var value;
        var relatedObjects;
        var json;
        for (var i = 0; i < modules.length; i++) {
            var currentModule = modules.eq(i);
            type = currentModule.attr('class');
            templateId = currentModule.data('template-id');
            index = currentModule.data('content-id');

            var content = $('*[data-field-name], *[data-array-name]', currentModule);
            for (var j = 0; j < content.length; j++) {
                var currentContent = content.eq(j);
                if (currentContent.is('*[data-field-name]')) {
                    value = currentContent.data('field-value') != undefined ? currentContent.data('field-value') : currentContent.text().replace(/"/g, '\\"');
                    obj = JSON.parse("{\"" + currentContent.data('field-name') + "\":\"" + value + "\"}");
                    contentParts.push(obj);
                } else {
                    var selector = '*[data-array-name=' + currentContent.data('array-name') + ']';
                    relatedObjects = $(selector, currentModule);
                    json = "{\"" + currentContent.data('array-name') + "\":[";
                    for (var k = 0; k < relatedObjects.length; k++) {
                        var cro = relatedObjects.eq(k);
                        if (cro.is('article')) {
                            json += "{\"text\":\"" + cro.html().replace(/"/g, '\\"') + "\"}";
                        } else if (cro.is('figure')) {
                            json += "{\"src\":\"" + $('img', cro).attr('src') + "\",\"caption\":\"" + $('figcaption', cro).text().replace(/"/g, '\\"') + "\"}";
                        } else {
                            var of = $('*[data-object-field]', cro);
                            json += "{";
                            for (var k; k < of.length; k++) {
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
            var mo = new Module(type, index, templateId, contentParts);
            this.modules.push(mo);
        }
    };
    KBlogBackend.prototype.addEditButtons = function () {
        var _this = this;
        $('.edit-icon').remove();
        this.editable.css('position', 'relative').append('<span class="edit-icon"></span>');
        $('.edit-icon').click(function (e) {
            _this.editField($(e.currentTarget).parent());
        });
    };

    KBlogBackend.prototype.addSaveButton = function (field) {
        field.append('<span class="save-icon"></span>');
    };

    KBlogBackend.prototype.editField = function (field) {
        if (field.is('article')) {
            //replace with rte
        }
        if (field.is('figure')) {
            var value = $('img', field).attr('src');
            field.append('<div class="dropzone"></div>');
            $('.dropzone').dropzone({
                url: "/file/post",
                uploadMultiple: true
            });
        }
        if (field.is('h2,.date')) {
        }
        if (field.is('figcaption')) {
        }
    };
    return KBlogBackend;
})();

var Module = (function () {
    function Module(type, index, tempalteId, contentParts) {
        if (typeof contentParts === "undefined") { contentParts = null; }
        this.type = type;
        this.templateId = tempalteId;
        this.contentParts = contentParts;
    }
    return Module;
})();
var ContentPart = (function () {
    function ContentPart() {
    }
    return ContentPart;
})();
//# sourceMappingURL=Backend.js.map
