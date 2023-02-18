import "./NewPuppy.css"
import { useState } from "react"

const NewPuppy = (props) => {
  const [form, setForm] = useState({
    name: "",
    breed: "",
    age: 0,
    color: "Grey",
    ears: "Drop",
  })

  const handleChange = (evt) => {
    setForm({
      ...form,
      [evt.target.name]: evt.target.value,
    })
  }

  const handleSubmit = (evt) => {
    evt.preventDefault()

    props.handleAddPuppy(form)
  }

  return (
    <main className="new">
      <h1>New Puppy</h1>
      <form onSubmit={handleSubmit} autoComplete="off">
        <label htmlFor="name-input">Name</label>
        <input
          type="text"
          required
          name="name"
          value={form.name}
          id="name-input"
          placeholder="Name"
          onChange={handleChange}
        />
        <label htmlFor="title-input">Age</label>
        <input
          type="number"
          min="0"
          required
          name="age"
          value={form.age}
          id="age-input"
          placeholder="Age"
          onChange={handleChange}
        />
        <label htmlFor="breed-input">Breed</label>
        <input
          onChange={handleChange}
          type="text"
          required
          name="breed"
          value={form.breed}
          id="breed-input"
          placeholder="Breed"
        />
        <label htmlFor="color-input">Color</label>
        <select
          value={form.color}
          onChange={handleChange}
          required
          name="color"
          id="color-input"
        >
          <option value="Grey">Grey</option>
          <option value="Black">Black</option>
          <option value="Golden">Golden</option>
          <option value="White">White</option>
          <option value="Brown">Brown</option>
        </select>

        <label htmlFor="ears-input">Ears</label>
        <select
          value={form.ears}
          onChange={handleChange}
          name="ears"
          id="ears-input"
          required
        >
          <option value="Drop">Drop</option>
          <option value="Pointy">Pointy</option>
          <option value="Button">Button</option>
        </select>
        <button type="submit">SUBMIT</button>
      </form>
    </main>
  )
}

export default NewPuppy
