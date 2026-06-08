import { Clock, Users, ChefHat } from 'lucide-react'

export default function Recipes() {
  const recipes = [
    {
      name: 'Jollof Rice',
      description: 'Ghana\'s beloved celebration rice dish with tomato-based sauce, aromatic spices, and meat.',
      prepTime: '20 mins',
      cookTime: '40 mins',
      servings: '6-8',
      ingredients: [
        '3 cups long-grain rice',
        '2 cans (400g each) tomato paste',
        '1 large onion, diced',
        '4 cups chicken or vegetable stock',
        '1/2 cup vegetable oil',
        '2 bay leaves',
        'Salt, pepper, and spices to taste',
        'Scotch bonnet pepper (optional)',
      ],
      instructions: [
        'Heat oil in a large pot and fry onions until soft.',
        'Add tomato paste and fry for 5 minutes.',
        'Add stock and bring to boil.',
        'Stir in rice, bay leaves, and seasonings.',
        'Reduce heat and cover, cooking for 30-35 minutes until rice is tender.',
        'Serve hot with grilled chicken or beef.',
      ],
      category: 'Main Course',
    },
    {
      name: 'Fufu',
      description: 'A traditional pounded starch dish made from plantains and cassava, served with rich soups.',
      prepTime: '15 mins',
      cookTime: '25 mins',
      servings: '4-6',
      ingredients: [
        '3 green plantains',
        '2 cups cassava root',
        'Salt to taste',
        'Water',
        'Butter (optional)',
      ],
      instructions: [
        'Peel plantains and cassava, cut into chunks.',
        'Boil in salted water for 15-20 minutes until very soft.',
        'Drain and place in a wooden mortar or food processor.',
        'Pound vigorously until smooth and fluffy.',
        'Serve warm with light soup or groundnut soup.',
        'Traditional pairing: Serve with fragrant soups and protein.',
      ],
      category: 'Main Course',
    },
    {
      name: 'Waakye',
      description: 'A beloved street food of rice and beans cooked together with aromatic herbs, served with rich sauce.',
      prepTime: '15 mins',
      cookTime: '45 mins',
      servings: '6-8',
      ingredients: [
        '2 cups rice',
        '1 cup kidney beans',
        '2 bay leaves',
        '1/2 cup millet or brown rice',
        '4 cups water',
        'Salt and pepper to taste',
        'Garlic and ginger paste',
        'Oil for cooking',
      ],
      instructions: [
        'Soak kidney beans for 2 hours, then boil until half-cooked.',
        'Add rice, millet, bay leaves, and water to the beans.',
        'Bring to boil, then simmer covered for 30 minutes until done.',
        'Season with salt, pepper, garlic, and ginger.',
        'Serve with guava or ginger drink.',
        'Traditionally garnished with fried onions and peppers.',
      ],
      category: 'Main Course',
    },
    {
      name: 'Groundnut Soup',
      description: 'A rich, creamy soup made with groundnuts (peanuts) and meat, aromatic and deeply flavorful.',
      prepTime: '20 mins',
      cookTime: '50 mins',
      servings: '6',
      ingredients: [
        '1 cup roasted groundnuts (peanuts), ground',
        '1 kg meat (beef or chicken), cubed',
        '3 large onions, diced',
        '4 tomatoes, blended',
        '2 tablespoons tomato paste',
        '4 cups water or stock',
        '2 bay leaves',
        'Salt, pepper, and spices',
        'Scotch bonnet pepper',
      ],
      instructions: [
        'Brown meat in hot oil with onions.',
        'Add tomato paste and blended tomatoes, fry for 5 minutes.',
        'Add stock, bay leaves, and bring to boil.',
        'Simmer meat for 20 minutes until tender.',
        'Mix ground groundnuts with water to create paste.',
        'Add groundnut paste to soup, stir well, and simmer for 15 minutes.',
        'Season to taste and serve with fufu or rice.',
      ],
      category: 'Soup',
    },
    {
      name: 'Kenkey',
      description: 'Steamed corn dough wrapped in corn husks, crispy outside and soft inside. A beloved breakfast.',
      prepTime: '30 mins',
      cookTime: '60 mins',
      servings: '8-10',
      ingredients: [
        '3 cups cornmeal',
        '1 large onion, diced',
        '2 scotch bonnet peppers, diced',
        '2 tablespoons salt',
        '2 cups water',
        'Corn husks for wrapping',
        'Oil for frying',
      ],
      instructions: [
        'Mix cornmeal with hot water to form a stiff dough.',
        'Add diced onions, peppers, and salt.',
        'Let dough rest for 5 minutes.',
        'Wrap portions of dough in corn husks.',
        'Place wrapped kenkey in a pot with boiling water.',
        'Steam for 45-60 minutes until firm.',
        'Serve hot with fried fish, pepper sauce, or tomato-based stew.',
      ],
      category: 'Breakfast',
    },
    {
      name: 'Palmnut Soup',
      description: 'A velvety red soup made from palm nuts, rich with seafood and vegetables, a true Ghanaian treasure.',
      prepTime: '25 mins',
      cookTime: '45 mins',
      servings: '6-8',
      ingredients: [
        '2 cans (400ml each) palm nut cream',
        '1 kg fish or shrimp',
        '3 onions, sliced',
        '4 tomatoes, blended',
        '3 cups water or stock',
        '2 bay leaves',
        'Garlic and ginger paste',
        'Salt and pepper',
        'Scotch bonnet pepper',
        'Okra (optional)',
      ],
      instructions: [
        'Heat oil and fry onions until golden.',
        'Add blended tomatoes and tomato paste, fry for 5 minutes.',
        'Add water and bring to boil.',
        'Add fish or shrimp and cook for 10 minutes.',
        'Stir in palm nut cream slowly to avoid lumping.',
        'Add bay leaves, garlic, ginger, and seasonings.',
        'Simmer for 20 minutes, stirring occasionally.',
        'Serve with fufu or rice.',
      ],
      category: 'Soup',
    },
  ]

  return (
    <div className="max-w-7xl mx-auto px-6 pb-20">
      {/* Header */}
      <section className="py-16 md:py-24">
        <h1 className="heading-2 mb-4">Ghanaian Recipes</h1>
        <p className="body-lg max-w-3xl">
          Discover authentic Ghanaian culinary traditions. These treasured recipes connect us to our heritage and bring the flavors of Ghana to your table.
        </p>
      </section>

      {/* Section divider */}
      <div className="section-divider"></div>

      {/* Recipes Grid */}
      <section className="py-20">
        <div className="grid md:grid-cols-2 gap-6">
          {recipes.map((recipe, i) => (
            <div key={i} className="card-lg group hover:shadow-xl transition-all duration-300">
              {/* Recipe Header */}
              <div className="mb-6">
                <div className="inline-block px-3 py-1 rounded-full bg-gold-400/20 text-gold-400 text-xs font-semibold mb-4">
                  {recipe.category}
                </div>
                <h3 className="text-2xl font-semibold mb-2 group-hover:text-gold-400 transition">
                  {recipe.name}
                </h3>
                <p className="text-gray-300 text-sm mb-4">{recipe.description}</p>
              </div>

              {/* Recipe Info */}
              <div className="flex gap-4 mb-6 pb-6 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <Clock size={16} className="text-gold-400" />
                  <span className="text-sm text-gray-400">{recipe.prepTime}</span>
                </div>
                <div className="flex items-center gap-2">
                  <ChefHat size={16} className="text-gold-400" />
                  <span className="text-sm text-gray-400">{recipe.cookTime}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users size={16} className="text-gold-400" />
                  <span className="text-sm text-gray-400">{recipe.servings}</span>
                </div>
              </div>

              {/* Ingredients */}
              <div className="mb-6">
                <h4 className="font-semibold text-white mb-3">Ingredients:</h4>
                <ul className="space-y-2">
                  {recipe.ingredients.map((ingredient, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-gray-300">
                      <span className="text-gold-400 font-bold mt-0.5">•</span>
                      <span>{ingredient}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Instructions */}
              <div>
                <h4 className="font-semibold text-white mb-3">Instructions:</h4>
                <ol className="space-y-2">
                  {recipe.instructions.map((instruction, j) => (
                    <li key={j} className="flex gap-3 text-sm text-gray-300">
                      <span className="text-gold-400 font-bold flex-shrink-0">{j + 1}.</span>
                      <span>{instruction}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section divider */}
      <div className="section-divider"></div>

      {/* CTA Section */}
      <section className="glass-lg p-12 text-center">
        <h2 className="heading-2 mb-4">Share Your Family Recipes</h2>
        <p className="body-lg mb-8 max-w-2xl mx-auto">
          Do you have a cherished Ghanaian recipe to share with our community? We'd love to feature family recipes and culinary traditions.
        </p>
        <button className="btn-primary">Submit Your Recipe</button>
      </section>
    </div>
  )
}
