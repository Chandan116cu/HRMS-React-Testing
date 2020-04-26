import { Navigation } from 'react-native-navigation';
import DashBoard from './DashBoard'
import TimeSheetExpandedDetails from './TimeSheetExpandedDetails'
import AddTimeSheet from './AddTimeSheet/AddTimeSheet'


// import ModalScreen from './ModalEntry'

export function registerScreens(store, Provider) {
   const screens = {
      DashBoard,
      TimeSheetExpandedDetails,
     AddTimeSheet
      // ModalScreen

   }

   Object.keys(screens).map(key => {
      Navigation.registerComponentWithRedux(`${key}`, () => screens[key], Provider, store)
   })
}


