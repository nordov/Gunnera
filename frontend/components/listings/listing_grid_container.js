import React from 'react';
import { connect } from 'react-redux';
import ListingGrid from './listing_grid';
import { requestListings } from '../../actions/listing_actions'

const mapStateToProps = state => ({
    listings: state.entities.listings
});

const mapDispatchToProps = dispatch => ({
    requestListings: () => dispatch(requestListings())
});

export default connect(mapStateToProps, mapDispatchToProps)(ListingGrid);