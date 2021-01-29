import React, {useState} from 'react'
import items from './data'
import Categories from './Categories'
import Menu from './Menu'


function App() {
  const choices = ['all', ...new Set(items.map((item) => item.category))]
  const [menuItems, setMenuItems] = useState(items)
  const [options, setOptions] = useState(choices)
  const filterMenu = (category) => {
    if (category === 'all'){
      return setMenuItems(items)
      
    }
    let newMenu = items.filter((item) => item.category === category);
    setMenuItems(newMenu);
  };

  return (
    <main>
      <section className='menu section'>
        <div className='title'>
          <h2>Our Menu</h2>
          <div className='underline'></div>
        </div>
        <Categories options={options} filterMenu={filterMenu}/>
        <Menu items={menuItems}/>
      </section>
    </main>
  )
}

export default App


