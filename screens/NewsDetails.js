
import React from 'react'
import { View, ScrollView, StyleSheet, Image ,FlatList, Text, Button, TouchableOpacity} from 'react-native';
import { Card } from 'react-native-elements';
const NewsDetails = ({route}) => {
    const data = route.params.item
    //console.log(""data)
  return (
    <View style={{flex:1,marginHorizontal:"5%",alignItems:"center"}}> 
    <Image
                  style={{ width:"100%",height:"40%",marginTop:"5%"}}
                  source={{
                    uri:
                    data.multimedia[0]?.url? 
                      `https://www.nytimes.com/${data.multimedia[0]?.url}`
                      : 
                      'https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled.png',
                  }}
                />
                <Text style={{fontStyle:'italic',fontWeight:"bold"}}>  CATEGORY: {data.type_of_material}</Text>
                <Text style={{textAlign:"center", marginTop:"3%",fontSize:18}}>{data.abstract}</Text>
                  <TouchableOpacity>
                      <Text style={{color:"skyblue",fontSize:18,fontWeight:"bold",marginTop:"30%"}}>
                          share !
                      </Text>
                  </TouchableOpacity>
    </View>
  )
}

export default NewsDetails

const styles = StyleSheet.create({})