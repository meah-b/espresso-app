import { ScrollView, View, StyleSheet } from 'react-native';

import ListItem from './ListItem';
import { useState } from 'react';

interface FilterCriterion {
    key: string;
    value: number[] | string[];
    type: 'range' | 'match';
}

interface Props {
    filterBy: FilterCriterion[];
    espressos: Espresso[]
}

interface Espresso {
    id: number;
    date: string;
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

    function filterEspressos(espressos: Espresso[], filterBy: FilterCriterion[]) {
        return espressos.filter(espresso => {
            return filterBy.every(filter => {
                const espressoValue = espresso[filter.key]; 
    
                switch (filter.type) {
                    case 'range':
                        const [minValue, maxValue] = filter.value as number[];
                        return espressoValue >= minValue && espressoValue <= maxValue;
                    case 'match':
                        return (filter.value as string[]).includes(espressoValue as string);
                    default:
                        return true;
                }
            });
        });
    }
    
    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                {filterEspressos(espressos, filterBy).map((espresso) => (
                    <ListItem 
                    key={espresso.id}
                    date={espresso.date}
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