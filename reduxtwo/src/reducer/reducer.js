const intialValue=0;

export const changer=(state=intialValue,action)=>{
    switch(action.type){
        case "INCREMENT":return state+1;
        case "DECREMENT":return state-1;
        default :return state;
    }
}