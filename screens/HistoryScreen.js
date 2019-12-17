import React from 'react';
import { View, Text, Button, StyleSheet, ScrollView,Image,TouchableOpacity, ImageBackground } from 'react-native';

const HistoryScreen = props => {
    return (
        <ScrollView style={{flex:1}}>
            <Text>Historia Gdańska</Text>
            <Text>Nikt tak naprawdę nie wie kiedy powstał Gdańsk, 
                nie mniej najstarzsze zapiski o tym mieście pochodza z roku 997 kiedy to gościł w nim biskup Wojciech,
                 przed swoją misją ewangelizującą wśród Prusów. Gdańsk ma ponad 1000 lat. Jego historie można podzielić na okresy</Text>

                 <TouchableOpacity onPress={() => props.navigation.navigate({routeName:'MiddleAge'})}>
              <Image
                source={require('./assets/gdanskMiddleage.jpg')}
                style={{maxHeight:200, maxWidth:200, alignSelf:'stretch' }}
              />
            </TouchableOpacity>
        </ScrollView>

    )
};



export default HistoryScreen;
  