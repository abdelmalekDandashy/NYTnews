/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
import React, { useState, useEffect, useRef } from 'react'
import { View, ScrollView, StyleSheet, Image, FlatList, ActivityIndicator, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import * as functions from '../config/methods';
import * as actions from '../store/actions/Actions';
// import { Text, Card, Button, Icon } from 'react-native-elements';
import PlaceHolder from './PlaceHolder';
import { Button, Searchbar } from 'react-native-paper';
import CardForm from '../components/CardForm';
import { useScrollToTop } from '@react-navigation/native';

const Home = ({ navigation }) => {
    const ref = React.useRef(null);
    useScrollToTop(ref);
    const dispatch = useDispatch();
    const navigate = (x, item) => {
        navigation.navigate(x, { item })
    }
    //states 
    const [loading, setloading] = useState(false);
    const [pgNum, setpgNum] = useState(0);
    //selectors
    const myNews = useSelector(state => state.News.docs)
    //get more articles function
    const GetmoreNews = async (pgNum) => {
        setpgNum(pgNum + 1)
        setloading(true)
        let MoreData = await functions.Get_More_news(pgNum);
        if (MoreData.docs !== null) {
            setloading(false)
            dispatch(actions.getMoreNews(MoreData.docs))
        } else {
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
    // useeffect 
    useEffect(() => {
        getHomeNews();
    }, [])


    return (
        <View >

            {myNews ?
                <FlatList 
                ref={ref}
                    style={{ height: "98%" }}
                    onEndReached={() =>
                        GetmoreNews(pgNum)
                    }
                    data={myNews}
                    renderItem={
                        ({ item }) => {
                            return (
                                <CardForm item={item} navigateTo={navigate} />
                            )
                        }
                    }
                    keyExtractor={(item) => item._id}
                // numColumns={3}
                /> : <PlaceHolder />}
            {loading ? <View style={{ flex: 1 }}>
                <ActivityIndicator size="large" />
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
    },
});
