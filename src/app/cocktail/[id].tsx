import { StyleSheet, Text, View } from "react-native";

export default function CocktailDetail(){
    return (
        <View style={styles.container}>
            <Text>Espresso Martini 🍸</Text>
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