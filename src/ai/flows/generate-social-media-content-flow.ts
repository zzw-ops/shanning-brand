'use server';
/**
 * @fileOverview A Genkit flow for generating social media marketing content for '山宁'.
 *
 * - generateSocialMediaContent - A function that generates marketing copy, hashtags, and visual suggestions.
 * - GenerateSocialMediaContentInput - The input type for the generateSocialMediaContent function.
 * - GenerateSocialMediaContentOutput - The return type for the generateSocialMediaContent function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateSocialMediaContentInputSchema = z.object({
  productFeatures: z.string().describe('Key features and benefits of the 山宁 product.'),
  promotionGoals: z.string().describe('Specific marketing objectives for the campaign (e.g., brand awareness, drive sales, engagement).'),
  targetPlatform: z.enum(['小红书', 'Instagram']).describe('The target social media platform for the content.'),
});
export type GenerateSocialMediaContentInput = z.infer<typeof GenerateSocialMediaContentInputSchema>;

const GenerateSocialMediaContentOutputSchema = z.object({
  marketingCopy: z.string().describe('The main marketing copy for the social media post, tailored to the platform and brand.'),
  hashtags: z.array(z.string()).describe('A list of relevant and trending hashtags.'),
  visualSuggestions: z.string().describe('Creative suggestions for accompanying visuals (images or short videos).'),
});
export type GenerateSocialMediaContentOutput = z.infer<typeof GenerateSocialMediaContentOutputSchema>;

export async function generateSocialMediaContent(input: GenerateSocialMediaContentInput): Promise<GenerateSocialMediaContentOutput> {
  return generateSocialMediaContentFlow(input);
}

const prompt = ai.definePrompt({
  name: 'socialMediaContentGeneratorPrompt',
  input: {schema: GenerateSocialMediaContentInputSchema},
  output: {schema: GenerateSocialMediaContentOutputSchema},
  prompt: `你是一位专业的品牌营销专家，专门为「山宁」这个新式中药健康茶饮品牌创建社交媒体内容。
  「山宁」的品牌定位是“新式中药健康茶饮”，核心理念是将中药养生、药食同源、年轻化茶饮和东方文化美学结合起来。
  品牌关键词包括：新式中药健康茶饮、药食同源、0 添加、养生需求、文化属性、年轻化、四季茶饮、桂花、人参、枸杞、陈皮、菊花、红枣等东方草本元素、澳门市场、健康、自然、温和、东方美学。
  整体文案语气要：年轻但不幼稚、健康但不医疗化、东方但不老派、商业但不浮夸。
  
  请根据以下产品特点和推广目标，为指定的社交媒体平台生成一份吸引人的营销文案、相关话题标签和视觉创意建议。

  产品特点：{{{productFeatures}}}
  推广目标：{{{promotionGoals}}}
  目标平台：{{{targetPlatform}}}

  请注意：
  - 避免使用“治疗疾病”、“治愈”、“药效保证”、“改善具体疾病”、“医学功效承诺”等表述。
  - 改用“日常调理”、“轻养生”、“健康饮品”、“草本灵感”、“药食同源理念”、“温和滋养”、“低负担饮品”等词汇。
  - 文案要富有创意，能够引发年轻消费者的共鸣，并体现「山宁」的独特品牌调性。
  - 话题标签要精准且有传播力。
  - 视觉建议要具体、有吸引力，符合「山宁」的现代东方美学风格（主色调：深绿色、米白色、浅木色、桂花金；辅助色：淡棕色、草本绿、墨色；可加入中式纹理、植物线稿、茶叶、草本、桂花、杯子等视觉元素）。
  `,
});

const generateSocialMediaContentFlow = ai.defineFlow(
  {
    name: 'generateSocialMediaContentFlow',
    inputSchema: GenerateSocialMediaContentInputSchema,
    outputSchema: GenerateSocialMediaContentOutputSchema,
  },
  async (input) => {
    const {output} = await prompt(input);
    return output!;
  }
);