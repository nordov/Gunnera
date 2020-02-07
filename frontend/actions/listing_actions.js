// ADD DELETE AND UPDATE WHEN WORKING ON PROFILE FEATURE
import { fetchListings,
         fetchListing,
         postListing } from '../util/listing_api_util';

export const RECEIVE_LISTINGS = 'RECEIVE_LISTINGS';
// export const RECEIVE_LISTING = 'RECEIVE_LISTING';

const receiveListings = listings => ({
    type: RECEIVE_LISTINGS,
    listings
})

export const requestListings = () => dispatch => { 
    return(
    fetchListings()
    .then(listings => dispatch(receiveListings(listings))));
}