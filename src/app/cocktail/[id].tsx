import { cocktails } from "@/data/cocktails";
import { useLocalSearchParams } from "expo-router";
import { Image, StyleSheet, Text, View } from "react-native";

export default function CocktailDetail(){
    const {id} = useLocalSearchParams<{id: string}>();
    const cocktail = cocktails.find((c) => c.id === id);
    return (
        <View style={styles.container}>
            <Image source={{uri: cocktail?.image}} style={styles.image}></Image>
            <Text>{cocktail?.name}</Text>
            <Text>{cocktail?.instructions}</Text>
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