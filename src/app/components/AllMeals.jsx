import { getMeals } from "../../../lib/meals";
import MealsGrid from "./meals-grid";

export default async function AllMeals(){
    const newMeals = await getMeals();

   return (<MealsGrid meals={newMeals} ></MealsGrid>)
}