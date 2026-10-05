import { cocktails } from "@/data/cocktails";
import { Link } from "expo-router";
import { FlatList, StyleSheet, Text, View } from "react-native";
export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cocktail Menu 🍸</Text>
      <FlatList
      data={cocktails}
      keyExtractor={(item) => item.id}
      renderItem={({item}) =>(
        <Link href={`/cocktail/${item.id}`}>{item.name}</Link>
      )}/>
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
