import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';

import {colors} from '../config/theme';
import { Chevron } from './Chevron';
import { FullCreamStar, EmptyCreamStar, FullBrownStar, EmptyBrownStar } from './Star';

interface Props{
  date: string;
  rating: number;
  espressoBean: string;
  extractionDuration: number;
  grindSize: number;
  tampWeight: number;
  acidity: number;
  cremaQuality: number;
  selected: boolean;
  onSelect: () => void;
  onUnselect: () => void;
}

export default function ListItem (props: Props) {
  const {date, rating, espressoBean, extractionDuration, grindSize, tampWeight, acidity, cremaQuality, selected, onSelect, onUnselect} = props;
  const brownStars = Array.from({ length: 5 }, (_, index) => index < rating ? <FullBrownStar key={index} /> : <EmptyBrownStar key={index} />);
  const creamStars = Array.from({ length: 5 }, (_, index) => index < rating ? <FullCreamStar key={index} /> : <EmptyCreamStar key={index} />);

  const UnselectedListItem = () => (
    <TouchableOpacity style={[styles.container, selected ? styles.selected : null]} onPress={onSelect}>
      <Text style={[styles.text, selected ? styles.selectedText : null]}>{date}</Text>
      <View style={styles.stars}>{creamStars}</View>
    </TouchableOpacity>
  );

  const SelectedListItem = () => (
    <View style={styles.largeContainer}>
      <View style={[styles.container, selected ? styles.selected : null]}>
        <Text style={[styles.text, selected ? styles.selectedText : null]}>{date}</Text>
        <View style={styles.stars}>{brownStars}</View>
      </View>
      <View style={styles.infoContainer}>
        <Text style={[styles.text, selected ? styles.selectedText : null]}>Espresso Bean: {espressoBean}</Text>
        <Text style={[styles.text, selected ? styles.selectedText : null]}>Extraction Duration: {extractionDuration} seconds</Text>
        <Text style={[styles.text, selected ? styles.selectedText : null]}>Grind Size: {grindSize}</Text>
        <Text style={[styles.text, selected ? styles.selectedText : null]}>Tamp Weight: {tampWeight}</Text>
        <Text style={[styles.text, selected ? styles.selectedText : null]}>Acidity: {acidity}</Text>
        <Text style={[styles.text, selected ? styles.selectedText : null]}>Crema Quality: {cremaQuality}</Text>
        <View style={styles.row}>
        <TouchableOpacity onPress={onUnselect}><Chevron/></TouchableOpacity>
        <TouchableOpacity style={styles.edit} onPress={() => {}}>
          <Text style={[styles.text, styles.selectedText, {textDecorationLine: 'underline'}]}>Edit</Text>
        </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  return (
    selected ? <SelectedListItem/> : <UnselectedListItem/>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: colors.darkEspresso, 
    height: 60,
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.black
  },
  edit: {   
    position: 'absolute',
    right: 15
  },
  selected: {
    backgroundColor: colors.creamBeige, 
  },
  infoContainer: {
    backgroundColor: colors.creamBeige, 
    height: 220,
    width: '100%',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: colors.black
  },
  largeContainer: {
    width: '100%',
  },
  row: {
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
    marginTop: 30,
    marginBottom: 5,
  },
  stars: {
    flexDirection: 'row',
    width: 150,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginRight: 15
  },
  text: {
    fontSize: 20,
    color: colors.creamBeige,
    fontFamily: 'Cochin-Bold',
    textAlign: 'left',
    paddingLeft: 15
  },
  selectedText: {
    color: colors.darkEspresso, 
  }
});