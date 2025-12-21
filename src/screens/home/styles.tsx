import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
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