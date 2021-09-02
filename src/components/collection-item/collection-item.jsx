import React from 'react';
import './collection-item.styles.scss';
import { connect } from 'react-redux';


import { addItem } from '../../redux/cart/cart.actions';

//Material UI import
import { Button } from '@material-ui/core';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

const CollectionItem = ({ item, addItem }) => {
    const {name, price, imageUrl} = item;
    
    return(
    <div className='collection-item'>
        <div
            className='image'
            style={{
                backgroundImage: `url(${imageUrl})`
                
            }}
        />
        <Button className="add-to-cart" variant="contained" color="primary" onClick={()=> addItem(item)} startIcon={<AddShoppingCartIcon />}> Add to Cart </Button>
        <div className='collection-footer'>
            <span className='name'>{name}</span>
            <span className='price'>{price}</span>
            
        </div>

    </div>
);
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

export default connect(
  null,
  mapDispatchToProps
)(CollectionItem);
