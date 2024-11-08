import { Text, View, StyleSheet, TouchableOpacity, Modal, ScrollView } from "react-native";
import { colors } from "../config/theme";
import Button from "../components/Button";
import List from "../components/List";
import { useState } from "react";
import { Filter } from "../components/svgs/Filter";
import MultiSelector from "../components/MultiSelector";
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import DateTimePicker from 'react-native-ui-datepicker';

export default function HomeScreen() {
    const [modalVisible, setModalVisible] = useState(false);
    const [dateFilter, setDateFilter] = useState([]);
    const [ratingFilter, setRatingFilter] = useState([0, 5]);
    const [espressoBeanFilter, setEspressoBeanFilter] = useState([]);
    const [extractionDurationFilter, setExtractionDurationFilter] = useState([0,60]);
    const [grindSizeFilter, setGrindSizeFilter] = useState([0,30]);
    const [tampWeightFilter, setTampWeightFilter] = useState([0,5]);
    const [acidityFilter, setAcidityFilter] = useState([0,5]);
    const [cremaQualityFilter, setCremaQualityFilter] = useState([0,5]);
    const [shotFilter, setShotFilter] = useState('single')

    const espressos = [
        {
            id: 1,
            date: new Date('2024-09-20'),
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
            date: new Date('2024-09-19'),
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
            date: new Date('2024-09-18'),
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
                        <ScrollView contentContainerStyle={styles.scrollView}>
                            <MultiSelector
                            placeholder="Espresso Beans"
                            data={[...new Set(espressos.map((item) => item.espressoBean))].map((item) => ({
                                label: item,
                                value: item
                            }))}
                            onChange={(selectedItems) => {
                                setEspressoBeanFilter(selectedItems);
                            }}
                            selected={espressoBeanFilter}
                            style
                            />
                            <Text style={styles.filterText}>Extraction Duration:</Text>
                            <MultiSlider
                                values={extractionDurationFilter}
                                sliderLength={300}
                                onValuesChange={(values: number[]) => setExtractionDurationFilter(values)}
                                min={0}
                                max={60}
                                step={1}
                                snapped
                                enableLabel
                                allowOverlap
                                trackStyle={{height: 5}}
                                selectedStyle={{ backgroundColor: colors.lightEspresso }}
                                unselectedStyle={{ backgroundColor: colors.white }}
                            />
                        
                            <Text style={styles.filterText}>Grind Size:</Text>
                            <MultiSlider
                                values={grindSizeFilter}
                                sliderLength={300}
                                onValuesChange={(values: number[]) => setGrindSizeFilter(values)}
                                min={0}
                                max={30}
                                step={1}
                                snapped
                                enableLabel
                                allowOverlap
                                trackStyle={{height: 5}}
                                selectedStyle={{ backgroundColor: colors.lightEspresso }}
                                unselectedStyle={{ backgroundColor: colors.white }}
                            />
                            <Text style={styles.filterText}>Tamp Weight:</Text>
                            <MultiSlider
                                values={tampWeightFilter}
                                sliderLength={300}
                                onValuesChange={(values: number[]) => setTampWeightFilter(values)}
                                min={0}
                                max={5}
                                step={1}
                                snapped
                                enableLabel
                                allowOverlap
                                trackStyle={{height: 5}}
                                selectedStyle={{ backgroundColor: colors.lightEspresso }}
                                unselectedStyle={{ backgroundColor: colors.white }}
                            />
                            <Text style={styles.filterText}>Acidity:</Text>
                            <MultiSlider
                                values={acidityFilter}
                                sliderLength={300}
                                onValuesChange={(values: number[]) => setAcidityFilter(values)}
                                min={0}
                                max={5}
                                step={1}
                                snapped
                                enableLabel
                                allowOverlap
                                trackStyle={{height: 5}}
                                selectedStyle={{ backgroundColor: colors.lightEspresso }}
                                unselectedStyle={{ backgroundColor: colors.white }}
                            />
                            <Text style={styles.filterText}>Crema Quality:</Text>
                            <MultiSlider
                                values={cremaQualityFilter}
                                sliderLength={300}
                                onValuesChange={(values: number[]) => setCremaQualityFilter(values)}
                                min={0}
                                max={5}
                                step={1}
                                snapped
                                enableLabel
                                allowOverlap
                                trackStyle={{height: 5}}
                                selectedStyle={{ backgroundColor: colors.lightEspresso }}
                                unselectedStyle={{ backgroundColor: colors.white }}
                            />
                            <Text style={styles.filterText}>Overall Rating:</Text>
                            <MultiSlider
                                values={ratingFilter}
                                sliderLength={300}
                                onValuesChange={(values: number[]) => setRatingFilter(values)}
                                min={0}
                                max={5}
                                step={1}
                                snapped
                                enableLabel
                                allowOverlap
                                trackStyle={{height: 5}}
                                selectedStyle={{ backgroundColor: colors.lightEspresso }}
                                unselectedStyle={{ backgroundColor: colors.white }}
                            />
                            <Text style={[styles.filterText, {marginBottom: 15}]}>Date Range:</Text>
                            <DateTimePicker
                                mode="range"
                                startDate={dateFilter[0]}
                                endDate={dateFilter[1]}
                                onChange={(params) => setDateFilter([params.startDate, params.endDate])}
                                selectedItemColor={colors.lightEspresso}
                                headerTextStyle={{fontFamily: 'Cochin-Bold', fontSize: 20}}
                            />
                        </ScrollView>
                        <Button title="Apply Filters" onPress={() => setModalVisible(!modalVisible)} variant='creamBeige' style={styles.modalButton} />
                    </View>
                </View>
            </Modal>
            <View style={styles.row}>
                <Button 
                    title="Single Shots" 
                    variant={shotFilter == 'single' ? "creamBeige" : "darkEspresso"} 
                    onPress={() =>setShotFilter('single')} 
                    style={styles.shotButtons}
                    icon={shotFilter == 'single' ? "brownSingleShot" : "creamSingleShot"}/>
                <Button 
                    title="Double Shots" 
                    variant={shotFilter == 'double' ? "creamBeige" : "darkEspresso"} 
                    onPress={() =>setShotFilter('double')} 
                    style={styles.shotButtons}
                    icon={shotFilter == 'double' ? "brownDoubleShot" : "creamDoubleShot"}/>
            </View>
            <List
                filterBy={[
                    { key: 'date', value: dateFilter, type: 'dates' },
                    { key: 'rating', value: ratingFilter, type: 'range' },
                    { key: 'espressoBean', value: espressoBeanFilter, type: 'match' },
                    { key: 'extractionDuration', value: extractionDurationFilter, type: 'range' },
                    { key: 'grindSize', value: grindSizeFilter, type: 'range' },
                    { key: 'tampWeight', value: tampWeightFilter, type: 'range' },
                    { key: 'acidity', value: acidityFilter, type: 'range' },
                    { key: 'cremaQuality', value: cremaQualityFilter, type: 'range' },
                    { key: 'shot', value: [shotFilter], type: 'match' },
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
        filterText: {
            fontSize: 20,
            fontFamily: 'Cochin-Bold',
            marginBottom: 35
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
        scrollView: {
            alignItems: 'center',
            width: 370
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