export default function filterReducer(visibility: string = "SHOW_ALL", action: any){
  switch(action.type){
    case 'SET_FILTER':
     return action.visibility;
    default:
     return visibility;
  }
}