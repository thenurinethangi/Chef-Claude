import '../App.css'
import GenerateRecipe from './generateRecipeSection';
import IngredientInput from './IngredientInput';
import IngredientList from './ingredientList';
import ViewRecipe from './viewRecipeSection';
import React from 'react';
import { getRecipeFromMistral } from '../ai.js'

function ChefCludeBody(){

    const [ingredient, setIngredient] = React.useState([]);
    const [showRecipe,setShowRecipe] = React.useState(false);
    const [recipe,setRecipe] = React.useState("");
    const [loading,setLoading] = React.useState(false);

    const viewRecipeSection = React.useRef(null);

    React.useEffect(()=>{
        if (recipe !== "" && viewRecipeSection.current !== null) {
            const yCoord = viewRecipeSection.current.getBoundingClientRect().top + window.scrollY
            window.scroll({
                top: yCoord,
                behavior: "smooth"
            })
        }
    },[recipe]);

    function addIngredient(item){
        setIngredient(previousList => [...previousList,item]);
    }

    async function troggerShowRecipe(){
        setLoading(true);
        let response = await getRecipeFromMistral(ingredient);
        setLoading(false);
        setRecipe(response);
        setShowRecipe(true);
    }

    return(
        <div>
            <IngredientInput addIngredient={addIngredient} />
            {ingredient.length > 0 && <IngredientList list={ingredient}/>}
            {ingredient.length > 3 && <GenerateRecipe ref={viewRecipeSection} troggerShowRecipe={troggerShowRecipe} isLoading={loading}/>}
            {showRecipe && <ViewRecipe generatedRecipe={recipe} />}
        </div>
    )
}

export default ChefCludeBody;