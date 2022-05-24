import React from "react"

const ProductItem = (props) => {
    // eslint-disable-next-line no-unused-vars
    // const handleDelete=async (id)=>{
    //     const [product,setProduct]=useState('false')
    //     const response = await fetch('http://localhost:5000/deleteProject/'+id, {
    //         method: 'DELETE',
    //         headers: {
    //           'Content-Type': 'application/json',
    //           'auth-token': localStorage.getItem('token')
    //         },
    //       });
    //       const json=response.json()
    //       if(json) {
    //             useEffect(()=>{
    //                 setProduct(json)
    //             },product)
    //       }
    // }
    return (
        <div className="col-md-3">
            <div className="card">
                <div className="card-body">
                    <h4>Title:<h5 className="card-title">{props.note.title}</h5></h4>
                    <h4>Description:<p className="card-text">{props.note.description}</p></h4>
                    <h4>ImageUrl:<p className="card-text">{props.note.imageUrl}</p></h4>
                    <button type="button" class="btn btn-dark" onClick={()=>{props.deleteProject(props.note.user)}}>Delete</button>
                </div>
            </div>
        </div>

    )
}

export default ProductItem
