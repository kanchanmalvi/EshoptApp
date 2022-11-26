import {AppRegistry, View, Text} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {ThemeProvider, Button, createTheme} from '@rneui/themed';
import {Provider} from 'react-redux';
import {store} from './redux/store';
import persistStore from 'redux-persist/es/persistStore';
import {PersistGate} from 'redux-persist/integration/react';
import {Auth0Provider} from 'react-native-auth0';
import 'react-native-gesture-handler';

let persistor = persistStore(store);

const theme = createTheme({
  components: {
    Button: {
      raised: true,
    },
  },
});

export default function Main() {
  return (
    <Auth0Provider
      domain={'dev-y6c3wtqtqxnuduf7.us.auth0.com'}
      clientId={'dI1VbCZyvB3zZ7XEYZPRx0ujFHgre12i'}
     >
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            <App />
          </PersistGate>
        </Provider>
      </ThemeProvider>
    </Auth0Provider>
  );
}

AppRegistry.registerComponent(appName, () => Main);
