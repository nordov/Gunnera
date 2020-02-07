import React from 'react';


class ListingGrid extends React.Component {
 
    componentDidMount(){
        this.props.requestListings();
    } 


    render() {
        const {listings} = this.props;
        //debugger;
        return(
            <div className="grid">
                {Object.keys(listings).map((key) => <ListingGridItem key={key} listing={listings[key]} />)}
            </div>
        );
    }

}

export default ListingGrid;

const ListingGridItem = ({listing}) => (
        <div className="grid-item">
            <img src="https://images.pexels.com/photos/1049302/pexels-photo-1049302.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
            <p>{listing.title}</p>
            <p><span className="price">${listing.price}</span> / night</p>
        </div>

);