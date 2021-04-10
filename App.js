import React from 'react';
import {Provider} from 'react-redux';
import AppContainer from './src/navigation/appNavigation';
import store from './src/reducer';
import {setNavigationRef} from './src/helpers/navigationHelpers';
import {NavigationContainer} from '@react-navigation/native';

console.disableYellowBox = true;

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <AppContainer ref={navigatorRef => setNavigationRef(navigatorRef)} />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
