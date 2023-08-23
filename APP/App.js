import { StatusBar } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';


import Routes from './src/routes';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
<NavigationContainer>
<StatusBar backgroundColor="#B126E8" barStyle="dark-content"  /> 
     <Routes /> 

</NavigationContainer>

  );
}