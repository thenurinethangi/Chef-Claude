import '../App.css'

function IngredientInput({addIngredient}){

    function handleSubmit(event){
        event.preventDefault();
        const item = event.target.itemInput.value;
        addIngredient(item);
        event.target.reset();
    }

    return(
        <form onSubmit={handleSubmit} className='ingredient-input-container'>
            <input type='text' placeholder='onion' name='itemInput'></input>
            <button>+ Add ingredient</button>
        </form>
    )
}

export default IngredientInput;