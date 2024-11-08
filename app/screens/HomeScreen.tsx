import { Text, View, StyleSheet, TouchableOpacity, Modal, TextInput } from "react-native";
import { colors } from "../config/theme";
import Button from "../components/Button";
import List from "../components/List";
import { useState } from "react";
import { Filter } from "../components/svgs/Filter";
import MultiSelector from "../components/MultiSelector";
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; 
import 'react-date-range/dist/theme/default.css'; 

export default function HomeScreen() {
    const [modalVisible, setModalVisible] = useState(false);
    const [dateFilter, setDateFilter] = useState([
        {
          startDate: new Date(),
          endDate: null,
          key: 'selection'
        }
      ]);
    const [ratingFilter, setRatingFilter] = useState([]);
    const [espressoBeanFilter, setEspressoBeanFilter] = useState([]);
    const [extractionDurationFilter, setExtractionDurationFilter] = useState([]);
    const [grindSizeFilter, setGrindSizeFilter] = useState([0,30]);
    const [tampWeightFilter, setTampWeightFilter] = useState([0,5]);
    const [acidityFilter, setAcidityFilter] = useState([0,5]);
    const [cremaQualityFilter, setCremaQualityFilter] = useState([0,5]);
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

    return (
        <View style={styles.container}>
            <Text style={styles.header}>EspressoLab</Text>
            <TouchableOpacity style={styles.filter} onPress={() => setModalVisible(true)}><Filter/></TouchableOpacity>
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(!modalVisible)}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <MultiSelector
                        placeholder="Espresso Beans"
                        data={espressos.map((item) => item.espressoBean).map((item) => ({
                            label: item,
                            value: item
                        }))}
                        onChange={(selectedItems) => {
                            setEspressoBeanFilter(selectedItems);
                        }}
                        selected={espressoBeanFilter}
                        style
                        />
                        <View style={styles.sliderRow}>
                            <Text style={styles.text}>Extraction Duration:</Text>
                            <MultiSlider
                                values={[extractionDurationFilter[0], extractionDurationFilter[1]]}
                                sliderLength={250}
                                onValuesChange={(values: number[]) => setExtractionDurationFilter(values)}
                                min={0}
                                max={60}
                                step={1}
                            />
                        </View>
                        <View style={styles.sliderRow}>
                            <Text style={styles.text}>Grind Size:</Text>
                            <MultiSlider
                                values={[grindSizeFilter[0], grindSizeFilter[1]]}
                                sliderLength={250}
                                onValuesChange={(values: number[]) => setGrindSizeFilter(values)}
                                min={0}
                                max={30}
                                step={1}
                            />
                        </View>
                        <View style={styles.sliderRow}>
                            <Text style={styles.text}>Tamp Weight:</Text>
                            <MultiSlider
                                values={[tampWeightFilter[0], tampWeightFilter[1]]}
                                sliderLength={250}
                                onValuesChange={(values: number[]) => setTampWeightFilter(values)}
                                min={0}
                                max={5}
                                step={1}
                            />
                        </View>
                        <View style={styles.sliderRow}>
                            <Text style={styles.text}>Acidity:</Text>
                            <MultiSlider
                                values={[acidityFilter[0], acidityFilter[1]]}
                                sliderLength={250}
                                onValuesChange={(values: number[]) => setAcidityFilter(values)}
                                min={0}
                                max={5}
                                step={1}
                            />
                        </View>
                        <View style={styles.sliderRow}>
                            <Text style={styles.text}>Crema Quality:</Text>
                            <MultiSlider
                                values={[cremaQualityFilter[0], cremaQualityFilter[1]]}
                                sliderLength={250}
                                onValuesChange={(values: number[]) => setCremaQualityFilter(values)}
                                min={0}
                                max={5}
                                step={1}
                            />
                        </View>
                        <View style={styles.sliderRow}>
                            <Text style={styles.text}>Overall Rating:</Text>
                            <MultiSlider
                                values={[ratingFilter[0], ratingFilter[1]]}
                                sliderLength={250}
                                onValuesChange={(values: number[]) => setRatingFilter(values)}
                                min={0}
                                max={5}
                                step={1}
                            />
                        </View>
                        <Text style={styles.text}>Brew Date:</Text>
                        <DateRange
                            editableDateInputs={true}
                            onChange={(item) => setDateFilter([item.selection])}
                            moveRangeOnFirstSelection={false}
                            ranges={dateFilter}
                        />
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
        column: {
            flexDirection: 'column',
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
        sliderRow: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginRight: 15
        },
        text: {
            fontSize: 20,
            fontFamily: 'Cochin-Bold'
        }
    });