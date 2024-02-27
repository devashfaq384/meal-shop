import Link from 'next/link'
import classes from './page.module.css'
import MealsGrid from '../components/meals-grid'
// import { getMeals } from '../../../lib/meals';
import { dummyMeals } from './data'
import { Suspense } from 'react';
import AllMeals from '../components/AllMeals'

const page = () => {
    
  return (
    <div className="text-white" >
        <header className={classes.header} >
            <p className='text-3xl font-bold'>
                Delicious meals, created <span className={classes.highlight} >by you </span>
            </p>
            <p className='text-lg' >
                Choose your favourite recipe and cook it yourself. It is easy and fun!
            </p>
            <p className={classes.cta} >
                <Link href="/meals/share" > 
                    Share your favourite Recipe
                </Link>
            </p>
        </header>
        <main className={classes.main} >
            <Suspense fallback={<div className={classes.loading} >Getting Meals for you...</div>} >
                <AllMeals></AllMeals>
            </Suspense>
        </main>
    </div>
  )
}

export default page