import * as type from './actionTypes'
export const actionGetProductById = id => {
    return {
        type : type.GET_ITEM_BY_ID,
        id
    }
}