import '../App.css'
import ReactMarkdown from "react-markdown"

function ViewRecipe(props){

    return(
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <div className='recipeViewContainer'>
                <h2>Chef Claude Recommends:</h2>
                <ReactMarkdown>
                    {props.generatedRecipe}
                </ReactMarkdown>
            </div>
        </div>
    )
}

export default ViewRecipe;