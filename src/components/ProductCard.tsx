'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useCart } from '@/hooks/useCart';
import { cn } from '@/lib/utils';
import { Product } from '@/types';

interface ProductCardProps {
  product: Product;
  className?: string;
}

export default function ProductCard({ product, className }: ProductCardProps) {
  const { addToCart } = useCart();
  const [isLoading, setIsLoading] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleAddToCart = async () => {
    setIsLoading(true);
    try {
      await addToCart(product);
    } catch (error) {
      console.error('Failed to add to cart:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price);
  };

  const imageUrl = product.image || 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=400&fit=crop';

  return (
    <div className={cn(
      "group relative bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200",
      className
    )}>
      <Link href={`/products/${product.id}`} className="block">
        <div className="aspect-square overflow-hidden rounded-t-lg bg-gray-100">
          {!imageError ? (
            <Image
              src={imageUrl}
              alt={product.name}
              width={400}
              height={400}
              sizes="(max-width: 768px) 100vw, 33vw"
              className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-200"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="h-full w-full flex items-center justify-center bg-gray-100 text-gray-400">
              <svg
                className="h-12 w-12"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
          )}
        </div>
        
        <div className="p-4">
          <h3 className="text-sm font-medium text-gray-900 line-clamp-2 group-hover:text-blue-600 transition-colors">
            {product.name}
          </h3>
          
          {product.category && (
            <p className="mt-1 text-xs text-gray-500 capitalize">
              {product.category}
            </p>
          )}
          
          <div className="mt-2 flex items-center justify-between">
            <div className="flex flex-col">
              <span className="text-lg font-semibold text-gray-900">
                {formatPrice(product.price)}
              </span>
              {product.originalPrice && product.originalPrice > product.price && (
                <span className="text-sm text-gray-500 line-through">
                  {formatPrice(product.originalPrice)}
                </span>
              )}
            </div>
            
            {product.rating && (
              <div className="flex items-center">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={cn(
                        "h-4 w-4",
                        i < Math.floor(product.rating!)
                          ? "text-yellow-400 fill-current"
                          : "text-gray-300"
                      )}
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="ml-1 text-xs text-gray-500">
                  ({product.rating.toFixed(1)})
                </span>
              </div>
            )}
          </div>
          
          {product.description && (
            <p className="mt-2 text-sm text-gray-600 line-clamp-2">
              {product.description}
            </p>
          )}
        </div>
      </Link>
      
      <div className="p-4 pt-0">
        <Button
          onClick={handleAddToCart}
          disabled={isLoading || !product.inStock}
          className="w-full"
          variant={!product.inStock ? "secondary" : "default"}
        >
          {isLoading ? (
            <div className="flex items-center">
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              Adding...
            </div>
          ) : !product.inStock ? (
            'Out of Stock'
          ) : (
            'Add to Cart'
          )}
        </Button>
        
        {product.inStock && product.stock && product.stock <= 5 && (
          <p className="mt-2 text-xs text-orange-600 text-center">
            Only {product.stock} left in stock
          </p>
        )}
      </div>
    </div>
  );
}