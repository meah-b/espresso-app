import { TouchableOpacity, StyleSheet, Text } from 'react-native';

import {colors} from '../config/theme';

interface Props{
  onPress: () => void;
  variant: string;
  title: string;
  style: any;
}

export default function Button (props: Props) {
  const {onPress, variant, title, style} = props;
  return (
    <TouchableOpacity 
      style={[
        variant === 'start' ? styles.startContainer : null,
        variant === 'lightEspresso' ? { ...styles.standardContainer, backgroundColor: colors.lightEspresso, ...style} : null,
        variant === 'darkEspresso' ? { ...styles.standardContainer, backgroundColor: colors.darkEspresso, ...style} : null,
        variant === 'creamBeige' ? { ...styles.standardContainer, backgroundColor: colors.creamBeige, ...style} : null,
      ]} 
      onPress={onPress}>
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
    </TouchableOpacity>
  );
}

  const styles = StyleSheet.create({
    startContainer: {
      backgroundColor: colors.lightEspresso,
      height: 50,
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
      height: 43,
      borderRadius: 50,
      marginVertical: 5,
      justifyContent: 'center',
      shadowColor: colors.black,
      shadowOffset: {width: 0, height: 2},
      shadowOpacity: 0.5,
      shadowRadius: 5,
      elevation: 5,
    },
    text: {
      fontSize: 22,
      fontFamily: 'Cochin-Bold',
      textAlign: 'center',
    },
});
