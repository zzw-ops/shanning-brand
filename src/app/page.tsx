
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Navbar } from '@/components/brand/Navbar';
import { TeaRecommendation } from '@/components/brand/TeaRecommendation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Leaf, 
  Wind, 
  Sun, 
  Heart, 
  Target, 
  Users, 
  ShieldCheck, 
  Palette, 
  LineChart, 
  MapPin, 
  ArrowRight,
  TrendingUp,
  Award
} from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function Home() {
  const heroImg = PlaceHolderImages.find(img => img.id === 'hero-tea');
  const macauImg = PlaceHolderImages.find(img => img.id === 'macau-street');

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* 1. Hero Section */}
      <section id="home" className="relative pt-32 pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/5 rounded-full border border-primary/10 text-primary text-sm font-medium">
              <SparklesIcon className="w-4 h-4 text-secondary" />
              <span>澳门新式中药健康茶饮品牌</span>
            </div>
            <h1 className="text-6xl md:text-7xl font-headline font-bold text-primary leading-tight">
              山宁｜新式中药<br />健康茶饮
            </h1>
            <p className="text-xl text-primary/80 font-medium">
              以东方草本入茶，把药食同源做成年轻人愿意喝的日常健康饮品。
            </p>
            <p className="text-muted-foreground leading-relaxed max-w-lg">
              山宁专注于将中药草本、四季养生与现代茶饮结合，面向澳门年轻消费群体，打造兼具健康属性、文化属性与社交传播力的新式中药茶饮品牌。
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 rounded-full px-8 text-lg">
                探索产品
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/5 rounded-full px-8 text-lg">
                了解品牌
              </Button>
            </div>
          </div>
          <div className="relative group lg:block hidden">
            <div className="absolute -inset-4 bg-secondary/20 rounded-full blur-3xl group-hover:bg-secondary/30 transition-all duration-700"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/20 aspect-[4/5] md:aspect-square bg-muted">
              {heroImg && (
                <Image 
                  src={heroImg.imageUrl} 
                  alt="山宁茶饮" 
                  fill 
                  priority
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  data-ai-hint={heroImg.imageHint}
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-8 left-8 text-white">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  <span className="text-sm font-bold tracking-widest uppercase">匠心调配</span>
                </div>
                <p className="font-headline text-3xl">自然之味，愈见初心</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Brand Concept */}
      <section id="concept" className="py-24 bg-primary/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-4xl font-headline font-bold text-primary">让中药茶饮变得年轻、好喝、日常</h2>
            <p className="text-muted-foreground leading-relaxed">
              传统中药饮品常被认为口味苦涩、形象老旧。山宁希望通过新式茶饮形式，把药食同源理念融入日常生活，让消费者在喝茶饮的同时获得更轻松的养生体验。
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                icon: <Leaf className="w-8 h-8 text-primary" />, 
                title: "草本入饮", 
                desc: "精选药食同源草本原料，严格质控，保留天然活性成分。" 
              },
              { 
                icon: <Wind className="w-8 h-8 text-primary" />, 
                title: "四季调养", 
                desc: "顺应天时，根据春夏秋冬设计不同饮品，平衡身体需求。" 
              },
              { 
                icon: <Users className="w-8 h-8 text-primary" />, 
                title: "年轻表达", 
                desc: "用现代茶饮方式重塑中药饮品形象，打造社交新场景。" 
              }
            ].map((card, i) => (
              <Card key={i} className="border-none shadow-sm hover:shadow-md transition-all group">
                <CardHeader className="space-y-4">
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform">
                    {card.icon}
                  </div>
                  <CardTitle className="text-xl font-headline">{card.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm leading-relaxed">{card.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* AI Interactive Section */}
      <section className="py-12 bg-white/20">
        <TeaRecommendation />
      </section>

      {/* 3. Product Highlights (Differentials) */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-headline font-bold text-primary text-center mb-16">山宁的四个核心差异化</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Target className="w-6 h-6" />, title: "稀缺性", desc: "澳门市场中，中草药健康茶饮仍处于相对空白阶段，具有先行者优势。" },
              { icon: <Heart className="w-6 h-6" />, title: "养生需求", desc: "精准切入当代年轻人关注健康、轻负担、自然调理的需求。" },
              { icon: <ShieldCheck className="w-6 h-6" />, title: "0 添加", desc: "强调自然、低负担、少添加的产品理念，建立深厚品牌信任感。" },
              { icon: <Palette className="w-6 h-6" />, title: "文化属性", desc: "结合东方美学与现代设计，让传统养生更具记忆点与传播力。" }
            ].map((item, i) => (
              <div key={i} className="p-8 border rounded-2xl hover:border-primary/20 transition-all hover:bg-primary/[0.02]">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-6">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold mb-3">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Seasonal Menu */}
      <section id="products" className="py-24 bg-primary/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-headline font-bold text-primary">四季系列菜单</h2>
            <p className="text-muted-foreground">基于药食同源理念，为每一个季节定制的草本茶饮</p>
          </div>

          <Tabs defaultValue="spring" className="w-full">
            <TabsList className="grid grid-cols-4 w-full max-w-2xl mx-auto mb-12 bg-white shadow-sm border h-14 p-1">
              <TabsTrigger value="spring" className="data-[state=active]:bg-primary data-[state=active]:text-white h-full">春｜舒养</TabsTrigger>
              <TabsTrigger value="summer" className="data-[state=active]:bg-primary data-[state=active]:text-white h-full">夏｜清爽</TabsTrigger>
              <TabsTrigger value="autumn" className="data-[state=active]:bg-primary data-[state=active]:text-white h-full">秋｜润燥</TabsTrigger>
              <TabsTrigger value="winter" className="data-[state=active]:bg-primary data-[state=active]:text-white h-full">冬｜温补</TabsTrigger>
            </TabsList>

            <SeasonalContent 
              season="spring" 
              title="舒养花茶系列" 
              items={[
                { name: "桂花乌龙草本茶", desc: "清新花香与浓郁茶感结合，舒缓压力", ingredients: "桂花, 乌龙", scene: "办公间歇、心情烦躁时" },
                { name: "菊花雪梨清润茶", desc: "甘甜润喉，清热降火", ingredients: "菊花, 雪梨", scene: "长时间熬夜、用嗓过度" },
                { name: "茉莉陈皮轻养茶", desc: "温润理气，茉莉清馨", ingredients: "茉莉, 陈皮", scene: "饭后消化、轻盈生活" }
              ]}
              imgId="spring-tea"
            />
            <SeasonalContent 
              season="summer" 
              title="清爽去腻系列" 
              items={[
                { name: "荷叶陈皮冷泡茶", desc: "冷泡工艺，极致解暑，去腻塑形", ingredients: "荷叶, 陈皮", scene: "盛夏午后、健身后" },
                { name: "金银花青柠茶", desc: "清凉金银花与酸爽青柠，唤醒能量", ingredients: "金银花, 青柠", scene: "户外活动、午后困乏" },
                { name: "乌梅山楂清爽饮", desc: "生津止渴，消积开胃", ingredients: "乌梅, 山楂", scene: "夏日聚餐、胃口不佳" }
              ]}
              imgId="summer-tea"
            />
            <SeasonalContent 
              season="autumn" 
              title="润燥养颜系列" 
              items={[
                { name: "桂花红枣枸杞茶", desc: "暖宫红润，桂香怡人", ingredients: "桂花, 红枣, 枸杞", scene: "气色暗淡、秋冬日常" },
                { name: "雪梨百合润燥茶", desc: "细腻滋养，对抗秋燥", ingredients: "雪梨, 百合", scene: "干燥环境、久坐空调房" },
                { name: "陈皮桂圆暖茶", desc: "温和补益，安神助眠", ingredients: "陈皮, 桂圆", scene: "入秋微凉、睡前舒缓" }
              ]}
              imgId="autumn-tea"
            />
            <SeasonalContent 
              season="winter" 
              title="温补暖身系列" 
              items={[
                { name: "红枣姜茶", desc: "驱寒暖胃，热力循环", ingredients: "红枣, 姜", scene: "冬季寒冷、体寒者" },
                { name: "桂圆枸杞暖饮", desc: "能量充盈，暖手暖心", ingredients: "桂圆, 枸杞", scene: "手脚冰凉、体力消耗后" },
                { name: "人参乌龙轻补茶", desc: "微补而不燥，提升元气", ingredients: "人参, 乌龙", scene: "冬日补气、学习工作时刻" }
              ]}
              imgId="winter-tea"
            />
          </Tabs>
        </div>
      </section>

      {/* 5. Market Opportunity */}
      <section id="market" className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -inset-10 bg-secondary/10 rounded-full blur-3xl"></div>
            <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-square">
              {macauImg && (
                <Image 
                  src={macauImg.imageUrl} 
                  alt="澳门市场" 
                  fill 
                  className="object-cover"
                  data-ai-hint={macauImg.imageHint}
                />
              )}
            </div>
          </div>
          <div className="space-y-8">
            <h2 className="text-4xl font-headline font-bold text-primary">为什么是澳门，为什么是现在？</h2>
            <p className="text-muted-foreground leading-relaxed">
              澳门饮品市场目前以传统奶茶、柠檬茶为主。随着消费升级，年轻群体对“颜值、文化、健康”的综合需求日益增长。中药健康茶饮在澳门处于蓝海阶段。
            </p>
            <div className="grid gap-4">
              {[
                { title: "市场空白点", value: "85%", desc: "澳门年轻消费者对药食同源饮品有极高潜在兴趣" },
                { title: "健康意识提升", value: "2x", desc: "近两年对低糖、自然成分饮品的搜索量翻倍" },
                { title: "文化认同感", value: "High", desc: "草本元素在东方文化中具有无可替代的信任感" }
              ].map((stat, i) => (
                <div key={i} className="p-6 bg-primary/5 rounded-2xl flex items-center justify-between border border-transparent hover:border-primary/10 transition-colors">
                  <div>
                    <h4 className="font-bold text-primary">{stat.title}</h4>
                    <p className="text-xs text-muted-foreground">{stat.desc}</p>
                  </div>
                  <span className="text-2xl font-headline font-bold text-secondary">{stat.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. Competitive Analysis */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-headline font-bold">不只是茶饮，而是草本健康生活方式</h2>
            <p className="text-primary-foreground/70">多维度对比，见证山宁的独特优势</p>
          </div>

          <div className="grid md:grid-cols-3 gap-0 border border-white/20 rounded-3xl overflow-hidden shadow-2xl">
            <div className="bg-white/5 p-10 border-r border-white/10 space-y-6">
              <h3 className="text-2xl font-headline font-bold opacity-60">普通奶茶</h3>
              <ul className="space-y-4 text-sm opacity-60">
                <li className="flex items-center gap-2"><XIcon className="w-4 h-4 text-red-400" /> 糖分与油脂超标</li>
                <li className="flex items-center gap-2"><XIcon className="w-4 h-4 text-red-400" /> 健康负担较重</li>
                <li className="flex items-center gap-2"><XIcon className="w-4 h-4 text-red-400" /> 严重同质化竞争</li>
              </ul>
            </div>
            <div className="bg-white/10 p-10 border-r border-white/10 space-y-6">
              <h3 className="text-2xl font-headline font-bold opacity-80">柠檬茶</h3>
              <ul className="space-y-4 text-sm opacity-80">
                <li className="flex items-center gap-2"><CheckIcon className="w-4 h-4 text-green-400" /> 清爽且解腻</li>
                <li className="flex items-center gap-2"><XIcon className="w-4 h-4 text-red-400" /> 养生属性单一</li>
                <li className="flex items-center gap-2"><XIcon className="w-4 h-4 text-red-400" /> 文化深度较浅</li>
              </ul>
            </div>
            <div className="bg-secondary p-10 space-y-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4">
                <Award className="w-12 h-12 text-white/20 rotate-12" />
              </div>
              <h3 className="text-2xl font-headline font-bold text-white">山宁 SHANNING</h3>
              <ul className="space-y-4 text-sm">
                <li className="flex items-center gap-2"><CheckIcon className="w-4 h-4 text-white" /> 草本入茶，0 添加</li>
                <li className="flex items-center gap-2"><CheckIcon className="w-4 h-4 text-white" /> 四季养生，精准对症</li>
                <li className="flex items-center gap-2"><CheckIcon className="w-4 h-4 text-white" /> 现代东方美学文化</li>
                <li className="flex items-center gap-2"><CheckIcon className="w-4 h-4 text-white" /> 极强品牌差异化</li>
              </ul>
              <Button className="w-full bg-white text-secondary hover:bg-white/90 font-bold mt-4">
                立即加盟
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Operations & Marketing */}
      <section id="strategy" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 space-y-24">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <Badge className="bg-secondary">线上运营</Badge>
              <h3 className="text-3xl font-headline font-bold text-primary">打造社交媒体内容矩阵</h3>
              <ul className="space-y-4 text-muted-foreground leading-relaxed">
                <li className="flex items-start gap-3">
                  <div className="mt-1.5 w-1.5 h-1.5 bg-secondary rounded-full shrink-0"></div>
                  <span>小红书、Instagram 深度种草，发布高颜值产品视觉。</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1.5 w-1.5 h-1.5 bg-secondary rounded-full shrink-0"></div>
                  <span>打造“年轻人第一杯中药茶饮”传播话题。</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1.5 w-1.5 h-1.5 bg-secondary rounded-full shrink-0"></div>
                  <span>联合澳门本地 KOC 进行真实探店测评。</span>
                </li>
              </ul>
            </div>
            <div className="bg-primary/5 rounded-3xl p-8 border grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-primary/5 aspect-square flex flex-col items-center justify-center text-center space-y-2">
                <Users className="w-8 h-8 text-primary" />
                <span className="text-xs font-bold">KOL 联名</span>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-sm border border-primary/5 aspect-square flex flex-col items-center justify-center text-center space-y-2">
                <LineChart className="w-8 h-8 text-primary" />
                <span className="text-xs font-bold">流量追踪</span>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-sm border border-primary/5 aspect-square flex flex-col items-center justify-center text-center space-y-2">
                <TrendingUp className="w-8 h-8 text-primary" />
                <span className="text-xs font-bold">话题热度</span>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-sm border border-primary/5 aspect-square flex flex-col items-center justify-center text-center space-y-2">
                <Heart className="w-8 h-8 text-primary" />
                <span className="text-xs font-bold">用户忠诚</span>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1 relative">
              <div className="bg-secondary/10 rounded-3xl p-12 aspect-[4/3] flex items-center justify-center">
                <div className="space-y-4 text-center">
                  <div className="flex justify-center gap-2">
                    <MapPin className="w-10 h-10 text-secondary" />
                  </div>
                  <h4 className="font-headline text-2xl text-primary">沉浸式门店空间</h4>
                  <p className="text-sm text-muted-foreground">木质元素、草本香气、禅意灯光</p>
                </div>
              </div>
            </div>
            <div className="space-y-6 order-1 md:order-2">
              <Badge className="bg-secondary">线下体验</Badge>
              <h3 className="text-3xl font-headline font-bold text-primary">打造有氛围感的慢生活空间</h3>
              <ul className="space-y-4 text-muted-foreground leading-relaxed">
                <li className="flex items-start gap-3">
                  <div className="mt-1.5 w-1.5 h-1.5 bg-secondary rounded-full shrink-0"></div>
                  <span>东方植物美学设计，打造高辨识度打卡空间。</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1.5 w-1.5 h-1.5 bg-secondary rounded-full shrink-0"></div>
                  <span>季节限定饮品发售，提升顾客到店频次。</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1.5 w-1.5 h-1.5 bg-secondary rounded-full shrink-0"></div>
                  <span>跨界文创联名，进入年轻人核心生活圈。</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Store Locations */}
      <section className="py-24 bg-primary/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-headline font-bold text-primary">理想门店选址</h2>
            <p className="text-muted-foreground">精准切入人流与生活场景，构建品牌接触点</p>
          </div>
          <div className="grid md:grid-cols-5 gap-4">
            {[
              { name: "核心商业区", desc: "商务人群、白领" },
              { name: "高校周边", desc: "追求潮流的学生" },
              { name: "文创街区", desc: "精致生活追求者" },
              { name: "旅游景区", desc: "社交打卡与游客" },
              { name: "写字楼附近", desc: "下午茶刚需人群" }
            ].map((loc, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border text-center hover:bg-primary hover:text-white transition-all group cursor-default">
                <MapPin className="w-6 h-6 mx-auto mb-3 text-secondary group-hover:text-white" />
                <h4 className="font-bold text-sm mb-1">{loc.name}</h4>
                <p className="text-[10px] opacity-60 uppercase tracking-widest">{loc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Final CTA */}
      <section className="py-24 relative overflow-hidden bg-primary">
        <div className="absolute inset-0 bg-texture opacity-10"></div>
        <div className="max-w-4xl mx-auto px-6 text-center space-y-12 relative z-10">
          <h2 className="text-5xl md:text-6xl font-headline font-bold text-white">
            山宁，让东方草本<br />成为年轻人的日常茶饮
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            从药食同源到四季茶饮, 从健康需求到社交传播, 山宁希望用更年轻的方式重新定义中药健康茶饮。
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white rounded-full px-12 h-14 text-lg">
              查看完整菜单
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 rounded-full px-12 h-14 text-lg">
              联系我们
            </Button>
          </div>
        </div>
      </section>

      {/* 10. Footer */}
      <footer id="contact" className="py-12 bg-background border-t">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white font-headline text-xs">山</div>
                <span className="font-headline font-bold text-xl text-primary">山宁 SHANNING</span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                专注于新式中药健康茶饮品牌，将药食同源理念融入现代生活方式。
              </p>
            </div>
            <div>
              <h5 className="font-bold text-sm mb-4">关于我们</h5>
              <ul className="space-y-2 text-xs text-muted-foreground">
                <li><Link href="#home">品牌故事</Link></li>
                <li><Link href="#concept">研发理念</Link></li>
                <li><Link href="#strategy">加入我们</Link></li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold text-sm mb-4">联系方式</h5>
              <ul className="space-y-2 text-xs text-muted-foreground">
                <li>邮箱: hello@shanning.com</li>
                <li>地点: 澳门特别行政区</li>
                <li>合作: partnership@shanning.com</li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold text-sm mb-4">社交平台</h5>
              <div className="flex gap-4">
                <span className="text-xs text-muted-foreground hover:text-primary cursor-pointer">Instagram</span>
                <span className="text-xs text-muted-foreground hover:text-primary cursor-pointer">小红书</span>
                <span className="text-xs text-muted-foreground hover:text-primary cursor-pointer">TikTok</span>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] text-muted-foreground uppercase tracking-widest">
            <span>© 2024 SHANNING TEA. ALL RIGHTS RESERVED.</span>
            <span>澳门｜药食同源｜四季养生</span>
          </div>
        </div>
      </footer>
    </main>
  );
}

function SeasonalContent({ season, title, items, imgId }: { season: string, title: string, items: any[], imgId: string }) {
  const image = PlaceHolderImages.find(img => img.id === imgId);
  return (
    <TabsContent value={season} className="animate-in fade-in slide-in-from-bottom-4 duration-500 mt-0">
      <div className="grid lg:grid-cols-2 gap-12 items-center bg-white p-8 md:p-12 rounded-[2rem] shadow-sm border">
        <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-muted">
          {image && (
            <Image 
              src={image.imageUrl} 
              alt={title} 
              fill 
              className="object-cover"
              data-ai-hint={image.imageHint}
            />
          )}
        </div>
        <div className="space-y-8">
          <div className="space-y-2">
            <h3 className="text-3xl font-headline font-bold text-primary">{title}</h3>
            <p className="text-sm text-secondary font-bold tracking-widest uppercase">Seasonal Series</p>
          </div>
          <div className="space-y-6">
            {items.map((item, idx) => (
              <div key={idx} className="group cursor-default border-b border-primary/5 pb-4 last:border-0">
                <div className="flex justify-between items-baseline mb-1">
                  <h4 className="text-lg font-bold text-primary group-hover:text-secondary transition-colors">{item.name}</h4>
                  <Badge variant="secondary" className="bg-secondary/10 text-secondary text-[10px]">{item.ingredients}</Badge>
                </div>
                <p className="text-xs text-muted-foreground mb-2">{item.desc}</p>
                <div className="flex items-center gap-1.5 text-[10px] font-bold text-primary/40 group-hover:text-primary/60">
                  <Heart className="w-3 h-3" />
                  <span>适用场景: {item.scene}</span>
                </div>
              </div>
            ))}
          </div>
          <Button variant="link" className="text-primary font-bold p-0 flex items-center gap-2 group/btn">
            获取完整季节配方表 <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
          </Button>
        </div>
      </div>
    </TabsContent>
  );
}

function SparklesIcon(props: any) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
      <path d="M5 3v4" />
      <path d="M19 17v4" />
      <path d="M3 5h4" />
      <path d="M17 19h4" />
    </svg>
  );
}

function CheckIcon(props: any) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function XIcon(props: any) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
