import { SPOONACULAR_API_KEY } from '@/constants/api';
import { FETCH_ENDPOINT } from '@/constants/fetchEndpoint';

export async function getRecipes({ query, cuisine, maxReadyTime }) {
  const params = new URLSearchParams();

  if (query) params.append('query', query);
  if (cuisine) params.append('cuisine', cuisine);
  if (maxReadyTime) params.append('maxReadyTime', maxReadyTime);

  params.append('apiKey', SPOONACULAR_API_KEY);
  console.log(params.toString());

  const res = await fetch(
    `${FETCH_ENDPOINT.recipesComplexSearch}?${params.toString()}`,
    {
      next: { revalidate: 60 },
    }
  );

  if (!res.ok) {
    const text = await res.text();
    console.error('Fetch error:', res.status, text);
    throw new Error(`Failed to fetch recipe. Status: ${res.status}`);
  }

  return res.json();
}

export async function getRecipeById(id) {
  const params = new URLSearchParams();
  params.append('apiKey', SPOONACULAR_API_KEY);

  const url = `${
    FETCH_ENDPOINT.recipes
  }/${id}/information?${params.toString()}`;

  const res = await fetch(url, {
    next: { revalidate: 60 },
  });

  if (res.status === 404) {
    throw new Error('Recipe not found');
  }

  if (!res.ok) {
    const text = await res.text();
    console.error('Fetch error:', res.status, text);
    throw new Error(`Failed to fetch recipe. Status: ${res.status}`);
  }

  return res.json();
}
