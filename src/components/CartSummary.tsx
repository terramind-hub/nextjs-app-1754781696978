'use client';

import { Button } from '@/components/ui/button';
import { useCart } from '@/hooks/useCart';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export default function CartSummary() {
  const { items, getCartTotal, getCartItemCount } = useCart();

  const subtotal = getCartTotal();
  const tax = subtotal * 0.08; // 8% tax rate
  const total = subtotal + tax;
  const itemCount = getCartItemCount();

  if (items.length === 0) {
    return (
      <div className="bg-gray-50 p-6 rounded-lg">
        <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
        <p className="text-gray-500 text-center py-8">Your cart is empty</p>
        <Link href="/products">
          <Button className="w-full">Continue Shopping</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 p-6 rounded-lg">
      <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
      
      <div className="space-y-3 mb-6">
        <div className="flex justify-between text-sm">
          <span>Items ({itemCount})</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        
        <div className="flex justify-between text-sm">
          <span>Shipping</span>
          <span className="text-green-600">Free</span>
        </div>
        
        <div className="flex justify-between text-sm">
          <span>Tax</span>
          <span>${tax.toFixed(2)}</span>
        </div>
        
        <hr className="border-gray-200" />
        
        <div className="flex justify-between font-semibold text-lg">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </div>

      <div className="space-y-3">
        <Link href="/checkout">
          <Button className="w-full" size="lg">
            Proceed to Checkout
          </Button>
        </Link>
        
        <Link href="/products">
          <Button variant="outline" className="w-full">
            Continue Shopping
          </Button>
        </Link>
      </div>

      <div className="mt-6 text-xs text-gray-500 text-center">
        <p>Free shipping on orders over $50</p>
        <p>30-day return policy</p>
      </div>
    </div>
  );
}