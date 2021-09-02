import React from 'react';
import './collection-overview.styles.scss';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CollectionPreview from '../collection-Preview/collection-preview';
import { selectCollections } from '../../redux/shop/shop.selector';

const CollectionOverView = ({collections}) => (
    <div className="collections-overview">
          {
                    collections.map(({ id, ...otherCollecionsProps }) => (
                        <CollectionPreview key={id} {...otherCollecionsProps} />
                    ))}
          </div>
            );



const mapStateToProps = createStructuredSelector({
    collections: selectCollections
});

export default connect (mapStateToProps)(CollectionOverView);