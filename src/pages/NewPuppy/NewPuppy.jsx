import "./NewPuppy.css"
import { useState } from "react"

const NewPuppy=(props)=>{
  return (
<main className="new">
<h1>New Puppy</h1>
<form autoComplete="off">

  <label htmlFor="name-input">Name</label>
  <input type="text" required name="name" id="name-input" placeholder="Name"/>
  <label htmlFor="title-input">Age</label>
  <input type="number" min="0" required name="age" id="age-input" placeholder="Age"/>
  <label htmlFor="breed-input">Breed</label>
  <input type="text" required name="breed" id="breed-input" placeholder="Breed"/>
  <label htmlFor="color-input">Color</label>
  <select required name="color" id="color-input">
    <option value="Grey">Grey</option>
    <option value="Black">Black</option>
    <option value="Golden">Golden</option>
    <option value="White">White</option>
    <option value="Brown">Brown</option>
  </select>

  <label htmlFor="ears-input">Ears</label>
  <select name="ears" id="ears-input" required  >
    <option value="Drop">Drop</option>
    <option value="Pointy">Pointy</option>
    <option value="Button">Button</option>
  </select>
  <button type="submit">SUBMIT</button>
</form>
</main>

  )
}