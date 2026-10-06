import { Stack } from "expo-router";

export default function RootLayout() {
  return (<Stack>
    <Stack.Screen name="index" options={{title: "Drinkboken"}}/>
    <Stack.Screen name="cocktail/[id]" options={{title:"Cocktail"}}/>
  </Stack>
  );
}
