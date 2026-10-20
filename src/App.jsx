import './App.css'
import StudentCard from './Components/Student-Card'


const etudiants=[
    {nom:"jemni",
    prenom:"taha",
    Email:"tahajemni8@gmail.com",
    Tel:"+216 24825245",
    filier:"GLSI",
    annee:"2eme anneé",
    groupe:"B",
    ville:"gabes",
    img: "../1790966170270.png"}
    
]

function App() {
  return (
    <main className="app-shell">
      <header className="page-header">
        <div>
         
          <h1>Information d Étudiants</h1>
          
        </div>
        
      </header>
      <section className="student-grid" aria-label="Liste des étudiants">
      {etudiants.map((etudiant) => (
        <StudentCard
          key={`${etudiant.nom}-${etudiant.prenom}`}
          name={etudiant.nom}
          prenom={etudiant.prenom}
          Email={etudiant.Email}
          Tel={etudiant.Tel}
          filier={etudiant.filier}
          annee={etudiant.annee}
          groupe={etudiant.groupe}
          ville={etudiant.ville}
          img={etudiant.img}
        />
      ))}
      </section>
    </main>
  )
}

export default App
