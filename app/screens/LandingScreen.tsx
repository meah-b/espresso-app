import { Text, View, StyleSheet, Image } from "react-native";
import { colors } from "../config/theme";
import Button from "../components/Button";
import { useNavigation } from "@react-navigation/native";

export default function LandingScreen() {
    const navigation = useNavigation();
    
    return (
        <View style={styles.container}>
            <Image 
              source={require('../assets/images/background.png')} 
              style={styles.backgroundImage}
            />
            <Text style={styles.text}>EspressoLab</Text>
            <Button 
                title="Get Started" 
                variant="start" 
                onPress={() => navigation.navigate('Home' as never)} 
                style/>
        </View>
      );
    }
    
    const styles = StyleSheet.create({
        backgroundImage: {
            position: 'absolute',
            width: '100%',
            height: '100%' 
        },
        container: {
            flex: 1,
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
        },
        text: {
            fontSize: 40,
            fontFamily: 'Cochin-Bold',
            color: colors.creamBeige,
            marginTop: 270,
            marginBottom: 360
        }
    });