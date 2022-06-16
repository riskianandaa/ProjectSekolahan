import ImageCropPicker, { ImageOrVideo, Options } from 'react-native-image-crop-picker'

const param: Options = {
    compressImageQuality: 0.8,
    cropperCancelText: 'Batal',
    cropperChooseText: 'Terapkan',
    cropping: true,
    height: 600,
    multiple: false,
    width: 600
}

async function openCamera(options?: Options): Promise<ImageOrVideo> {
    return await ImageCropPicker.openCamera({
        ...options,
        ...param
    })
}

async function openGallery(options?: Options): Promise<ImageOrVideo> {
    return await ImageCropPicker.openPicker({
        ...options,
        ...param
    })
}

async function openCropper(path: string): Promise<ImageOrVideo> {
    return await ImageCropPicker.openCropper({
        ...param,
        mediaType: 'photo',
        path
    })
}

const ImagePicker = {
    openCamera,
    openCropper,
    openGallery
}

export default ImagePicker
