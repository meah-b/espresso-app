import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import Slider from '@react-native-community/slider';

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
  onUnselect: () => void
  onEdit: () => void;
}

export default function ListItem (props: Props) {
  const {date, rating, espressoBean, extractionDuration, grindSize, tampWeight, acidity, cremaQuality, selected, onSelect, onUnselect, onEdit} = props;
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
        <Text style={[styles.text, selected ? styles.selectedText : null, {marginBottom: 12, marginTop: 5}]}>Espresso Bean: {espressoBean}</Text>
        <Text style={[styles.text, selected ? styles.selectedText : null, {marginBottom: 12}]}>Extraction Duration: {extractionDuration} seconds</Text>
        <Text style={[styles.text, selected ? styles.selectedText : null, {marginBottom: 5}]}>Grind Size: {grindSize}</Text>
        <View style={styles.sliderRow}>
          <Text style={[styles.text, selected ? styles.selectedText : null]}>Tamp Weight: </Text>
          <Slider
            style={{width: 200, height: 40}}
            minimumValue={0}
            maximumValue={5}
            value={tampWeight}
            disabled={true}
            thumbTintColor={colors.darkEspresso}
            minimumTrackTintColor={colors.darkEspresso}
            maximumTrackTintColor={colors.darkEspresso}
          />
        </View>
        <View style={styles.sliderRow}>
          <Text style={[styles.text, selected ? styles.selectedText : null]}>Acidity: </Text>
          <Slider
            style={{width: 200, height: 40}}
            minimumValue={0}
            maximumValue={5}
            value={acidity}
            disabled={true}
            thumbTintColor={colors.darkEspresso}
            minimumTrackTintColor={colors.darkEspresso}
            maximumTrackTintColor={colors.darkEspresso}
          />
        </View>
        <View style={styles.sliderRow}>
          <Text style={[styles.text, selected ? styles.selectedText : null]}>Crema Quality: </Text>
          <Slider
            style={{width: 200, height: 40}}
            minimumValue={0}
            maximumValue={5}
            value={cremaQuality}
            disabled={true}
            thumbTintColor={colors.darkEspresso}
            minimumTrackTintColor={colors.darkEspresso}
            maximumTrackTintColor={colors.darkEspresso}
          />
        </View>
        <View style={styles.row}>
        <TouchableOpacity onPress={onUnselect}><Chevron/></TouchableOpacity>
        <TouchableOpacity style={styles.edit} onPress={onEdit}>
          <Text style={styles.editText}>Edit</Text>
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
  editText: {
    textDecorationLine: 'underline',
    color: colors.darkEspresso, 
    fontSize: 20,
    fontFamily: 'Cochin-Bold',
    textAlign: 'left',
    paddingLeft: 15
  },
  infoContainer: {
    backgroundColor: colors.creamBeige, 
    height: 280,
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
    marginTop: 15,
    marginBottom: 10,
  },
  selected: {
    backgroundColor: colors.creamBeige, 
  },
  selectedText: {
    color: colors.darkEspresso, 
  },
  sliderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginRight: 15
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
  }
});