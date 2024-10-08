import { ScrollView, View, StyleSheet } from 'react-native';

import ListItem from './ListItem';
import { useState } from 'react';

interface SkillFormProps {
    order: string;
    sortBy: string;
}

export default function SkillList(props: SkillFormProps) {
    const { order, sortBy } = props;
    const [selectedEspresso, setSelectedEspresso] = useState()
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
        }
    ];    

    function sortEspressos(espressos: any, sortBy: string, order: string) {
        const sortedEspressos = [...espressos];
    
        sortedEspressos.sort((a, b) => {
            if (order === 'asc') {
                return a[sortBy] - b[sortBy];
            } else {
                return b[sortBy] - a[sortBy];
            }
        });
    
        return sortedEspressos;
    }
    


    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                {sortEspressos(espressos, sortBy, order).map((espresso) => (
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
                    onUnselect={() => setSelectedEspresso(undefined)}
                    onEdit={() => {}}>
                </ListItem>
                ))}
            </ScrollView>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        marginTop: 160,
        height: 600,
        width: '100%'
    },
    scrollContainer: {
        flex: 1,
        flexGrow: 1,
        flexDirection: 'column',
        alignContent: 'center',
        alignItems: 'center',
        width: '100%'
    },
})