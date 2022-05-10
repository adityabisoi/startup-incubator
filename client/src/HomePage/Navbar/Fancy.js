import React,{useEffect,useState} from 'react';
import './Fancy.css';
const Fancy = (props)=>{
    const width = window.screen.availWidth;
    let x = "medium";
    if(width<600) x = "smaller";
    else x = "medium";
    const [textsize,setTextSize] = useState(x);
    // For transition of text on top
    useEffect(()=>{
        let timer = setInterval(()=>{
            if(textsize==='medium' && width>600){
                setTextSize('large');

            }
            else if(textsize==='large' && width>600){
                setTextSize('medium');
            }
            else if(textsize==='smaller'&& width<600){
                setTextSize('medium');
            }
            else if(textsize==='medium'&& width<600){
                setTextSize('smaller');
            }  
        },1000)
        return ()=>{
            clearInterval(timer);
        }
    },[width,textsize,setTextSize]);
    return (
        <div className='fancyBg'>
            <p style={{fontSize:textsize}} id='fancyText'>
                {props.text}
            </p>
        </div>
    );
};
export default Fancy;