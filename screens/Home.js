/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react'
import { Alert, StyleSheet, Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import * as functions from '../config/methods';
import * as actions from '../store/actions/Actions';

const Home = ({ navigation }) => {
    const dispatch = useDispatch();
    const [docs, setDocs] = useState('');
    const [subject, setSubject] = useState('');

    const homeNewsHandler = (docs) => {
        dispatch(actions.getNews(docs));
    }

    async function getHomeNews(subject) {
        let result = await functions.Get_News_by_Query(subject);
        if (result !== null && result !== undefined) {
            setDocs(result);
            homeNewsHandler(docs);
        }
    }

    useEffect(() => {
        getHomeNews();
    }, [])

    return (
        <View
            style={styles.container}
        >
            <Text>
                Home
            </Text>
        </View>
    );
};

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'blue',
    },

});
