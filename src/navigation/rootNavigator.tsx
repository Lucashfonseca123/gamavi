import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BootScreen from 'features/authetication/screens/bootScreen';
import {FeedScreen} from 'features/feed/screens';
import {RootParamList} from './interfaces';

const Stack = createNativeStackNavigator<RootParamList>();

export const RootNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="BootScreen"
        component={BootScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="FeedScreen"
        component={FeedScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
