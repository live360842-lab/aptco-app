importScripts("https://www.gstatic.com/firebasejs/10.12.5/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.12.5/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyCECkFW0Jy7FpvjCOpfLONMXz1jgs7C93E",
  authDomain: "cash-close.firebaseapp.com",
  projectId: "cash-close",
  storageBucket: "cash-close.appspot.com",
  messagingSenderId: "248624378059",
  appId: "1:248624378059:web:44f5def120e3729a332b4e"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  const title = (payload.notification && payload.notification.title) || "نظام إقفال الصناديق";
  const options = {
    body: (payload.notification && payload.notification.body) || "لديك مهمة جديدة",
    icon: "/icon.png",
    badge: "/icon.png"
  };
  self.registration.showNotification(title, options);
});
