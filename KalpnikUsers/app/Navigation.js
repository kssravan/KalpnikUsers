import {createAppContainer } from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack'

import Users from './screens/Users';
import CreateNewUser from './screens/CreateNewUser';
import UsersDetails from './screens/UsersDetails';


const Navigator = createStackNavigator(
  {
    Users,
    CreateNewUser,
    UsersDetails
  },
  {
    initialRouteName: 'Users',

  },
);

export default createAppContainer(Navigator);
