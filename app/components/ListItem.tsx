import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';

import {colors} from '../config/theme';
import { Chevron } from './svgs/Chevron';
import { SliderSvg1, SliderSvg2, SliderSvg3, SliderSvg4, SliderSvg5 } from './svgs/SliderSvg';
import { FullCreamStar, EmptyCreamStar, FullBrownStar, EmptyBrownStar } from './svgs/Star';

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

function getSliderSvg(value: number) {
  switch (value) {
    case 1:
      return <SliderSvg1 />;
    case 2:
      return <SliderSvg2 />;
    case 3:
      return <SliderSvg3 />;
    case 4:
      return <SliderSvg4 />;
    case 5:
      return <SliderSvg5 />;
    default:
      return <SliderSvg1 />;
  }
}

export default function ListItem (props: Props) {
  const {date, rating, espressoBean, extractionDuration, grindSize, tampWeight, acidity, cremaQuality, selected, onSelect, onUnselect, onEdit} = props;
  const brownStars = Array.from({ length: 5 }, (_, index) => index < rating ? <FullBrownStar key={index} /> : <EmptyBrownStar key={index} />);
  const creamStars = Array.from({ length: 5 }, (_, index) => index < rating ? <FullCreamStar key={index} /> : <EmptyCreamStar key={index} />);

  const UnselectedListItem = () => (
    <TouchableOpacity style={styles.container} onPress={onSelect}>
      <Text style={styles.boldText}>{date}</Text>
      <View style={styles.stars}>{creamStars}</View>
    </TouchableOpacity>
  );

  const SelectedListItem = () => (
    <View style={styles.largeContainer}>
      <TouchableOpacity style={[styles.container, styles.selected]} onPress={onUnselect}>
        <Text style={[styles.boldText, styles.selectedText]}>{date}</Text>
        <View style={styles.stars}>{brownStars}</View>
      </TouchableOpacity>
      <View style={styles.infoContainer}>
        <View style={[styles.row, {justifyContent: 'flex-start'}]}>
          <Text style={[styles.boldText, styles.selectedText]}>Espresso Bean: </Text>
          <Text style={styles.text}>{espressoBean}</Text>
        </View>
        <View style={[styles.row, {justifyContent: 'flex-start'}]}>
          <Text style={[styles.boldText, styles.selectedText]}>Extraction Duration: </Text>
          <Text style={styles.text}>{extractionDuration} seconds</Text>
        </View>
        <View style={[styles.row, {justifyContent: 'flex-start'}]}>
          <Text style={[styles.boldText, styles.selectedText]}>Grind Size: </Text>
          <Text style={styles.text}>{grindSize}</Text>
        </View>
        <View style={styles.row}>
          <View style={[styles.column, {alignItems: 'flex-start'}]}>
            <Text style={[styles.boldText, styles.selectedText]}>Tamp Weight:</Text>
            <Text style={[styles.boldText, styles.selectedText]}>Acidity:</Text>
            <Text style={[styles.boldText, styles.selectedText]}>Crema Quality:</Text>
          </View>
          <View style={[styles.column, {gap: 3}]}>
            <Text style={styles.text}>Light</Text>
            <Text style={styles.text}>Basic</Text>
            <Text style={styles.text}>Poor</Text>
          </View>
          <View style={[styles.column, {gap: 4}]}>
            {getSliderSvg(tampWeight)}
            {getSliderSvg(acidity)}
            {getSliderSvg(cremaQuality)}
          </View>
          <View style={[styles.column, {gap: 3}]}>
            <Text style={styles.text}>Heavy</Text>
            <Text style={styles.text}>Acidic</Text>
            <Text style={styles.text}> Great</Text>
          </View>
        </View>
        <View style={styles.bottomRow}>
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
  boldText: {
    fontSize: 20,
    color: colors.creamBeige,
    fontFamily: 'Cochin-Bold',
    textAlign: 'left',
    paddingLeft: 12,
    paddingBottom: 2
  },
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
  column: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  edit: {   
    position: 'absolute',
    right: 12
  },
  editText: {
    textDecorationLine: 'underline',
    color: colors.darkEspresso, 
    fontSize: 20,
    fontFamily: 'Cochin-Bold',
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
  bottomRow: {
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 5,
  },
  selected: {
    backgroundColor: colors.creamBeige, 
  },
  selectedText: {
    color: colors.darkEspresso, 
  },
  row: {
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'space-between',
    marginRight: 12
  },
  stars: {
    flexDirection: 'row',
    width: 150,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginRight: 12,
    gap: 4
  },
  text: {
    fontSize: 19,
    color: colors.darkEspresso,
    fontFamily: 'Cochin',
  }
});