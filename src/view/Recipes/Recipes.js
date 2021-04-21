import React from "react";
import './Recipes.css';
import { Link } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";

const Recipes = () => {
    const [loading, setLoading] = React.useState(true);
    const [search, setSearch] = React.useState('');
    const [recipes, setRecipes] = React.useState([]);

    const override = `display: block;margin: 0 auto;`;

    React.useEffect(() => {
        fetch(`https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&q=${search}`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "72a7efe4e0msh0a191709354852fp1164d6jsn4fe2fb1d7c1a",
                "x-rapidapi-host": "tasty.p.rapidapi.com"
            }
        })
            .then(response => response.json())
            .then((data) => {
                console.log('result get recipes', data);
                return setRecipes(data.results);
            })
            .catch(err => {
                console.error('error get recipes', err);
                setRecipes([]);
            })
            .finally(() => setLoading(false))
    }, [search])

    const onChange = (e) => {
        setLoading(true)
        setSearch(e.target.value)
    };

    return(<div id="recipes">
        <ClipLoader color='#00000' loading={loading} css={override} size={50} />
        {loading ? <p className='center'>Chargement</p> : ''}

        <label>Rechercher : </label><input type="text" onBlur={e => onChange(e)}/>
        <p>Nombre de recettes : {recipes.length}</p>
        {recipes.length > 0 ? <ul>
            {recipes.map((recipe) => <li key={recipe.id}>
               <Link className='link' to={"/recipe/" + recipe.id}>
                    <img src={recipe.thumbnail_url}/>
                    <p>{recipe.name}</p>
                </Link>
            </li>)}
        </ul> : <div>Pas de recettes.</div>}
    </div>);
};

export default Recipes
