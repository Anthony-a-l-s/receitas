import {View ,Text, StyleSheet} from 'react-native'

export function Favorites(){
    return(
        <View style={styles.container}>
            <Text>Pagina Favorites</Text>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'red',
    },
})