'use client'
import { useFormStatus } from 'react-dom'


const mealsFormStat = () => {
    const {pending} = useFormStatus()
  return (
    <button disabled={pending} type='submit' >
        {
            pending ? 'Sharing...' : 'Share Meal'
        }
    </button>
  )
}

export default mealsFormStat