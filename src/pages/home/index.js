import { useState, useEffect } from 'react'
import { View, Text, StyleSheet, SafeAreaView, TextInput, TouchableOpacity, FlatList } from 'react-native'
import { Logo } from '../../components/logo'
import { Ionicons } from '@expo/vector-icons'
import { List } from '../../components/list'


import api from '../../services/api';

export function Home() {
    const [imputValue, setImputvalue] = useState('')
    const [data, setData] = useState('')

    useEffect(() => {
        async function fetchData() {
            const result = await api.get("/foods")
            console.log(result.data)
            setData(result.data)
        }
        fetchData();
    }, [])

    function handleSeach() {
        console.log(imputValue)
    }

    const db = [
        {
            id: 1,
            name: 'Macarrão',
            imageLink: 'https://www.sabornamesa.com.br/media/k2/items/cache/665e96c29d55b13435d7a8d39deafe53_XL.jpg',
            video: 'https://www.youtube.com/watch?v=kzI9HHOxi1I',
            numeroIngredientes: 3,
            ingredients: [
                {
                    id: 1,
                    name: 'Macarrão espaguete',
                    amount: '250g',
                },
                {
                    id: 2,
                    name: 'Macarrão espaguete',
                    amount: '250g',
                },
                {
                    id: 3,
                    name: 'Macarrão espaguete',
                    amount: '250g',
                }
            ],
            instructions: [
                {
                    id: 1,
                    description: 'Lavar'

                },
                {
                    id: 2,
                    description: 'Secar'
                },
                {
                    id: 3,
                    description: 'centrifugar'
                }
            ]


        },
        {
            id: 2,
            name: 'Strogonoff de frango',
            imageLink: 'https://assets.unileversolutions.com/recipes-v2/54226.jpg',
            video: 'https://www.youtube.com/watch?v=y9yKuT1m9LI',
            numeroIngredientes: 3,
            ingredients: [
                {
                    id: 1,
                    name: 'Macarrão espaguete',
                    amount: '250g',
                },
                {
                    id: 2,
                    name: 'Macarrão espaguete',
                    amount: '250g',
                },
                {
                    id: 3,
                    name: 'Macarrão espaguete',
                    amount: '250g',
                }
            ],
            instructions: [
                {
                    id: 1,
                    description: 'Lavar'

                },
                {
                    id: 2,
                    description: 'Secar'
                },
                {
                    id: 3,
                    description: 'centrifugar'
                }
            ]
        },
        {
            id: 3,
            name: 'Batata frita',
            imageLink: 'https://www.tendaatacado.com.br/dicas/wp-content/uploads/2022/06/como-fazer-batata-frita-topo.jpg',
            video: 'https://www.youtube.com/watch?v=HyTKGwD6RpQ',
            numeroIngredientes: 3,
            ingredients: [
                {
                    id: 1,
                    name: 'Macarrão espaguete',
                    amount: '250g',
                },
                {
                    id: 2,
                    name: 'Macarrão espaguete',
                    amount: '250g',
                },
                {
                    id: 3,
                    name: 'Macarrão espaguete',
                    amount: '250g',
                }
            ],
            instructions: [
                {
                    id: 1,
                    description: 'Lavar'

                },
                {
                    id: 2,
                    description: 'Secar'
                },
                {
                    id: 3,
                    description: 'centrifugar'
                }
            ]
        },
        {
            id: 4,
            name: 'Palha italiana',
            imageLink: 'https://www.receiteria.com.br/wp-content/uploads/palha-italiana-rotated.jpg',
            video: 'https://www.youtube.com/watch?v=RX_WnfgLYGs',
            numeroIngredientes: 3,
            ingredients: [
                {
                    id: 1,
                    name: 'Macarrão espaguete',
                    amount: '250g',
                },
                {
                    id: 2,
                    name: 'Macarrão espaguete',
                    amount: '250g',
                },
                {
                    id: 3,
                    name: 'Macarrão espaguete',
                    amount: '250g',
                }
            ],
            instructions: [
                {
                    id: 1,
                    description: 'Lavar'

                },
                {
                    id: 2,
                    description: 'Secar'
                },
                {
                    id: 3,
                    description: 'centrifugar'
                }
            ]
        },
        {
            id: 5,
            name: 'Coxinha',
            imageLink: 'https://receitinhas.com.br/wp-content/uploads/2017/12/coxinha-de-frango-com-queijo.jpg',
            video: 'https://www.youtube.com/watch?v=pyslNp5YCj8',
            numeroIngredientes: '3',
            ingredients: [
                {
                    id: 1,
                    name: 'Macarrão espaguete',
                    amount: '250g',
                },
                {
                    id: 2,
                    name: 'Macarrão espaguete',
                    amount: '250g',
                },
                {
                    id: 3,
                    name: 'Macarrão espaguete',
                    amount: '250g',
                }
            ],
            instructions: [
                {
                    id: 1,
                    description: 'Lavar'

                },
                {
                    id: 2,
                    description: 'Secar'
                },
                {
                    id: 3,
                    description: 'centrifugar'
                }
            ]
        }

    ]


    return (
        <SafeAreaView style={styles.container}>
            <Logo />
            <Text style={styles.title}>Seu caderno de receitas</Text>
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