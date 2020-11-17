import React, { useState } from 'react';
import './App.css';

function App() {
  const [formState, setFormState] = useState({
    name: '',
    age: 0,
    referrer: 'anders',
    'recipe-comments': '',
  })

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formState);
  }

  function handleFormChange(e) {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });

    console.log(`The value of input ${e.target.name} has just been set to ${e.target.value}`);
  }

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>Gegevens</legend>

        <label htmlFor="details-name">
          Naam:
          <input
            type="text"
            name="name"
            id="details-name"
            value={formState.name}
            onChange={handleFormChange}
          />
        </label>

        <label htmlFor="details-age">
          Leeftijd:
          <input
            type="number"
            name="age"
            id="details-age"
            value={formState.age}
            onChange={handleFormChange}
          />
        </label>
      </fieldset>

      <fieldset>
        <legend>Jouw review</legend>

        <label htmlFor="referrer">
          Hoe heb je dit recept gevonden?
          <select
            name="found-through"
            id="referrer"
            value={formState.referrer}
            onChange={handleFormChange}
          >
            <option value="google">Google</option>
            <option value="vriend">Vriend</option>
            <option value="advertentie">Advertentie</option>
            <option value="anders">Anders</option>
          </select>
        </label>

        <label htmlFor="comments">
          Opmerkingen:
          <textarea
            name="recipe-comments"
            id="comments"
            rows="4"
            cols="40"
            placeholder="Wat vond je van het recept?"
            value={formState.comments}
            onChange={handleFormChange}
          >
          </textarea>
        </label>

        <button type="submit">
          Versturen
        </button>
      </fieldset>
    </form>
  );
}

export default App;
