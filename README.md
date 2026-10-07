# Drinkboken

## Beskrivning
En enkel cocktailapp i React Native där man kan bläddra bland fem klassiska drinkar, kolla ingredienser och se steg-för-steg-instruktioner.
Appen är för dig som vill blanda drinkar hemma och ha recepten samlade i mobilen.


Funktioner i appen:
- Få instruktionerna upplästa med tal så man slipper hålla i mobilen medan man blandar.
- Kopiera ingredienslistan direkt med ett knapptryck, mobilen vibrerar när du kopierat för att bekräfta att man kopierat.
- Välj en egen bild från telefonen på drinken man har gjort, som visas i appen.


## Kom igång lokalt

Förutsättningar: Node.js (LTS), Git och appen Expo Go installerad på mobilen.

1. Klona repot:
git clone https://github.com/Arnell96/drinkboken.git

2. Gå till mappen:
cd drinkboken

3. Installera paket:
npm install

4. Starta servern:
npx expo start

5. Öppna i mobilen:
- iPhone: Scanna QR-koden med vanliga kameran.
- Android: Scanna QR-koden inifrån Expo Go-appen.
- Simulator (Mac): Tryck "i" i terminalen.


## React Native-komponenter som används

- View: Layout och behållare för sektionerna på skärmarna.
- Text: All typografi som rubriker, instruktioner, mått och knapptexter.
- FlatList: Renderar listan med drinkar på startsidan effektivt.
- Image: Visar drinkbilderna samt bilden användaren väljer från telefonen.
- Pressable: Hanterar tryck på knappar och interaktiva element.
- ScrollView: Gör att detaljsidan går att scrolla om receptet är långt.


## Expo-moduler som används

- expo-speech: Läser upp instruktionerna högt med telefonens talsyntes.
- expo-clipboard: Kopierar hela ingredienslistan till telefonens urklipp.
- expo-haptics: Ger en lätt vibration i mobilen som bekräftelse när man kopierar.
- expo-image-picker: Låter användaren välja en egen bild från sitt bildbibliotek.


## Navigering och struktur

Navigeringen är byggd med Expo Router via en stack i src/app/_layout.tsx:

- src/app/index.tsx: Startskärmen som visar listan över alla drinkar.
- src/app/cocktail/[id].tsx: Detaljskärmen. Den tar emot parametern "id" via useLocalSearchParams och matchar rätt recept från src/data/cocktails.ts.


## Betygskriterier och status

Godkänt (G):
- [x] Minst 4 RN-komponenter och minst 4 Expo SDK-moduler
- [x] Komponenter och moduler är dokumenterade i README
- [x] Expo Router används och cocktail/[id].tsx tar emot en parameter
- [x] Git och GitHub har använts med löpande commits under arbetet
- [x] README.md är ifylld enligt instruktionerna
- [x] Inlämnad i tid
- [x] Muntlig presentation (genomförs 7 oktober)

Väl godkänt (VG):
- [ ] Extern modul från reactnative.directory
- [ ] Hämtar data från ett externt Web-API
- [ ] Dokumentation av AI-användning