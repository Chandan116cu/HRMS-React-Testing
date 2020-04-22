import { Navigation } from 'react-native-navigation';
import DashBoard from './DashBoard'
import TimeSheetExpandedDetails from './TimeSheetExpandedDetails'


// import ModalScreen from './ModalEntry'

export function registerScreens(store, Provider) {
   const screens = {
      DashBoard,
      TimeSheetExpandedDetails,
     
      // ModalScreen

   }

   Object.keys(screens).map(key => {
      Navigation.registerComponentWithRedux(`${key}`, () => screens[key], Provider, store)
   })
}


