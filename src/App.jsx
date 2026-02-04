import {useState} from 'react';
import BurgerStack from './components/BurgerStack/BurgerStack.jsx';
import IngredientList from './components/IngredientList/IngredientList.jsx';
import './App.css';

const App = () => {
  const availableIngredients = [
    { name: 'Kaiser Bun', color: 'saddlebrown' },
    { name: 'Sesame Bun', color: 'sandybrown' },
    { name: 'Gluten Free Bun', color: 'peru' },
    { name: 'Lettuce Wrap', color: 'olivedrab' },
    { name: 'Beef Patty', color: '#3F250B' },
    { name: 'Soy Patty', color: '#3F250B' },
    { name: 'Black Bean Patty', color: '#3F250B' },
    { name: 'Chicken Patty', color: 'burlywood' },
    { name: 'Lettuce', color: 'lawngreen' },
    { name: 'Tomato', color: 'tomato' },
    { name: 'Bacon', color: 'maroon' },
    { name: 'Onion', color: 'lightyellow' },
    { name: 'Cheddar Cheese', color: '#FDE18B' },
    { name: 'Swiss Cheese', color: '#F1E1A8' },
  ];
const [stack, setStack] = useState([]);

const addIngredient = (ingredient) => {
  setStack((prevStack) => [...prevStack, ingredient]);  
};

const removefromStack = (indexToRemove) => {
  setStack((prevStack) =>
    prevStack.filter((_, index) => index !== indexToRemove)
  );
};

  return (
    <main>
      <h1>Burger Stacker</h1>
      <section>
      
       <IngredientList availableIngredients ={availableIngredients} onAdd={addIngredient} />
      </section>
      <section>
        <BurgerStack ingredients={stack} onRemove={removefromStack} />
      </section>
    </main>
  );
};

export default App;
