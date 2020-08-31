import {StyleSheet} from "react-native";

const Styles = StyleSheet.create({
	container:{
		flex:1,
		justifyContent: "center" ,
		alignItems: "center", 
	},
	text:{
		color: "blue",
		fontSize: 20,
	},
	input:{
		borderWidth: 1,
		borderColor: "grey",
		height: 50,
		width: 200,
		marginBottom: 10,
		fontSize: 20,
		paddingLeft: 5
	}
});

export default Styles;