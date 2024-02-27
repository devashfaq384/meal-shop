'use client'
import { useRef, useState } from 'react'
import classes from './image-picker.module.css'
import Image from 'next/image'

const imagePicker = ({label , name}) => {
   

    const [image, setImage] = useState()
    const refImage = useRef()
    const pickImage = () => {
    
        refImage.current?.click();
    }

    const imageChange = (e) =>{
        const file = e.target?.files?.[0]
        if(!file ){
            return setImage(null)
        }
        const fileReader =  new FileReader();
        
        fileReader.onload = ()=>{
            setImage(fileReader.result)
        }
        
        fileReader.readAsDataURL(file)


    }
  return (
    <div className={classes.picker} >
        <label htmlFor={name} >{label}</label>
        <div className={classes.controls} >
            <div className={classes.preview} >
                {!image && <p>No image picked yet</p>}
                {
                    image && <Image src={image} fill alt="Selected Image" />
                }
            </div>
            <input
            ref = {refImage}
            type="file"
            className={classes.input} 
            id={name} 
            accept='image/png , image/jpeg , image/jpg' 
            name={name}
            onChange={imageChange}
             />
            <button  onClick={pickImage} className={classes.button} type="button" >
                Pick an Image
            </button>
        </div>
    </div>
  )
}

export default imagePicker