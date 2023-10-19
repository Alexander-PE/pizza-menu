import Pizza from './Pizza'

const Menu = () => {
  return (
    <main className='menu'>
      <h2>Our menu</h2>
      <Pizza name='Pizza Spinaci' ingredients='Tomato, mozarella, spinach, and ricotta cheese' photoName='pizzas/spinaci.jpg' price='10'/>
      {/* <Pizza />
      <Pizza /> */}
    </main>
  )
}

export default Menu
