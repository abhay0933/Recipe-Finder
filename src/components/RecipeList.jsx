import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

const RecipeList = () => {

    const [value, setValue] = useState("");
    const[dish, setDish] = useState("pasta");
    const [receipes, setreceipes] = useState([])

   useEffect(()=> {
    getrecepies();
   },[dish])

   const getrecepies = async() => {
    try {
        const res= await axios.get(`https://forkify-api.herokuapp.com/api/search?q=${dish}`);
        const data= res.data;
        setreceipes(data.recipes);
    } catch (error) {
        console.log(error);
    }
   }


   const searchdish = () => {
           setDish(value);
   }

  return (
    <div className='foodlistcontainer'>
        <h1>Search Your Recipes</h1>
        <div className='searchrecipeinput'>
        <input type='text' placeholder='Search your Recipes..' onChange={(e)=> setValue(e.target.value)} />
        <button onClick={searchdish}>Search</button>
        </div>
        <h2>Recipe For: {dish}</h2>
        <div className='foodcontainer'>
            {receipes.map((dish)=>(
                <div className='receipescontaiiner'> 
                <img src={dish.image_url} alt="" />
                
                <h4>{dish.title}</h4>
                {/* <h4>{dish}</h4> */}
                <h6>{dish.publisher}</h6>
                <div className="btn">
                    <Link to={`/recipes/${dish.recipe_id}`} >
                        <button className='detailsbtn'>Details</button>
                    </Link>
                </div>
              </div>
            ))}
        </div>
    </div>
  )
}

export default RecipeList;