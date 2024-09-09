import React, { useState } from 'react'
import {useParams} from "react-router-dom";
let vId="";
const RecipeInfo = () => {
   const[item,setItem]=useState();
    const {MealID}=useParams();
    if(MealID!="")
    {
        fetch(`https:/www.themealdb.com/api/json/v1/1/lookup.php?i=${MealID}`)
        .then(res=>res.json())
        .then(data=>{
            console.log(data.meals[0]);
            setItem(data.meals[0]);
        })
    }
     if(item){
         const url=item.strYoutube;
         const str=url.split("=")
         vId=str[str.length-1];
     }
  return (
    <>
         {
            (!item)?"":(<>
                 <div className='text-content'>
                  <img src={item.strMealThumb} alt=""/>
                  <div className='inner-text'>
                    <h1>{item.strMeal}</h1>
                    <h2>{item.strArea }food</h2>
                    <h3> caterory{item.strCategory}</h3>
                  </div>
                  </div>
                  <div className='recipe-details'>
                    <div className='ingredients'>
                      <h2>ingredients</h2><br></br>
                 <h4>{item.strIngredient1}:{item.strMeasure1}</h4>
                 <h4>{item.strIngredient2}:{item.strMeasure2}</h4>
                 <h4>{item.strIngredient3}:{item.strMeasure3}</h4>
                 <h4>{item.strIngredient4}:{item.strMeasure4}</h4>
                 <h4>{item.strIngredient5}:{item.strMeasure5}</h4>
                 <h4>{item.strIngredient6}:{item.strMeasure6}</h4>
                 <h4>{item.strIngredient7}:{item.strMeasure7}</h4>
                 <h4>{item.strIngredient8}:{item.strMeasure8}</h4>
               </div>
               <div className='instruction'>
                  <h2>instruction</h2><br></br>
                  <h4>{item.strInstructions}</h4>
               </div>
               <div className='video'>      
          <iframe src={`https://www.youtube.com/embed/${vId} `}allowfullscreen>

                  </iframe>
               </div>
                  </div>
                 
                </>)
         }
    </>
  )
}


export default RecipeInfo