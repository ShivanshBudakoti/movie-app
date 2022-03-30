import { combineReducers } from "redux";
import { Add_movies ,Add_favourite,Remove_favourite, Set_favourite,Add_movie_to_list, Add_Search_Result} from "../actions";
const initialMovieState={
    list:[],
    favourite:[],
    showfav:false
}
console.log(initialMovieState)
export  function movies(state=initialMovieState,action){
//     if(action.type===Add_movies){
//         return{
//         ...state,
//       list:action.movies
//     }
// }
//     return state;
switch(action.type){
    case Add_movies:
        return{
            ...state,
            list:action.movies
        }
    case Add_favourite:
        return{
            ...state,
            favourite:[action.movies,...state.favourite]
        }  
    case Remove_favourite:
            const filter=state.favourite.filter(movie=>movie.Title!==action.movie.Title)
        return{
            ...state,
            favourite:filter
        }   
        case Set_favourite:
            return{
                ...state,
                showfav:action.val
            }  
        case Add_movie_to_list:
            return{
                ...state,
                list:[action.movie,...state.list]
            }    
        default:
            return state; 
}
}
const initialSearchState={
    result:{},
    showSearchResult:false
}
export function search(state=initialSearchState,action){
    switch(action.type){
        case Add_Search_Result:
             return{
                 ...state,
                 result:action.movie,
                 showSearchResult:true
             }
             case Add_movie_to_list:
                 return{
                    ...state,
                    showSearchResult:false
                 }
               
            default:
                return state; 
    }
}
const initialRootState={
movies:initialMovieState,
search:initialSearchState
}
export function rootreducer(state=initialRootState,action){
    return{
       movies:movies(state.movies,action),
       search:search(state.search,action)
    }
}
export default combineReducers({
    // it call movies just dsame as abvove
    movies:movies,
    search:search
})