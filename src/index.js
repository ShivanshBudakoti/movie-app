import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import './index.css';
import App from './components/App';
import rootreducer from './reducer'
// const logger=function({dispatch,getState}){//dispatch and getstate will atomaticlly herre by redx
//   return function (next){
//     return function(action){
//       console.log(action.type);
//       next(action)
//     }
//   }
// }
const logger=({dispatch,getState})=>(next)=>(action)=>{
  if(typeof action!=='function'){
  console.log(action.type);
  }
  next(action)
}
// const thunk=({dispatch,getState})=>(next)=>(action)=>{
//   if(typeof action==='function'){
//    action(dispatch);
//    return;
//   }
//   next(action)
//   }
const store =createStore(rootreducer,applyMiddleware(logger,thunk));
// console.log(store)
// store.dispatch({
//   type:'Add_movies',
//   movies:[{name:'supername'}]
// })
export const storecontext=createContext();
console.log(storecontext);
class Provider extends React.Component{
  render(){
    const {store}=this.props
    return<storecontext.Provider value={store}>
      {this.props.children}
      </storecontext.Provider>;

  }
}
ReactDOM.render(
  <Provider store={store}><React.StrictMode>
  <App/>
</React.StrictMode>,
</Provider>
 ,   
  document.getElementById('root')
  );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

