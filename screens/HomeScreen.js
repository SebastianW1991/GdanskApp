import React from 'react';
import { View,  StyleSheet, Button, Text, Image, TouchableOpacity, ImageBackground } from 'react-native';
import MainMenuButton from '../MainMenuButton';

const HomeScreen = props => {
  return (
    <ImageBackground source={require('./assets/MainPhoto.jpg')} style={{width: '100%', height: '100%'}}>
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
		      text="Wycieczki"
          onPress={() => {
          props.navigation.navigate({
          routeName: 'Tours'
          })
          }}		
		      />
      </View>    
  </ImageBackground>

  )

};

const styles = StyleSheet.create({

MainScreen: {
    backgroundColor: '#FEED24',
    flex: 1,
    justifyContent: 'flex-start',
    width:'100%',
    backgroundColor:'red',
    opacity: 0.2,
  },
  MenuSection:{
    flex:1,
    alignSelf:'center',
    width:'100%',
    flexDirection:"column",
    alignContent:"center",
  },


});

export default HomeScreen;
