import React from 'react';
import { View, Text, Button, StyleSheet, ScrollView,Image, ImageBackground } from 'react-native';
import MainHistoryButton from '../MainHistoryButton';
const HistoryScreen = props => {
    return (
        <ImageBackground source={require('./assets/MainPhoto.jpg')} style={{width: '100%', height: '100%'}}>
            <View style ={{width:'100%', height:'20%',backgroundColor:'white', opacity:0.8, borderBottomEndRadius:25, borderBottomStartRadius:25}}>
          
            <Text style={{alignSelf:"center", fontFamily:'Chomsky',fontSize :25}}>Historia Gdańska</Text>
            <Text>Nikt tak naprawdę nie wie kiedy powstał Gdańsk, 
                nie mniej najstarzsze zapiski o tym mieście pochodza z roku 997 kiedy to gościł w nim biskup Wojciech,
                 przed swoją misją ewangelizującą wśród Prusów. Gdańsk ma ponad 1000 lat. Jego historie można podzielić na okresy</Text>

                 {/* <TouchableOpacity onPress={() => props.navigation.navigate({routeName:'Medieval'})}>
              <ImageBackground
                imageStyle={{ borderRadius: 25, }}
                source={require('./assets/gdanskMiddleage.jpg')}
                style={{height:200, maxWidth:'100%', alignSelf:'stretch', borderRadius: 25 }}
              ><Text style={{maxHeight:100, alignSelf:"center", margin:80, fontSize:35, fontFamily:'Chomsky'}}>Średniowiecze</Text></ImageBackground>
            </TouchableOpacity> */}
                  <View style={styles.MenuSection}>
          <MainHistoryButton 
		      text="Średniowiecze"
          onPress={() => {
          props.navigation.navigate({
          routeName: 'Medieval'
          })
          }}		
		      />
          <MainHistoryButton 
		      text="Nowożytność"
          onPress={() => {
          props.navigation.navigate({
          routeName: 'Contemporary'
          })
          }}		
		      />
          <MainHistoryButton 
		      text="Oświecenie"
          onPress={() => {
          props.navigation.navigate({
          routeName: 'VIP'
          })
          }}		
		      />
          <MainHistoryButton 
		      text="Współczesność"
          onPress={() => {
          props.navigation.navigate({
          routeName: 'Modern'
          })
          }}		
		      />
            </View>
            </View>
        </ImageBackground>
    )
};
const styles = StyleSheet.create({

    MenuSection:{
      flex:0.7,
      alignSelf:'center',
      width:'100%',
      flexDirection:"column",
      alignContent:"center",
      marginTop:'20%'
    },
  
  
  });
  


export default HistoryScreen;
  