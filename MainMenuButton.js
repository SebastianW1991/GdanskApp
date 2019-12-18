import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Text, StyleSheet,ImageBackground } from 'react-native';

class MainMenuButton extends Component {
	render() {
		const { text, onPress} = this.props;
		return (
          <TouchableOpacity style={styles.buttonStyle}
          
			onPress={() => onPress()}
		  >

			 <Text style={styles.textStyle}>{text}</Text>

		  </TouchableOpacity>
		);
	}
}

MainMenuButton.propTypes = {
  text: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize:20,
	color: 'white',
	textAlign: 'center'
  },
  
  buttonStyle: {
	padding:10,
	backgroundColor: 'red',
	borderRadius:5
  }
});

export default MainMenuButton;