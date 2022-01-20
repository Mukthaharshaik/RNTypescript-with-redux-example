import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home, Details, TodosList} from './screens';
import {TodosModel} from './models/todos';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import RootReducers from './store';
import thunk from 'redux-thunk';

export type RootStackParams = {
  Home: undefined;
  TodosList: {
    result: TodosModel[];
  };
  Details: {
    item: TodosModel;
  };
};

const Stack = createNativeStackNavigator<RootStackParams>();

const App = () => {
  return (
    <Provider store={createStore(RootReducers, applyMiddleware(thunk))}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="TodosList" component={TodosList} />
          <Stack.Screen name="Details" component={Details} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
