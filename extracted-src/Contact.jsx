import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { base44 } from '@/api/base44Client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Send, Check, Mail, MessageSquare } from 'lucide-react';
import SectionHeading from '../components/shared/SectionHeading';

const CONTACT_BG = 'https://media.base44.com/images/public/6a04eb295d2a048bc01a0caa/c7115cbb9_generated_dcd948c7.png';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await base44.entities.ContactSubmission.create(form);
    setSubmitted(true);
    setLoading(false);
  };

  const handleChange = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
  };

  return (
    <section data-source-location="pages/Contact:30:4" data-dynamic-content="true" className="pt-28 lg:pt-36 pb-20 lg:pb-32">
      {/* Hero banner */}
      <div data-source-location="pages/Contact:32:6" data-dynamic-content="true" className="relative h-64 lg:h-72 overflow-hidden mb-16">
        <img data-source-location="pages/Contact:33:8" data-dynamic-content="true" src={CONTACT_BG} alt="English countryside" className="w-full h-full object-cover" />
        <div data-source-location="pages/Contact:34:8" data-dynamic-content="false" className="absolute inset-0 bg-gradient-to-b from-foreground/50 to-background" />
        <div data-source-location="pages/Contact:35:8" data-dynamic-content="false" className="absolute inset-0 flex items-center justify-center">
          <h1 data-source-location="pages/Contact:36:10" data-dynamic-content="false" className="font-display text-4xl lg:text-6xl font-bold text-white">Get in Touch</h1>
        </div>
      </div>

      <div data-source-location="pages/Contact:40:6" data-dynamic-content="true" className="max-w-4xl mx-auto px-6 lg:px-12">
        <div data-source-location="pages/Contact:41:8" data-dynamic-content="true" className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Info */}
          <motion.div data-source-location="pages/Contact:43:10" data-dynamic-content="true"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-2 space-y-8">
            
            <div data-source-location="pages/Contact:50:12" data-dynamic-content="false">
              <h3 data-source-location="pages/Contact:51:14" data-dynamic-content="false" className="font-display text-xl font-semibold text-foreground mb-3">
                Let's Connect
              </h3>
              <p data-source-location="pages/Contact:54:14" data-dynamic-content="false" className="font-body text-base text-muted-foreground leading-relaxed">
                Whether you'd like to share your thoughts on the book, inquire about events, 
                or simply say hello — Robert would love to hear from you.
              </p>
            </div>

            <div data-source-location="pages/Contact:60:12" data-dynamic-content="false" className="space-y-4">
              <div data-source-location="pages/Contact:61:14" data-dynamic-content="false" className="flex items-center gap-3">
                <div data-source-location="pages/Contact:62:16" data-dynamic-content="false" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Mail data-source-location="pages/Contact:63:18" data-dynamic-content="false" className="w-4 h-4 text-primary" />
                </div>
                <div data-source-location="pages/Contact:65:16" data-dynamic-content="false">
                  <p data-source-location="pages/Contact:66:18" data-dynamic-content="false" className="font-body text-sm text-muted-foreground">Email</p>
                  <p data-source-location="pages/Contact:67:18" data-dynamic-content="false" className="font-body text-foreground">contact@roberttieken.com</p>
                </div>
              </div>
              <div data-source-location="pages/Contact:70:14" data-dynamic-content="false" className="flex items-center gap-3">
                <div data-source-location="pages/Contact:71:16" data-dynamic-content="false" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <MessageSquare data-source-location="pages/Contact:72:18" data-dynamic-content="false" className="w-4 h-4 text-primary" />
                </div>
                <div data-source-location="pages/Contact:74:16" data-dynamic-content="false">
                  <p data-source-location="pages/Contact:75:18" data-dynamic-content="false" className="font-body text-sm text-muted-foreground">Response time</p>
                  <p data-source-location="pages/Contact:76:18" data-dynamic-content="false" className="font-body text-foreground">Usually within 48 hours</p>
                </div>
              </div>
            </div>

            <blockquote data-source-location="pages/Contact:81:12" data-dynamic-content="false" className="border-l-2 border-accent pl-4">
              <p data-source-location="pages/Contact:82:14" data-dynamic-content="false" className="font-accent italic text-lg text-foreground/70">
                "Every letter, every message reminds me why I write — to connect."
              </p>
            </blockquote>
          </motion.div>

          {/* Form */}
          <motion.div data-source-location="pages/Contact:89:10" data-dynamic-content="true"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="lg:col-span-3">
            
            {submitted ?
            <div data-source-location="pages/Contact:97:14" data-dynamic-content="false" className="bg-card border border-border rounded-xl p-12 text-center">
                <div data-source-location="pages/Contact:98:16" data-dynamic-content="false" className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
                  <Check data-source-location="pages/Contact:99:18" data-dynamic-content="false" className="w-8 h-8 text-accent" />
                </div>
                <h3 data-source-location="pages/Contact:101:16" data-dynamic-content="false" className="font-display text-2xl font-semibold text-foreground mb-3">
                  Thank You
                </h3>
                <p data-source-location="pages/Contact:104:16" data-dynamic-content="false" className="font-accent italic text-lg text-muted-foreground">
                  Your message has been sent. Robert will get back to you soon.
                </p>
              </div> :

            <form data-source-location="pages/Contact:109:14" data-dynamic-content="true" onSubmit={handleSubmit} className="bg-card border border-border rounded-xl p-8 lg:p-10 space-y-5">
                <div data-source-location="pages/Contact:110:16" data-dynamic-content="true" className="grid sm:grid-cols-2 gap-5">
                  <div data-source-location="pages/Contact:111:18" data-dynamic-content="true">
                    <label data-source-location="pages/Contact:112:20" data-dynamic-content="false" className="font-body text-sm text-foreground mb-1.5 block">Name</label>
                    <Input data-source-location="pages/Contact:113:20" data-dynamic-content="true"
                  value={form.name}
                  onChange={handleChange('name')}
                  required
                  placeholder="Your name"
                  className="bg-background font-body" />
                  
                  </div>
                  <div data-source-location="pages/Contact:121:18" data-dynamic-content="true">
                    <label data-source-location="pages/Contact:122:20" data-dynamic-content="false" className="font-body text-sm text-foreground mb-1.5 block">Email</label>
                    <Input data-source-location="pages/Contact:123:20" data-dynamic-content="true"
                  type="email"
                  value={form.email}
                  onChange={handleChange('email')}
                  required
                  placeholder="your@email.com"
                  className="bg-background font-body" />
                  
                  </div>
                </div>
                <div data-source-location="pages/Contact:133:16" data-dynamic-content="true">
                  <label data-source-location="pages/Contact:134:18" data-dynamic-content="false" className="font-body text-sm text-foreground mb-1.5 block">Subject</label>
                  <Input data-source-location="pages/Contact:135:18" data-dynamic-content="true"
                value={form.subject}
                onChange={handleChange('subject')}
                placeholder="What is this about?"
                className="bg-background font-body" />
                
                </div>
                <div data-source-location="pages/Contact:142:16" data-dynamic-content="true">
                  <label data-source-location="pages/Contact:143:18" data-dynamic-content="false" className="font-body text-sm text-foreground mb-1.5 block">Message</label>
                  <Textarea data-source-location="pages/Contact:144:18" data-dynamic-content="true"
                value={form.message}
                onChange={handleChange('message')}
                required
                placeholder="Your message..."
                rows={6}
                className="bg-background font-body resize-none" />
                
                </div>
                <Button data-source-location="pages/Contact:153:16" data-dynamic-content="true"
              type="submit"
              disabled={loading}
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-body gap-2">
                
                  <Send data-source-location="pages/Contact:158:18" data-dynamic-content="false" className="w-4 h-4" />
                  {loading ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            }
          </motion.div>
        </div>
      </div>
    </section>);

}