export default (products=[] ,action) =>{
    switch(action.type){
        case "CREATE":
            return [...products,action.payload];
         case "FETCH_ALL":
                    return action.payload;
         case "FETCH_PRODUCT":
              return action.payload;
         case "UPVOTE":
              return products.map((product)=>(product._id===action.payload._id?action.payload:product));

         case "COMMENT":
            return products.map((product)=>{
                if(product._id===action.payload._id){
                    return action.payload;
                }
                return product
            });
            default:
              return  products;
              
    } 
}
 