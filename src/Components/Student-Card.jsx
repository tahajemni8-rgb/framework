import './Student-Card.css'
import { useState } from 'react'

function StudentCard(
  { id, nom, prenom, Email, Tel, filier, annee, groupe, ville, img, onSupprimer },
  
) {
  const [coordonnees, setCoordonnees] = useState(false);
  function basculerCoordonnees() {
    setCoordonnees(!coordonnees);
    console.log("Coordonnées affichées:", !coordonnees);
  
  }
  
  return (
    
    <article className="student-card">
      
        
        <img id="student-image" src={img} alt={`${prenom} ${nom}`} />
        <h2>{prenom} {nom}</h2>
       
        
        <span className="group-badge"><strong>Groupe:</strong> {groupe}</span>
     
      
        <div><strong>Filière:</strong> {filier}</div>
        <div><strong>Année:</strong> {annee}</div>
      {coordonnees && (
        <div><div><strong>Email:</strong> {Email}</div>
        <div><strong>Téléphone:</strong> {Tel}</div></div>
      )
      }
        
        <div><strong>Ville:</strong> {ville}</div>
        <button onClick={basculerCoordonnees}>
            afficher / masquer
        </button>
        <button onClick={() => onSupprimer(id)}> delete</button>
        
  
        <br />
    
      <a className="contact-button" href={`mailto:${Email}`}>Contacter</a>
      
    </article>
   
    
  )
}

export default StudentCard
