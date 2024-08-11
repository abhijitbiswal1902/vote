import React, { useState } from "react"
import "./App.css"
import bjp from "./images/bjp.png"
import congress from "./images/congress.png"
import jds from "./images/jds.jpeg"

function App() {
  const [votes, setVotes] = useState({ option1: 0, option2: 0, option3: 0 })

  const handleVote = (option) => {
    setVotes((prevVotes) => ({
      ...prevVotes,
      [option]: prevVotes[option] + 1,
    }))
  }

  return (
    <div className='App'>
      <h1>Voting Application</h1>
      <table>
        <thead>
          <tr>
            <th>Serial No.</th>
            <th>Party Symbol</th>
            <th>Party Name</th>
            <th>Vote</th>
            <th>Votes Count</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>
              <img src={bjp} alt='BJP Symbol' />
            </td>
            <td>BJP</td>
            <td>
              <button onClick={() => handleVote("option1")}>Vote</button>
            </td>
            <td>{votes.option1}</td>
          </tr>
          <tr>
            <td>2</td>
            <td>
              <img src={congress} alt='Congress Symbol' />
            </td>
            <td>Congress</td>
            <td>
              <button onClick={() => handleVote("option2")}>Vote</button>
            </td>
            <td>{votes.option2}</td>
          </tr>
          <tr>
            <td>3</td>
            <td>
              <img src={jds} alt='JDS Symbol' />
            </td>
            <td>JDS</td>
            <td>
              <button onClick={() => handleVote("option3")}>Vote</button>
            </td>
            <td>{votes.option3}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default App
