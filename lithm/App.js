import React, {useEffect} from 'react';
import { Alert , StyleSheet, SafeAreaView,View,Text} from 'react-native';
import Loading from './src/screen/Loading';
import AuthScreen from './src/screen/AuthScreen';
import NoStudy from './src/screen/NoStudy';
import MakeStudy from './src/screen/MakeStudy';
import CalendarView from './src/screen/Calendar';
import Schedule from './src/screen/Agenda';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { Agenda } from 'react-native-calendars';

// import DrawerBar from './src/navigations/SideMenu';


export default class extends React.Component {
  state={
    isLoading:true
  };

  componentDidMount = async() => {
    // 1000 = 1s
    setTimeout(() => {this.setState({isLoading : false})}, 3000);
  }
  render(){
    if(this.state.isLoading){
      return <Loading></Loading>
    }else{
      const Stack = createStackNavigator();
      //const Drawer = createDrawerNavigator();

      // function Menu() {
      //   return(
      //     <Drawer.Navigator>
      //         <Drawer.Screen name="Profile" options={{drawerLabel: 'Profile'}} component={Profile}></Drawer.Screen>
      //         <Drawer.Screen name="Penalty" options={{drawerLabel: 'Penalty'}} component={Penalty}></Drawer.Screen>
      //       </Drawer.Navigator>
      //   )
      // }
     
      return (
        <Schedule></Schedule>
        // <NavigationContainer>
        //   <SafeAreaView style={styles.safeAreaView}>
        //         <Stack.Navigator initialRouteName="Schedule" screenOptions={{ headerShown: false }}>
        //           {/* <Stack.Screen name="Menu" component={Menu} options={{headerShown: false}}/> */}
        //           <Stack.Screen name="AuthScreen" component={AuthScreen}/>
        //           <Stack.Screen name="NoStudy" component={NoStudy}/>
        //           <Stack.Screen name="MakeStudy" component={MakeStudy}/>
        //           <Stack.Screen name="CalendarView" component={CalendarView}/>
        //           <Stack.Screen name="Schedule" component={Agenda}/>
        //         </Stack.Navigator>
        //   </SafeAreaView>
        // </NavigationContainer>
        )
    }

  }
};

const styles = StyleSheet.create({
  safeAreaView: {flex: 1}
})