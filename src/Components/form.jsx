function form() {
  return (
    <div id="form">
        <form>
            <label htmlFor="nom">Nom</label>
            <input type="text" id="nom" />
            <label htmlFor="prenom">Prénom</label>
            <input type="text" id="prenom" />
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
            <label htmlFor="tel">Téléphone</label>
            <input type="tel" id="tel" />
            <label htmlFor="filiere">Filière</label>
            <input type="text" id="filiere" />
            <label htmlFor="annee">Année</label>
            <input type="text" id="annee" />
            <label htmlFor="groupe">Groupe</label>
            <input type="text" id="groupe" />
            <label htmlFor="ville">Ville</label>
            <input type="text" id="ville" />
            <label htmlFor="img">Image</label>
            <input type="file" id="img" />
        </form>
    </div>
    )
}

export default form