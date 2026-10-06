import { cocktails } from "@/data/cocktails";
import * as Clipboard from "expo-clipboard";
import * as Haptics from "expo-haptics";
import * as ImagePicker from "expo-image-picker";
import { useLocalSearchParams } from "expo-router";
import * as Speech from "expo-speech";
import { useState } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

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
        <View style={styles.container}>
            <Image source={{uri: cocktail?.image}} style={styles.image}></Image>
            <Text>{cocktail?.name}</Text>
            <Text>{cocktail?.ingredients.join("\n")}</Text>
            <Text>{cocktail?.instructions}</Text>
            <Pressable onPress={() => Speech.speak(cocktail?.instructions ?? "")}>
                <Text>Läs upp instruktionerna🎙️</Text>
            </Pressable>
            <Pressable onPress={() => {
                Clipboard.setStringAsync(cocktail?.ingredients.join("\n") ?? "");
                Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
                }}
            >
                <Text>Kopiera ingredienser 📜</Text>
            </Pressable>
            <Pressable onPress={pickPhoto}>
                <Text>Lägg till din bild 📷</Text>
            </Pressable>
            {myPhoto && <Image source={{uri: myPhoto}} style={styles.image}/>}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: "center",
        justifyContent: "center",
    },
    image: {
        width:250,
        height:250,
        borderRadius:20,
    },
});