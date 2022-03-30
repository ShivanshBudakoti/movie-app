import React from "react";
import {addfavourite,removefavourite} from '../actions'
class Moviecard extends React.Component {
    handlefav=()=>{
    const{movie}=this.props;
    this.props.dispatch(addfavourite(movie))
    }
    handleunfav=()=>{  
        const {movie}=this.props
        this.props.dispatch(removefavourite(movie))
        }
    render(){
        const {movie,isfav}=this.props;
        
  return (
    <div className= "movie-card">
       <div className="left">
           <img src={movie.Poster}/>
       </div>
       <div className="right"> 
        <div className="title">{movie.Title}</div>
        <div className="plot">{movie.Plot}</div>
        <div className="footer">
            <div className="rating">{movie.imdbRating}</div>
            {
                isfav
                ?<button className="unfavourite-btn" onClick={this.handleunfav}>unFavourite</button>
                :<button className="favourite-btn" onClick={this.handlefav}>Favourite</button>

            }        
        </div>
       </div>
  </div>
  );
}
}

export default Moviecard;
