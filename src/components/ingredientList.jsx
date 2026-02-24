import '../App.css'

function IngredientList(props){

    let ingredients = [];
    for (let index = 0; index < props.list.length; index++) {
        let item = <li>{props.list[index]}</li>;
        ingredients.push(item);
    }

    return(
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <div className='ingredient-list-container'>
                <h3 className='ingredient-list-title'>Ingredients on hand:</h3>
                <ul>
                    {ingredients}
                </ul>
            </div>
        </div>
    )
}

export default IngredientList;