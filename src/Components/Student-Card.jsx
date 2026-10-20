import './Student-Card.css'


function StudentCard(props) {
  return (
    <article className="student-card">
        <img id="student-image" src={props.img} alt={`${props.prenom} ${props.name}`} />
        <h2>{props.prenom} {props.name}</h2>
       
     
        <span className="group-badge"><strong>Groupe:</strong> {props.groupe}</span>
     
      
        <div><strong>Filière:</strong> {props.filier}</div>
        <div><strong>Année:</strong> {props.annee}</div>
      
        <div><strong>Email:</strong> {props.Email}</div>
        <div><strong>Téléphone:</strong> {props.Tel}</div>
        <div><strong>Ville:</strong> {props.ville}</div>
    
      <a className="contact-button" href={`mailto:${props.Email}`}>Contacter</a>
    </article>
  )
}

export default StudentCard
