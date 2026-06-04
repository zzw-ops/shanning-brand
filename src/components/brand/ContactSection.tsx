
"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { CheckCircle2, Send, Loader2, Phone, Mail, MapPin } from 'lucide-react';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';

const formSchema = z.object({
  name: z.string().min(2, { message: "请输入您的姓名" }),
  phone: z.string().regex(/^1[3-9]\d{9}$/, { message: "请输入有效的中国大陆手机号" }),
  email: z.string().email({ message: "请输入有效的邮箱地址" }),
  city: z.string().min(1, { message: "请输入所在城市" }),
  type: z.string().min(1, { message: "请选择咨询类型" }),
  message: z.string().optional(),
});

export function ContactSection() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [highlight, setHighlight] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);

  const { register, handleSubmit, setValue, formState: { errors }, reset } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      type: '加盟咨询'
    }
  });

  useEffect(() => {
    const handleSetConsultType = (e: any) => {
      setValue('type', e.detail);
      setHighlight(true);
      setTimeout(() => setHighlight(false), 1500);
      // Focus name input
      const nameInput = document.querySelector('input[name="name"]') as HTMLInputElement;
      if (nameInput) nameInput.focus();
    };

    window.addEventListener('set-consult-type', handleSetConsultType);
    return () => window.removeEventListener('set-consult-type', handleSetConsultType);
  }, [setValue]);

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    setLoading(true);
    // Simulate API call
    console.log('Form Submitted:', data);
    
    // Save to localStorage for demo
    const submissions = JSON.parse(localStorage.getItem('shanning_leads') || '[]');
    submissions.push({ ...data, timestamp: new Date().toISOString() });
    localStorage.setItem('shanning_leads', JSON.stringify(submissions));

    await new Promise(resolve => setTimeout(resolve, 1500));
    setLoading(false);
    setSubmitted(true);
    toast({
      title: "提交成功",
      description: "我们已收到你的咨询，会尽快与你联系。",
    });
    reset();
  };

  return (
    <section id="contact" ref={formRef} className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-5xl font-headline font-bold text-primary">联系山宁</h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                无论是寻求加盟、品牌联名，还是想分享您对草本茶饮的见解，我们都期待与您交流。
              </p>
            </div>

            <div className="space-y-6">
              {[
                { icon: <Phone className="w-5 h-5 text-secondary" />, label: "咨询热线", value: "400-XXX-XXXX" },
                { icon: <Mail className="w-5 h-5 text-secondary" />, label: "商务合作", value: "partnership@shanning.com" },
                { icon: <MapPin className="w-5 h-5 text-secondary" />, label: "品牌中心", value: "中国·澳门特别行政区" }
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 p-4 rounded-2xl hover:bg-primary/5 transition-colors group">
                  <div className="w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center group-hover:bg-white shadow-sm transition-colors">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs font-bold text-primary/40 uppercase tracking-widest">{item.label}</p>
                    <p className="text-lg font-bold text-primary">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-8 border-t border-primary/10">
              <p className="text-sm font-bold text-primary mb-4">关注我们的动态</p>
              <div className="flex gap-4">
                {['Instagram', '小红书', 'TikTok'].map(platform => (
                  <button key={platform} className="px-4 py-2 rounded-full border border-primary/10 text-xs font-bold hover:bg-primary hover:text-white transition-all">
                    {platform}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <Card className={cn(
            "border-none shadow-2xl rounded-[2.5rem] overflow-hidden transition-all duration-500",
            highlight ? "ring-4 ring-secondary/30 scale-[1.02]" : ""
          )}>
            <CardContent className="p-10">
              {submitted ? (
                <div className="text-center py-12 space-y-6 animate-in zoom-in duration-500">
                  <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10 text-green-500" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-headline font-bold text-primary">感谢您的关注！</h3>
                    <p className="text-muted-foreground">您的咨询已成功提交，我们的团队将在 1-3 个工作日内与您取得联系。</p>
                  </div>
                  <Button variant="outline" onClick={() => setSubmitted(false)} className="rounded-full">再次提交</Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label className="text-xs font-bold text-primary/60">您的姓名*</Label>
                      <Input 
                        {...register("name")}
                        placeholder="请输入姓名" 
                        className={cn("h-12 rounded-xl bg-primary/5 border-none", errors.name && "border-red-500 ring-1 ring-red-500")}
                      />
                      {errors.name && <p className="text-[10px] text-red-500">{errors.name.message}</p>}
                    </div>
                    <div className="space-y-2">
                      <Label className="text-xs font-bold text-primary/60">联系电话*</Label>
                      <Input 
                        {...register("phone")}
                        placeholder="请输入手机号" 
                        className={cn("h-12 rounded-xl bg-primary/5 border-none", errors.phone && "border-red-500 ring-1 ring-red-500")}
                      />
                      {errors.phone && <p className="text-[10px] text-red-500">{errors.phone.message}</p>}
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label className="text-xs font-bold text-primary/60">邮箱地址*</Label>
                      <Input 
                        {...register("email")}
                        placeholder="hello@example.com" 
                        className={cn("h-12 rounded-xl bg-primary/5 border-none", errors.email && "border-red-500 ring-1 ring-red-500")}
                      />
                      {errors.email && <p className="text-[10px] text-red-500">{errors.email.message}</p>}
                    </div>
                    <div className="space-y-2">
                      <Label className="text-xs font-bold text-primary/60">所在城市*</Label>
                      <Input 
                        {...register("city")}
                        placeholder="如：澳门、珠海..." 
                        className={cn("h-12 rounded-xl bg-primary/5 border-none", errors.city && "border-red-500 ring-1 ring-red-500")}
                      />
                      {errors.city && <p className="text-[10px] text-red-500">{errors.city.message}</p>}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label className="text-xs font-bold text-primary/60">咨询类型*</Label>
                    <Select onValueChange={(val) => setValue('type', val)} defaultValue="加盟咨询">
                      <SelectTrigger className="h-12 rounded-xl bg-primary/5 border-none">
                        <SelectValue placeholder="请选择咨询类型" />
                      </SelectTrigger>
                      <SelectContent>
                        {['加盟咨询', '品牌合作', '门店选址', '媒体合作', '产品建议', '其他'].map(type => (
                          <SelectItem key={type} value={type}>{type}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label className="text-xs font-bold text-primary/60">留言内容</Label>
                    <Textarea 
                      {...register("message")}
                      placeholder="请详细描述您的需求..." 
                      className="min-h-[120px] rounded-xl bg-primary/5 border-none resize-none"
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full h-14 bg-primary hover:bg-primary/90 text-white font-bold rounded-xl text-lg shadow-xl shadow-primary/20 transition-all active:scale-95"
                    disabled={loading}
                  >
                    {loading ? <Loader2 className="animate-spin mr-2" /> : <Send className="mr-2 w-5 h-5" />}
                    提交咨询方案
                  </Button>
                  <p className="text-[10px] text-center text-muted-foreground">提交即代表您同意我们的隐私政策。我们承诺不会泄露您的个人信息。</p>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
