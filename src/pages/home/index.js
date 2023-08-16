import { useState, useEffect } from 'react'
import { View, Text, StyleSheet, SafeAreaView, TextInput, TouchableOpacity, FlatList } from 'react-native'
import { Logo } from '../../components/logo'
import { Ionicons } from '@expo/vector-icons'
import { List } from '../../components/list'
import { useNavigation } from '@react-navigation/native'
import { Text as MotiText } from 'moti'


import api from '../../services/api';

export function Home() {
    const [imputValue, setImputvalue] = useState('')
    const [data, setData] = useState('')
    const navigation = useNavigation();

    useEffect(() => {
        async function fetchData() {
            const result = await api.get("/foods")
            setData(result.data)
        }
        fetchData();
    }, [])

    function handleSeach() {
        if (!imputValue) {
            return
        }
        let input = imputValue
        setImputvalue("")
        navigation.navigate("Search", { name: input })
    }


    return (
        <SafeAreaView style={styles.container}>
            <Logo />
            <MotiText style={styles.title} from={{
                opacity: 0,
                translateY: 15,
            }}
                animate={{
                    opacity: 1,
                    translateY: 0,
                }}
                transition={{
                    delay: 100,
                    type: "timing",
                    duration: 650
                }}
            >Encontre a receita</MotiText>
            <MotiText style={styles.title} from={{
                opacity: 0,
                translateY: 15,
            }}
                animate={{
                    opacity: 1,
                    translateY: 0,
                }}
                transition={{
                    delay: 100,
                    type: "timing",
                    duration: 850
                }}
            >que combina com você</MotiText>
            <View style={styles.form}>
                <TextInput
                    placeholder="Digite o nome da comida..."
                    value={imputValue}
                    onChangeText={(text) => setImputvalue(text)}
                    style={styles.input}
                />
                <TouchableOpacity onPress={handleSeach}>
                    <Ionicons name="search" size={28} color="#00CDFF" />
                </TouchableOpacity>
            </View>
            <FlatList
                data={data}
                keyExtractor={(item) => String(item.id)}
                renderItem={({ item }) => <List data={item} />}
                showsHorizontalScrollIndicator={false}
            />
        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F3F9FF',
        paddingTop: 36,
        paddingStart: 14,
        paddingEnd: 14
    },
    title: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#000000'
    },
    form: {
        backgroundColor: '#FFFFFF',
        width: '100%',
        borderRadius: 8,
        marginTop: 16,
        marginBottom: 16,
        borderWidth: 1,
        borderColor: '#ECECEC',
        paddingLeft: 8,
        paddingRight: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    input: {
        width: '90%',
        maxWidth: '90%',
        height: 54,
    }
})