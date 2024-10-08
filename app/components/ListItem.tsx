import { TouchableOpacity, StyleSheet, Text } from 'react-native';

import {colors} from '../config/theme';

interface Props{
  date: string;
  rating: number;
  espressoBean: string;
  grindSize: number;
  tampWeight: number;
  acidity: number;
  cremaQuality: number;
}

export default function ListItem (props: Props) {
  const {date, rating, espressoBean, grindSize, tampWeight, acidity, cremaQuality} = props;
  return (
    <TouchableOpacity 
      style={styles.container}>
      <Text 
        style={styles.text}> 
        {date} 
      </Text>
    </TouchableOpacity>
  );
}

  const styles = StyleSheet.create({
    container: {
      backgroundColor: colors.darkEspresso,
      height: 60,
      width: '100%',
      justifyContent: 'center',
      borderWidth: 1,
      borderColor: colors.black
    },
    text: {
      fontSize: 22,
      color: colors.creamBeige,
      fontFamily: 'Cochin-Bold',
      textAlign: 'center',
    },
});
