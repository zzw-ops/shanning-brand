'use server';
/**
 * @fileOverview A Genkit flow for recommending "Shanning" herbal teas and light wellness plans.
 *
 * - recommendTea - A function that handles the tea recommendation process.
 * - RecommendTeaInput - The input type for the recommendTea function.
 * - RecommendTeaOutput - The return type for the recommendTea function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const RecommendTeaInputSchema = z.object({
  mood: z.string().optional().describe('User\u0027s current mood or feeling, e.g., \"stressed,\" \"energetic,\" \"calm.\"'),
  weather: z.string().optional().describe('Today\u0027s weather condition, e.g., \"sunny,\" \"rainy,\" \"cold.\"'),
});
export type RecommendTeaInput = z.infer<typeof RecommendTeaInputSchema>;

const RecommendTeaOutputSchema = z.object({
  teaRecommendation: z.string().describe('The recommended \"Shanning\" herbal tea name.'),
  teaDescription: z.string().describe('A brief description of the recommended tea and its taste profile.'),
  keyIngredients: z.array(z.string()).describe('A list of key herbal ingredients in the recommended tea.'),
  seasonalCategory: z.enum(['Spring', 'Summer', 'Autumn', 'Winter']).describe('The seasonal category of the recommended tea.'),
  wellnessPlan: z.string().describe('A short, light wellness suggestion tailored to the recommendation.'),
});
export type RecommendTeaOutput = z.infer<typeof RecommendTeaOutputSchema>;

export async function recommendTea(input: RecommendTeaInput): Promise<RecommendTeaOutput> {
  return recommendTeaFlow(input);
}

const seasonalTeaMenu = `
四季系列菜单 (Seasonal Series Menu):

春｜舒养花茶系列 (Spring | Soothing Flower Tea Series)
- 桂花乌龙草本茶 (Osmanthus Oolong Herbal Tea): 桂花, 乌龙
- 菊花雪梨清润茶 (Chrysanthemum Pear Moistening Tea): 菊花, 雪梨
- 茉莉陈皮轻养茶 (Jasmine Tangerine Peel Light Nourishing Tea): 茉莉, 陈皮

夏｜清爽去腻系列 (Summer | Refreshing & Degreasing Series)
- 荷叶陈皮冷泡茶 (Lotus Leaf Tangerine Peel Cold Brew): 荷叶, 陈皮
- 金银花青柠茶 (Honeysuckle Lime Tea): 金银花, 青柠
- 乌梅山楂清爽饮 (Dark Plum Hawthorn Refreshing Drink): 乌梅, 山楂

秋｜润燥养颜系列 (Autumn | Moistening & Beauty Series)
- 桂花红枣枸杞茶 (Osmanthus Red Date Goji Berry Tea): 桂花, 红枣, 枸杞
- 雪梨百合润燥茶 (Snow Pear Lily Moistening Tea): 雪梨, 百合
- 陈皮桂圆暖茶 (Tangerine Peel Longan Warm Tea): 陈皮, 桂圆

冬｜温补暖身系列 (Winter | Warming & Nourishing Series)
- 红枣姜茶 (Red Date Ginger Tea): 红枣, 姜
- 桂圆枸杞暖饮 (Longan Goji Berry Warm Drink): 桂圆, 枸杞
- 人参乌龙轻补茶 (Ginseng Oolong Light Tonic Tea): 人参, 乌龙
`;

const recommendTeaPrompt = ai.definePrompt({
  name: 'recommendTeaPrompt',
  input: { schema: RecommendTeaInputSchema },
  output: { schema: RecommendTeaOutputSchema },
  prompt: `你是一个专业的健康茶饮推荐顾问，专注于新式中药健康茶饮品牌“山宁”。
你的任务是根据用户提供的情绪或天气信息，从“山宁”的四季茶饮菜单中推荐最适合的茶饮，并提供一个轻养生方案。

品牌理念：将中药养生、药食同源、年轻化茶饮和东方文化美学结合，改变传统中药饮品“老气、苦、像药”的印象，打造更年轻、更健康、更有文化属性的中式健康茶饮。

以下是“山宁”的四季茶饮菜单，请严格根据此菜单进行推荐，不要推荐菜单中没有的茶饮：
${seasonalTeaMenu}

用户情绪: {{{mood}}}
天气状况: {{{weather}}}

请根据以上信息，推荐一款“山宁”茶饮，并给出简短的茶饮描述、主要成分、所属季节系列以及一个日常调理或轻养生建议。确保你的回答年轻、健康、东方、自然，避免任何医疗化或治疗疾病的表述。`,
});

const recommendTeaFlow = ai.defineFlow(
  {
    name: 'recommendTeaFlow',
    inputSchema: RecommendTeaInputSchema,
    outputSchema: RecommendTeaOutputSchema,
  },
  async (input) => {
    const { output } = await recommendTeaPrompt(input);
    return output!;
  }
);
