
import 'react-native-reanimated';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Preview  from './components/Preview.jsx';
import Ap from './components/App.jsx';

export default function App() {
   const Stack = createNativeStackNavigator();
  return (
     <NavigationContainer>
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='home' component={Ap}/>
      <Stack.Screen name='preview' component={Preview}/>
    </Stack.Navigator>
    </NavigationContainer>
  );
}

