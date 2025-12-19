import {Text, Pressable} from "react-native";
import styles from "./styles";

export default function BatButton(){
    return(
        <>
            <Pressable
                onPress={()=>{console.log("Sucesso")}}
            >
                <Text style={styles.batButton}>Gerar Senha</Text>
            </Pressable>
        </>
    )
}