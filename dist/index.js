"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
exports.__esModule = true;
var react_native_1 = require("react-native");
var RNPhotoEditor = react_native_1.NativeModules.RNPhotoEditor;
var PhotoEditor = /** @class */ (function () {
    function PhotoEditor() {
    }
    PhotoEditor.Edit = function (_a) {
        var stickers = _a.stickers, hiddenControls = _a.hiddenControls, colors = _a.colors, languages = _a.languages, onDone = _a.onDone, onCancel = _a.onCancel, props = __rest(_a, ["stickers", "hiddenControls", "colors", "languages", "onDone", "onCancel"]);
        if (stickers === undefined) {
            stickers = this.defaultProps.stickers;
        }
        if (hiddenControls === undefined) {
            hiddenControls = this.defaultProps.hiddenControls;
        }
        if (colors === undefined) {
            colors = this.defaultProps.colors;
        }
        if (languages !== undefined) {
            languages = __assign(__assign({}, this.defaultProps.languages), languages);
        }
        else {
            languages = this.defaultProps.languages;
        }
        RNPhotoEditor.Edit(__assign({ colors: colors, hiddenControls: hiddenControls, stickers: stickers, languages: languages }, props), function (imagePath) {
            onDone && onDone(imagePath);
        }, function (resultCode) {
            onCancel && onCancel(resultCode);
        });
    };
    PhotoEditor.defaultProps = {
        stickers: [],
        hiddenControls: [],
        colors: [
            '#000000',
            '#808080',
            '#a9a9a9',
            '#FFFFFE',
            '#0000ff',
            '#00ff00',
            '#ff0000',
            '#ffff00',
            '#00987E',
            '#800080',
            '#00ffff',
            '#a52a2a',
            '#ff00ff'
        ],
        languages: {
            doneTitle: 'تم',
            saveTitle: 'حفظ',
            clearAllTitle: 'مسح الكل',
            cameraTitle: 'كاميرا',
            galleryTitle: 'معرض الصور',
            uploadDialogTitle: 'تحميل الصورة',
            uploadPickerTitle: 'اختر صورة',
            directoryCreateFail: 'فشل في انشاء المسار',
            accessMediaPermissionsMsg: 'لإرفاق الصور، نحتاج إلى الوصول إلى الوسائط على جهازك',
            continueTxt: 'متابعة',
            notNow: 'ليس الآن',
            mediaAccessDeniedMsg: 'لقد رفضت الوصول إلى التخزين، لن يتم إضافة أي صور.',
            saveImageSucceed: 'تم حفظ الصورة',
            eraserTitle: 'ممحاة'
        }
    };
    return PhotoEditor;
}());
exports["default"] = PhotoEditor;
