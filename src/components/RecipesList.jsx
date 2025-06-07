'use client';
import { routes } from '@/constants/routes';
import { useRouter } from 'next/navigation';

export default function RecipesList({ recipes }) {
  const router = useRouter();

  const handleClick = (id) => {
    router.push(routes.recipes + '/' + id);
  };

  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
      {recipes.map((recipe) => (
        <li key={recipe.id}>
          <div
            onClick={() => handleClick(recipe.id)}
            className="cursor-pointer bg-white p-4 rounded-xl shadow-md overflow-hidden transition-transform duration-200 transform hover:scale-105 hover:shadow-lg"
          >
            <img
              src={recipe.image}
              alt={recipe.title}
              className="h-48 w-full object-cover rounded-md"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-800 truncate">
                {recipe.title}
              </h2>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
