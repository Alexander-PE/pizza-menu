const Pizza = ({ name, ingredients, photoName }) => {
  return (
    <div>
      <img src={photoName} alt="Spinaci" />
      <h3>{name}</h3>
      <p>{ingredients}</p>
    </div>
  )
}

export default Pizza
