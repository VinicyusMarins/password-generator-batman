import { Text, Pressable } from "react-native";
import style from "./style";

export default function BatCopy(){
    return(
        <>
            <Pressable>
                <Text style={style.copyButton}>
                    Copiar 📄
                </Text>
            </Pressable>
        </>
    );
}