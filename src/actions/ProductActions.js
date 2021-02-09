import axios from 'axios';
import Amplify, { Auth } from 'aws-amplify';
// import { config, awsAuthConfig } from '../config';
import { awsAuthConfig } from '../config';
import { productsActionType } from './constants';

Amplify.configure({
    Auth: awsAuthConfig
});

// const ROOT_URL = config.MBS_CMS_API_URL;

const getHeaders = async () => {
    const session = await Auth.currentSession();
    const token = session.accessToken.jwtToken;
    const HEADERS = {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        }
    };
    return HEADERS;
};

export const createNewProduct = (formData, history) => async dispatch => {
    try {
        const response = await axios.post(
            // `${ROOT_URL}/cms-api/products/`,
            `https://test.api.ewallet.pearlpay.io/cms-api/products/
            `,
            formData,
            await getHeaders()
        );
        if (response.status === 201) {
            dispatch({
                type: productsActionType.PRODUCTS_CREATE_SUCCESS,
                payload: response.data
            });
        }
        history.push('/products');
    } catch (e) {
        dispatch({
            type: productsActionType.PRODUCTS_CREATE_ERROR,
            payload: e
        });
    }
};

export const getCategory = () => async dispatch => {
    try {
        const res = await axios.get(
            'https://test.api.ewallet.pearlpay.io/cms-api/product-categories/',
            await getHeaders()
        );
        if (res.status === 200) {
            dispatch({
                type: productsActionType.CATEGORY_FETCH_SUCCESS,
                payload: res.data.results
            });
        }
    } catch (e) {
        dispatch({
            type: productsActionType.CATEGORY_FETCH_SUCCESS,
            payload: e
        });
    }
};
