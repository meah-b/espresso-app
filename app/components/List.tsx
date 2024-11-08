import { ScrollView, View, StyleSheet } from 'react-native';
import dayjs from 'dayjs';

import ListItem from './ListItem';
import { filterEspressos } from './utilities/filterEspressos';
import { useState } from 'react';

export interface FilterCriterion {
    key: string;
    value: number[] | string[] | Date[];
    type: 'range' | 'match' | 'dates';
}

interface Props {
    filterBy: FilterCriterion[];
    espressos: Espresso[]
}

export interface Espresso {
    id: number;
    date: Date;
    rating: number;
    espressoBean: string;
    extractionDuration: number;
    grindSize: number;
    tampWeight: number;
    acidity: number;
    cremaQuality: number;
    shot: string;
}


export default function List(props: Props) {
    const {filterBy, espressos} = props;
    const [selectedEspresso, setSelectedEspresso] = useState<number | null>(null)
    
    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                {filterEspressos(espressos, filterBy).map((espresso) => (
                    <ListItem 
                    key={espresso.id}
                    date={dayjs(espresso.date).format('MMMM D, YYYY')}
                    rating={espresso.rating} 
                    espressoBean={espresso.espressoBean}
                    extractionDuration={espresso.extractionDuration}
                    grindSize={espresso.grindSize} 
                    tampWeight={espresso.tampWeight} 
                    acidity={espresso.acidity} 
                    cremaQuality={espresso.cremaQuality}
                    selected={espresso.id == selectedEspresso}
                    onSelect={() => setSelectedEspresso(espresso.id)}
                    onUnselect={() => setSelectedEspresso(null)}
                    onEdit={() => {}}>
                </ListItem>
                ))}
            </ScrollView>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection: 'column',
        width: '100%',
        height: 420,
        marginBottom: 140
    },
    scrollContainer: {
        flex: 1,
        flexDirection: 'column',
        alignContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
})