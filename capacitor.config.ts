import { CapacitorConfig } from '@capacitor/cli';
import { environment } from './src/environments/environment';
//TODO: change environment by envrionment.prod if you need production env

const config: CapacitorConfig = {
  appName: environment.appName,
  webDir: 'www',
  plugins: {
    SplashScreen: {
      launchShowDuration: 3000,
      launchAutoHide: false,
      backgroundColor: "#ffde59",
      androidScaleType: "CENTER",
      showSpinner: true,
      androidSpinnerStyle: "small",
      iosSpinnerStyle: "small",
      spinnerColor: "#000000",
      splashFullScreen: true,
      splashImmersive: true,
      layoutName: "launch_screen",
      useDialog: false,
    },
    PushNotifications: {
      presentationOptions: ["badge", "sound", "alert"],
    },
  },
};

export default config;