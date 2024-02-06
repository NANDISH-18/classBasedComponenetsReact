import React from "react";

class MovieCard extends React.Component{
    
    

    // handleFav= ()=>{
    //     this.setState({
    //         fav:  !this.state.fav
    //     })
    // }

    // addStar = () => {
    //     // this.state.star = this.state.star += 0.5 ;
    //     // console.log("Star increase")
    //     // Form 1
    //     // this.setState({
    //     //     star: this.state.star + 0.5
    //     // })

    //     // Form 2
    //     if(this.state.star >= 5){
    //         return;
    //     }
    //     this.setState((prevState) => {
    //         return {
    //             star: prevState.star + 0.5
    //         }
    //     })

    // }

    // decStar = () => {
    //     if(this.state.star <=0 ){
    //         return;
    //     }
    //     this.setState({
    //         star: this.state.star  - 0.5
    //     })
    // }

    render(){
        const {title, plot, price,poster, rating,star, fav, isInCart} = this.props.movies
        return(
            <div className="main">
                <div className="movie-card">
                    <div className="left">
                        <img src={poster} />
                    </div>

                    <div className="right">
                        <div className="title">{title}</div>
                        <div className="plot">{plot}</div>
                        <div className="price">Rs. {price}</div>

                        <div className="footer">
                        <div className="rating">{rating}</div>
                        <div className="star-dis">
                            <img onClick={() => {this.props.reduceStar(this.props.movies)}} className="str-btn" alt="decrease" src="https://cdn-icons-png.flaticon.com/128/43/43625.png" />
                            <img className="stars" src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png" />
                            <img  className="str-btn" onClick={()=> {this.props.addStar(this.props.movies)}}  alt="increase" src="https://cdn-icons-png.flaticon.com/128/3524/3524388.png" />
                            <span className="starCount">{star}</span>
                        </div>
                        {/* {fav ? <button onClick={this.handleFav} className="favourite-btn">Favourite</button> : 
                        
                        <button onClick={this.handleFav} className="unfavourite-btn">Un-Favourite</button>} */}
                        <button onClick={()=> {this.props.toggleFavorite(this.props.movies)}} className={fav ? 'favourite-btn' : 'unfavourite-btn'}>{fav ? 'Favourite':  'Unfavorite'}</button>
                        
                        <button onClick={()=> {this.props.toggleCard(this.props.movies)}} className={!isInCart ? 'cart-btn' : 'unfavourite-btn'}>{!isInCart ? 'Add to cart':  'Remove Cart'}</button>

                        </div>
                    </div>


                </div>
            </div>
        )
    }
    
}

export default MovieCard;
