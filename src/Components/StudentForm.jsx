import { useState } from 'react'
import './StudentForm.css'

const initialForm = {
  nom: '',
  prenom: '',
  Email: '',
  Tel: '',
  filier: '',
  annee: '',
  groupe: '',
  ville: '',
  img: '',
}

function StudentForm({ onCreate, onUpdate, etudiantAModifier }) {
  const [formData, setFormData] = useState(etudiantAModifier || initialForm)
  const [erreurs, setErreurs] = useState({})
  
  function handleChange(event) {
    const { name, value, files } = event.target
    if (files?.[0]) {
      setFormData((current) => ({
        ...current,
        [name]: URL.createObjectURL(files[0]),
      }))
      return
    }

    setFormData((current) => ({ ...current, [name]: value }))
    setErreurs((current) => ({ ...current, [name]: '' }))
  }

  function validerFormulaire() {
    const nouvellesErreurs = {}
    const emailValide = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const telephoneValide = /^[+]?[0-9\s()-]{8,}$/

    if (!formData.nom.trim()) nouvellesErreurs.nom = 'Le nom est obligatoire.'
    if (!formData.prenom.t  rim()) nouvellesErreurs.prenom = 'Le prénom est obligatoire.'
    if (!formData.Email.trim()) {
      nouvellesErreurs.Email = "L'email est obligatoire."
    } else if (!emailValide.test(formData.Email.trim())) {
      nouvellesErreurs.Email = "L'email n'est pas valide."
    }
    if (!formData.Tel.trim()) {
      nouvellesErreurs.Tel = 'Le téléphone est obligatoire.'
    } else if (!telephoneValide.test(formData.Tel.trim())) {
      nouvellesErreurs.Tel = 'Le téléphone n’est pas valide.'
    }
    if (!formData.filier) nouvellesErreurs.filier = 'La filière est obligatoire.'
    if (!formData.annee.trim()) nouvellesErreurs.annee = "L'année est obligatoire."
    if (!formData.groupe.trim()) nouvellesErreurs.groupe = 'Le groupe est obligatoire.'
    if (!formData.ville.trim()) nouvellesErreurs.ville = 'La ville est obligatoire.'

    setErreurs(nouvellesErreurs)
    return Object.keys(nouvellesErreurs).length === 0
  }

  function handleSubmit(event) {
    event.preventDefault()
    if (!validerFormulaire()) return

    const student = {
      ...formData,
      img: formData.img || '../1790966170270.png',
    }

    if (etudiantAModifier) {
      onUpdate(student)
    }else{
      onCreate(student)
      setFormData(initialForm);
      setErreurs({})
    }
  }

  function handleReset() {
    setFormData(initialForm)
    setErreurs({})
  }
  
  return (
    <div id="student-form">
      <form onSubmit={handleSubmit} noValidate>
        <table>
          <tr>
            <td>
              <label htmlFor="nom">Nom</label>
              <input id="nom" name="nom" value={formData.nom} onChange={handleChange} required />
              {erreurs.nom && <small className="form-error">{erreurs.nom}</small>}
          </td>
            
        
        <td>    
          <label htmlFor="prenom">Prénom</label>
          <input id="prenom" name="prenom" value={formData.prenom} onChange={handleChange} required />
          {erreurs.prenom && <small className="form-error">{erreurs.prenom}</small>}
        </td>
        </tr>
      
        
<tr>
  <td><label htmlFor="Email">Email</label>
        <input id="Email" name="Email" type="email" value={formData.Email} onChange={handleChange} required />
        {erreurs.Email && <small className="form-error">{erreurs.Email}</small>}</td>
  
        <td>
           <label htmlFor="Tel">Téléphone</label>
        <input id="Tel" name="Tel" type="tel" value={formData.Tel} onChange={handleChange} required />
        {erreurs.Tel && <small className="form-error">{erreurs.Tel}</small>}
        </td>
       

</tr>
    <tr>
      <td>
        <label htmlFor="filier">Filière</label>
        <select id="filier" name="filier" value={formData.filier} onChange={handleChange} required>
          <option value="">Sélectionner une filière</option>
          <option value="GLSI">GLSI</option>
          <option value="LCS">LCS</option>
          <option value="LBC">LBC</option>
        </select>
        {erreurs.filier && <small className="form-error">{erreurs.filier}</small>}
      </td>
      <td>
        <label htmlFor="annee">Année</label>
        <input id="annee" name="annee" value={formData.annee} onChange={handleChange} required />
        {erreurs.annee && <small className="form-error">{erreurs.annee}</small>}
      </td>
        
        </tr>  
        
<tr>
  <td>
     <label htmlFor="groupe">Groupe</label>
        <input id="groupe" name="groupe" value={formData.groupe} onChange={handleChange} required />
        {erreurs.groupe && <small className="form-error">{erreurs.groupe}</small>}
  </td>
 <td>
  <label htmlFor="ville">Ville</label>
        <input id="ville" name="ville" value={formData.ville} onChange={handleChange} required />
        {erreurs.ville && <small className="form-error">{erreurs.ville}</small>}
 </td>

        
</tr>
        
<tr>
  <td><label htmlFor="img">Photo:</label>
        <input id="img" type="file" name="img" accept="image/*" onChange={handleChange} /></td>
        <td>
 <button type="reset" onClick={handleReset}>Réinitialiser</button>
 <button type="submit">{etudiantAModifier ? 'Modifier' : 'Ajouter'}</button>
        </td>
</tr>
        
       
        </table>
      </form>
    </div>
  )
}

export default StudentForm
