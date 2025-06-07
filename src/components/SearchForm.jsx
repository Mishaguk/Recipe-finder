import { useState } from 'react';

const cuisines = [
  'African',
  'Asian',
  'American',
  'British',
  'Greek',
  'Japanese',
  'Italian',
  'Mexican',
  'Chinese',
];

const SearchForm = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const [cuisine, setCuisine] = useState('');
  const [maxReadyTime, setMaxReadyTime] = useState('');

  let isButtonEnabled = false;
  isButtonEnabled = query || cuisine || maxReadyTime;

  function handleSubmit(e) {
    e.preventDefault();
    if (!isButtonEnabled) return;
    onSearch({ query, cuisine, maxReadyTime });
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 max-w-3xl w-full mx-auto my-30 p-6 bg-yellow-50 rounded-lg shadow-lg"
    >
      <div>
        <label className="block mb-1 font-semibold text-yellow-800">
          Recipe Query
        </label>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="e.g. pasta"
          className="w-full rounded border border-yellow-400 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />
      </div>

      <div>
        <label className="block mb-1 font-semibold text-yellow-800">
          Cuisine
        </label>
        <select
          value={cuisine}
          onChange={(e) => setCuisine(e.target.value)}
          className="w-full rounded border border-yellow-400 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
        >
          <option value="">Select cuisine</option>
          {cuisines.map((cuisine) => (
            <option value={cuisine} key={cuisine}>
              {cuisine}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block mb-1 font-semibold text-yellow-800">
          Max Preparation Time (minutes)
        </label>
        <input
          type="number"
          min="1"
          value={maxReadyTime}
          onChange={(e) => setMaxReadyTime(e.target.value)}
          placeholder="e.g. 30"
          className="w-full rounded border border-yellow-400 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />
      </div>

      <button
        type="submit"
        disabled={!isButtonEnabled}
        className={`w-full py-3 rounded-lg font-semibold text-yellow-900 transition
      ${
        isButtonEnabled
          ? 'bg-yellow-400 hover:bg-yellow-500'
          : 'bg-yellow-200 cursor-not-allowed'
      }`}
      >
        Next
      </button>
    </form>
  );
};
export default SearchForm;
