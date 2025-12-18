import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    inputer:{
        width: 250,
        borderWidth: 1,
        borderColor: "#ffffff",
        borderRadius:20,
        backgroundColor:"#d4bf00",
        textAlign: "center",
        fontWeight:"bold"
    },
    img:{
        height: 200,
        width:300,
        objectFit:"contain"
    },
    tituloLogo:{
        fontSize:30,
        fontWeight:"bold",
        letterSpacing: 1,
        color:"#d4bf00"
    },
    logoContainer:{
        borderWidth:2,
        borderColor:"#fff",
        alignItems:"center",
        width:"102%",
        padding: 30,
        marginBottom:30
    }
});

export default styles;