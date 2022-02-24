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

    let result = await myProxy.Get_News_by_Query(query);
    console.log(result);
    if (result?.response?.docs !== null && result?.response?.docs !== undefined) {
        return {
            docs: result?.response?.docs
        }
    } else {
        return {
            error: true
        }
    }

}