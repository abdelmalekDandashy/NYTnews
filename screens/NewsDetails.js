
import React from 'react'
import { View, ScrollView, StyleSheet, Image ,FlatList, Text, Button, TouchableOpacity, Share } from 'react-native';
import { Card } from 'react-native-elements';
const NewsDetails = ({route}) => {
    const onShare = async (data) => {
        try {
          const result = await Share.share({
            message:
            data.web_url,
          });
          if (result.action === Share.sharedAction) {
            if (result.activityType) {
              // shared with activity type of result.activityType
            } else {
              // shared
            }
          } else if (result.action === Share.dismissedAction) {
            // dismissed
          }
        } catch (error) {
          alert(error.message);
        }
      };
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
                  <TouchableOpacity onPress={()=>onShare(data)}>
                      <Text style={{color:"skyblue",fontSize:18,fontWeight:"bold",marginTop:"30%"}}>
                          share !
                      </Text>
                  </TouchableOpacity>
    </View>
  )
}

export default NewsDetails

const styles = StyleSheet.create({})