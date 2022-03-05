import * as api from "../api";
export const getProducts=()=>async(dispatch)=>{
    try{
             const {data} =await api.fetchProducts();
             console.log(data);
             const action = {type:"FETCH_ALL",payload:data}
             dispatch(action);

    }catch(e){
        console.log(e.message);
    }}
export const upvote=(id)=> async(dispatch)=>{
    try{
   const {data} = await api.upvote(id)
   dispatch({type:"UPVOTE",payload:data})
    }catch(e){
        console.log(e.message);
    }
};
export const comment=(value,id)=>async(dispatch)=>{
    try{
      const {data}= await api.comment(value,id)
      console.log(data);
      dispatch({type:"COMMENT",payload:data})
      return data.comments;
    }catch(e){
        console.log(e)
    }
}
export const getProduct= (id)=> async(dispatch)=>{
    try{
   console.log(id)
        const {data} = await api.fetchProduct(id);
        
        console.log(data);
        const action ={type:"FETCH_PRODUCT",payload:data}
        dispatch(action) ;
       
    }catch(e){
  console.log(e);
    }}

export const createProduct=(post,history)=>async(dispatch)=>{
    try{
        const{data} =await api.createProduct(post);
        console.log(data);
      
        dispatch({type:"CREATE",payload:data});

    }catch(e){
  console.log(e)
    }}
