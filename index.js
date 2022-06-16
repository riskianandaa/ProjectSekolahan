import LocalStorage from '@handlers/LocalStorage';
import Notification from '@handlers/notification';
import NotificationPress from '@handlers/NotificationPress';
import notifee, { AndroidImportance, EventType } from '@notifee/react-native';
import messaging from '@react-native-firebase/messaging';
import { AppRegistry, Platform } from 'react-native';
import 'react-native-gesture-handler';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';
import { name as appName } from './app.json';
import App, { navigationContainerRef } from './src/App';

async function askNotificationPermission() {
	const permissionStatus = await messaging().requestPermission()
	const isGranted =
		permissionStatus == messaging.AuthorizationStatus.AUTHORIZED
		|| permissionStatus == messaging.AuthorizationStatus.PROVISIONAL

	console.log('permissionStatus:', permissionStatus, 'isGranted:', isGranted)
}

async function retrieveMessagingToken() {
	await messaging().registerDeviceForRemoteMessages()

	const token = await messaging().getToken()
	LocalStorage.setItem('MESSAGING_TOKEN_KEY', token)

	console.log(Platform.OS, 'token:', token);
}

askNotificationPermission()
	.then(() => {
		retrieveMessagingToken()
	})
	.then(() => {
		const channelConfig = {
			id: 'default',
			name: 'default',
			description: 'Default notification channel',
			importance: AndroidImportance.HIGH,
			sound: 'default',
			vibration: true,
			badge: true
		}

		return channelConfig
	})
	.then((channelConfig) => {
		notifee.createChannel(channelConfig)
	})

// Android
// Create and show local notification when
// message arrived while app is in background or quit
messaging()
	.setBackgroundMessageHandler(async message => {
		if (Platform.OS != 'android') return
		await Notification.showLocalNotification(message)
	})

// Android
// Notification pressed when app is in background or quit
notifee.onBackgroundEvent(async ({ detail, type: eventType }) => {
	if (Platform.OS != 'android') return

	const { notification } = detail
	if (!notification) return
	const { data } = notification
	if (!data) return
	const { type } = data

	if (eventType == EventType.PRESS) {
		const isNavigationReady = navigationContainerRef.isReady()

		if (isNavigationReady) {
			NotificationPress.navigateTo[type]()
		} else {
			LocalStorage.setItem('BACKGROUND_PRESS_NOTIFICATION_TYPE', type)
		}
	}
})

AppRegistry.registerComponent(appName, () => gestureHandlerRootHOC(App))
