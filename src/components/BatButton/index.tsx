import {Button} from "react-native";
import styles from "./styles";

export default function BatButton(){
    return(
        <>
            <Button
                title="Clique Aqui"
                accessibilityLabel="Clique aqui!"
                onPress={()=>{console.log("Sucesso")}}
            />
        </>
    )
}