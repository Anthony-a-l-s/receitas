import { View, Text, StyleSheet, FlatList } from 'react-native'
import { useState, useEffect } from 'react'
import { useRoute } from '@react-navigation/native'
import { List } from '../../components/list';

import api from '../../services/api';


export function Search() {
    const route = useRoute();
    const [receipes, setreceipes] = useState([]);

    useEffect(() => {
        async function fetchRecipes() {
            const response = await api.get("/food/" + route.params?.name)
            setreceipes(response.data)
        }
        fetchRecipes();
    }, [route.params?.name])

    return (
        <View style={styles.container}>
            <FlatList
                showsVerticalScrollIndicator={false}
                style={{ marginTop: 14 }}
                data={receipes}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <List data={item}/>}
                ListEmptyComponent={ ()=> <Text style={styles.text}>Não enontramos o que você está buscando</Text>}
            />
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f3f9ff',
        paddingStart: 14,
        paddingEnd: 14,
        paddingTop: 14
    },
    text:{
        fontSize: 16,
    }
})