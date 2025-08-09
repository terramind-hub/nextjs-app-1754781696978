import { Suspense } from 'react';
import type { Metadata } from 'next';
import ProductGrid from '@/components/ProductGrid';
import ProductFilters from '@/components/ProductFilters';

export const metadata: Metadata = {
  title: 'Products - Shop Our Collection',
  description: 'Browse our complete product catalog with advanced filtering and search capabilities.',
};

interface ProductsPageProps {
  searchParams: {
    search?: string;
    category?: string;
    minPrice?: string;
    maxPrice?: string;
    sortBy?: string;
    page?: string;
  };
}

export default function ProductsPage({ searchParams }: ProductsPageProps) {
  const {
    search = '',
    category = '',
    minPrice = '',
    maxPrice = '',
    sortBy = 'name',
    page = '1'
  } = searchParams;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Products
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Discover our complete collection of products
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Filters Sidebar */}
        <aside className="lg:w-64 flex-shrink-0">
          <div className="sticky top-4">
            <Suspense fallback={<div className="animate-pulse bg-gray-200 dark:bg-gray-700 h-96 rounded-lg"></div>}>
              <ProductFilters
                currentSearch={search}
                currentCategory={category}
                currentMinPrice={minPrice}
                currentMaxPrice={maxPrice}
                currentSortBy={sortBy}
              />
            </Suspense>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1">
          <Suspense 
            fallback={
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div key={i} className="animate-pulse">
                    <div className="bg-gray-200 dark:bg-gray-700 aspect-square rounded-lg mb-4"></div>
                    <div className="bg-gray-200 dark:bg-gray-700 h-4 rounded mb-2"></div>
                    <div className="bg-gray-200 dark:bg-gray-700 h-4 rounded w-2/3"></div>
                  </div>
                ))}
              </div>
            }
          >
            <ProductGrid
              search={search}
              category={category}
              minPrice={minPrice ? parseFloat(minPrice) : undefined}
              maxPrice={maxPrice ? parseFloat(maxPrice) : undefined}
              sortBy={sortBy}
              currentPage={parseInt(page)}
            />
          </Suspense>
        </main>
      </div>
    </div>
  );
}