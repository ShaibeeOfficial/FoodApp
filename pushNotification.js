import AsyncStorage from '@react-native-async-storage/async-storage';
import messaging from '@react-native-firebase/messaging';
import PushNotification from 'react-native-push-notification';

// Request permissions (iOS only)
messaging().requestPermission();
const channelId = 'adhd-channel-id'; // Replace with your desired channel ID


// Listen for incoming messages
messaging().onMessage(async remoteMessage => {
    // Handle the message here
    console.log('Received a new notification', JSON.stringify(remoteMessage));
});
// export async function requestUserPermission() {
//     // PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS);
//     const authStatus = await messaging().requestPermission();
//     const enabled =
//         authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
//         authStatus === messaging.AuthorizationStatus.PROVISIONAL;

//     if (enabled) {
//         console.log('Authorization status:', authStatus);
//         getToken()
//     }
// }



export async function requestUserPermission() {
    const authStatus = await messaging().requestPermission();
    const enabled =
        authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
        authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
        console.log('Authorization status:', authStatus);
        const FCMToken = await getToken();
        if (FCMToken) {
            // Now you can use FCMToken to make an API call
            console.log('FCM Token:', FCMToken);
            // Make API call with FCMToken
        }
    }
}



// Create a channel
PushNotification.createChannel(
    {
        channelId :'ok',
        channelName: 'My Channel',
        channelDescription: 'My Channel Description',
        soundName: 'default',
        importance: 4, // Importance level from 1 to 5 (5 being the highest)
        vibrate: true,
    },
    created => console.log(`createChannel returned '${created}'`) // Optional callback
);

const getToken = async () => {

    let token = await AsyncStorage.getItem("FCMToken")
    console.log("line 21:: ", token)
    if (!token) {
        const Fcmtoken = await messaging().getToken();
        try {
            if (Fcmtoken) {
                console.log("line 18:: token is:: ", Fcmtoken)
                await AsyncStorage.setItem("FCMToken", Fcmtoken)
            }
        } catch (error) {
            console.log("line 30::: ", error)
        }
    }
}

// Handle notifications when the app is in the background or terminated
messaging()
    .getInitialNotification()
    .then(remoteMessage => {
        if (remoteMessage) {
            // Handle the initial notification
            console.log('Opened app from notification', JSON.stringify(remoteMessage));
        }
    });
export const NotificationListener = async () => {
    messaging().onNotificationOpenedApp(remoteMessage => {
        console.log(
            'Notification caused app to open from background state:',
            remoteMessage.notification,
        );
    });
    messaging().onMessage(async remoteMessage => {
        console.log("received in foreground", remoteMessage)
        PushNotification.localNotification({
            channelId, // Set the channel ID for Android
            message: remoteMessage.notification.body,
            playSound: false, // Disable the default sound
        });
    })
    messaging().getInitialNotification().then(remoteMessage => {
        if (remoteMessage) {
            console.log(
                'Notification caused app to open from quit state:',
                remoteMessage.notification,
            );
        }
    });
    messaging().setBackgroundMessageHandler(async remoteMessage => {
        if (remoteMessage) {
            console.log(
                'Notification caused app to open from quit state:',
                remoteMessage,
            );
        }
    })
}




