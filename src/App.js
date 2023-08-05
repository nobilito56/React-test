import { useState } from "react";

function App() {
  // state (état, données)
  const [fruits, setFruits] = useState([
    { id: 1, nom: "Abricot" },
    { id: 2, nom: "Banane" },
    { id: 3, nom: "Cerise" }
  ]);

  const [nouveauFruit, setNouveauFruit] = useState("");

  //const inputRef = useRef();

  // comportements
  const handleDelete = (id) => {
    // 1. Copie du state
    const fruitsCopy = [...fruits];

    // 2. Manipuler le state
    const fruitsCopyUpdated = fruitsCopy.filter((fruit) => fruit.id !== id);

    // 3. Modifier mon state avec le setter
    setFruits(fruitsCopyUpdated);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    //console.log(inputRef.current.value);
    // 1. Copie du state
    const fruitsCopy = [...fruits];

    //2. Manipulation sur la copie du state
    const id = new Date().getTime();
    const nom = nouveauFruit;
    fruitsCopy.push({ id, nom });

    //3. Modification du state avec le setter
    setFruits(fruitsCopy);
    setNouveauFruit("");
  };

  const handleChange = (event) => {
    setNouveauFruit(event.target.value);
  };

  // render
  return (
    <div>
      <h1>Liste de fruits</h1>
      <ul>
        {fruits.map((fruit) => (
          <li key={fruit.id}>
            {fruit.nom}
            <button onClick={() => handleDelete(fruit.id)}>x</button>
          </li>
        ))}
      </ul>
      <form action="submit" onSubmit={handleSubmit}>
        <input
          value={nouveauFruit}
          type="text"
          placeholder="Ajouter un fruit"
          onChange={handleChange}
        />
        <button>Ajouter +</button>
      </form>
    </div>
  );
}

export default App;

// Gestion du formulaire
// 1. Création du formulaire
// 2. Soummission du formualire
// 3. Collecte des données
// 3a. Méthode avec le useRef()
// 3b. Méthode avec la synchronisation descendante / ascendante
