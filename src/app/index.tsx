import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cocktail Menu 🍸</Text>
      <Link href="/cocktail/1">Visa cocktail</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 35,
  },
});
