import { useLocalSearchParams } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function CocktailDetail(){
    const {id} = useLocalSearchParams<{id: string}>();
    return (
        <View style={styles.container}>
            <Text>Espresso Martini 🍸</Text>
            <Text>Id: {id}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: "center",
        justifyContent: "center",
    },
});