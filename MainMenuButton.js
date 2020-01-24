import React, { Component } from "react";
import PropTypes from "prop-types";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

class MainMenuButton extends Component {
  render() {
    const { text, onPress } = this.props;
    return (
      <TouchableOpacity style={styles.buttonStyle} onPress={() => onPress()}>
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
    fontSize: 24,
    color: "black",
    textAlign: "center",
    opacity: 1
  },

  buttonStyle: {
    padding: 10,
    backgroundColor: "red",
    borderRadius: 25,
    width: "80%",
    alignSelf: "center",
    opacity: 0.4,
    marginTop: 10
  }
});

export default MainMenuButton;
