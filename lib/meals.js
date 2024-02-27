"use server"

import fs from 'node:fs'
import { redirect } from 'next/navigation'
import { dbConnect, pool } from '../src/app/utils/dbConnection'
import { revalidatePath } from 'next/cache'

export async function getMeals(){
   await dbConnect()
   const result = await pool.query('SELECT * FROM meal')
   return result.rows
}

function validText(text){
   return !text || text.trim().length === 0
}
export async function addMeals( prevState , formData){
   await dbConnect()
   let newData = {
      title : formData.get('title'),
      summary : formData.get('summary'),
      instructions : formData.get('instructions'),
      image : formData.get('image')?.type,
      slug : formData.get('title'),
      creator : formData.get('creator'),
      creator_email : formData.get('creator_email')
   }
   if( validText(newData.title) || validText(newData.summary) || validText(newData.instructions) || !newData.creator_email.includes('@') || !newData.image ) {
      return {
         message :'Some input fields are empty or invalid!  '
      }
   }


   //------------- image upload method -------------------\\

   // first step is to change the image name to a sql data friendly 
   const title = await formData.get('title')

   const extension = await formData.get('image')?.name.split('.').pop()
   const fileName = `${title}.${extension}`

   // the path where to store the image 
   const stream = fs.createWriteStream(`public/images/${fileName}`)
   
   
   // buffer the image as we can call it read the image 
   const bufferedImage = await formData.get('image').arrayBuffer();

   //write the image , mean saving the image to the provided path 
   stream.write(Buffer.from(bufferedImage) , (error)=>{
      if(error){
         throw new Error('Saving Image failed')
      }
   } )

   const uploadedImage = `/images/${fileName}`
   console.log( typeof(uploadedImage))

   try {
      const val = await pool.query('INSERT INTO meal VALUES($1, $2, $3, $4, $5, $6, $7)', [newData.slug , newData.title , uploadedImage , newData.summary , newData.instructions , newData.creator , newData.creator_email]) 
      console.log('added successfully')
   } catch (error) {
      if(error){
         console.log("There is an error in sending the data to database",error.stack)
      }
   }
   revalidatePath('/meals')
   redirect('/meals')
}

export async function getSingleMeal(id){
   await dbConnect()
   const data = await pool.query('SELECT * FROM meal WHERE id = $1' , [id])
   return data.rows[0]
}