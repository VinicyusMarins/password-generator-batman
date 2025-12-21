import {Text, Pressable} from "react-native";
import styles from "./styles";
import { BatTextInput } from "../BatTextInput";
import { useState } from "react";
import generatePassword from "../../services/generatePassword";

import * as clipboard from "expo-clipboard";

export default function BatButton(){
    const [pass, setPass] = useState("");

    function handleCopyButton(){
        clipboard.setStringAsync(pass);
    }

    return(
        <>
            <BatTextInput pass={pass}/>

            <Pressable
                onPress={()=>{setPass(generatePassword())}}
            >
                <Text style={styles.batButton}>Generate</Text>
            </Pressable>

            <Pressable
                onPress={handleCopyButton}
            >
                <Text 
                    style={styles.copyButton}>
                    Copiar 📄
                </Text>
            </Pressable>
        </>
    )
}