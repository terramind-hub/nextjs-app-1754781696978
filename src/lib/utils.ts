import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatPrice(price: number, currency: string = 'USD'): string {
  if (typeof price !== 'number' || isNaN(price)) {
    return '$0.00'
  }
  
  try {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency,
    }).format(price)
  } catch (error) {
    // Fallback if currency is invalid
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price)
  }
}

export function formatDate(date: Date | string | null | undefined): string {
  if (!date) {
    return 'N/A'
  }
  
  try {
    const dateObj = typeof date === 'string' ? new Date(date) : date
    if (isNaN(dateObj.getTime())) {
      return 'Invalid Date'
    }
    
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    }).format(dateObj)
  } catch (error) {
    return 'Invalid Date'
  }
}

export function calculateTotal(items: Array<{ price: number; quantity: number }> | null | undefined): number {
  if (!items || !Array.isArray(items)) {
    return 0
  }
  
  return items.reduce((total, item) => {
    if (typeof item.price !== 'number' || typeof item.quantity !== 'number') {
      return total
    }
    return total + (item.price * item.quantity)
  }, 0)
}

export function slugify(text: string | null | undefined): string {
  if (!text || typeof text !== 'string') {
    return ''
  }
  
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '') // Remove special characters
    .replace(/[\s_-]+/g, '-') // Replace spaces and underscores with hyphens
    .replace(/^-+|-+$/g, '') // Remove leading/trailing hyphens
}

export function getCartTotal(items: Array<{ price: number; quantity: number }> | null | undefined): number {
  return calculateTotal(items)
}

export function getCartItemCount(items: Array<{ quantity: number }> | null | undefined): number {
  if (!items || !Array.isArray(items)) {
    return 0
  }
  
  return items.reduce((count, item) => {
    if (typeof item.quantity !== 'number') {
      return count
    }
    return count + item.quantity
  }, 0)
}

export function formatCurrency(amount: number, currency?: string): string {
  return formatPrice(amount, currency)
}

export function truncateText(text: string | null | undefined, maxLength: number = 100): string {
  if (!text || typeof text !== 'string') {
    return ''
  }
  
  if (text.length <= maxLength) {
    return text
  }
  
  return text.substring(0, maxLength).trim() + '...'
}

export function generateId(): string {
  return Math.random().toString(36).substring(2) + Date.now().toString(36)
}

export function isValidEmail(email: string | null | undefined): boolean {
  if (!email || typeof email !== 'string') {
    return false
  }
  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null = null
  
  return (...args: Parameters<T>) => {
    if (timeout) {
      clearTimeout(timeout)
    }
    
    timeout = setTimeout(() => {
      func(...args)
    }, wait)
  }
}