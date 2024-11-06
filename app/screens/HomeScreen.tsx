import { Text, View, StyleSheet, TouchableOpacity, Modal } from "react-native";
import { colors } from "../config/theme";
import Button from "../components/Button";
import List from "../components/List";
import { useState } from "react";
import { Filter } from "../components/svgs/Filter";
import MultiSelector from "../components/MultiSelector";

export default function HomeScreen() {
    const [modalVisible, setModalVisible] = useState(false);
    const [dateFilter, setDateFilter] = useState('');
    const [ratingFilter, setRatingFilter] = useState([]);
    const [espressoBeanFilter, setEspressoBeanFilter] = useState([]);
    const [extractionDurationFilter, setExtractionDurationFilter] = useState([]);
    const [grindSizeFilter, setGrindSizeFilter] = useState([]);
    const [tampWeightFilter, setTampWeightFilter] = useState([]);
    const [acidityFilter, setAcidityFilter] = useState([]);
    const [cremaQualityFilter, setCremaQualityFilter] = useState([]);
    const [shotsToDisplay, setShotsToDisplay] = useState('single')

    const espressos = [
        {
            id: 1,
            date: 'September 20, 2024',
            rating: 5,
            espressoBean: "Balzac's Espresso Blend", 
            extractionDuration: 20,
            grindSize: 18, 
            tampWeight: 3,
            acidity: 3, 
            cremaQuality: 3,
            shot: 'double'
        },
        {
            id: 2,
            date: 'September 19, 2024',
            rating: 4,
            espressoBean: "Balzac's Espresso Blend", 
            extractionDuration: 20,
            grindSize: 19, 
            tampWeight: 2,
            acidity: 4, 
            cremaQuality: 3,
            shot: 'double'
        },
        {
            id: 3,
            date: 'September 18, 2024',
            rating: 4,
            espressoBean: "Balzac's Espresso Blend", 
            extractionDuration: 20,
            grindSize: 19, 
            tampWeight: 2,
            acidity: 4, 
            cremaQuality: 3,
            shot: 'single'
        }
    ];    

    const items = [
        {
            name: "Espresso Beans",
            id: 0,
            children: [...new Set(espressos.map(item => ({ name: item.espressoBean, id: item.espressoBean })))],
        }
    ];

    return (
        <View style={styles.container}>
            <Text style={styles.header}>EspressoLab</Text>
            <TouchableOpacity style={styles.filter} onPress={() => setModalVisible(true)}><Filter/></TouchableOpacity>
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <MultiSelector
                        placeholder="Select Espresso Beans"
                        data={Array.from(new Set(espressos.map(item => item.espressoBean))).map((item) => ({
                            label: item,
                            value: item
                        }))}
                        onChange={(selectedItems) => {
                            setEspressoBeanFilter(selectedItems);
                        }}
                        selected={espressoBeanFilter}
                        style
                        />
                        <Text style={styles.text}>Extraction Duration</Text>
                        <Button title="Apply Filters" onPress={() => setModalVisible(!modalVisible)} variant='creamBeige' style={styles.modalButton} />
                    </View>
                </View>
            </Modal>
            <View style={styles.row}>
                <Button 
                    title="Single Shots" 
                    variant={shotsToDisplay == 'single' ? "creamBeige" : "darkEspresso"} 
                    onPress={() =>setShotsToDisplay('single')} 
                    style={styles.shotButtons}
                    icon={shotsToDisplay == 'single' ? "brownSingleShot" : "creamSingleShot"}/>
                <Button 
                    title="Double Shots" 
                    variant={shotsToDisplay == 'double' ? "creamBeige" : "darkEspresso"} 
                    onPress={() =>setShotsToDisplay('double')} 
                    style={styles.shotButtons}
                    icon={shotsToDisplay == 'double' ? "brownDoubleShot" : "creamDoubleShot"}/>
            </View>
            <List
                filterBy={[
                    { key: 'date', value: ['September 20, 2024'], type: 'match' },
                    { key: 'rating', value: [1, 5], type: 'range' },
                    { key: 'espressoBean', value: ["Balzac's Espresso Blend"], type: 'match' },
                    { key: 'extractionDuration', value: [20, 25], type: 'range' },
                    { key: 'grindSize', value: [18, 20], type: 'range' },
                    { key: 'tampWeight', value: [2, 5], type: 'range' },
                    { key: 'acidity', value: [3, 5], type: 'range' },
                    { key: 'cremaQuality', value: [3, 5], type: 'range' },
                    { key: 'shot', value: [shotsToDisplay], type: 'match' },
                ]}
                espressos={espressos}
            />
            {!modalVisible && <Button title="New Espresso Shot" variant="creamBeige" onPress={() => {}} style={styles.button}/>}
        </View>
      );
    }
    
    const styles = StyleSheet.create({
        centeredView: {
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            marginTop: 25
        },
        modalView: {
            margin: 20,
            height: 500,
            width: 370,
            backgroundColor: colors.creamBeige,
            alignItems: "center",
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 2
            },
            shadowOpacity: 0.25,
            shadowRadius: 4,
            elevation: 5
        },
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
            right: 15,
        },
        header: {
            fontSize: 45,
            fontFamily: 'Cochin-Bold',
            color: colors.creamBeige,
            position: 'absolute',
            top: 80
        },
        modalButton: {
            width: 240,
            height: 55,
            position: 'absolute',
            top: 534
        },
        row: {
            marginTop: 190,
            marginBottom: 20,
            flexDirection: 'row',
            gap: 6
        },
        shotButtons: {
            width: 182,
            height: 55,
        },
        text: {
            fontSize: 20,
            fontFamily: 'Cochin-Bold'
        }
    });