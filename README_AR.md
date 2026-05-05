# مشروع APK - نظام إقفال الصناديق

اسم الحزمة:
`com.aptco.cashclose`

## استخراج APK

افتح هذا المجلد على الكمبيوتر ثم شغل:

```bash
npm install
npx cap add android
npx cap sync android
npx cap open android
```

من Android Studio:

```text
Build > Build Bundle(s) / APK(s) > Build APK(s)
```

## ملاحظة
هذا مشروع Capacitor يفتح موقعك الحالي:
`https://aptco.netlify.app/?app=android`

البيانات تبقى محفوظة في Firebase Firestore.
