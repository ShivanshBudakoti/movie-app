import React from "react";
import { storecontext } from "..";
 import {handleMovieSearch,addmovietolist} from "../actions"
import { search } from "../reducer";
//import { data } from "../data";
class Navbar extends React.Component {
      constructor(props){
        super(props);
        this.state={
          searchText:""
        }
      }
      handleAddTomovies=(movie)=>{
      this.props.dispatch(addmovietolist(movie));
      this.setState({
      showSearchResult:true 
        })
      }
   
      handlechange=(e)=>{
        this.setState({searchText:e.target.value})
      }
      handleSearch=()=>{
        const {searchText}=this.state;
        this.props.dispatch(handleMovieSearch(searchText))
      }
    render(){
      const {result,showSearchResult}=this.props.search
      console.log(result)
  return (
    
    <div className= "nav">
        <div className="search-container">
            <input onChange={this.handlechange}/>
            <button id="search-btn" onClick={this.handleSearch}>search</button>
            {showSearchResult&&
            <div className="search-results"> 
              <div className="search-result">
                <img src={result.Poster} alt=""/>
                <div className="movie-info">
                  {console.log(result)}
                  <span>{result.Title}</span>
                  <p>{result.Plot}</p>
                  <button onClick={()=>{this.handleAddTomovies(result)}}>Add to movies</button>
                </div>
                </div>
                </div>
              }
        </div>
    
  </div>
  );
}
}
class navbarwraper extends React.Component{
  render(){
    return(
      <storecontext.Consumer>
      {(store)=><Navbar dispatch={store.dispatch} search={this.props.search}/>}
      </storecontext.Consumer>
    
  )
    }
}
export default navbarwraper;
