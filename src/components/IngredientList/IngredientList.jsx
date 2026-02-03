

const IngredientList = ({ availableIngredients, onAdd }) => {
    return (
        <ul>
            {availableIngredients.map((ingredient, index) => (
                <li 
                    key={index}
                    style={{ color: ingredient.color }}
                    onClick={() => onAdd(ingredient)}       
                    >
                        {ingredient.name}
                        <button onClick={() => onAdd(ingredient)}>Add </button>
                    </li>
            ))}
        </ul>
    );
};

export default IngredientList;