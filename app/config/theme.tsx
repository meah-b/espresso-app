import { useState, useEffect } from 'react';
import { Text } from 'react-native';
import * as Font from 'expo-font';

export const colors = {
    darkEspresso: "#23120A",
    lightEspresso: "#51322D",
    creamBeige: "#E5D3B3",
    black: "#000",
};

// export const CustomText = (props: any) => {
//   const [fontLoaded, setFontLoaded] = useState(false);

//   useEffect(() => {
//     async function loadFont() {
//       await Font.loadAsync({
//         'karma-bold': require('../assets/fonts/Karma-Bold.ttf'),
//         'karma-regular': require('../assets/fonts/Karma-Regular.ttf'),
//       });

//       setFontLoaded(true);
//     }

//     loadFont();
//   }, []);

//   if (!fontLoaded) {
//     return <Text>Loading...</Text>;
//   }

//   const { style, children, bold } = props;
//   const fontFamily = bold ? 'karma-bold' : 'karma-regular';

//   return (
//     <Text style={[{ fontFamily }, style]}>
//       {children}
//     </Text>
//   );
// };