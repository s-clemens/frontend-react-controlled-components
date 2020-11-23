import React from 'react';
import './App.css';

function App() {

    let [nameValue, setNameValue] = React.useState('');
    let [ageValue, setAgeValue] = React.useState('');
    let [selectValue, setSelectValue] = React.useState('');
    let [remarksValue, setRemarksValue] = React.useState('');

    const submitForm = event => {
        console.log(nameValue);
        console.log(ageValue);
        console.log(selectValue);
        console.log(remarksValue);
        event.preventDefault();
        nameValue = '';
        ageValue = '';
        selectValue = '';
        remarksValue = '';

    }

  return (
    <div>
        <form
            onSubmit={submitForm}
        >
          <div className="info-box">
              <h2>Gegevens</h2>
              <p>Naam:
                  <input
                      type="text"
                      onChange={(e) => setNameValue(e.target.value)}
                  />
              </p>
              <p>Leeftijd:
                  <input
                      type="number"
                      placeholder="0"
                      onChange={(e) => setAgeValue(e.target.value)}
                  />
              </p>
          </div>
          <div className="info-box">
              <h2>Jouw review</h2>
              <p>Hoe heb jij dit recept gevonden?</p>
              <select
                onChange={(e) => setSelectValue(e.target.value)}
              >
                  <option value="Google">Google</option>
                  <option value="Vriend">Vriend</option>
                  <option value="Advertentie">Advertentie</option>
                  <option value="Anders">Anders</option>
              </select>
              <p>Opmerkingen:</p>
              <textarea
                  id="opmerkingen-box"
                  placeholder="Wat vond je van het recept?"
                  onChange={(e) =>setRemarksValue(e.target.value)}
              />
              <button type="submit">Versturen</button>
          </div>


        </form>
    </div>

  );
}

export default App;
