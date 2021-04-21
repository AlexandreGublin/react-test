import React from "react";
import './RecipeDetail.css';
import {useParams} from "react-router-dom";

const RecipeDetail = () => {
    const {idRecipe} = useParams();
    const [recipe, setRecipe] = React.useState({});

    React.useEffect(() => {
        fetch("https://tasty.p.rapidapi.com/recipes/detail?id=" + idRecipe, {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "72a7efe4e0msh0a191709354852fp1164d6jsn4fe2fb1d7c1a",
                "x-rapidapi-host": "tasty.p.rapidapi.com"
            }
        })
            .then(response => response.json())
            .then((data) => {
                console.log('test result', data)
                return setRecipe(data)
            })
            .catch(err => {
                console.error('error get recipe', err);
            });
    }, [idRecipe]);
    return (<>
        {recipe ? <div>
            <div className='center'>
                <h3>{recipe.name}</h3>
                <br/>
                <img className='img' src={recipe.thumbnail_url}/>
            </div>
            <br/>
            <p><b>Description : </b>{recipe.description ? recipe.description : 'Aucune description.'}</p>
            <br/>
            <ol>
                {recipe.instructions && recipe.instructions.map((instr) => <li key={instr.id}>
                    <p>{instr.display_text}</p>
                </li>)}
            </ol>
        </div> : <p>La recette n'a pas été trouvée.</p>}
    </>);
};
export default RecipeDetail;
