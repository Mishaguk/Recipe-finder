import { getRecipes } from '@/services/api/recipes';
import RecipesList from '@/components/RecipesList';

const Recipes = async ({ searchParams }) => {
  const { query, cuisine, maxReadyTime } = await searchParams;
  const recipes = await getRecipes({ query, cuisine, maxReadyTime });

  if (!recipes.results.length) {
    return (
      <h1 className="my-60 text-4xl sm:text-5xl font-extrabold text-center mb-8 text-amber-100 drop-shadow-lg">
        No recipes found :(
      </h1>
    );
  }

  return (
    <div className="p-6">
      <h1 className="text-4xl sm:text-5xl font-extrabold text-center mb-8 text-amber-100 drop-shadow-lg">
        Explore the most{' '}
        <span className="text-amber-100 underline decoration-amber-400">
          amazing dishes!
        </span>
      </h1>
      <RecipesList recipes={recipes.results} />
    </div>
  );
};
export default Recipes;
