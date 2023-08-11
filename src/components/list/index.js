import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'

import { LinearGradient } from 'expo-linear-gradient'
import { useNavigation } from '@react-navigation/native'

export function List({ data }) {
    const navigation = useNavigation();

    function handleNavigate() {
        navigation.navigate('Details', {data: data})
    }
    return (
        <>
       {data?(<TouchableOpacity style={styles.container} onPress={handleNavigate}>
            <Image
                source={{ uri: data.cover }}
                style={styles.image}
            />
            <View style={styles.info}>
                <Text style={styles.name}>{data.name}</Text>
            </View>
            <LinearGradient
                style={styles.gradient}
                colors={['transparent', 'rgba(0,0,0,0.70)', 'rgba(0,0,0,0.90)']}
            />
        </TouchableOpacity>
    ):(<Text>Sem nenhuma receita disponível</Text>)}
    </>
    );

}

const styles = StyleSheet.create({
    container: {
        marginBottom: 14,
    },
    image: {
        width: '100%',
        height: 200,
        borderRadius: 14,
    },
    info: {
        position: 'absolute',
        bottom: 14,
        left: 14,
        zIndex: 99,
    },
    name: {
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold',
    },
    gradient: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        height: '55%',
        borderRadius: 14,
        zIndex: 1,
        backgroundColor: 'transparent'
    }
})