
"use client";

import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { seasonalMenu } from './SeasonalMenu';
import { Leaf, Heart, ArrowRight } from 'lucide-react';

interface MenuModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function MenuModal({ open, onOpenChange }: MenuModalProps) {
  const handleFranchiseClick = () => {
    onOpenChange(false);
    setTimeout(() => {
      const el = document.getElementById('contact');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        window.dispatchEvent(new CustomEvent('set-consult-type', { detail: '加盟咨询' }));
      }
    }, 300);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] p-0 overflow-hidden rounded-[2rem] border-none shadow-2xl">
        <DialogHeader className="p-8 bg-primary text-white border-none">
          <div className="flex items-center gap-2 mb-2">
            <Leaf className="w-5 h-5 text-secondary" />
            <span className="text-xs font-bold tracking-widest uppercase opacity-70">Official Menu</span>
          </div>
          <DialogTitle className="text-4xl font-headline font-bold">山宁全系列产品菜单</DialogTitle>
          <DialogDescription className="text-white/60 text-lg">
            药食同源，四季常宁。探索适合您身体状态的草本调配。
          </DialogDescription>
        </DialogHeader>

        <ScrollArea className="flex-1 p-8 bg-texture">
          <div className="space-y-16 pb-12">
            {Object.values(seasonalMenu).map((season) => (
              <div key={season.id} className="space-y-6">
                <div className="flex items-center gap-4 border-b-2 border-primary/10 pb-4">
                  <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center text-white font-headline text-xl">
                    {season.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="text-2xl font-headline font-bold text-primary">{season.name} · {season.title}</h3>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">{season.subtitle}</p>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
                  {season.products.map((product, idx) => (
                    <div key={idx} className="group">
                      <div className="flex justify-between items-baseline mb-2">
                        <h4 className="text-lg font-bold text-primary group-hover:text-secondary transition-colors">{product.name}</h4>
                        <div className="flex gap-1">
                          {product.tags.map(tag => (
                            <Badge key={tag} variant="secondary" className="bg-primary/5 text-primary/60 text-[8px] py-0 px-1.5">{tag}</Badge>
                          ))}
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2 leading-relaxed">{product.flavor}</p>
                      <div className="flex items-center gap-1.5 text-[10px] font-bold text-primary/30">
                        <Heart className="w-3 h-3" />
                        <span>场景: {product.scene}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            <div className="bg-secondary/5 border-2 border-dashed border-secondary/20 p-8 rounded-3xl text-center space-y-6">
              <div className="space-y-2">
                <h4 className="text-2xl font-headline font-bold text-primary">对山宁的产品感兴趣？</h4>
                <p className="text-sm text-muted-foreground max-w-md mx-auto">
                  加入我们，一起在澳门传播新式中药健康茶饮文化。我们提供完整的产品培训与供应链支持。
                </p>
              </div>
              <Button onClick={handleFranchiseClick} className="bg-secondary hover:bg-secondary/90 text-white rounded-full px-8 h-12 font-bold group">
                联系加盟合作 <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
