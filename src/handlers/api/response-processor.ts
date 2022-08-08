import { ResponseType } from "@app-types/enums/response-type";
import { WHITE } from "@styles/colors";
import { ROBOTO_REGULAR } from "@styles/fonts";
import Snackbar from 'react-native-snackbar';
import { ReturnedResponse } from './Fetch'

interface JSON {
    status : number
    type : string
    message : string
    data? : any
    [others: string] : any
}
interface Callback {
    onFullFilled : (json : JSON) => void
    onNotFullFilled? : (json : JSON) => void
    onNetworkError? : (json : Error) => void
}

export async function ResponseProcessor(response: ReturnedResponse, cb:Callback){
    const { networkError, json } = response

    if(json){
        const {type, message}: {type : string, message: string} = json
        if(type == ResponseType.success){
            cb.onFullFilled(json)
        } else{
            showMessagee(message)
            cb.onNotFullFilled && cb.onNotFullFilled(json)
        }
        return
    }
    if(networkError){
        showMessage()
        cb.onNetworkError && cb.onNetworkError(json)
    }
}

function showMessage(message?: string){
    Snackbar.show({
        text : message ? message : 'No internet connection, Please check your device connection',
        textColor : WHITE,
        action : {
            text : 'Ok',
            onPress() {
                Snackbar.dismiss()
            },
            textColor : WHITE
        },
        duration : Snackbar.LENGTH_LONG,
    })
}
function showMessagee(message?: string){
    Snackbar.show({
        text : message ? message : 'Please check your',
        textColor : WHITE,
        action : {
            text : 'Ok',
            onPress() {
                Snackbar.dismiss()
            },
            textColor : WHITE
        },
        duration : Snackbar.LENGTH_LONG,
    })
}
