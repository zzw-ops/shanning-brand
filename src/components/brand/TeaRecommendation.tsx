
"use client";

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Loader2, Sparkles, Leaf, CloudSun, Heart, Coffee, Utensils, Moon, Gift } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { toast } from '@/hooks/use-toast';

const scenes = [
  { value: 'office', label: '办公', icon: <Coffee className="w-3 h-3" /> },
  { value: 'meal', label: '饭后', icon: <Utensils className="w-3 h-3" /> },
  { value: 'night', label: '熬夜', icon: <Moon className="w-3 h-3" /> },
  { value: 'gift', label: '送礼', icon: <Gift className="w-3 h-3" /> },
];

const flavors = ['清爽', '温润', '花香', '果香', '微甜', '无糖'];

export function TeaRecommendation() {
  const [mood, setMood] = useState('');
  const [weather, setWeather] = useState('');
  const [scene, setScene] = useState('');
  const [flavor, setFlavor] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);

  const getRecommendation = (m: string, w: string, s: string, f: string) => {
    const input = (m + w + s + f).toLowerCase();
    
    if (input.includes('压力') || input.includes('疲惫') || input.includes('工作') || input.includes('忙')) {
      return {
        name: "桂花乌龙草本茶",
        reason: "桂花的馥郁芬芳有助于舒缓紧绷神经，乌龙茶的回甘能带来轻盈的提神感，非常适合缓解高压状态。",
        scene: "午后办公、压力释放",
        keywords: ["舒缓", "花香", "理气"],
        season: "春季系列",
        tags: ["桂花", "乌龙"]
      };
    }
    if (input.includes('上火') || input.includes('烦躁') || input.includes('熬夜') || input.includes('干燥') || input.includes('夜')) {
      return {
        name: "菊花雪梨润茶",
        reason: "菊花清心降火，雪梨滋阴润燥。在身体感到燥热或熬夜耗神后，这款茶能提供极佳的温润养护。",
        scene: "熬夜修复、环境干燥",
        keywords: ["清润", "甘甜", "降火"],
        season: "春季系列",
        tags: ["菊花", "雪梨"]
      };
    }
    if (input.includes('热') || input.includes('雨') || input.includes('腻') || input.includes('油')) {
      return {
        name: "薄荷陈皮草本茶",
        reason: "薄荷的冰爽感能瞬间带走暑气，陈皮则有助于消食去腻，是夏日或大餐后的清爽首选。",
        scene: "消暑解腻、餐后调理",
        keywords: ["清爽", "透心凉", "助消化"],
        season: "夏季系列",
        tags: ["薄荷", "陈皮"]
      };
    }
    if (input.includes('寒') || input.includes('冷') || input.includes('冬') || input.includes('累')) {
      return {
        name: "红枣桂圆姜茶",
        reason: "经典的温补组合，生姜的辛温与红枣桂圆的甘温相得益彰，能迅速温暖身体，充盈元气。",
        scene: "驱寒暖身、体感微凉",
        keywords: ["温补", "暖胃", "甘温"],
        season: "冬季系列",
        tags: ["红枣", "桂圆", "姜"]
      };
    }
    if (input.includes('晚') || input.includes('放松') || input.includes('眠')) {
      return {
        name: "桂圆枸杞暖润茶",
        reason: "这款茶饮不含茶碱，温润醇厚。桂圆具有安神补血的特质，非常适合晚间放松时段饮用。",
        scene: "晚间舒缓、入睡前夕",
        keywords: ["安神", "温润", "低负担"],
        season: "秋季系列",
        tags: ["桂圆", "枸杞"]
      };
    }
    
    // Default
    return {
      name: "茉莉陈皮轻养茶",
      reason: "茉莉的清雅芬芳与陈皮的温和理气达到了完美平衡，是一款全天候适合、不分心情与天气的万能轻养茶。",
      scene: "日常轻养生、闲暇午后",
      keywords: ["轻盈", "清香", "全能"],
      season: "春季系列",
      tags: ["茉莉", "陈皮"]
    };
  };

  const handleRecommend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!mood && !weather && !scene && !flavor) {
      toast({
        title: "请输入信息",
        description: "请输入你的心情、天气或饮用场景，我们将为你推荐合适的草本茶饮。",
        variant: "destructive"
      });
      return;
    }

    setLoading(true);
    setTimeout(() => {
      const rec = getRecommendation(mood, weather, scene, flavor);
      setResult(rec);
      setLoading(false);
    }, 800);
  };

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      // Custom event to trigger franchise selection
      window.dispatchEvent(new CustomEvent('set-consult-type', { detail: '加盟咨询' }));
    }
  };

  const scrollToMenu = () => {
    const el = document.getElementById('menu');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="tea-ai" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 -skew-x-12 translate-x-1/2 pointer-events-none"></div>
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <Card className="border-primary/20 bg-white/80 backdrop-blur-md overflow-hidden shadow-2xl rounded-[3rem]">
          <div className="grid md:grid-cols-5 min-h-[500px]">
            <div className="md:col-span-2 bg-primary p-10 text-primary-foreground flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <Sparkles className="w-5 h-5 text-secondary animate-pulse" />
                  <span className="text-sm font-semibold tracking-wider uppercase">AI 智慧选茶</span>
                </div>
                <h3 className="text-3xl font-headline mb-4 leading-tight">发现适合您的<br />那一杯草本灵感</h3>
                <p className="text-primary-foreground/70 text-sm leading-relaxed mb-8">
                  无论阴晴圆缺，或是心情起伏，山宁都能为您调配出最契合当下的自然之味。
                </p>
              </div>
              <form onSubmit={handleRecommend} className="space-y-4">
                <div className="space-y-1.5">
                  <Label className="text-[10px] text-primary-foreground/50 uppercase font-bold tracking-widest">您的心情/天气</Label>
                  <Input 
                    placeholder="如：压力大、雨天、阳光明媚..."
                    value={mood}
                    onChange={(e) => setMood(e.target.value)}
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/30 h-11 focus:ring-secondary"
                  />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-1.5">
                    <Label className="text-[10px] text-primary-foreground/50 uppercase font-bold tracking-widest">场景</Label>
                    <Select onValueChange={setScene}>
                      <SelectTrigger className="bg-white/10 border-white/20 text-white h-11">
                        <SelectValue placeholder="饮用场景" />
                      </SelectTrigger>
                      <SelectContent>
                        {scenes.map(s => (
                          <SelectItem key={s.value} value={s.value}>{s.label}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-1.5">
                    <Label className="text-[10px] text-primary-foreground/50 uppercase font-bold tracking-widest">口味</Label>
                    <Select onValueChange={setFlavor}>
                      <SelectTrigger className="bg-white/10 border-white/20 text-white h-11">
                        <SelectValue placeholder="偏好口味" />
                      </SelectTrigger>
                      <SelectContent>
                        {flavors.map(f => (
                          <SelectItem key={f} value={f}>{f}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-secondary hover:bg-secondary/90 text-white font-bold h-12 rounded-full mt-4 shadow-lg shadow-secondary/20"
                  disabled={loading}
                >
                  {loading ? <Loader2 className="animate-spin mr-2" /> : <Leaf className="mr-2 w-4 h-4" />}
                  获取灵感推荐
                </Button>
              </form>
            </div>

            <div className="md:col-span-3 p-10 flex flex-col items-center justify-center bg-white/50">
              {loading ? (
                <div className="text-center">
                  <div className="w-20 h-20 bg-primary/5 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <Leaf className="w-10 h-10 text-primary animate-bounce" />
                  </div>
                  <p className="text-primary font-bold animate-pulse">正在为您调配专属于您的茶饮方案...</p>
                  <p className="text-xs text-muted-foreground mt-2">顺应天时，更要懂你</p>
                </div>
              ) : result ? (
                <div className="w-full space-y-6 animate-in fade-in zoom-in duration-500">
                  <div className="flex justify-between items-start">
                    <Badge variant="outline" className="border-secondary text-secondary font-bold uppercase tracking-widest text-[10px] py-1">{result.season}</Badge>
                    <div className="flex gap-1">
                      {result.tags.map((t: string) => (
                        <span key={t} className="text-[10px] font-bold text-primary/40">#{t}</span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-3xl font-headline text-primary mb-2">{result.name}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed italic border-l-2 border-secondary/30 pl-4 py-1">"{result.reason}"</p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-primary/5 p-4 rounded-2xl">
                      <span className="text-[10px] font-bold text-primary/50 block mb-1 uppercase tracking-wider">风味关键词</span>
                      <div className="flex flex-wrap gap-1.5">
                        {result.keywords.map((k: string) => (
                          <span key={k} className="px-2 py-0.5 bg-white text-primary text-[10px] rounded-full border border-primary/10">{k}</span>
                        ))}
                      </div>
                    </div>
                    <div className="bg-secondary/5 p-4 rounded-2xl border border-secondary/10">
                      <span className="text-[10px] font-bold text-secondary block mb-1 uppercase tracking-wider">建议场景</span>
                      <p className="text-xs text-primary font-medium">{result.scene}</p>
                    </div>
                  </div>

                  <div className="flex gap-3 pt-4">
                    <Button onClick={scrollToMenu} variant="ghost" className="flex-1 rounded-full text-xs font-bold border border-primary/10">查看相关菜单</Button>
                    <Button onClick={scrollToContact} className="flex-1 bg-primary text-white hover:bg-primary/90 rounded-full text-xs font-bold">咨询加盟合作</Button>
                  </div>
                </div>
              ) : (
                <div className="text-center text-muted-foreground max-w-[280px]">
                  <div className="w-20 h-20 bg-muted/20 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <Sparkles className="w-10 h-10 text-muted-foreground/20" />
                  </div>
                  <h5 className="text-primary font-bold mb-2">等待开启的草本之旅</h5>
                  <p className="text-xs leading-relaxed">在左侧输入您的当前状态，我们将利用山宁的草本智慧为您提供最合适的饮用建议。</p>
                </div>
              )}
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
