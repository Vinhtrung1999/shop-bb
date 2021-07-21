import * as type from '../actions/actionTypes'
var initialState = [
    {
        id: "01",
        type: 0,
        name: "ANGEL B BOBUI LOGO TEES/ BONE WHITE",
        price: 550000,
        img: [
            "https://bobui.vn/cms/wp-content/uploads/2021/06/angelB-be-front.jpg",
            "https://bobui.vn/cms/wp-content/uploads/2021/06/angelB-be-back.jpg"
        ],
        size:['S','M','L','XL','XXL']
        
    },
    {
        id: "02",
        type: 0,
        name: "BEBIBO MONOGRAM POLO SHIRT/ BLACK",
        price: 450000,
        img : [
            "https://bobui.vn/cms/wp-content/uploads/2021/05/polo-BBB-700.jpg",
            "https://bobui.vn/cms/wp-content/uploads/2021/05/IMG_7587-1.jpg",
            'https://bobui.vn/cms/wp-content/uploads/2021/05/IMG_7593-1.jpg'
        ],
        size:['S','M','L','XL','XXL']

    },
    {
        id: "03",
        type: 1,
        name: "ANGELS BOBUI LOGO REFLECTIVE HOODIE/ RED",
        price: 750000,
        img :[
            "https://bobui.vn/cms/wp-content/uploads/2021/06/hoodieredfront.jpg",
            "https://bobui.vn/cms/wp-content/uploads/2021/06/hoodieredback.jpg",
            'https://bobui.vn/cms/wp-content/uploads/2021/06/hoodieredfrontglowing.jpg'
        ],
        size:['XXL']
    },
    {
        id: "04",
        type: 1,
        name: "ANGELS BOBUI LOGO HOODIE/ GREY MELANGE",
        price: 750000,
        img : [
            "https://bobui.vn/cms/wp-content/uploads/2021/06/hoodiegrayfront.jpg",
            "https://bobui.vn/cms/wp-content/uploads/2021/06/hoodiegrayback.jpg"
        ],
        size:['M','L','XL','XXL']
    },
    {
        id: "05",
        type: 2,
        name: "ANGELS OVERPRINTED SHORT/ GREY MELANGE",
        price: 500000,
        img : [
            "https://bobui.vn/cms/wp-content/uploads/2021/04/8-TE9201-1...jpg",
            "https://bobui.vn/cms/wp-content/uploads/2021/04/8-TE9201-2...jpg"        
        ],
        size:['S','M','XL','XXL']
    },
    {
        id: "06",
        type: 2,
        name: "ANGELS OVERPRINTED SHORT/ BLACK",
        price: 500000,
        img : [
            "https://bobui.vn/cms/wp-content/uploads/2021/04/BB-S01-02....jpg",
            "https://bobui.vn/cms/wp-content/uploads/2021/04/BB-S01-02......jpg"
        ],
        size:['S','XL','XXL']

    },
    {
        id: "07",
        type: 3,
        name: "ANGEL LOGO SWEATPANT/ BLACK",
        price: 500000,
        img : [
            "https://bobui.vn/cms/wp-content/uploads/2021/04/1-TE9206-1-None-1-copy.jpg",
            "https://bobui.vn/cms/wp-content/uploads/2021/04/1-TE9206-2-None-1-copy.jpg",
            'https://bobui.vn/cms/wp-content/uploads/2021/04/3.jpg',
            'https://bobui.vn/cms/wp-content/uploads/2021/04/3b.jpg'
        ],
        size:['S','M','L','XL']

    }
]

export const products = (state = initialState, action) => {
    switch (action.type) {
        case(type.GET_ITEM_BY_ID):
            state = state.filter(product => product.id === action.id)
            return [...state]
        default: return [...state]
    }
}