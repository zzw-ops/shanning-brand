
'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Navbar } from '@/components/brand/Navbar';
import { TeaRecommendation } from '@/components/brand/TeaRecommendation';
import { SeasonalMenu } from '@/components/brand/SeasonalMenu';
import { ContactSection } from '@/components/brand/ContactSection';
import { Footer } from '@/components/brand/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Leaf, 
  Wind, 
  Users, 
  Target, 
  Heart, 
  ShieldCheck, 
  Palette, 
  TrendingUp,
  Award,
  Sparkles,
  Zap,
  Check,
  MapPin,
  ArrowRight
} from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function Home() {
  const getImg = (id: string) => PlaceHolderImages.find(img => img.id === id);
  const heroImg = getImg('hero-main');
  const macauImg = getImg('macau-lifestyle');

  const scrollToContact = (type?: string) => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      if (type) {
        window.dispatchEvent(new CustomEvent('set-consult-type', { detail: type }));
      }
    }
  };

  const scrollToProducts = () => {
    const el = document.getElementById('products');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToBrand = () => {
    const el = document.getElementById('brand');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* 1. Hero Section */}
      <section id="home" className="relative pt-32 pb-20 overflow-hidden min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-10 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/5 rounded-full border border-primary/10 text-primary text-xs font-bold tracking-widest uppercase">
              <Sparkles className="w-3.5 h-3.5 text-secondary" />
              <span>澳门新式中药健康茶饮品牌</span>
            </div>
            <div className="space-y-4">
              <h1 className="text-6xl md:text-8xl font-headline font-bold text-primary leading-tight">
                山宁｜让东方草本<br />成为日常
              </h1>
              <p className="text-xl text-primary/80 font-medium max-w-lg leading-relaxed">
                以四季草本、现代茶饮与东方植物美学，重新定义年轻人的轻养生饮品体验。
              </p>
            </div>
            <div className="flex flex-wrap gap-5 pt-4">
              <Button 
                size="lg" 
                onClick={scrollToProducts}
                className="bg-primary hover:bg-primary/90 text-white rounded-full px-10 h-14 text-lg shadow-xl shadow-primary/20"
              >
                探索产品
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                onClick={scrollToBrand}
                className="border-primary text-primary hover:bg-primary/5 rounded-full px-10 h-14 text-lg"
              >
                了解品牌
              </Button>
            </div>
            <div className="flex items-center gap-8 pt-8 border-t border-primary/5">
              <div>
                <p className="text-2xl font-headline font-bold text-primary">0 添加</p>
                <p className="text-xs text-muted-foreground uppercase tracking-widest font-bold">草本成分</p>
              </div>
              <div className="w-px h-8 bg-primary/10"></div>
              <div>
                <p className="text-2xl font-headline font-bold text-primary">100%</p>
                <p className="text-xs text-muted-foreground uppercase tracking-widest font-bold">药食同源</p>
              </div>
              <div className="w-px h-8 bg-primary/10"></div>
              <div>
                <p className="text-2xl font-headline font-bold text-primary">四季</p>
                <p className="text-xs text-muted-foreground uppercase tracking-widest font-bold">精准调理</p>
              </div>
            </div>
          </div>
          <div className="relative group lg:block hidden">
            <div className="absolute -inset-10 bg-secondary/15 rounded-full blur-3xl animate-pulse"></div>
            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white aspect-[4/5] bg-muted">
              {heroImg && (
                <Image 
                  src={heroImg.imageUrl} 
                  alt="山宁茶饮" 
                  fill 
                  priority
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  data-ai-hint={heroImg.imageHint}
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-12 left-12 text-white">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-2.5 h-2.5 bg-secondary rounded-full"></div>
                  <span className="text-sm font-bold tracking-[0.3em] uppercase">匠心调配</span>
                </div>
                <p className="font-headline text-4xl mb-2">自然之味，愈见初心</p>
                <p className="text-white/60 text-sm max-w-xs">每一口都是对山川草木的致敬，对身心平衡的守候。</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Brand Concept */}
      <section id="brand" className="py-24 bg-primary/5 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
            <Badge className="bg-secondary px-4 py-1 text-xs tracking-widest uppercase">Our Vision</Badge>
            <h2 className="text-5xl font-headline font-bold text-primary">让中药茶饮变得年轻、好喝、日常</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              山宁希望通过新式茶饮形式，把药食同源理念融入日常生活。我们不谈“苦涩”与“疗效”，只谈“风味”与“养护”。让消费者在享受美味的同时，获得更轻松的平衡体验。
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              { 
                imgId: "vision-herb",
                icon: <Leaf className="w-10 h-10 text-primary" />, 
                title: "草本入饮", 
                desc: "精选药食同源草本原料，保留天然植物活性。通过现代冷泡与萃取工艺，释放自然草本之美。" 
              },
              { 
                imgId: "vision-season",
                icon: <Wind className="w-10 h-10 text-primary" />, 
                title: "四季调养", 
                desc: "顺应二十四节气，根据气候变化设计差异化饮品。在春生、夏长、秋收、冬藏中平衡身体需求。" 
              },
              { 
                imgId: "vision-young",
                icon: <Users className="w-10 h-10 text-primary" />, 
                title: "年轻表达", 
                desc: "用现代视觉语言重塑东方养生。打造高颜值、社交媒体友好且富有文化深度的品牌体验。" 
              }
            ].map((card, i) => {
              const img = getImg(card.imgId);
              return (
                <Card key={i} className="border-none shadow-sm hover:shadow-2xl transition-all duration-500 group rounded-[2.5rem] bg-white overflow-hidden">
                  <div className="relative h-48 overflow-hidden">
                    {img && (
                      <Image 
                        src={img.imageUrl} 
                        alt={card.title} 
                        fill 
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        data-ai-hint={img.imageHint}
                      />
                    )}
                    <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-500"></div>
                  </div>
                  <CardHeader className="p-10 pb-4 space-y-6 relative">
                    <div className="w-20 h-20 -mt-20 relative z-10 bg-white shadow-xl rounded-3xl flex items-center justify-center group-hover:scale-110 group-hover:bg-primary transition-all duration-500">
                      <div className="group-hover:text-white transition-colors">
                        {card.icon}
                      </div>
                    </div>
                    <CardTitle className="text-2xl font-headline font-bold text-primary">{card.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="px-10 pb-10">
                    <p className="text-muted-foreground leading-relaxed">{card.desc}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Product Highlights */}
      <section id="products" className="py-24 bg-white relative">
        {/* Rich Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none overflow-hidden">
          <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-secondary rounded-full blur-[120px]"></div>
          <div className="absolute bottom-20 left-0 w-[500px] h-[500px] bg-primary rounded-full blur-[120px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div className="space-y-4">
              <Badge variant="outline" className="border-primary/20 text-primary font-bold">CORE VALUES</Badge>
              <h2 className="text-5xl font-headline font-bold text-primary">山宁的核心竞争力</h2>
            </div>
            <p className="text-muted-foreground max-w-md text-sm leading-relaxed">
              在同质化严重的茶饮市场中，山宁凭借精准的品类切入与深厚的文化底蕴，构建起难以逾越的品牌壁垒。
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Target className="w-7 h-7" />, title: "品类稀缺性", desc: "澳门市场中，具备文化属性与轻养生功能的茶饮仍处于蓝海阶段。" },
              { icon: <Heart className="w-7 h-7" />, title: "精准养护", desc: "切入当代年轻人关注的“早C晚A”、低负担、日常自然调理需求。" },
              { icon: <ShieldCheck className="w-7 h-7" />, title: "纯净配方", desc: "坚持自然、低糖、0 添加化学成分的原则，建立深度品牌信任。" },
              { icon: <Palette className="w-7 h-7" />, title: "东方美学", desc: "结合传统纹理与现代极简，让每一杯茶饮都成为行走的文化社交名片。" }
            ].map((item, i) => (
              <div key={i} className="group p-10 border border-primary/5 bg-white/50 backdrop-blur-sm rounded-[2rem] hover:border-secondary/20 transition-all duration-500 hover:bg-secondary/[0.02]">
                <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center text-primary mb-8 group-hover:bg-secondary group-hover:text-white transition-all">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-primary">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Interactive Section */}
      <TeaRecommendation />

      {/* 4. Seasonal Menu */}
      <SeasonalMenu />

      {/* 5. Market Opportunity */}
      <section id="market" className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="absolute -inset-10 bg-secondary/10 rounded-full blur-[100px] animate-pulse"></div>
            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl aspect-[4/5]">
              {macauImg && (
                <Image 
                  src={macauImg.imageUrl} 
                  alt="澳门市场" 
                  fill 
                  className="object-cover"
                  data-ai-hint={macauImg.imageHint}
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent"></div>
              <div className="absolute bottom-8 left-8 flex items-center gap-3">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 text-white">
                  <MapPin className="w-6 h-6" />
                </div>
                <span className="text-white font-bold tracking-widest text-lg uppercase">中国 · 澳门特别行政区</span>
              </div>
            </div>
          </div>
          <div className="space-y-10">
            <div className="space-y-4">
              <Badge className="bg-primary/80">MARKET INSIGHT</Badge>
              <h2 className="text-5xl font-headline font-bold text-primary">为什么是澳门？<br />为什么是现在？</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                澳门饮品市场正经历从传统奶茶向“高品质、重文化、轻负担”转型的关键时期。年轻群体对草本元素的天然认同感正逐渐转化为真实的消费力。
              </p>
            </div>
            <div className="grid gap-6">
              {[
                { title: "年轻化空间", desc: "澳门茶饮消费正从传统口味向健康、颜值、文化体验综合升级。" },
                { title: "场景化需求", desc: "消费者不只购买饮品，也在购买情绪价值、生活方式和社交内容。" },
                { title: "品牌差异机会", desc: "中药健康茶饮仍有较大的年轻化表达空间，具有明显的先行优势。" },
                { title: "文化认同基础", desc: "东方草本与澳门本地生活方式有天然结合点，更易通过现代品牌语言产生共鸣。" }
              ].map((stat, i) => (
                <div key={i} className="p-8 bg-primary/5 rounded-3xl flex gap-6 items-center border border-transparent hover:border-primary/10 transition-all group">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-secondary shadow-sm group-hover:bg-secondary group-hover:text-white transition-all">
                    <Zap className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-primary text-lg mb-1">{stat.title}</h4>
                    <p className="text-sm text-muted-foreground">{stat.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. Brand Differentiation */}
      <section id="advantage" className="py-24 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20 space-y-6">
            <h2 className="text-5xl font-headline font-bold">不只是茶饮，而是草本生活方式</h2>
            <p className="text-primary-foreground/60 text-lg">多维度对比，见证山宁如何定义新标准</p>
          </div>

          <div className="grid md:grid-cols-3 gap-0 border border-white/10 rounded-[3rem] overflow-hidden shadow-2xl">
            <div className="bg-white/5 p-12 border-r border-white/10 space-y-8">
              <h3 className="text-2xl font-headline font-bold opacity-40">普通奶茶</h3>
              <ul className="space-y-5 text-sm opacity-40">
                <li className="flex items-center gap-3 italic">高糖分与高油脂负担</li>
                <li className="flex items-center gap-3 italic">健康属性匮乏</li>
                <li className="flex items-center gap-3 italic">陷入同质化价格战</li>
              </ul>
            </div>
            <div className="bg-white/10 p-12 border-r border-white/10 space-y-8">
              <h3 className="text-2xl font-headline font-bold opacity-60">柠檬茶</h3>
              <ul className="space-y-5 text-sm opacity-60">
                <li className="flex items-center gap-3">口感清爽且解腻</li>
                <li className="flex items-center gap-3">养生维度较为单一</li>
                <li className="flex items-center gap-3">社交场景传播力较弱</li>
              </ul>
            </div>
            <div className="bg-secondary p-12 space-y-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-6">
                <Award className="w-16 h-16 text-white/10 rotate-12" />
              </div>
              <h3 className="text-2xl font-headline font-bold text-white">山宁 SHANNING</h3>
              <ul className="space-y-5 text-sm font-medium">
                <li className="flex items-center gap-3"><Check className="w-4 h-4 text-white" /> 东方草本风味，0 添加</li>
                <li className="flex items-center gap-3"><Check className="w-4 h-4 text-white" /> 四季养生，精准平衡</li>
                <li className="flex items-center gap-3"><Check className="w-4 h-4 text-white" /> 现代东方美学空间</li>
                <li className="flex items-center gap-3"><Check className="w-4 h-4 text-white" /> 极强的社交媒体话题感</li>
              </ul>
              <Button 
                onClick={() => scrollToContact('加盟咨询')}
                className="w-full bg-white text-secondary hover:bg-white/90 font-bold h-14 rounded-2xl text-lg mt-4"
              >
                立即加盟
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Operations Strategy */}
      <section id="strategy" className="py-24 bg-white relative">
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
          <div className="absolute inset-0 bg-texture"></div>
          <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M 100 0 L 0 0 0 100" fill="none" stroke="currentColor" strokeWidth="1"/>
            </pattern>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div className="space-y-10">
              <div className="space-y-4">
                <Badge className="bg-secondary">STRATEGY</Badge>
                <h3 className="text-4xl font-headline font-bold text-primary">打造社交媒体驱动的内容矩阵</h3>
                <p className="text-muted-foreground leading-relaxed">
                  我们不只是卖茶，更是在运营一个关于“东方草本生活方式”的内容 IP。通过多维度的内容触达，让品牌进入消费者的心智。
                </p>
              </div>
              <div className="space-y-6">
                {[
                  { title: "内容矩阵", desc: "小红书、Instagram 深度种草，发布具有东方美学韵味的高颜值产品视觉。" },
                  { title: "KOL 联名", desc: "联合澳门本地具有影响力的 KOC 进行真实测评，打造“年轻人第一杯中药茶饮”话题。" },
                  { title: "空间社交", desc: "通过极具氛围感的门店装修与季节限定礼盒，激发用户自发拍照分享。" }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="mt-1.5 w-2 h-2 bg-secondary rounded-full shrink-0"></div>
                    <div>
                      <h4 className="font-bold text-primary mb-1">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-primary/5 rounded-[3rem] p-12 border grid grid-cols-2 gap-6 relative">
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-secondary/10 rounded-full blur-2xl"></div>
              {[
                { icon: <Users className="w-10 h-10 text-primary" />, label: "达人联名" },
                { icon: <TrendingUp className="w-10 h-10 text-primary" />, label: "流量追踪" },
                { icon: <Zap className="w-10 h-10 text-primary" />, label: "话题热度" },
                { icon: <Heart className="w-10 h-10 text-primary" />, label: "用户忠诚" }
              ].map((item, i) => (
                <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-primary/5 flex flex-col items-center justify-center text-center space-y-4 hover:shadow-xl transition-all hover:-translate-y-1 group">
                  <div className="group-hover:scale-110 transition-transform">{item.icon}</div>
                  <span className="text-xs font-bold uppercase tracking-widest text-primary/60">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 8. Store Locations */}
      <section id="location" className="py-24 bg-primary/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-headline font-bold text-primary">理想门店选址</h2>
            <p className="text-muted-foreground">精准切入高净值人流与生活场景，构建多维品牌接触点。</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { imgId: "loc-commercial", name: "核心商业区", crowd: "职场白领、购物人群", advice: "适合开设品牌旗舰店，强化视觉传达。" },
              { imgId: "loc-university", name: "高校周边", crowd: "Z世代学生、年轻教师", advice: "侧重社交互动与外带便利，打造打卡点。" },
              { imgId: "loc-cultural", name: "文创街区", crowd: "精致生活追求者、游客", advice: "结合美学工坊概念，提供深度沉浸体验。" },
              { imgId: "loc-tourist", name: "旅游景区", crowd: "外地游客、文化寻根者", advice: "适合伴手礼化产品，推广澳门草本名片。" },
              { imgId: "loc-office", name: "写字楼附近", crowd: "商务茶歇、外卖刚需", advice: "主打高效快取，建立稳定的日常订购习惯。" }
            ].map((loc, i) => {
              const img = getImg(loc.imgId);
              return (
                <div key={i} className="bg-white rounded-[2rem] border border-primary/5 overflow-hidden hover:shadow-2xl transition-all duration-500 group cursor-default shadow-sm">
                  <div className="relative h-32">
                    {img && (
                      <Image 
                        src={img.imageUrl} 
                        alt={loc.name} 
                        fill 
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        data-ai-hint={img.imageHint}
                      />
                    )}
                    <div className="absolute inset-0 bg-primary/40 group-hover:bg-transparent transition-colors"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                       <Sparkles className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="p-6 text-center group-hover:bg-primary group-hover:text-white transition-colors duration-500">
                    <h4 className="font-bold text-lg mb-2">{loc.name}</h4>
                    <p className="text-[10px] text-secondary font-bold uppercase tracking-widest mb-4 group-hover:text-white/60">{loc.crowd}</p>
                    <p className="text-xs text-muted-foreground leading-relaxed group-hover:text-white/80">{loc.advice}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 9. Final CTA */}
      <section className="py-24 relative overflow-hidden bg-primary">
        <div className="absolute inset-0 bg-texture opacity-10"></div>
        <div className="max-w-4xl mx-auto px-6 text-center space-y-12 relative z-10">
          <h2 className="text-5xl md:text-7xl font-headline font-bold text-white leading-tight">
            山宁，让东方草本<br />重新定义健康茶饮
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
            从药食同源到四季茶饮，从健康需求到社交传播。加入我们，开启一段自然与身心平衡的创业之旅。
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Button 
              size="lg" 
              onClick={() => scrollToContact('加盟咨询')}
              className="bg-secondary hover:bg-secondary/90 text-white rounded-full px-12 h-16 text-xl shadow-2xl shadow-secondary/20 transition-all active:scale-95"
            >
              立即咨询加盟
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              onClick={() => {
                const el = document.getElementById('menu');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="border-secondary text-secondary hover:bg-secondary hover:text-white rounded-full px-12 h-16 text-xl transition-all"
            >
              查看品牌手册
            </Button>
          </div>
        </div>
      </section>

      {/* 10. Contact Form Section */}
      <ContactSection />

      {/* 11. Footer */}
      <Footer />
    </main>
  );
}
