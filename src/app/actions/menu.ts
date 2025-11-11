'use server';

import { shouldUpdateMenu } from '@/ai/flows/menu-seasonal-update';
import { menuItems } from '@/lib/data';

export async function updateMenuForSeason() {
  const currentSeason = 'Summer'; // This could be dynamic in a real app
  
  try {
    const result = await shouldUpdateMenu({
      menuItems: menuItems.map(item => ({ name: item.name, ingredients: item.ingredients })),
      currentSeason: currentSeason,
    });
    return result;
  } catch (error) {
    console.error('AI operation failed:', error);
    // In a real app, you might want to throw a more specific error
    // or return a structured error object.
    return {
      shouldUpdate: false,
      reason: 'Could not connect to the AI service to get seasonal recommendations.',
    };
  }
}
