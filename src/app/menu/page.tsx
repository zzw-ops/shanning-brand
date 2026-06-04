
'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { seasonalMenu } from '@/components/brand/SeasonalMenu';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowLeft, ArrowRight, Heart, Leaf, Sparkles, Wind } from 'lucide-react';

export default function FullMenuPage() {
  const getImg = (id: string) => PlaceHolderImages.find(img => img.id === id);

  return (
    <main className="min-h-screen bg-texture selection:bg-secondary selection:text-white">
      {/* Floating Navigation */}
      <nav className="fixed top-8 left-8 z-50">
        <Link href="/">
          <Button variant="outline" className="bg-white/80 backdrop-blur-md border-primary/10 rounded-full h-12 px-6 shadow-xl hover:bg-primary hover:text-white transition-all group">
            <ArrowLeft className="mr-2 w-4 h-4 transition-transform group-hover:-translate-x-1" /> 返回首页
          </Button>
        </Link>
      </nav>

      {/* Hero Header */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-primary/95">
          <div className="absolute inset-0 bg-texture opacity-10"></div>
          <Image 
            src="https://picsum.photos/seed/shanning-menu-hero/1920/1080" 
            alt="Menu Hero" 
            fill 
            className="object-cover mix-blend-overlay opacity-40"
            priority
          />
        </div>
        <div className="relative z-10 text-center space-y-8 max-w-4xl px-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/20 border border-secondary/30 rounded-full text-secondary text-xs font-bold tracking-[0.3em] uppercase animate-fade-in-up">
            <Sparkles className="w-3.5 h-3.5" />
            <span>四季常宁 · 药食同源</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-headline font-bold text-white leading-tight">
            山宁全系列<br />产品志
          </h1>
          <p className="text-xl text-white/60 font-medium max-w-2xl mx-auto leading-relaxed">
            顺应天时，采集东方草本之灵感，为您调配每一季的自然养护方案。
          </p>
          <div className="pt-10 flex justify-center">
             <div className="w-px h-24 bg-gradient-to-b from-secondary to-transparent animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Creative Menu Sections */}
      <div className="max-w-7xl mx-auto px-6 py-32 space-y-40">
        {Object.values(seasonalMenu).map((season, index) => {
          const image = getImg(season.imgId);
          const isEven = index % 2 === 0;
          
          return (
            <section key={season.id} className="relative">
              {/* Vertical Season Name Background Decor */}
              <div className={`absolute -top-10 ${isEven ? 'right-0' : 'left-0'} opacity-[0.03] select-none pointer-events-none hidden lg:block`}>
                <span className="text-[20rem] font-headline font-bold leading-none" style={{ writingMode: 'vertical-rl' }}>
                  {season.name.split('｜')[0]}
                </span>
              </div>

              <div className={`grid lg:grid-cols-12 gap-12 lg:gap-20 items-start ${isEven ? '' : 'lg:flex-row-reverse'}`}>
                {/* Content Side */}
                <div className={`lg:col-span-5 space-y-12 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center text-white font-headline text-3xl shadow-2xl">
                        {season.name.charAt(0)}
                      </div>
                      <div>
                        <h2 className="text-4xl font-headline font-bold text-primary">{season.name}</h2>
                        <p className="text-secondary font-bold tracking-widest uppercase text-sm">{season.title}</p>
                      </div>
                    </div>
                    <p className="text-lg text-muted-foreground italic pl-20">
                      "{season.subtitle}"
                    </p>
                  </div>

                  <div className="space-y-10 pl-4 lg:pl-20 border-l-2 border-secondary/20">
                    {season.products.map((product, pIdx) => (
                      <div key={pIdx} className="group space-y-3">
                        <div className="flex justify-between items-baseline">
                          <h3 className="text-2xl font-headline font-bold text-primary group-hover:text-secondary transition-colors cursor-default">
                            {product.name}
                          </h3>
                          <span className="text-[10px] font-bold text-primary/20 tracking-tighter uppercase">#0{pIdx + 1}</span>
                        </div>
                        <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
                          {product.flavor}
                        </p>
                        <div className="flex flex-wrap gap-2 pt-2">
                          {product.tags.map(tag => (
                            <Badge key={tag} variant="secondary" className="bg-primary/5 text-primary/40 text-[9px] px-2 py-0 border-none">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        <div className="flex items-center gap-2 text-[10px] font-bold text-secondary/60 pt-1">
                          <Heart className="w-3 h-3" />
                          <span>推荐: {product.scene}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Image Side - Staggered Layout */}
                <div className={`lg:col-span-7 relative ${isEven ? 'lg:order-2' : 'lg:order-1 lg:pr-12'}`}>
                  <div className="relative rounded-[3rem] overflow-hidden aspect-[4/5] shadow-2xl bg-muted group">
                    {image && (
                      <Image 
                        src={image.imageUrl} 
                        alt={season.title} 
                        fill 
                        className="object-cover transition-transform duration-1000 group-hover:scale-110"
                        data-ai-hint={image.imageHint}
                      />
                    )}
                    <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-700"></div>
                  </div>
                  
                  {/* Floating decorative card */}
                  <div className={`absolute -bottom-10 ${isEven ? '-left-10' : '-right-10'} bg-white p-8 rounded-3xl shadow-2xl max-w-xs border border-primary/5 hidden md:block animate-fade-in-up`}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 bg-secondary/10 rounded-full flex items-center justify-center text-secondary">
                        <Leaf className="w-4 h-4" />
                      </div>
                      <span className="text-xs font-bold text-primary uppercase tracking-widest">药食同源心得</span>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {season.id === 'spring' && "春季宜升发，应多饮用芬芳草本，疏肝解郁，唤醒身体生机。"}
                      {season.id === 'summer' && "夏季暑气旺，冷泡工艺更能锁住草本清凉，消暑解腻而不伤胃。"}
                      {season.id === 'autumn' && "秋季主收敛，以滋阴润燥为核心，平衡呼吸道与皮肤的干燥感。"}
                      {season.id === 'winter' && "冬季宜温补，暖胃驱寒是关键。生姜与红枣的温热，能由内而外御寒。"}
                    </p>
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* Footer Call to Action */}
      <section className="bg-primary py-32 text-center overflow-hidden relative">
        <div className="absolute inset-0 bg-texture opacity-10"></div>
        <div className="max-w-4xl mx-auto px-6 relative z-10 space-y-12">
          <div className="flex justify-center">
             <div className="w-20 h-20 bg-secondary/20 rounded-full flex items-center justify-center text-secondary border border-secondary/30">
               <Wind className="w-10 h-10 animate-spin-slow" />
             </div>
          </div>
          <h2 className="text-4xl md:text-6xl font-headline font-bold text-white leading-tight">
            对山宁的产品感兴趣？<br />加入我们在澳门的创业之旅
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            我们为每一位合作伙伴提供完整的草本供应链支持与产品培训，让每一份自然之味都能完美呈现。
          </p>
          <div className="flex justify-center gap-6 pt-6">
            <Link href="/#contact">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white rounded-full px-12 h-16 text-xl font-bold transition-all shadow-2xl shadow-black/20 group">
                立即咨询加盟合作 <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Brand Signature */}
      <footer className="py-12 border-t border-primary/5 text-center">
        <p className="text-[10px] font-bold text-primary/40 uppercase tracking-[0.5em]">SHANNING TEA · SEASONAL ARCHIVE</p>
      </footer>
    </main>
  );
}
