import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { styles } from '../../config';
import { HomeScreen } from '../screens/home/HomeScreen';
import SettingsScreen from '../screens/settings/SettingsScreen';
import { ProfileScreen } from '../screens/profile/ProfileScreen';



const Tab = createBottomTabNavigator();

export const BottomTabsNavigator = () => {
  return (
    <Tab.Navigator
       screenOptions={{
        //headerShown: false
        //tabBarActiveTintColor: styles.,
        tabBarLabelStyle: {
            marginBottom: 5,
        },
        headerStyle:{
            elevation: 0,
            borderColor: 'transparent',
            shadowColor: 'transparent'
        },
        tabBarStyle: {
            borderTopWidth: 0,
            elevation: 0
        }
       }}
    >
      <Tab.Screen name="Home"  component={HomeScreen} />
      <Tab.Screen name="Count"  component={SettingsScreen} />
      <Tab.Screen name="Profile"  component={ProfileScreen} />
    </Tab.Navigator>
  );
}