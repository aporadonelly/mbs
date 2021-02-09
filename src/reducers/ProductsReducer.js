import { productsActionType } from '../actions/constants';

const initialState = {
    product: null,
    productRequirements: [],
    products: [],
    loading: true,
    error: {},
    category: null
};

export default function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case productsActionType.PRODUCTS_CREATE_SUCCESS:
            return {
                ...state,
                product: payload,
                loading: false
            };
        case productsActionType.PRODUCTS_CREATE_ERROR:
        case productsActionType.CATEGORY_FETCH_ERROR:
            return {
                ...state,
                error: payload,
                loading: false
            };
        case productsActionType.CATEGORY_FETCH_SUCCESS:
            return {
                ...state,
                category: payload,
                loading: false
            };
        default:
            return state;
    }
}
