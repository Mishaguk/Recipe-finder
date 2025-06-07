const Recipe = ({ recipe }) => {
  return (
    <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-3xl overflow-hidden">
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-[400px] object-cover"
      />

      <div className="p-8">
        <h1 className="text-4xl font-bold text-yellow-700 mb-4">
          {recipe.title}
        </h1>
        <div className="bg-yellow-100 p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold text-yellow-800 mb-4">
            Ingredients
          </h2>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            {recipe.extendedIngredients.map((ing) => (
              <li key={ing.id} className="font-mono">
                {ing.original}
              </li>
            ))}
          </ul>
        </div>
        <div
          className="text-gray-700 leading-relaxed prose max-w-none"
          dangerouslySetInnerHTML={{
            __html: recipe.summary || '<p>No description available.</p>',
          }}
        ></div>

        <div className="mt-8 flex flex-wrap gap-4">
          <span className="bg-yellow-100 text-yellow-800 px-4 py-1 rounded-full text-sm font-semibold">
            Ready in {recipe.readyInMinutes} mins
          </span>
          <span className="bg-yellow-100 text-yellow-800 px-4 py-1 rounded-full text-sm font-semibold">
            Servings: {recipe.servings}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
