import { navigationContainerRef } from "../App"
import LocalStorage from "./LocalStorage"

const navigateTo = {
	'pesan_baru': () => {
		navigationContainerRef.navigate('Chat')
		LocalStorage.removeItem('BACKGROUND_PRESS_NOTIFICATION_TYPE')
	}
}

const NotificationPress = {
	navigateTo
}

export default NotificationPress
