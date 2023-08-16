import {View ,Text, StyleSheet, SafeAreaView, FlatList} from 'react-native'
import { useState, useEffect } from 'react'
import{ getFavorites } from '../../utils/storage'
import { useIsFocused } from '@react-navigation/native'
import {List} from '../../components/list'

export function Favorites(){

    const [receipes, setReceipes] = useState([]);
    const isFocused = useIsFocused();

    useEffect(()=>{
        let isActive = true
        async function getReceipes(){
           const result = await getFavorites('@appreceitas')
           if(isActive){
             setReceipes(result)
           }
        }
        if(isActive){
            getReceipes();
        }

        return()=>{
             isActive = false;
        }
    },[isFocused])

    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Reeceitas favoritas</Text>
            {receipes.length === 0 && (
               <Text>você não tem nenhum receita salva.</Text>
            )}
            <FlatList
            showsVerticalScrollIndicator={false}
            data={receipes}
            keyExtractor={(item)=> item.id}
            renderItem={({item})=> <List data={item}/>}
   
            />
        </SafeAreaView>
      
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f3f9ff',
        paddingStart: 14,
        paddingEnd: 14,
        paddingTop: 36
    },
    title:{
        color: '#000',
        fontWeight: 'bold',
        fontSize: 24,
    }

})