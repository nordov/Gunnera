import { RECEIVE_LISTINGS } from '../../actions/listing_actions'

const listingsReducer = (oldState = {}, action) => {
    Object.freeze(oldState)
    switch(action.type){
        case RECEIVE_LISTINGS:
            return Object.assign({}, oldState, action.listings);
        default:
            return oldState;
    }
};

export default listingsReducer;