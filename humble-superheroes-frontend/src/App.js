import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  // State to store the list of superheroes
  const [superheroes, setSuperheroes] = useState([]);
  // State for the new superhero form
  const [newSuperhero, setNewSuperhero] = useState({
    name: '',
    superpower: '',
    humilityScore: 5,
  });

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send the new superhero data to the backend
      const response = await axios.post('http://localhost:3000/superheroes', newSuperhero);

      // Update the list of superheroes with the new one
      setSuperheroes([...superheroes, response.data]);

      // Clear the form
      setNewSuperhero({ name: '', superpower: '', humilityScore: 5 });
    } catch (error) {
      console.error('Error adding superhero', error);
    }
  };

  // Function to handle form input changes
  const handleChange = (e) => {
    setNewSuperhero({
      ...newSuperhero,
      [e.target.name]: e.target.value,
    });
  };

  // Fetch the list of superheroes from the backend when the component mounts
  useEffect(() => {
    const fetchSuperheroes = async () => {
      try {
        const response = await axios.get('http://localhost:3000/superheroes');
        setSuperheroes(response.data);
      } catch (error) {
        console.error('Error loading superheroes', error);
      }
    };

    fetchSuperheroes();
  }, []); // Empty dependency array to run only once when the component mounts

  return (
    <div>
      <h1>SUPERHEROES</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={newSuperhero.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Superpower:</label>
          <input
            type="text"
            name="superpower"
            value={newSuperhero.superpower}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Humility Index (1-10):</label>
          <input
            type="number"
            name="humilityScore"
            value={newSuperhero.humilityScore}
            onChange={handleChange}
            min="1"
            max="10"
            required
          />
        </div>
        <button type="submit">Add Superhero</button>
      </form>

      <h2>LIST OF SUPERHEROES</h2>
      <ul>
        {superheroes.map((superhero) => (
          <li key={superhero.id}>
            {superhero.name} - {superhero.superpower} (Humility: {superhero.humilityScore})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
