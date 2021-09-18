import React, { useEffect, useState } from 'react'
import axios from 'axios'

const API_URL="https://swapi.dev/api/people/1/"

const App = () => {
  const [ data, setData ] = useState([])

  useEffect(() => {
  // if [], run once when row loads, and dont run again, but if I put data in [] it will run everytime data changes.results
  async function fetchData() {
      const request = await axios.get(API_URL)
      console.log(request)
    }
    fetchData()
  }, [])


  return (
    <div>
    <h1>API Exercise</h1>
    <p>Content</p>
    </div>
  )
}

export default App
