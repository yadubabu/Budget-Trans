
const initialValue=100;

interface valAction{
    type:string,
    payload:number
}
export type Action=valAction
const valReducers=(state:number=initialValue,action:Action)=>{
    return state;
}

export default valReducers;