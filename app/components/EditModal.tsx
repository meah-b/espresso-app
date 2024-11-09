import { Text, View, StyleSheet } from "react-native";
import { colors } from "../config/theme";

export default function EditModal(){
    return(
        <View style={styles.centeredView}>
            <View style={styles.modalView}>
                <View style={styles.container}>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    centeredView: {
        position: 'absolute',
        bottom: 0,
    },
    modalView: {
        height: 700,
        width: 390,
        backgroundColor: colors.darkEspresso,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        borderRadius: 50,
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    container: {
        flex: 1,
        backgroundColor: colors.lightEspresso,
        alignItems: 'center',
        justifyContent: 'center',
    },
});