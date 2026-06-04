
"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: '首页', href: '#home' },
  { label: '品牌理念', href: '#brand' },
  { label: '产品系列', href: '#products' },
  { label: '四季菜单', href: '#menu' },
  { label: '市场机会', href: '#market' },
  { label: '运营策略', href: '#strategy' },
  { label: '联系我们', href: '#contact' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      const sections = navItems.map(item => item.href.substring(1));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element && element.getBoundingClientRect().top <= 100) {
          setActiveSection(section);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const id = href.substring(1);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
      isScrolled ? "bg-background/90 backdrop-blur-md shadow-sm border-b border-primary/5" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-2 group cursor-pointer"
        >
          <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-headline font-bold text-lg group-hover:bg-secondary transition-colors">
            山
          </div>
          <span className="font-headline font-bold text-2xl tracking-tight text-primary">山宁 SHANNING</span>
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => handleNavClick(item.href)}
              className={cn(
                "text-sm font-medium transition-colors hover:text-secondary",
                activeSection === item.href.substring(1) ? "text-primary font-bold border-b-2 border-secondary" : "text-muted-foreground"
              )}
            >
              {item.label}
            </button>
          ))}
          <Button 
            variant="default" 
            className="bg-primary hover:bg-primary/90 rounded-full px-6 ml-4"
            onClick={() => handleNavClick('#menu')}
          >
            查看菜单
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-primary p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="切换菜单"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border p-6 flex flex-col gap-4 animate-in slide-in-from-top duration-300">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => handleNavClick(item.href)}
              className={cn(
                "text-lg font-medium py-2 text-left",
                activeSection === item.href.substring(1) ? "text-primary font-bold" : "text-muted-foreground"
              )}
            >
              {item.label}
            </button>
          ))}
          <Button 
            className="w-full bg-primary hover:bg-primary/90 mt-2"
            onClick={() => handleNavClick('#menu')}
          >
            查看菜单
          </Button>
        </div>
      )}
    </nav>
  );
}
