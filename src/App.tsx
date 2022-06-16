import { INotificationType } from '@app-types/INotificationType';
import { useLocalStorage } from '@handlers/LocalStorage';
import Notification from '@handlers/notification';
import NotificationPress from '@handlers/NotificationPress';
import StackNavigator from '@navigator/StackNavigator';
import { StackParamList } from '@navigator/StackParamList';
import notifee, { EventType } from '@notifee/react-native';
import crashlytics from '@react-native-firebase/crashlytics';
import messaging from '@react-native-firebase/messaging';
import { createNavigationContainerRef, NavigationContainer } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { LogBox, Platform } from 'react-native';
import { Host } from 'react-native-portalize';
import { initialWindowMetrics, SafeAreaProvider } from 'react-native-safe-area-context';
import { enableScreens } from "react-native-screens";

LogBox.ignoreLogs([
	'Usage of "messaging().registerDeviceForRemoteMessages()" is not required.',
	'[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!'
])

crashlytics().setCrashlyticsCollectionEnabled(true)

enableScreens()

export const navigationContainerRef = createNavigationContainerRef<StackParamList>()

function App() {

	const [backgroundPressNotificationType] = useLocalStorage('BACKGROUND_PRESS_NOTIFICATION_TYPE')

	// Android
	// Create and show local notification when
	// message arrived while app is in foreground
	useEffect(function onForegroundMessageArrived() {
		const unsubscribe = messaging().onMessage(async message => {
			if (Platform.OS != 'android') return
			await Notification.showLocalNotification(message)
		})

		return unsubscribe
	}, [])

	useEffect(function onNotificationPress() {
		if (Platform.OS != 'ios') return

		// iOS
		// Remote notification pressed when app is in background
		messaging()
			.onNotificationOpenedApp(message => {
				const { data } = message
				if (!data) return
				const { type } = data

				NotificationPress.navigateTo[type as INotificationType]()
			})

		// iOS
		// Remote notification pressed when app is in quit state
		messaging()
			.getInitialNotification()
			.then(message => {
				if (!message) return
				const { data } = message
				if (!data) return
				const { type } = data

				NotificationPress.navigateTo[type as INotificationType]()
			})
	}, [])

	// Both iOS & Android
	// Local notification pressed when app is in foreground
	useEffect(() => {
		return notifee.onForegroundEvent(({ detail, type: eventType }) => {
			const { notification } = detail
			if (!notification) return
			const { data } = notification
			if (!data) return
			const { type } = data

			if (eventType == EventType.PRESS) {
				NotificationPress.navigateTo[type as INotificationType]()
			}
		})
	}, [])

	return (
		<SafeAreaProvider
			initialMetrics={initialWindowMetrics}
		>
			<NavigationContainer
				ref={navigationContainerRef}
				onReady={() => {
					// Android
					if (Platform.OS != 'android') return
					if (!backgroundPressNotificationType) return

					NotificationPress.navigateTo[backgroundPressNotificationType]()
				}}
			>
				<Host>
					<StackNavigator />
				</Host>
			</NavigationContainer>
		</SafeAreaProvider>
	)
}

export default App
