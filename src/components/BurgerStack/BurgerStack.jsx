

const BurgerStack = ({ ingredients }) => {
  return (
    <ul>
      {ingredients.map((ingredient, index) => (
        <li 
          key={index}
          style={{ backgroundColor: ingredient.color }}
        >
          {ingredient.name}
        </li>
      ))} 
    </ul>
  );
};

export default BurgerStack;