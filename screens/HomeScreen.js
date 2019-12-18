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

        <TouchableOpacity>
        <View style={{flex: 1, backgroundColor: 'powderblue'}} >
          <Text>Hi!
            </Text>
            </View>
        </TouchableOpacity>
        <View style={{flex: 1, backgroundColor: 'skyblue'}} />
        <View style={{flex: 1, backgroundColor: 'red'}} />
        <View style={{flex: 1, backgroundColor: 'powderblue'}} />
        <View style={{flex: 1, backgroundColor: 'skyblue'}} />
        <View style={{flex: 1, backgroundColor: 'red'}} />
        </View>
        

           
          <MainMenuButton 
		text="Historia"
    onPress={() => {
      props.navigation.navigate({
      routeName: 'History'


        })

      }}
		
		/>
   



 </View>
  )

};

const styles = StyleSheet.create({

MainScreen: {
    backgroundColor: '#fff',
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
