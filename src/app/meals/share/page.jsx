'use client'
import classes from './page.module.css';
import { useFormState } from 'react-dom'
import ImagePicker from '../../components/image-picker'
import { addMeals } from '../../../../lib/meals'
import StatusButton from '../../components/mealsFormStat'
export default function ShareMealPage() {
  const [state , formAction] = useFormState(addMeals , {message : null})

  return (
    <>
      <header className={classes.header}>
        <h1>
          Share your <span className={classes.highlight}>favorite meal</span>
        </h1>
        <p>Or any other meal you feel needs sharing!</p>
      </header>
      <main className={classes.main}>
        <form className={classes.form} action={formAction} >
          <div className={classes.row}>
            <p>
              <label htmlFor="name">Your name</label>
              <input type="text" id="name" name="creator" required />
            </p>
            <p>
              <label htmlFor="email">Your email</label>
              <input type="email" id="email" name="creator_email" required />
            </p>
          </div>
          <p>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" required />
          </p>
          <p>
            <label htmlFor="summary">Short Summary</label>
            <input type="text" id="summary" name="summary" required />
          </p>
          <p>
            <label htmlFor="instructions">Instructions</label>
            <textarea
              id="instructions"
              name="instructions"
              rows="10"
              required
            ></textarea>
          </p>
          <ImagePicker label="Meal Image" name="image" ></ImagePicker>
          {
            state.message && <p className={classes.message} >{state.message}</p>
          }
          <p className={classes.actions}>
            <StatusButton></StatusButton>
          </p>
        </form>
      </main>
    </>
  );
}