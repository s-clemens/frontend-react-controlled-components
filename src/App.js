import React, { useState } from 'react';
import './App.css';

function App() {
  const [formName, setFormName] = useState('');
  const [formAge, setFormAge] = useState(0);
  const [formReferrer, setFormReferrer] = useState('anders');
  const [formComments, setFormComments] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formComments, formReferrer, formAge, formName);
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
            value={formName}
            onChange={(e) => setFormName(e.target.value)}
          />
        </label>

        <label htmlFor="details-age">
          Leeftijd:
          <input
            type="number"
            name="age"
            id="details-age"
            value={formAge}
            onChange={(e) => setFormAge(parseInt(e.target.value))}
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
            value={formReferrer}
            onChange={(e) => setFormReferrer(e.target.value)}
          >
            <option value="google">Google</option>
            <option value="vriend">Vriend</option>
            <option value="advertentie">Advertentie</option>
            <option value="anders">Anders</option>
          </select>
        </label>

        <label htmlFor="recipe-comments">
          Opmerkingen:
          <textarea
            name="comments"
            id="recipe-comments"
            rows="4"
            cols="40"
            placeholder="Wat vond je van het recept?"
            value={formComments}
            onChange={(e) => setFormComments(e.target.value)}
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
