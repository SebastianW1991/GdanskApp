import React from 'react';
import { View,  StyleSheet, Button, Text, Image, TouchableOpacity } from 'react-native';
import MainMenuButton from '../MainMenuButton';

const HomeScreen = props => {
  return (

      <View style={styles.MainScreen}>
        <View style={styles.LogoSection}>
          <Text>Tu będzie logo</Text>
        </View>
       
        <View style={styles.MenuSection}>
        <MainMenuButton 
		      text="Historia"
          onPress={() => {
          props.navigation.navigate({
          routeName: 'History'
        })
      }}		
		/>
         <MainMenuButton 
		      text="Historia"
          onPress={() => {
          props.navigation.navigate({
          routeName: 'History'
        })
      }}		
		/>
        <MainMenuButton 
		      text="Historia"
          onPress={() => {
          props.navigation.navigate({
          routeName: 'History'
        })
      }}		
		/>
        <MainMenuButton 
		      text="Historia"
          onPress={() => {
          props.navigation.navigate({
          routeName: 'History'
        })
      }}		
		/>

        </View>
        

           
   



 </View>
  )

};

const styles = StyleSheet.create({

MainScreen: {
    backgroundColor: '#FEED24',
    flex: 1,
    justifyContent: 'flex-start',
    width:'100%'
    
  },
  LogoSection:{
    flex:0.2,
    backgroundColor:'white'

  },
  MenuSection:{
    backgroundColor:'red',
    flex:1,
    alignSelf:'center',
    width:'80%',
    flexDirection:"column"
  },


});

export default HomeScreen;
