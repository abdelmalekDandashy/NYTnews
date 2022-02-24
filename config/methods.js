/* eslint-disable prettier/prettier */

import {
    Proxy
} from './fetch';
import * as P from './fetch';
import {
    Alert
} from 'react-native'

let myProxy = new Proxy();

export async function Get_News_by_Query(query) {
    try{
        let result = await myProxy.Get_News_by_Query(query);
        return {
            docs: result?.response?.docs,
            error: false
        }
    }catch(err){
      //  console.log(err)
        return {
            docs:null,
            error: true
        }
    }
}
export async function Get_More_news(number) {
    try{
        let result = await myProxy.Get_More_News(number);
        return {
            docs: result?.response?.docs,
            error: false
        }
    }catch(err){
      //  console.log(err)
        return {
            docs:null,
            error: true
        }
    }
}