import { Text, View, StyleSheet, TextInput, ScrollView, TouchableOpacity } from "react-native";
import { colors } from "../config/theme";
import Button from "./Button";
import dayjs from 'dayjs';
import { useState } from "react";
import Slider from '@react-native-community/slider';
import { FullCreamStar, EmptyCreamStar } from './svgs/Star';


export default function EditModal({closeModal}){
    const today = dayjs()
    const [shot, setShot] = useState('single')
    const [espressoBean, setEspressoBean] = useState('')
    const [extractionDuration, setExtractionDuration] = useState(0)
    const [grindSize, setGrindSize] = useState(0)
    const [tampWeight, setTampWeight] = useState(0)
    const [acidity, setAcidity] = useState(0)
    const [cremaQuality, setCremaQuality] = useState(0)
    const [rating, setRating] = useState(0)

    function onAdd() {
        closeModal();
    }

    return(
        <View style={styles.centeredView}>
            <ScrollView contentContainerStyle={styles.scrollView}>
                <Text style={styles.header}>{today.format('MMMM D, YYYY')}</Text>
                <View style={styles.row}>
                    <Button 
                        title="Single Shot" 
                        variant={shot == 'single' ? "creamBeige" : "lightEspresso"} 
                        onPress={() => setShot('single')} 
                        style={styles.shotButtons}
                        icon={shot == 'single' ? "brownSingleShot" : "creamSingleShot"}/>
                    <Button 
                        title="Double Shot" 
                        variant={shot == 'double' ? "creamBeige" : "lightEspresso"} 
                        onPress={() => setShot('double')} 
                        style={styles.shotButtons}
                        icon={shot == 'double' ? "brownDoubleShot" : "creamDoubleShot"}/>
                </View>
                <Text style={styles.text}>Espresso Bean:</Text>
                <View style={styles.textInputView}>
                    <TextInput
                        placeholder="Enter espresso beans used..."
                        placeholderTextColor={colors.creamBeige}
                        style={styles.textInput}
                        editable
                        maxLength={30}
                        onChangeText={(text) => setEspressoBean(text)}
                        value={espressoBean}
                    />
                </View>
                <Text style={styles.text}>Extraction Duration: {extractionDuration} seconds</Text>
                <Slider
                    style={styles.slider}
                    minimumValue={0}
                    maximumValue={60}
                    value={extractionDuration}
                    onValueChange={(value) => setExtractionDuration(value)}
                    thumbTintColor={colors.creamBeige}
                    minimumTrackTintColor={colors.creamBeige}
                    maximumTrackTintColor={colors.creamBeige}
                    step={1}
                />
                <View style={styles.numbers}>
                    <Text style={styles.numberText}>0      </Text>
                    <Text style={styles.numberText}>      60</Text>
                </View>
                <Text style={styles.text}>Grind Size: {grindSize}</Text>
                <Slider
                    style={styles.slider}
                    minimumValue={0}
                    maximumValue={60}
                    value={grindSize}
                    onValueChange={(value) => setGrindSize(value)}
                    thumbTintColor={colors.creamBeige}
                    minimumTrackTintColor={colors.creamBeige}
                    maximumTrackTintColor={colors.creamBeige}
                    step={1}
                />
                <View style={styles.numbers}>
                    <Text style={styles.numberText}>0      </Text>
                    <Text style={styles.numberText}>      60</Text>
                </View>
                <Text style={styles.text}>Tamp Weight: {tampWeight}</Text>
                <Slider
                    style={styles.slider}
                    minimumValue={0}
                    maximumValue={5}
                    value={tampWeight}
                    onValueChange={(value) => setTampWeight(value)}
                    thumbTintColor={colors.creamBeige}
                    minimumTrackTintColor={colors.creamBeige}
                    maximumTrackTintColor={colors.creamBeige}
                    step={1}
                />
                <View style={styles.numbers}>
                    <Text style={styles.numberText}>light </Text>
                    <Text style={styles.numberText}> heavy</Text>
                </View>
                <Text style={styles.text}>Acidity: {acidity}</Text>
                <Slider
                    style={styles.slider}
                    minimumValue={0}
                    maximumValue={5}
                    value={acidity}
                    onValueChange={(value) => setAcidity(value)}
                    thumbTintColor={colors.creamBeige}
                    minimumTrackTintColor={colors.creamBeige}
                    maximumTrackTintColor={colors.creamBeige}
                    step={1}
                />
                <View style={styles.numbers}>
                    <Text style={styles.numberText}>bitter</Text>
                    <Text style={styles.numberText}>acidic</Text>
                </View>
                <Text style={styles.text}>Crema Quality: {cremaQuality}</Text>
                <Slider
                    style={styles.slider}
                    minimumValue={0}
                    maximumValue={5}
                    value={cremaQuality}
                    onValueChange={(value) => setCremaQuality(value)}
                    thumbTintColor={colors.creamBeige}
                    minimumTrackTintColor={colors.creamBeige}
                    maximumTrackTintColor={colors.creamBeige}
                    step={1}
                />
                <View style={styles.numbers}>
                    <Text style={styles.numberText}>bad   </Text>
                    <Text style={styles.numberText}>  good</Text>
                </View>
                <Text style={styles.text}>Overall Rating:</Text>
                <View style={styles.stars}>
                    {[...Array(5)].map((_, index) => (
                        <TouchableOpacity key={index} onPress={() => setRating(index + 1)}>
                            {index < rating ? <FullCreamStar width={40} height={40} /> : <EmptyCreamStar width={40} height={40} />}
                        </TouchableOpacity>
                    ))}
                </View>
            </ScrollView>
            <Button
                title="Add"
                variant="creamBeige"
                onPress={onAdd} 
                style={styles.addButton}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    addButton: {
        width: 180,
        height: 55,
        marginBottom: 70,
        marginTop: 20
    },
    centeredView: {
        position: 'absolute',
        backgroundColor: colors.darkEspresso,
        top: 150,
        width: 390,
        height: 700,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        alignItems: 'center'
    },
    header: {
        fontSize: 26,
        fontFamily: 'Cochin-Bold',
        color: colors.creamBeige,
        marginTop: 25
    },
    numbers: {
        flexDirection: 'row',
        gap: 275
    },
    numberText: {
        fontSize: 16,
        fontFamily: 'Cochin-Bold',
        color: colors.creamBeige,
        marginBottom: 5,
    },
    row: {
        marginTop: 15,
        flexDirection: 'row',
        gap: 10
    },
    scrollView: {
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        borderRadius: 5,
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    shotButtons: {
        width: 180,
        height: 55,
    },
    slider: {
        width: 370, 
        height: 40,
    },
    stars: {
        flexDirection: 'row',
        width: 300,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 40,
    },
    text: {
        fontSize: 22,
        fontFamily: 'Cochin-Bold',
        color: colors.creamBeige,
        marginBottom: 15,
        marginTop: 25,
        marginLeft: 5,
        alignSelf: 'flex-start'
    },
    textInput: {
        marginLeft: 20,
        color: colors.creamBeige,
        fontSize: 18,
        fontFamily: 'Cochin-Bold'
    },
    textInputView:{
        backgroundColor: colors.lightEspresso,
        borderRadius: 5,
        height: 60,
        width: 370,
        justifyContent:"center",
        shadowColor: colors.black,
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 5,
    },
});