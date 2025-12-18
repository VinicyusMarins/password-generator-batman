import { StatusBar } from "expo-status-bar";
import React from "react";
import {View, Text, TextInput, Image} from "react-native";
import styles from "./styles";
import batLogo from "../../../assets/bat-logo.png"

export default function Home(){
    return(
        <View style={styles.container}>
            <Image
                source={batLogo}
                style={styles.img}
            />
            <TextInput
                style={styles.inputer}
                placeholder="Digite Aqui!"
            />
            
        </View>
    );
}

