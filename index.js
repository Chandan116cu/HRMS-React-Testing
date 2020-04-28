/**
 * @format
 */

// import {AppRegistry} from 'react-native';
import App from './App';
// import {name as appName} from './app.json';

// AppRegistry.registerComponent(appName, () => App);
import { Navigation } from "react-native-navigation";
import {registerScreens} from "./app/screens";
import { Provider } from 'react-redux';
import configureStore from './app/configureStore';
const store = configureStore();
registerScreens(store, Provider);

Navigation.registerComponent('com.myApp.WelcomeScreen', () => App);
Navigation.events().registerAppLaunchedListener(() => {
   Navigation.setRoot({
     root: {
       stack: {
         children: [
          {
             component: {
               name: 'AddTimeSheet'
             }
           }  
         ]
       }
    }
  });
});
