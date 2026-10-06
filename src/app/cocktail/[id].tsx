import { cocktails } from "@/data/cocktails";
import * as Clipboard from "expo-clipboard";
import * as Haptics from "expo-haptics";
import * as ImagePicker from "expo-image-picker";
import { useLocalSearchParams } from "expo-router";
import * as Speech from "expo-speech";
import { useState } from "react";
import { Image, Pressable, ScrollView, StyleSheet, Text } from "react-native";

export default function CocktailDetail(){
    const {id} = useLocalSearchParams<{id: string}>();
    const cocktail = cocktails.find((c) => c.id === id);
    const [myPhoto, setMyPhoto] = useState<string | null>(null);

    async function pickPhoto() {
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ["images"],
        });
        if (!result.canceled){
            setMyPhoto(result.assets[0].uri);
        }
    }

    
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Image source={{uri: cocktail?.image}} style={styles.image}></Image>
            <Text style={styles.name}>{cocktail?.name}</Text>
            <Text>{cocktail?.ingredients.join("\n")}</Text>
            <Text>{cocktail?.instructions}</Text>
            <Pressable style={styles.button} onPress={() => Speech.speak(cocktail?.instructions ?? "")}>
                <Text>Läs upp instruktionerna🎙️</Text>
            </Pressable>
            <Pressable style={styles.button} onPress={() => {
                Clipboard.setStringAsync(cocktail?.ingredients.join("\n") ?? "");
                Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
                }}
            >
                <Text>Kopiera ingredienserna 📜</Text>
            </Pressable>
            <Pressable style={styles.button} onPress={pickPhoto}>
                <Text>Lägg till din bild 📷</Text>
            </Pressable>
            {myPhoto && <Image source={{uri: myPhoto}} style={styles.image}/>}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        padding: 20,
        gap: 12,
    },
    image: {
        width:250,
        height:250,
        borderRadius:20,
    },
    name: {
        fontSize:28,
        fontWeight:"bold",
    },
    button: {
        backgroundColor: "lightblue",
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius:12,
        minWidth:250,
        alignItems:"center",
    },
});