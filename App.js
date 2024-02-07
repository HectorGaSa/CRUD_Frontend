import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen, AddScreen, ModificarScreen, EliminarScreen, MostrarScreen } from './screens';
import CustomHeader from './components/CustomHeader';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={({ navigation }) => ({
            header: () => <CustomHeader locationHome={true} navigation={navigation} />,
          })}
        />
        <Stack.Screen
          name="AddScreen"
          component={AddScreen}
          options={({ navigation }) => ({
            header: () => <CustomHeader locationHome={true} navigation={navigation} />,
          })}
        />
        <Stack.Screen
          name="ModificarScreen"
          component={ModificarScreen}
          options={({ navigation }) => ({
            header: () => <CustomHeader locationHome={true} navigation={navigation} />,
          })}
        />
        <Stack.Screen
          name="EliminarScreen"
          component={EliminarScreen}
          options={({ navigation }) => ({
            header: () => <CustomHeader locationHome={true} navigation={navigation} />,
          })}
        />
        <Stack.Screen
          name="MostrarScreen"
          component={MostrarScreen}
          options={({ navigation }) => ({
            header: () => <CustomHeader locationHome={true} navigation={navigation} />,
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;