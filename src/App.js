import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {

  const [colour, setColour] = useState('');
  const [error, setError] = useState(false);
  const [list, setList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submit works");
  }

  return (
    <>
      <section className='container'>
        form.
      </section>
      <section className="colors">
        <h3>List goes here</h3>
      </section>
    </>
    )
}

export default App
