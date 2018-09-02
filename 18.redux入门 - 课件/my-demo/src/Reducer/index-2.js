export default function counter(state=0,action){
    if(action.type=='add'){
    	return state+1;
    }
    else if(action.type=='leo'){
    	
    	return state-1;
    }
    else{
    	return state;
    }
}