import React,{useEffect, useState} from 'react'
import FileBase from "react-file-base64"
import {useHistory,useLocation} from "react-router-dom"
import { Container, Grow, Grid, AppBar, TextField, Button, Paper ,Dialog} from '@material-ui/core';
import useStyles from "./style"
import DeleteIcon from "@material-ui/icons/Delete"
import Add from "@material-ui/icons/Add"
import {useDispatch} from "react-redux";
import { createProduct } from '../../action/product';
const Create = () => {

    const dispatch = useDispatch();
    const history = useHistory();
    const classes = useStyles();
    const [postData, setPostData]= useState({
       title:"" , message:"" , selectedFile:""
    })
    const [openpop, setOpenpop] = useState(false);
 
  
    const handleSubmit =(e)=>{
     
        dispatch(createProduct(postData))
         clear();
    }
 
    const clear =()=>{
        setPostData({title:"",message:"",selectedFile:""})
       
     }
   
    const popup=()=>{
      setOpenpop(!openpop)
     }

  return (<>
  
              <Button variant="contained"  className={classes.add} color="secondary" onClick={popup}>Add New</Button>
              <Dialog open={openpop} maxWidth="md" >
            <div className="main_note"   >

          <input 
            type="text" 
            name="title"
             value={postData.title} 
             onChange={(e)=> setPostData({...postData, title:e.target.value})}
              placeholder="Title" 
               autoComplete="off" />

             
      <textarea 
            rows="" 
            value={postData.message}
            name="message"
             onChange={(e)=> setPostData({...postData, message:e.target.value})}
              column="" 
              placeholder="Write Product description"
            />
           
                <div className={classes.fileInput}>
        <FileBase type="file"
        multiple={false}
        onDone={({base64})=>setPostData({...postData, selectedFile:base64})} />
      
    </div>
    <div className='main_note_button-div'> 
    <button  className="main_note_button" onClick={handleSubmit}>
    <Add  style={{ margin: '-3px ',color:"#3f51b5" }}  fontSize="medium" />
              </button>
         
             
              <button  className="main_note_button" color="primary" >
            <DeleteIcon   style={{ margin: '-2px ',color:"#3f51b5" }}  fontSize="small" />
              </button>
              </div>
        
   
 
          
              <Button onClick={()=>setOpenpop(false)}> close</Button>
            
        </div>
        </Dialog>
        </>
  )
}

export default Create;