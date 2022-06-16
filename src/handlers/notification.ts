import notifee, { AndroidImportance } from '@notifee/react-native'
import { FirebaseMessagingTypes } from '@react-native-firebase/messaging'

async function showLocalNotification(message: FirebaseMessagingTypes.RemoteMessage) {
	const { data } = message
	if (!data) return
	const { body, title } = data

	await notifee.displayNotification({
		title,
		body,
		data,
		ios: {
			sound: 'default',
			foregroundPresentationOptions: {
				alert: true,
				badge: true,
				sound: true
			}
		},
		android: {
			channelId: 'default',
			importance: AndroidImportance.HIGH,
			pressAction: {
				id: 'default',
				launchActivity: 'default',
			},
			showTimestamp: true,
			sound: 'default'
		}
	})
}

const Notification = {
	showLocalNotification
}

export default Notification
