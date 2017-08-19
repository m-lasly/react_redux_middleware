import { FETCH_WEATHER } from '../actions/index'

export default function(state = [] , action){
console.log('Action received : ', action);
console.log('reducer_weather : ', action.type);
console.log('reducer_weatherFETCH_WEATHER : ', FETCH_WEATHER);

switch(action.type){
  case FETCH_WEATHER:
  //return [action.payload.data, ...this.state];
  return state.concat([action.payload.data]);
}
  return state;
}
