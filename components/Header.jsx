import React from "react";
import {View,Text} from "react-native";
import Styles from "../styles.js";

const Header = () => {
	return(
		<View style={Styles.header}>
			<Text style={Styles.title}>Todo App</Text>
		</View>
	)
}

export default Header;