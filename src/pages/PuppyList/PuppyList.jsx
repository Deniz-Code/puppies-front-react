import "./PuppyList.css"
import PuppyCard from "../../components/PuppyCard"

const PuppyList = (props) => {
  return (
    <main className="list">
      <h1>Puppy list</h1>

      {!props.puppies.length && <h2>Oops! No puppies here !</h2>}
      <ul>
        {props.puppies.map((puppy) => (
          <PuppyCard handleRemovePuppy={props.handleRemovePuppy} key={puppy._id} puppy={puppy} />
        ))}
      </ul>
    </main>
  )
}

export default PuppyList
