import React from "react";
import {data } from '../data'
import Navbar from "./navbar";
import Moviecard from "./moviecard";
import { storecontext } from "..";
import { addmovies, setfavourite } from "../actions";
class App extends React.Component {
  componentDidMount(){
    //used for 
    //api call
    //dispatch actoins
    this.props.store.subscribe(()=>{
      console.log('subscribe')
      console.log(this.props.store.getState())
      this.forceUpdate();
    })
    this.props.store.dispatch(addmovies(data))
    
  } 
  ismoviefav=(movie)=>{
    const {movies}=this.props.store.getState();
    const index =movies.favourite.indexOf(movie) ;
    if(index!== -1){
      return true;
    } 
    return false; 
  }
onchange=(val)=>{
  this.props.store.dispatch(setfavourite(val));
}
  render(){
    const {movies ,search} =this.props.store.getState()//{movie:{},search{}}

  const {list,favourite,showfav } =movies//{movie:{},search{}}
  const display=showfav?favourite:list
  return (
    <div className="App">
      {console.log(search )}
     <Navbar dispatch={this.props.store.dispatch} search={search}/>
     <div className="main">
       <div className="tabs">
         <div className={`tab ${showfav?"":'active-tabs'}`} onClick={()=>{this.onchange(false)}}>Movies</div>
         <div className={`tab ${showfav?'active-tabs':""}`} onClick={()=>{this.onchange(true)}}>favourite</div>
       </div>
       <div className="list">
         {display.map((movie,index)=>(
           <Moviecard movie={movie}
            key={index}
             dispatch={this.props.store.dispatch}
             isfav={this.ismoviefav(movie)}
             />
         ))}
       </div>
       {display.length===0?<div className="no-movies">No movies</div>:null}
     </div>
     {console.log(list)}
    </div>
    
  );
}
}
class Appwraper extends React.Component{
  render(){
    return(
      <storecontext.Consumer>
        {(store)=>
          <App store={store}/>
         }
      </storecontext.Consumer>
    )
  }
}
export default Appwraper;
