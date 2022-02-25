import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Searchbar } from 'react-native-paper'
import { useDispatch, useSelector } from 'react-redux';
import CardForm from '../components/CardForm';
import * as functions from '../config/methods';
import * as actions from '../store/actions/Actions';
import { useIsFocused } from '@react-navigation/native';
import LottieView from 'lottie-react-native';
const SearchScreen = ({route,navigation}) => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setloading] = useState(false);
  const isFocused = useIsFocused();
  useEffect(() => {
   if (!isFocused){
   // console.log('shatghalet')
   dispatch(actions.ClearSearch(null))
   }
  }, [isFocused])
  useEffect(() => {
    if (searchQuery.length == 0){
    // console.log('shatghalet')
    dispatch(actions.ClearSearch(null))
    }
   }, [searchQuery])
  
  const mySearchData = useSelector(state => state.Searchdata.SearchData)
  //const dataSearch = route.params.keyword
  console.log('route  ' + JSON.stringify(mySearchData))
  const navigate =(x,item)=>{
    navigation.navigate(x,{item})
  }
  async function getSearchData(keyword) {
    setloading(true)
    let result = await functions.Get_by_search(keyword);
    if (result.SearchData !== null) {
      dispatch(actions.getSearch(result))
    } 
}
useEffect(() => {
  if (mySearchData != null){
    setloading(false)
  }
 }, [mySearchData])
  return (
    <View style={{backgroundColor:"white" , flex:1}}>
    <FlatList

    ListHeaderComponent={ 
        <Searchbar
       placeholder="Search"
       onChangeText={text=>setSearchQuery(text)}
       value={searchQuery}
       onSubmitEditing={()=>getSearchData(searchQuery)}
       
     /> 
      }
style={{height:"98%"}}
data={mySearchData}
renderItem={
    ({item}) => {
    return (
      <CardForm item={item} navigateTo={navigate}/>
    )
  }
}
keyExtractor={(item) => item._id}
/>
{loading ? 
  <LottieView source={require('../assets/images/search.json')} autoPlay loop />
: null } 
{mySearchData== null && loading == false? 
 <LottieView source={require('../assets/images/69292-news.json')} autoPlay loop style={{marginTop:'20%'}} />
 : 
 null 
}
</View>
  )
}

export default SearchScreen

const styles = StyleSheet.create({})