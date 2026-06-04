
"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Heart, Leaf } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { MenuModal } from './MenuModal';

export const seasonalMenu = {
  spring: {
    id: "spring",
    name: "春｜舒养",
    title: "舒养花茶系列",
    subtitle: "适合春季换季、轻压力、日常舒缓",
    imgId: "spring-visual",
    products: [
      {
        name: "桂花乌龙草本茶",
        flavor: "清新花香与乌龙茶感结合，口感轻盈，适合日常饮用。",
        scene: "适合午后办公、轻压力时段。",
        tags: ["桂花", "乌龙", "舒缓"]
      },
      {
        name: "菊花雪梨润茶",
        flavor: "甘甜润口，清爽轻盈。",
        scene: "适合干燥天气、熬夜后、偏清淡口感人群。",
        tags: ["菊花", "雪梨", "清润"]
      },
      {
        name: "茉莉陈皮轻养茶",
        flavor: "茉莉清香搭配陈皮回甘。",
        scene: "适合饭后、通勤、轻养生日常。",
        tags: ["茉莉", "陈皮", "轻养"]
      }
    ]
  },
  summer: {
    id: "summer",
    name: "夏｜清爽",
    title: "清爽解腻系列",
    subtitle: "适合炎热天气、饭后解腻、清爽饮用",
    imgId: "summer-visual",
    products: [
      {
        name: "薄荷陈皮草本茶",
        flavor: "薄荷清凉，陈皮回甘。",
        scene: "适合闷热天气、饭后解腻。",
        tags: ["薄荷", "陈皮", "清爽"]
      },
      {
        name: "金银花竹叶清茶",
        flavor: "草本清香，入口轻盈。",
        scene: "适合夏季日常饮用。",
        tags: ["金银花", "竹叶", "清香"]
      },
      {
        name: "柠檬荷叶轻饮",
        flavor: "酸甜清爽，带有植物气息。",
        scene: "适合下午茶、轻负担饮用。",
        tags: ["柠檬", "荷叶", "轻盈"]
      }
    ]
  },
  autumn: {
    id: "autumn",
    name: "秋｜润燥",
    title: "润燥养护系列",
    subtitle: "适合秋季干燥、口感温润、日常养护",
    imgId: "autumn-visual",
    products: [
      {
        name: "雪梨百合润茶",
        flavor: "雪梨清甜，百合温润。",
        scene: "适合秋季干燥天气和轻润口感需求。",
        tags: ["雪梨", "百合", "润燥"]
      },
      {
        name: "罗汉果陈皮茶",
        flavor: "自然甘甜，陈皮回味。",
        scene: "适合饭后、说话较多、口感偏甜人群。",
        tags: ["罗汉果", "陈皮", "回甘"]
      },
      {
        name: "桂圆枸杞暖润茶",
        flavor: "温润甘香，层次柔和。",
        scene: "适合晚间、轻疲劳、暖饮场景。",
        tags: ["桂圆", "枸杞", "温润"]
      }
    ]
  },
  winter: {
    id: "winter",
    name: "冬｜温补",
    title: "温补暖身系列",
    subtitle: "适合寒冷天气、暖饮、冬季养护",
    imgId: "winter-visual",
    products: [
      {
        name: "红枣桂圆姜茶",
        flavor: "姜香微辛，红枣桂圆甘甜。",
        scene: "适合寒冷天气、暖身饮用。",
        tags: ["红枣", "桂圆", "姜"]
      },
      {
        name: "黄芪枸杞草本茶",
        flavor: "草本香气明显，口感温和。",
        scene: "适合冬季日常养护。",
        tags: ["黄芪", "枸杞", "草本"]
      },
      {
        name: "陈皮普洱暖饮",
        flavor: "普洱醇厚，陈皮回甘。",
        scene: "适合饭后、冬季热饮。",
        tags: ["陈皮", "普洱", "暖饮"]
      }
    ]
  }
};

export function SeasonalMenu() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="menu" className="py-24 bg-primary/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <Badge className="bg-secondary mb-2">SEASONAL MENU</Badge>
          <h2 className="text-4xl font-headline font-bold text-primary">四季系列菜单</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">基于药食同源理念，顺应天时设计。每一杯都是东方智慧与现代口味的精妙平衡。</p>
        </div>

        <Tabs defaultValue="spring" className="w-full">
          <TabsList className="grid grid-cols-4 w-full max-w-2xl mx-auto mb-12 bg-white shadow-sm border h-14 p-1 rounded-full">
            {Object.values(seasonalMenu).map((season) => (
              <TabsTrigger 
                key={season.id} 
                value={season.id} 
                className="data-[state=active]:bg-primary data-[state=active]:text-white h-full rounded-full transition-all"
              >
                {season.name}
              </TabsTrigger>
            ))}
          </TabsList>

          {Object.values(seasonalMenu).map((season) => {
            const image = PlaceHolderImages.find(img => img.id === season.imgId);
            return (
              <TabsContent key={season.id} value={season.id} className="animate-in fade-in slide-in-from-bottom-4 duration-500 mt-0">
                <div className="grid lg:grid-cols-2 gap-12 items-center bg-white p-6 md:p-12 rounded-[2.5rem] shadow-sm border border-primary/5">
                  <div className="relative rounded-3xl overflow-hidden aspect-[4/3] bg-muted shadow-inner group">
                    {image && (
                      <Image 
                        src={image.imageUrl} 
                        alt={season.title} 
                        fill 
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        data-ai-hint={image.imageHint}
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                  <div className="space-y-8">
                    <div className="space-y-2">
                      <h3 className="text-3xl font-headline font-bold text-primary">{season.title}</h3>
                      <p className="text-sm text-secondary font-bold tracking-widest uppercase">{season.subtitle}</p>
                    </div>
                    <div className="space-y-6">
                      {season.products.map((product, idx) => (
                        <div key={idx} className="group cursor-default border-b border-primary/5 pb-4 last:border-0 hover:bg-primary/[0.01] transition-colors rounded-lg p-2">
                          <div className="flex justify-between items-baseline mb-2">
                            <h4 className="text-lg font-bold text-primary group-hover:text-secondary transition-colors">{product.name}</h4>
                            <div className="flex gap-1">
                              {product.tags.map(tag => (
                                <Badge key={tag} variant="secondary" className="bg-secondary/10 text-secondary text-[10px] py-0">{tag}</Badge>
                              ))}
                            </div>
                          </div>
                          <p className="text-sm text-muted-foreground mb-3 leading-relaxed">{product.flavor}</p>
                          <div className="flex items-center gap-1.5 text-[10px] font-bold text-primary/40 group-hover:text-primary/60">
                            <Heart className="w-3 h-3" />
                            <span>推荐场景: {product.scene}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                    <Button 
                      onClick={() => setIsModalOpen(true)}
                      variant="outline" 
                      className="border-primary text-primary font-bold w-full rounded-full h-12 hover:bg-primary hover:text-white transition-all group/btn"
                    >
                      查看完整季节配方表 <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                    </Button>
                  </div>
                </div>
              </TabsContent>
            );
          })}
        </Tabs>
      </div>
      <MenuModal open={isModalOpen} onOpenChange={setIsModalOpen} />
    </section>
  );
}
