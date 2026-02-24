import '../App.css'
import React from 'react';

function GenerateRecipe({ref, troggerShowRecipe, isLoading}){

    function clickOnGetARecipeBtn(){
        troggerShowRecipe();
    }

    return(
        <div style={{display: 'flex', justifyContent: 'center'}} ref={ref}>
            <div className='generateRecipeContainer'>
                <div>
                    <h4>Ready for a recipe?</h4>
                    <p>Generate a recipe from your list of ingredients.</p>
                </div>
                {!isLoading && <button onClick={clickOnGetARecipeBtn}>Get a recipe</button>}
                {isLoading && <div className="spinner"></div>}
            </div>
        </div>
    )
}

export default GenerateRecipe;