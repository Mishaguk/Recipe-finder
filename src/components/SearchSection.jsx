'use client';
import SearchForm from '@/components/SearchForm';
import { useRouter } from 'next/navigation';

const SearchSection = () => {
  const router = useRouter();

  const handleSearch = ({ query, cuisine, maxReadyTime }) => {
    const params = new URLSearchParams();

    if (query) params.append('query', query);
    if (cuisine) params.append('cuisine', cuisine);
    if (maxReadyTime) params.append('maxReadyTime', maxReadyTime);

    router.push(`/recipes?${params.toString()}`);
  };

  return <SearchForm onSearch={handleSearch} />;
};

export default SearchSection;
