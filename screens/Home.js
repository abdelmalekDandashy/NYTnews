/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react'
import { View, ScrollView, StyleSheet, Image ,FlatList,ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import * as functions from '../config/methods';
import * as actions from '../store/actions/Actions';
import { Text, Card, Button, Icon } from 'react-native-elements';
import PlaceHolder from './PlaceHolder';
const Home = ({ navigation }) => {
    const dispatch = useDispatch();

    //states 
    const [loading, setloading] = useState(false);
    const [pgNum, setpgNum] = useState(0); 

    //selectors
    const myNews = useSelector(state => state.News.docs)

//get more articles function
    const GetmoreNews = async(pgNum) => {
        setpgNum(pgNum+1)
        setloading(true)
        let MoreData = await functions.Get_More_news(pgNum);
        if (MoreData.docs !== null) {
            setloading(false)
            dispatch(actions.getMoreNews(MoreData.docs))
        }else{
            setloading(false)
            alert('NOT more data')
        }
    }
// get articles from server
    async function getHomeNews(subject) {
        let result = await functions.Get_News_by_Query(subject);
        if (result.docs !== null) {
            dispatch(actions.getNews(result))
        }
    }
//use effect 
    useEffect(() => {
        getHomeNews();
    }, [])

    return (
        <View>
            {myNews ?  <FlatList
        style={{height:"98%"}}
        onEndReached={()=>
            GetmoreNews(pgNum)
        }
        data={myNews}
        renderItem={
            ({item}) => {
            return (
                <Card>
                <Card.Title>{item.headline.main}</Card.Title>
                <Card.Divider />
                <Card.Image
                  style={{ padding: 0 }}
                  source={{
                    uri:
                    item.multimedia[0]?.url? 
                      `https://www.nytimes.com/${item.multimedia[0]?.url}`
                      : 
                      'https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled.png',
                  }}
                />
                <Text style={{ marginBottom: 10 }}>
                  {item.abstract}
                </Text>
                <Button
            onPress={()=>{navigation.navigate('NewsDetails',{item:item})}}
                  icon={
                    <Icon
                      name="code"
                      color="#ffffff"
                      iconStyle={{ marginRight: 10 }}
                    />
                  }
                  buttonStyle={{
                    borderRadius: 0,
                    marginLeft: 0,
                    marginRight: 0,
                    marginBottom: 0,
                  }}
                  title="VIEW NOW"
                />
                
              </Card>
            )
          }
        }
        keyExtractor={(item) => item._id}
       // numColumns={3}
      /> : <PlaceHolder/>}
       
       {loading?  <View style={{flex:1}}>
          <ActivityIndicator size="large"/>
      </View> 
    : 
    null  
    }
      </View>
    );
};

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
      //  backgroundColor: 'blue',
    },

});
