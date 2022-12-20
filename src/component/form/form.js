
import React, { useEffect, useState } from "react"
import { getMuvieData } from "../../services/db"
import Cart from "../cart/cart"
import './form.css'
//#region
const Form = () => {
  const [data, setData] = useState([])
  const handleSubmit = async (e) => {

    e.preventDefault()

    const result = await getMuvieData(e.target.movie.value)
    setData(result)
    //#endregion
  }
 
  return (
    <>
      <div className="formlar">
        <div className="form1">
          <form onSubmit={handleSubmit}>
            <label>
              <h6> Искать фильм по названию:</h6>
              <input type='text' placeholder="film adini daxil edin" name="movie"></input>
            </label>
            <button type="submit">Искать</button>
          </form>
        </div>

        <div className="form2">
          <input type='text' placeholder="film adini daxil edin"></input>
          <button type="submit">daxil edin</button>
        </div>

      </div>
     <>
      <Cart movieData={data}/>
     </>
    
    </>
  )






}
export default Form