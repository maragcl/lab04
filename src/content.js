import React from 'react'
import Statics from './Statics.js'

const Content = (props) => {
const {bueno , neutral , malo } = props
    return (
        
        <div>
           {bueno || neutral || malo  ?
           <div>
           <Statics text ="Bueno" value = {bueno}/>    
           <Statics text ="Neutral" value = {neutral}/> 
           <Statics text ="Malo" value = {malo}/> 
           <Statics text ="Total" value = {props.total}/> 
           <Statics text ="Promedio" value = {props.promedio}/> 
           <Statics text ="Positivo" value = {props.positivo}/></div>
           : 
           <p>01100010 01100001 01101100 01101100 01100001 01110011<br></br>
            01100101 00100000 01100001 00100000 01101100 01100001 00100000 <br></br>
            01100010 01100101 01110010 01100111 01100001 00100000 01110000
            <br></br> 01110010 01101111 01100110 01100101 00100000 01101010<br></br> 
            01110101 01101110 01101001 01101111 01110010</p>
           }  
        
        </div>
    )
}
export default Content