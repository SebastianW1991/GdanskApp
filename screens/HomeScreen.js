import React from 'react';
import { View,  StyleSheet, Button } from 'react-native';


const HomeScreen = props => {
  return (

      <View style={styles.MainScreen}>

            <Button style={color = "red"} title="Historia"
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
    flex: 0.2,
    justifyContent: 'flex-start',
    marginTop: 10,
  },

});

export default HomeScreen;
