const INITIAL_STATE = {
    sections: [
        {
            title: 'Laptops',
            imageUrl: 'https://i.ibb.co/JF36F5b/mac2.jpg',
            id: 1,
            linkUrl: 'laptops'
        },
        {
            title: 'Phones',
            imageUrl: 'https://i.ibb.co/P9vJcGQ/iphone.jpg',
            id: 2,
            linkUrl: 'phones'
        },
        {
            title: 'TV',
            imageUrl: 'https://i.ibb.co/r2c8h8K/TV2.jpg',
            id: 3,
            linkUrl: 'tv'
        },
        {
            title: 'Smart Home',
            imageUrl: 'https://i.ibb.co/dtJQf0X/smart2.jpg',
            id: 4,
            linkUrl: 'smartHome'
        },
        {
            title: 'Whats the best',
            imageUrl: 'https://i.ibb.co/GsLSGWw/wash.png',
            id: 5,
            size: 'large',
            linkUrl: 'theBest'
        },
        {
            title: 'Washing Machine',
            imageUrl: 'https://i.ibb.co/P5QfYzn/Wash.jpg',
            id: 6,
            linkUrl: 'washingMachine'
        },
        {
            title: 'Home & Kitchen',
            imageUrl: 'https://i.ibb.co/sP4gz9M/vac.jpg',
            id: 8,
            linkUrl: 'Home&Kitchen'
        },

        {
            title: 'Personal Fitness',
            imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
            size: 'xl',
            id: 9,
            linkUrl: 'fitness'
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