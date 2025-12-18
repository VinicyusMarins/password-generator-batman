import { StatusBar } from "expo-status-bar";
import React from "react";
import {View, Text, TextInput, Image} from "react-native";
import styles from "./styles";
import batLogo from "../../../assets/bat-logo.png"
import BatButton from "../../components/BatButton";

export default function Home(){
    return(
        <>
            <View style={styles.logoContainer}>
                <Text style={styles.tituloLogo}>Password Generator</Text>
                <Image
                    source={batLogo}
                    style={styles.img}
                />
            </View>

            <TextInput
                style={styles.inputer}
                placeholder="Digite Aqui!"
            />
            <BatButton/>
        </>
    );
}

