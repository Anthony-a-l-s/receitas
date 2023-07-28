import {View, Text, StyleSheet} from 'react-native'

export function Logo(){
    return(
        <View style={styles.logArea}>
            <Text style={styles.textLogo}>Minhas Receitas</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    logArea:{
        backgroundColor:"#00CDFF",
        alignSelf: "flex-start",
        padding: 8,
        paddingLeft: 16,
        paddingRight: 20,
        borderTopRightRadius: 8,
        borderBottomLeftRadius: 8,
        borderTopLeftRadius: 8,
        borderBottomRightRadius: 36,
        marginBottom: 8,
    },
    textLogo:{
      fontSize: 18,
      fontWeight: 'bold',
      color: '#FFFFFF',
    }
})