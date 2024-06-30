document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('ingredient-form');
    const recipeResults = document.getElementById('recipe-results');

    const recipes = [
        {
            name: 'Chicken Curry',
            image: 'images/chicken-curry.jpg',
            ingredients: ['Chicken', 'Onion', 'Tomato', 'Spices'],
            procedure: 'Cook chicken with onions and tomatoes. Add spices and cook until done.'
        },
        {
            name: 'Tomato Rice',
            image: 'images/tomato-rice.jpg',
            ingredients: ['Rice', 'Tomato', 'Onion', 'Spices'],
            procedure: 'Cook rice and mix with sautéed tomatoes, onions, and spices.'
        },
        {
            name: 'Grilled Chicken Salad',
            image: 'images/chicken-salad.jpg',
            ingredients: ['Chicken', 'Lettuce', 'Tomato', 'Cucumber'],
            procedure: 'Grill chicken and toss with lettuce, tomatoes, and cucumbers. Serve chilled.'
        },
        {
            name: 'Chicken Rice',
            image: 'images/chicken-rice.jpg',
            ingredients: ['Chicken', 'Rice', 'Onion', 'Garlic', 'Ginger', 'Spices', 'Chicken Broth'],
            procedure: '1. Marinate chicken with spices, garlic, and ginger.\n2. Fry onions until golden.\n3. Add marinated chicken and cook until browned.\n4. Stir in rice and chicken broth.\n5. Cover and simmer until rice is cooked and chicken is tender.\n6. Serve hot, garnished with cilantro.'
        }
    ];

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        
        const selectedIngredients = Array.from(document.querySelectorAll('input[name="ingredient"]:checked'))
                                        .map(checkbox => checkbox.value);

        
        const matchedRecipes = recipes.filter(recipe => {
            return selectedIngredients.every(ingredient => recipe.ingredients.includes(ingredient));
        });

        
        displayRecipes(matchedRecipes);
    });

    function displayRecipes(recipes) {
        recipeResults.innerHTML = ''; 

        if (recipes.length === 0) {
            recipeResults.innerHTML = '<p>No recipes found with selected ingredients.</p>';
            return;
        }

        recipes.forEach(recipe => {
            const recipeCard = document.createElement('div');
            recipeCard.classList.add('recipe-card');

            const image = document.createElement('img');
            image.src = recipe.image;
            image.alt = recipe.name;
            recipeCard.appendChild(image);

            const title = document.createElement('h3');
            title.textContent = recipe.name;
            recipeCard.appendChild(title);

            const ingredientsList = document.createElement('ul');
            recipe.ingredients.forEach(ingredient => {
                const li = document.createElement('li');
                li.textContent = ingredient;
                ingredientsList.appendChild(li);
            });
            recipeCard.appendChild(ingredientsList);

            const procedure = document.createElement('p');
            procedure.textContent = recipe.procedure;
            recipeCard.appendChild(procedure);

            recipeResults.appendChild(recipeCard);
        });
    }
});
