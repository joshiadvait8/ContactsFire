// install react-navigation

//TODO: import four screens
import HomeScreen from "./screens/HomeScreen";
import AddNewContact from "./screens/AddNewContact";
import ViewContact from "./screens/ViewContact";
import EditContact from "./screens/EditContact";

//TODO: import firebase
import * as firebase from "firebase";

// set up react navigation
import { createStackNavigator, createAppContainer } from "react-navigation";

const MainNavigator = createStackNavigator(
  {
    Home: { screen: HomeScreen },
    Add: { screen: AddNewContact },
    View: { screen: ViewContact },
    Edit: { screen: EditContact }
  },
  {
    defaultNavigationOptions: {
      headerTintColor: "#fff",
      headerStyle: {
        backgroundColor: "#B83227"
      },
      headerTitleStyle: {
        color: "#fff"
      }
    }
  }
);

const App = createAppContainer(MainNavigator);

//TODO: Initialize Firebase
import { firebaseConfig } from "./firebaseConfig";
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//FirebaseTODO create firebase real-time database with rules

// {
//   "rules": {
//     ".read": true,
//     ".write": true
//   }
// }
export default App;

//rule changes in firebase storage
//allow read,write;
