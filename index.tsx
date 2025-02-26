import { NativeModules } from 'react-native'

const { RNPhotoEditor } = NativeModules

type Language = {
    doneTitle?: string
    saveTitle?: string
    clearAllTitle?: string
    cameraTitle?: string
    galleryTitle?: string
    uploadDialogTitle?: string
    uploadPickerTitle?: string
    directoryCreateFail?: string
    accessMediaPermissionsMsg?: string
    continueTxt?: string
    notNow?: string
    mediaAccessDeniedMsg?: string
    saveImageSucceed?: string
    eraserTitle?: string
}

export interface PhotoEditorProps {
    path: string
    colors?: string[]
    stickers?: string[]
    hiddenControls?: ('text' | 'clear' | 'draw' | 'save' | 'share' | 'sticker' | 'crop')[]
    languages: Language
    onDone?: (imagePath: string) => void
    onCancel?: (resultCode: number) => void
}

export default class PhotoEditor {
    private static defaultProps = {
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
    }

    static Edit({
        stickers,
        hiddenControls,
        colors,
        languages,
        onDone,
        onCancel,
        ...props
    }: PhotoEditorProps) {
        if (stickers === undefined) {
            stickers = this.defaultProps.stickers
        }
        if (hiddenControls === undefined) {
            hiddenControls = this.defaultProps.hiddenControls
        }
        if (colors === undefined) {
            colors = this.defaultProps.colors
        }

        if (languages !== undefined) {
            languages = { ...this.defaultProps.languages, ...languages }
        } else {
            languages = this.defaultProps.languages
        }

        RNPhotoEditor.Edit(
            { colors, hiddenControls, stickers, languages, ...props },
            (imagePath: string) => {
                onDone && onDone(imagePath)
            },
            (resultCode: number) => {
                onCancel && onCancel(resultCode)
            }
        )
    }
}
