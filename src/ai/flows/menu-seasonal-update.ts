'use server';

/**
 * @fileOverview Determines if the menu items need to be updated based on seasonal ingredients.
 *
 * - shouldUpdateMenu - A function that checks if the menu needs updates based on seasonal ingredients.
 * - ShouldUpdateMenuInput - The input type for the shouldUpdateMenu function.
 * - ShouldUpdateMenuOutput - The return type for the shouldUpdateMenu function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ShouldUpdateMenuInputSchema = z.object({
  menuItems: z.array(
    z.object({
      name: z.string().describe('The name of the menu item.'),
      ingredients: z.string().describe('The ingredients used in the menu item.'),
    })
  ).describe('The list of menu items to check.'),
  currentSeason: z.string().describe('The current season (e.g., Spring, Summer, Autumn, Winter).'),
});
export type ShouldUpdateMenuInput = z.infer<typeof ShouldUpdateMenuInputSchema>;

const ShouldUpdateMenuOutputSchema = z.object({
  shouldUpdate: z.boolean().describe('Whether the menu items should be updated based on the current season.'),
  reason: z.string().describe('The reason for the recommendation to update or not update the menu.'),
});
export type ShouldUpdateMenuOutput = z.infer<typeof ShouldUpdateMenuOutputSchema>;

export async function shouldUpdateMenu(input: ShouldUpdateMenuInput): Promise<ShouldUpdateMenuOutput> {
  return shouldUpdateMenuFlow(input);
}

const prompt = ai.definePrompt({
  name: 'shouldUpdateMenuPrompt',
  input: {schema: ShouldUpdateMenuInputSchema},
  output: {schema: ShouldUpdateMenuOutputSchema},
  prompt: `You are a restaurant consultant specializing in menu optimization based on seasonal ingredients.

Given the following menu items and the current season, determine if the menu should be updated to reflect the freshest options.

Current Season: {{{currentSeason}}}

Menu Items:
{{#each menuItems}}
- Name: {{this.name}}, Ingredients: {{this.ingredients}}
{{/each}}

Based on the current season and available ingredients, provide a recommendation on whether the menu should be updated and the reasoning behind it.

Output in JSON format:
{
  "shouldUpdate": true or false,
  "reason": "explanation"
}
`,
});

const shouldUpdateMenuFlow = ai.defineFlow(
  {
    name: 'shouldUpdateMenuFlow',
    inputSchema: ShouldUpdateMenuInputSchema,
    outputSchema: ShouldUpdateMenuOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
