import { StyleSheet, ScrollView, Text } from "react-native";
const androidFonts = [
  'normal',
  'sans-serif',
  'sans-serif-light',
  'sans-serif-thin',
  'sans-serif-condensed',
  'sans-serif-medium',
  'serif',
  'monospace',
  'Roboto',
  'Roboto-Medium',
  'notoserif',
];

const Fuentes = ()=>{

    const fonts = androidFonts;

  return (
    <ScrollView style={styles.container}>
      {fonts.map((font, index) => (
        <Text key={index} style={[styles.text, { fontFamily: font }]}>
          {Platform.OS === 'ios' ? 'iOS Font: ' : 'Android Font: '}
          {font}
        </Text>
      ))}
    </ScrollView>
  );
}

export default Fuentes;


const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    padding: 20,
  },
  text: {
    fontSize: 20,
    marginBottom: 15,
  },
});