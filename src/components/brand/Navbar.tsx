
"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: '首页', href: '#home' },
  { label: '品牌理念', href: '#concept' },
  { label: '产品系列', href: '#products' },
  { label: '市场机会', href: '#market' },
  { label: '运营策略', href: '#strategy' },
  { label: '联系我们', href: '#contact' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
      isScrolled ? "bg-background/80 backdrop-blur-md shadow-sm" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="#home" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-headline font-bold text-lg group-hover:bg-secondary transition-colors">
            山
          </div>
          <span className="font-headline font-bold text-2xl tracking-tight text-primary">山宁 SHANNING</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <Button variant="default" className="bg-primary hover:bg-primary/90 rounded-full px-6">
            查看菜单
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-primary"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border p-6 flex flex-col gap-4 animate-in slide-in-from-top duration-300">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-lg font-medium text-muted-foreground hover:text-primary py-2"
            >
              {item.label}
            </Link>
          ))}
          <Button className="w-full bg-primary hover:bg-primary/90 mt-2">
            查看菜单
          </Button>
        </div>
      )}
    </nav>
  );
}
