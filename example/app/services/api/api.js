const axios = require('axios');

import { navigate } from '../../navigators/';
import Config from 'react-native-config';
import * as storage from "../../utils/storage"

export default async (endpoint, options) => {

    let fullURL = endpoint;
    if (
        !endpoint.startsWith('http') &&
        !endpoint.startsWith('//') &&
        !options.keepStableUrl
    ) {
        // validate endpoint
        endpoint = endpoint.startsWith('/') ? endpoint : '/' + endpoint;
        const appApiUrl = Config.API_URL
        // calc url
        fullURL =
            endpoint.indexOf(appApiUrl) === -1 ? appApiUrl + endpoint : endpoint;
    }

    let token = await storage.load("access_token");
    let defaultLang = 'vi-VN';

    return new Promise((resolve, reject) => {
        axios({
            method: options.method,
            url: fullURL,
            timeout: 15000,
            headers: token
                ? {
                    'Accept-Language': defaultLang,
                    Authorization: 'Bearer ' + token,
                    ...options.headers,
                }
                : {

                    'Accept-Language': defaultLang,
                    ...options.headers,
                },
            data: options.data,
            params: options.params,
        }).then((response) => {
            // console.log('response fetch', response)
            resolve(response);
        }).catch(async (err) => {
            if (err.response && (err.response.status === 401 || err.response.data.code === 401)) {
                navigate("Login")
            }
            reject(err);
        });
    });
};
