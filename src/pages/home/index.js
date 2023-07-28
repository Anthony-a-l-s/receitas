import { useState, useEffect }  from 'react'
import {View ,Text, StyleSheet, SafeAreaView, TextInput, TouchableOpacity,FlatList} from 'react-native'
import { Logo } from '../../components/logo'
import { Ionicons } from '@expo/vector-icons'
import {List} from '../../components/list'


export function Home(){
    const [imputValue, setImputvalue] = useState('')

    useEffect(()=>{
      function fetchData (){
        console.log('vrox')
      }
      fetchData
    }, [])

    function handleSeach () {
      console.log(imputValue)
    }

    const api = [
        {
            id : 1,
            name: 'Macarrão',
            url: 'https://lh5.googleusercontent.com/p/AF1QipM6okmeDO-VaQaF4kKlV7g4zEwdUqZEPV1I0OAw=w427-h240-k-no',
        },
        {
            id : 2,
            name: 'Strogonoff',
            url: 'https://lh5.googleusercontent.com/p/AF1QipOUjyEvaOFI1xPVaiwN0WsImatpj-ZeRocuMa0D=w408-h271-k-no',
        },
        {
            id : 3,
            name: 'Batata frita',
            url: 'https://lh5.googleusercontent.com/p/AF1QipM6okmeDO-VaQaF4kKlV7g4zEwdUqZEPV1I0OAw=w427-h240-k-no',
        },
        {
            id : 4,
            name: 'Suco',
            url: 'https://lh5.googleusercontent.com/p/AF1QipM6okmeDO-VaQaF4kKlV7g4zEwdUqZEPV1I0OAw=w427-h240-k-no',
        },
        {
            id : 5,
            name: 'Feijoada',
            url: 'https://lh5.googleusercontent.com/p/AF1QipM6okmeDO-VaQaF4kKlV7g4zEwdUqZEPV1I0OAw=w427-h240-k-no',
        }

    ]
       
    
    return(
        <SafeAreaView style={styles.container}>
            <Logo/>
            <Text style={styles.title}>Seu caderno de receitas</Text>
            <View style={styles.form}>
                <TextInput
                 placeholder="Digite o nome da comida..."
                 value={imputValue}
                 onChangeText={(text)=> setImputvalue(text)}
                 style={styles.input}
                />
                <TouchableOpacity onPress={handleSeach}>
                    <Ionicons name="search" size={28} color="#00CDFF"/>
                </TouchableOpacity>
            </View>
            <FlatList
            data={api}
            keyExtractor={(item) => String(item.id)}
            renderItem={({item})=> <List data={item} />}
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
   title:{
        fontSize: 26,
        fontWeight: 'bold',
        color: '#000000'
   },
   form:{
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
   input:{
    width: '90%',
    maxWidth:'90%',
    height: 54,
   }
})