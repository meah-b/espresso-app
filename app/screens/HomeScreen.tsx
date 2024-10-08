import { Text, View, StyleSheet } from "react-native";
import { colors } from "../config/theme";
import Button from "../components/Button";
import ListItem from "../components/ListItem";

export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>EspressoLab</Text>
            <ListItem 
                date='September 20, 2024' 
                rating={5} 
                espressoBean="Balzacs Espresso Blend" 
                grindSize={18} 
                tampWeight={3} 
                acidity={3} 
                cremaQuality={3}>
            </ListItem>
            <Button title="New Espresso Shot" variant="creamBeige" onPress={() => {}} style={styles.button}></Button>
        </View>
      );
    }
    
    const styles = StyleSheet.create({
        button: {
            width: 240,
            height: 50,
            position: 'absolute',
            bottom: 60
        },
        container: {
            flex: 1,
            backgroundColor: colors.lightEspresso,
            alignItems: 'center',
            justifyContent: 'center',
        },
        header: {
            fontSize: 45,
            fontFamily: 'Cochin-Bold',
            color: colors.creamBeige,
            position: 'absolute',
            top: 80
        }
    });