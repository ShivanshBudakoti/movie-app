export const Add_movies ="Add_movies";
export const Add_favourite ="Add_favourite";
export const Remove_favourite ="Remove_favourite";
export const Set_favourite ="Set_favourite";
export const Add_Search_Result=" Add_Search_Result"
export const Add_movie_to_list='Add_movie_to_list'
export function addmovies(movies){
    return{
      type:Add_movies,
      movies:movies
    }
}
export function addfavourite(movies){
    return{
      type:Add_favourite,
      movies:movies
    }
}
export function removefavourite(movie){
  return{
    type:Remove_favourite,
    movie:movie
  }
}
export function setfavourite(val){
  return{
    type:Set_favourite,
    val
  }
}
export function addmovietolist(movie){
  return{
    type:Add_movie_to_list,
    movie
  }
}
export function handleMovieSearch(movie){
 return function(dispatch){
  const url =`http://www.omdbapi.com/?apikey=2e26b7a4&t=${movie}`;
 fetch(url)
 .then(res=>res.json())
 .then(movie=>{console.log('res',movie)
 // dispatach an action
 dispatch(addMovieSearchResult(movie)) 
 }
 );
}
}
export function addMovieSearchResult(movie){
  return{
    type:Add_Search_Result,
    movie
  }
}