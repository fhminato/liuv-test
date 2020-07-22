import React from 'react';
import {Provider} from 'react-redux';
import store from './store';
import Repo from './pages/Repo';
import Favorite from './pages/Favorite';
import RepoDetails from './pages/RepoDetails';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const DrawNav = () => (
  <Stack.Navigator initialRouteName={'Repositorios'}>
    <Stack.Screen
      name="Repositorios"
      component={Repo}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="Detalhes"
      component={RepoDetails}
      options={{headerTransparent: true, title: '', headerTintColor: '#fff'}}
    />
  </Stack.Navigator>
);

const App = () => (
  <Provider store={store}>
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName={'Repositorios'}
        drawerContentOptions={{
          activeBackgroundColor: '#5000ca',
          activeTintColor: '#fff',
        }}>
        <Stack.Screen name="Repositorios" component={DrawNav} />
        <Stack.Screen name="Favoritos" component={Favorite} />
      </Drawer.Navigator>
    </NavigationContainer>
  </Provider>
);

export default App;
