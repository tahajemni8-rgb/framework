import './App.css'
import StudentCard from './Components/Student-Card'
import { useState } from 'react'

function App() {
  const [etudiants, setEtudiants] = useState([
    {id: 1,
      nom:"jemni",
    prenom:"taha",
    Email:"tahajemni8@gmail.com",
    Tel:"+216 24825245",
    filier:"GLSI",
    annee:"2eme anneé",
    groupe:"B",
    ville:"gabes",
    img: "../1790966170270.png"}
  ]);
  function ajouterEtudiant() {
    const nouveauEtudiant = {
      id: etudiants.length > 0
        ? Math.max(...etudiants.map(etudiant => etudiant.id)) + 1
        : 1,
      nom: "Doe",
      prenom: "John",
      Email: "john.doe@example.com",
      Tel: "+216 12345678",
      filier: "GLSI",
      annee: "2eme anneé",
      groupe: "A",
      ville: "Tunis",
      img: "../1790966170270.png"
    };
    setEtudiants([...etudiants, nouveauEtudiant]);
  }
  function supprimerEtudiant(id) {
    setEtudiants(etudiants.filter(etudiant => etudiant.id !== id));}
  return (
    <main className="app-shell">
      
      <header className="page-header">
        <div>
         
          <h1>Information d Étudiants</h1>
          
        </div>
        <div className='actions'>
        <button onClick={ajouterEtudiant}>Ajouter un etudiant</button>
        
      </div> 
      
      </header>
      <div id='container'>
      <section className="student-grid" aria-label="Liste des étudiants">
      {etudiants.map((etudiant) => (
        <StudentCard
          key={etudiant.id}
          id={etudiant.id}
          nom={etudiant.nom}
          prenom={etudiant.prenom}
          Email={etudiant.Email}
          Tel={etudiant.Tel}
          filier={etudiant.filier}
          annee={etudiant.annee}
          groupe={etudiant.groupe}
          ville={etudiant.ville}
          img={etudiant.img}
          onSupprimer= {supprimerEtudiant}
        />
        
        
      ))}
      
      
      </section>
      </div>
    </main>
    
  )
}
export default App
