
"use client";

import React from 'react';
import Link from 'next/link';
import { Mail, Instagram, MessageCircle, MapPin } from 'lucide-react';

export function Footer() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="py-20 bg-background border-t border-primary/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white font-headline text-xs">山</div>
              <span className="font-headline font-bold text-xl text-primary">山宁 SHANNING</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              山宁，让东方草本成为年轻人的日常茶饮。以四季草本、现代茶饮与东方植物美学，重新定义年轻人的轻养生饮品体验。
            </p>
          </div>
          
          <div>
            <h5 className="font-bold text-sm mb-6 text-primary uppercase tracking-widest">品牌导航</h5>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><button onClick={() => scrollTo('brand')} className="hover:text-secondary transition-colors">品牌故事</button></li>
              <li><button onClick={() => scrollTo('products')} className="hover:text-secondary transition-colors">产品系列</button></li>
              <li><button onClick={() => scrollTo('menu')} className="hover:text-secondary transition-colors">产品菜单</button></li>
              <li><button onClick={() => scrollTo('market')} className="hover:text-secondary transition-colors">市场机会</button></li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold text-sm mb-6 text-primary uppercase tracking-widest">联系合作</h5>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><button onClick={() => scrollTo('contact')} className="hover:text-secondary transition-colors">加盟合作</button></li>
              <li><button onClick={() => scrollTo('contact')} className="hover:text-secondary transition-colors">媒体合作</button></li>
              <li>
                <a href="mailto:partnership@shanning.com" className="flex items-center gap-2 hover:text-secondary transition-colors">
                  <Mail className="w-4 h-4" /> partnership@shanning.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4" /> 澳门特别行政区
              </li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold text-sm mb-6 text-primary uppercase tracking-widest">社交平台</h5>
            <div className="flex flex-wrap gap-4">
              <a 
                href="https://instagram.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary/5 rounded-xl flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all shadow-sm"
                title="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://www.xiaohongshu.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary/5 rounded-xl flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all shadow-sm"
                title="小红书"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a 
                href="https://www.tiktok.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary/5 rounded-xl flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all shadow-sm"
                title="TikTok"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04-.1z"/></svg>
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-primary/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[10px] text-muted-foreground uppercase tracking-[0.2em]">© 2024 SHANNING TEA. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-8 text-[10px] text-muted-foreground uppercase tracking-[0.2em]">
            <span>澳门｜药食同源｜四季养生</span>
            <Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
