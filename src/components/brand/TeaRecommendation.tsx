
"use client";

import React, { useState } from 'react';
import { recommendTea, type RecommendTeaOutput } from '@/ai/flows/recommend-tea-flow';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Loader2, Sparkles, Leaf, CloudSun, Heart } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export function TeaRecommendation() {
  const [mood, setMood] = useState('');
  const [weather, setWeather] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<RecommendTeaOutput | null>(null);

  const handleRecommend = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const output = await recommendTea({ mood, weather });
      setResult(output);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      <Card className="border-primary/20 bg-card/50 backdrop-blur-sm overflow-hidden shadow-xl">
        <div className="grid md:grid-cols-5 h-full">
          <div className="md:col-span-2 bg-primary p-8 text-primary-foreground flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-5 h-5 text-secondary" />
                <span className="text-sm font-semibold tracking-wider uppercase">AI 智慧选茶</span>
              </div>
              <h3 className="text-3xl font-headline mb-4">今天想喝什么？</h3>
              <p className="text-primary-foreground/80 text-sm leading-relaxed mb-8">
                输入您的心情或当地天气，让山宁为您推荐最合适的草本调配。
              </p>
            </div>
            <form onSubmit={handleRecommend} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="mood" className="text-xs text-primary-foreground/70 flex items-center gap-1">
                  <Heart className="w-3 h-3" /> 当前心情
                </Label>
                <Input 
                  id="mood"
                  placeholder="如：疲惫、压力大、快乐"
                  value={mood}
                  onChange={(e) => setMood(e.target.value)}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:ring-secondary"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="weather" className="text-xs text-primary-foreground/70 flex items-center gap-1">
                  <CloudSun className="w-3 h-3" /> 今日天气
                </Label>
                <Input 
                  id="weather"
                  placeholder="如：雨天、闷热、寒冷"
                  value={weather}
                  onChange={(e) => setWeather(e.target.value)}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:ring-secondary"
                />
              </div>
              <Button 
                type="submit" 
                className="w-full bg-secondary hover:bg-secondary/90 text-white font-bold h-12"
                disabled={loading || (!mood && !weather)}
              >
                {loading ? <Loader2 className="animate-spin mr-2" /> : <Leaf className="mr-2 w-4 h-4" />}
                获取灵感推荐
              </Button>
            </form>
          </div>

          <div className="md:col-span-3 p-8 bg-white/40 flex flex-col items-center justify-center min-h-[300px]">
            {loading ? (
              <div className="text-center animate-pulse">
                <div className="w-16 h-16 bg-muted rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Leaf className="w-8 h-8 text-primary animate-bounce" />
                </div>
                <p className="text-muted-foreground font-medium">正在调配专属于您的茶饮方案...</p>
              </div>
            ) : result ? (
              <div className="w-full space-y-4 animate-in fade-in zoom-in duration-500">
                <div className="flex justify-between items-start">
                  <Badge variant="outline" className="border-secondary text-secondary">{result.seasonalCategory}系列</Badge>
                </div>
                <h4 className="text-2xl font-headline text-primary border-b border-primary/10 pb-2">{result.teaRecommendation}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed italic">"{result.teaDescription}"</p>
                <div className="space-y-3 mt-6">
                  <div>
                    <span className="text-xs font-bold text-primary block mb-1">主要成分</span>
                    <div className="flex flex-wrap gap-2">
                      {result.keyIngredients.map(ing => (
                        <span key={ing} className="px-2 py-1 bg-primary/5 text-primary text-[10px] rounded-md border border-primary/10">{ing}</span>
                      ))}
                    </div>
                  </div>
                  <div className="bg-secondary/5 border-l-4 border-secondary p-4 rounded-r-lg">
                    <span className="text-xs font-bold text-secondary block mb-1">轻养生建议</span>
                    <p className="text-xs text-secondary/80 leading-normal">{result.wellnessPlan}</p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center text-muted-foreground">
                <div className="w-16 h-16 bg-muted/30 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Sparkles className="w-8 h-8 text-muted-foreground/30" />
                </div>
                <p className="text-sm italic">输入上方信息，开启您的草本寻味之旅</p>
              </div>
            )}
          </div>
        </div>
      </Card>
    </div>
  );
}
