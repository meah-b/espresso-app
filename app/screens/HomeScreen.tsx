import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { colors } from "../config/theme";
import Button from "../components/Button";
import List from "../components/List";
import { useState } from "react";
import { Filter } from "../components/svgs/Filter";

export default function HomeScreen() {
    const [selectedButton, setSelectedButton] = useState('single')
    return (
        <View style={styles.container}>
            <Text style={styles.header}>EspressoLab</Text>
            <TouchableOpacity style={styles.filter}><Filter/></TouchableOpacity>
            <View style={styles.row}>
                <Button 
                    title="Single Shots" 
                    variant={selectedButton == 'single' ? "creamBeige" : "darkEspresso"} 
                    onPress={() =>setSelectedButton('single')} 
                    style={styles.shotButtons}
                    icon={selectedButton == 'single' ? "brownSingleShot" : "creamSingleShot"}/>
                <Button 
                    title="Double Shots" 
                    variant={selectedButton == 'double' ? "creamBeige" : "darkEspresso"} 
                    onPress={() =>setSelectedButton('double')} 
                    style={styles.shotButtons}
                    icon={selectedButton == 'double' ? "brownDoubleShot" : "creamDoubleShot"}/>
            </View>
            <List order='dsc' sortBy='rating'></List>
            <Button title="New Espresso Shot" variant="creamBeige" onPress={() => {}} style={styles.button}/>
        </View>
      );
    }
    
    const styles = StyleSheet.create({
        button: {
            width: 240,
            height: 55,
            position: 'absolute',
            bottom: 60
        },
        container: {
            flex: 1,
            backgroundColor: colors.lightEspresso,
            alignItems: 'center',
            justifyContent: 'center',
        },
        filter: {
            position: 'absolute',
            top: 155,
            right: 15
        },
        header: {
            fontSize: 45,
            fontFamily: 'Cochin-Bold',
            color: colors.creamBeige,
            position: 'absolute',
            top: 80
        },
        row: {
            marginTop: 190,
            marginBottom: 20,
            flexDirection: 'row',
            gap: 10
        },
        shotButtons: {
            width: 182,
            height: 55,
        }
    });