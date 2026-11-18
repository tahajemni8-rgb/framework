import './App.css'
import StudentCard from './Components/Student-Card'
import StudentForm from './Components/StudentForm'
import { useState } from 'react'

function App() {
  const [etudiantAModifier  , setEtudiantAModifier] = useState(null);
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
  function enregisterModification(etudiantModifie) {
    setEtudiants((actual) =>
      actual.map((etudiant) =>
        etudiant.id === etudiantModifie.id ? {...etudiantModifie}:etudiant
      )
    );
    setEtudiantAModifier(null);
  }
  function modifierEtudiant(etudiant){
    setEtudiantAModifier(etudiant);
  }
  function ajouterEtudiant(nouvelEtudiant) {
    const nouveauEtudiant = {
      ...nouvelEtudiant,
      id: Date.now(),
    };
    setEtudiants((actual) => [...actual, nouveauEtudiant]);
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
        <button type="button" onClick={() => document.getElementById('student-form')?.scrollIntoView()}>
          Ajouter un etudiant
        </button>
        
      </div> 
      
      </header>
      <StudentForm
        key={etudiantAModifier?.id || 'new'}
        onCreate={ajouterEtudiant}
        onUpdate={enregisterModification}
        etudiantAModifier={etudiantAModifier}
      />
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
          onModifier={modifierEtudiant}
          onSupprimer={supprimerEtudiant}
        />
        
        
      ))}
      
      
      </section>
      </div>
    </main>
    
  )
}
export default App
