const INITIAL_STATE = {
    sections: [
        {
            title: 'mens',
            imageUrl: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
            id: 1,
            linkUrl: 'shop/mens'
        },
        {
            title: 'Jewelery',
            imageUrl: 'https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg',
            id: 2,
            linkUrl: 'shop/jewelery'
        },
        {
            title: 'Electronics',
            imageUrl: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
            id: 3,
            linkUrl: 'shop/electronics'
        },
        {
            title: 'Womens clothing',
            imageUrl: "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
            id: 4,
            linkUrl: 'shop/womens'
        },
        {
            title: 'Hats',
            imageUrl: 'https://i.ibb.co/ZYW3VTp/brown-brim.png',
            id: 5,
            size: 'large',
            linkUrl: 'sho/hats'
        },
        {
            title: 'Sneakers',
            imageUrl: 'https://i.ibb.co/0s3pdnc/adidas-nmd.png',
            id: 6,
            linkUrl: 'shop/sneakers'
        },
        {
            title: 'Jackets',
            imageUrl: 'https://i.ibb.co/XzcwL5s/black-shearling.png',
            id: 8,
            linkUrl: 'shop/jackets'
        }
    ]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        default:
           return state; 
    }
};

export default directoryReducer;