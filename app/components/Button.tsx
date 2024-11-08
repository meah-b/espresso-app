import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import { CreamDoubleShot, CreamSingleShot, BrownDoubleShot, BrownSingleShot } from './svgs/Shots';

import { colors } from '../config/theme';

interface Props{
  onPress: () => void;
  variant: string;
  title: string;
  style: any;
  icon?: string;
}

function getIcon(value: string) {
  switch (value) {
    case 'creamSingleShot':
      return <CreamSingleShot />;
    case 'creamDoubleShot':
      return <CreamDoubleShot />;
    case 'brownSingleShot':
      return <BrownSingleShot />;
    case 'brownDoubleShot':
      return <BrownDoubleShot />;
    default:
      return <CreamSingleShot />;
  }
}

export default function Button (props: Props) {
  const {onPress, variant, title, style, icon} = props;
  return (
    <TouchableOpacity 
      style={[
        variant === 'start' ? styles.startContainer : null,
        variant === 'lightEspresso' ? { ...styles.standardContainer, backgroundColor: colors.lightEspresso, ...style} : null,
        variant === 'darkEspresso' ? { ...styles.standardContainer, backgroundColor: colors.darkEspresso, ...style} : null,
        variant === 'creamBeige' ? { ...styles.standardContainer, backgroundColor: colors.creamBeige, ...style} : null,
      ]} 
      onPress={onPress}>
      {icon ? 
      <View style={styles.row}>
        {getIcon(icon)}
        <Text 
          style={[
            styles.text,
            variant === 'start' ? { ...styles.text, color: colors.creamBeige} : null,
            variant === 'lightEspresso' ? { ...styles.text, color: colors.creamBeige} : null,
            variant === 'darkEspresso' ? { ...styles.text, color: colors.creamBeige} : null,
            variant === 'creamBeige' ? { ...styles.text, color: colors.darkEspresso} : null,
          ]}> 
          {title} 
        </Text>
      </View>
      : 
      <Text 
        style={[
          styles.text,
          variant === 'start' ? { ...styles.text, color: colors.creamBeige} : null,
          variant === 'lightEspresso' ? { ...styles.text, color: colors.creamBeige} : null,
          variant === 'darkEspresso' ? { ...styles.text, color: colors.creamBeige} : null,
          variant === 'creamBeige' ? { ...styles.text, color: colors.darkEspresso} : null,
        ]}> 
        {title} 
      </Text>}
    </TouchableOpacity>
  );
}

  const styles = StyleSheet.create({
    startContainer: {
      backgroundColor: colors.lightEspresso,
      height: 55,
      paddingHorizontal: 90,
      borderRadius: 50,
      marginVertical: 8,
      justifyContent: 'center',
      shadowColor: colors.black,
      shadowOffset: {width: 0, height: 2},
      shadowOpacity: 0.5,
      shadowRadius: 5,
      elevation: 5,
    },
    standardContainer: {
      height: 55,
      borderRadius: 50,
      marginVertical: 5,
      justifyContent: 'center',
      shadowColor: colors.black,
      shadowOffset: {width: 0, height: 2},
      shadowOpacity: 0.5,
      shadowRadius: 5,
      elevation: 5,
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'center',
      gap: 8
    },
    text: {
      fontSize: 20,
      fontFamily: 'Cochin-Bold',
      textAlign: 'center',
    },
});
