'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { categories } from '@/lib/data';

interface ProductFiltersProps {
  onFiltersChange: (filters: {
    search: string;
    category: string;
    minPrice: number;
    maxPrice: number;
  }) => void;
}

export default function ProductFilters({ onFiltersChange }: ProductFiltersProps) {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000);

  // Update filters when any filter value changes
  useEffect(() => {
    onFiltersChange({
      search,
      category: selectedCategory,
      minPrice,
      maxPrice,
    });
  }, [search, selectedCategory, minPrice, maxPrice, onFiltersChange]);

  const clearFilters = () => {
    setSearch('');
    setSelectedCategory('');
    setMinPrice(0);
    setMaxPrice(1000);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold">Filters</h3>
        <Button
          variant="outline"
          size="sm"
          onClick={clearFilters}
          className="text-sm"
        >
          Clear All
        </Button>
      </div>

      <div className="space-y-6">
        {/* Search */}
        <div>
          <label className="block text-sm font-medium mb-2">Search</label>
          <Input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full"
          />
        </div>

        {/* Category Filter */}
        <div>
          <label className="block text-sm font-medium mb-2">Category</label>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">All Categories</option>
            {categories.map((category) => (
              <option key={category.id} value={category.slug}>
                {category.name}
              </option>
            ))}
          </select>
        </div>

        {/* Price Range */}
        <div>
          <label className="block text-sm font-medium mb-2">Price Range</label>
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <Input
                type="number"
                placeholder="Min"
                value={minPrice}
                onChange={(e) => setMinPrice(Number(e.target.value) || 0)}
                className="flex-1"
                min="0"
              />
              <span className="text-gray-500">-</span>
              <Input
                type="number"
                placeholder="Max"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value) || 1000)}
                className="flex-1"
                min="0"
              />
            </div>
            <div className="text-sm text-gray-600">
              ${minPrice} - ${maxPrice}
            </div>
          </div>
        </div>

        {/* Price Range Slider */}
        <div>
          <label className="block text-sm font-medium mb-2">Quick Price Filters</label>
          <div className="grid grid-cols-2 gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                setMinPrice(0);
                setMaxPrice(50);
              }}
              className="text-xs"
            >
              Under $50
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                setMinPrice(50);
                setMaxPrice(100);
              }}
              className="text-xs"
            >
              $50 - $100
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                setMinPrice(100);
                setMaxPrice(200);
              }}
              className="text-xs"
            >
              $100 - $200
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                setMinPrice(200);
                setMaxPrice(1000);
              }}
              className="text-xs"
            >
              Over $200
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}