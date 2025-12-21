import {Text, Pressable} from "react-native";
import styles from "./styles";
import { BatTextInput } from "../BatTextInput";
import { useState } from "react";

export default function BatButton(){
    const [pass, setPass] = useState("");

    return(
        <>
            <BatTextInput pass={pass}/>
            
            <Pressable
                onPress={()=>{setPass("Sucesso")}}
            >
                <Text style={styles.batButton}>Generate</Text>
            </Pressable>

            <Pressable>
                <Text style={styles.copyButton}>
                    Copiar 📄
                </Text>
            </Pressable>
        </>
    )
}