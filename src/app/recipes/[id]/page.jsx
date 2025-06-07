import { getRecipeById } from '@/services/api/recipes';
import { notFound } from 'next/navigation';
import Recipe from '@/components/Recipe';

const RecipeInfo = async ({ params }) => {
  const { id } = await params;

  let recipe;
  try {
    recipe = await getRecipeById(id);
  } catch (error) {
    if (error.message === 'Recipe not found') {
      notFound();
    }
    throw error;
  }

  return (
    <div className="min-h-screen py-10 px-4">
      <Recipe recipe={recipe} />
    </div>
  );
};

export default RecipeInfo;
