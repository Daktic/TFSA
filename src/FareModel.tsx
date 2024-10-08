import type { Schema } from '../amplify/data/resource'
import { generateClient } from 'aws-amplify/data'

const client = generateClient<Schema>()

export default function Fares() {
  const createFare = async () => {
    await client.models.Fare.create({
      content: window.prompt("Todo content?"),
      isDone: false
    })
  }

  return <div>
    <button onClick={createFare}> Get a new ride! </button>
  </div>
}