// 'use client'
import Image from 'next/image'
import classes from './page.module.css'
// import { usePathname } from 'next/navigation'
// import { useNavigation } from 'next/navigation'
import { dummyMeals } from '../data'
import { notFound } from 'next/navigation'
import { getSingleMeal } from '../../../../lib/meals'

const mealDetails = async  ({params}) => {

  const Data = await getSingleMeal(params.mealSlug)

  if(!Data){
    notFound()
  }
  Data.instructions = Data.instructions.replace(/\n/g,'<br />')


  return (
    <div>
      <header className={classes.header} >
        <div className={classes.image} >
          <Image src={Data.image} alt={Data.title}  fill />
        </div>
        <div className={classes.headerText} >
          <h1>{Data.title}</h1>
          <p className={classes.creator} >
            by <a href={`mailto:${'hi'}`}> { Data.creator}</a>
          </p>
          <p className={classes.summary} >{Data.summary}</p>
        </div>
      </header>
      <main className={classes.instructions} dangerouslySetInnerHTML={{__html: Data.instructions}} ></main>
        
    </div>
  )
}

export default mealDetails