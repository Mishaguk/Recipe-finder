import SearchSection from '@/components/SearchSection';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex items-center space-x-3 w-full max-w-md">
        <SearchSection />
      </div>
    </div>
  );
}
