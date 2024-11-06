import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { MultiSelect } from 'react-native-element-dropdown';
import { AntDesign } from '@expo/vector-icons';

import { colors } from '../config/theme';

interface Props {
    selected: string[];
    data:{label: string, value: string}[]
    onChange: (value: string[]) => void;
    placeholder: string;
    style: any;
}

export default function MultiSelector(props: Props) {
    const { selected, data, onChange, placeholder, style } = props;

    const renderDataItem = (item) => {
        return (
            <View style={styles.item}>
                <Text style={styles.textSelectedStyle}>{item.label}</Text>
            </View>
        );
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <MultiSelect
                style={[styles.dropdown, style]} 
                placeholderStyle={styles.placeholderStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                data={data}
                labelField="label"
                valueField="value"
                placeholder={placeholder}
                value={selected}
                search
                searchPlaceholder="Search..."
                onChange={onChange}
                renderItem={renderDataItem}
                renderSelectedItem={(item, unSelect) => (
                    <View style={[styles.selectedStyle,style]}>
                        <Text style={styles.textSelectedStyle}>{item.label}</Text>
                        <AntDesign 
                            color="black" 
                            name="delete" 
                            size={17} 
                            style={styles.delete} 
                            onPress={() => unSelect && unSelect(item)}/>
                    </View>
                )}
            />
        </ScrollView>
    );
}
    
const styles = StyleSheet.create({
    delete: {
        position: 'absolute',
        right: 20,
    },
    dropdown: {
        height: 50,
        width: 350,
        marginHorizontal: 3,
        marginTop: 15,
        marginBottom: 5,
        backgroundColor: colors.lightEspresso,
        padding: 12,
        shadowColor: colors.black,
        shadowOffset: {width: 0, height: 1,},
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        elevation: 2,
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
    item: {
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    inputSearchStyle: {
        height: 50,
        borderRadius: 15,
        fontSize: 16,
        fontFamily: 'Cochin'
    },
    placeholderStyle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: colors.creamBeige,
        fontFamily: 'Cochin-Bold'
    },
    selectedStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.creamBeige,
        width: 350,
        height: 30,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: colors.darkEspresso,
    },
    container: { 
        flex: 1,
        flexDirection: 'column',
        alignContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        width: 350
    },
    textSelectedStyle: {
        fontSize: 16,
        fontWeight: 'bold',
        position: 'absolute',
        left: 20,
        color: colors.darkEspresso,
        fontFamily: 'Cochin-Bold'
    },
});
