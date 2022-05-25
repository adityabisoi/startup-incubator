import React from "react"

const ProductItem = (props) => {
    return (
        <div className="col-md-3">
            <div className="card">
                <div className="card-body">
                    <h4>Title:<h5 className="card-title">{props.note.title}</h5></h4>
                    <h4>Description:<p className="card-text">{props.note.description}</p></h4>
                    <h4>ImageUrl:<p className="card-text">{props.note.imageUrl}</p></h4>
                    <button type="button" class="btn btn-dark" onClick={()=>{props.deleteProject(props.note._id)}}>Delete</button>
                </div>
            </div>
        </div>

    )
}

export default ProductItem
