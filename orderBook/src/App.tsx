/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

 import React from 'react';
 import {
   SafeAreaView,
   StatusBar,
   useColorScheme,
 } from 'react-native';
import bootstrap from './_shared/configuration/bootstrap';
import OrderBookScreen from './orderBook/screens/OrderBookScreen';
import { Provider } from 'react-redux';
import { appStyle } from './_shared/styles';



 
 const App = () => {
   const isDarkMode = useColorScheme() === 'dark';
   const {store} = bootstrap();
  

   return (
     <Provider store={store}>
     <SafeAreaView style={appStyle.backgroundBlack}>
       <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
       </SafeAreaView>
       <OrderBookScreen/>
       
     
     </Provider>
   );
 };

 export default App;
