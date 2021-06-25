const { any } = require( 'async' );
const webpush = require( 'web-push' );

const publicKey = 'BA3w1xirDtleaIx9LiRyZEVSPNHL-5rw50AyfwI6mf-Dvr__mikGUlyP0_tEXfCDz0D-PT-iM99S3ToMjPWZ8aI';
const privateKey = 'BPF1kw6K0AAkc1MbcAWaaric4UEeFF4i4k_h1txyXUg';

// V+
// const VAPID_PUBLIC_KEY = 'BJT34AFYzug7pMG1cSQsyOgylJM8A2cHg75Rzd0qCwodcJsGD2ScglZlP6kpsaJVrs8-wQDxEL7PFlmDAnMrdjs';
// const VAPID_PRIVATE_KEY = '5awnZ8ByxmIQRmEG9PwYAG5V-BR2y3bXMLAQXSRwdQU';

const sub = {
    endpoint: "https://fcm.googleapis.com/fcm/send/eltvknA4EYI:APA91bEc3nA0CCsR8pCkYjAlSlnqpF6wi1lLZHTBHwOTnf3-17vzFG1u_pWwQaHLYrm0yd0nFrhlN2j55HUImpJ1oCtXnGXuPJogn_7FwpJ0PRs9qEGz5ZzN9ioZxJEaCc7v29s_sSYt",
    expirationTime: null,
    keys: {
        p256dh: "BGLn7DfKaHNfQyfRnIy-bwfcFhB85q2iJCyxymQC_QHbUsy4P6D85D4GFJ_WfjKLosUYygy866DfLckcD4twZ0w",
        auth: "nBncdfbRD6yMzYvoljGGVw"
    },
};

webpush.setVapidDetails( 'mailto:jmartinez@mobilecomputing.com.ar', publicKey, privateKey );

const notificationPayload = {
        "notification": {
            "title": "Modulaciones",
            "body": "Hola, soy una Modulación.",
            "vibrate": [100, 50, 100],
            "data": {
                "pdvId": '438116',
                "modId": '1175265',
            },
            "actions": [{
                "action": "ACTION DESCRIPCION",
                "title": "Aceptar"
            }]
        }
    };

webpush.sendNotification( sub, JSON.stringify( notificationPayload ) );