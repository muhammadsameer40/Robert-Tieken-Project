import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart } from 'lucide-react';

const COVER_EN = 'https://storage.base44.com/apps/e07fd6e7-fc42-4584-a35a-66eb3b55d3c1/files/public/d2d20b30-5e7c-46be-8e3b-97e22e2c2b0a-distant-cousin-softcover.png';
const COVER_NL = 'https://storage.base44.com/apps/e07fd6e7-fc42-4584-a35a-66eb3b55d3c1/files/public/0e1b21ed-5fed-4e45-adfe-84e40f4e0bff-verre-neven-softcover.png';

const BACK_COVER_EN = 'https://media.base44.com/images/public/6a04eb295d2a048bc01a0caa/c1b9c3e3f_ENGLISH__FINAL__BACK.jpg';

const BOOK_BG = 'https://media.base44.com/images/public/6a04eb295d2a048bc01a0caa/777755e7b_generated_d062f754.png';

const synopsisEN = { /* ... your synopsisEN object here ... */ };
const synopsisNL = { /* ... your synopsisNL object here ... */ };

export default function TheBook() {
  const [activeLang, setActiveLang] = useState<'en' | 'nl'>('en');
  const synopsis = activeLang === 'en' ? synopsisEN : synopsisNL;
  const coverUrl = activeLang === 'en' ? COVER_EN : COVER_NL;

  return (
    <section className="pt-28 lg:pt-36 pb-20 lg:pb-32">
      {/* Hero Banner */}
      <div className="relative h-64 lg:h-80 overflow-hidden mb-16">
        <img src={BOOK_BG} alt="Book Background" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="font-display text-4xl lg:text-6xl font-bold text-white">The Book</h1>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        {/* Language Toggle */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex bg-muted rounded-full p-1">
            <button
              onClick={() => setActiveLang('en')}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
                activeLang === 'en' ? 'bg-primary text-white' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              English
            </button>
            <button
              onClick={() => setActiveLang('nl')}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
                activeLang === 'nl' ? 'bg-primary text-white' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Nederlands
            </button>
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeLang}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid lg:grid-cols-3 gap-12 lg:gap-20"
          >
            {/* Book Covers */}
            <div className="flex flex-col items-center lg:items-end gap-10">
              {/* Front Cover */}
              <div className="relative group">
                <div className="absolute -inset-6 bg-gradient-to-br from-amber-500/10 to-orange-500/10 rounded-3xl blur-3xl" />
                <img
                  src={coverUrl}
                  alt={synopsis.title}
                  className="relative w-64 lg:w-72 rounded-sm shadow-2xl transition-transform group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.src = 'https://via.placeholder.com/300x400/1a1208/ffffff?text=Book+Cover';
                  }}
                />
              </div>

              {/* Back Cover */}
              {activeLang === 'en' && (
                <div className="relative group">
                  <div className="absolute -inset-6 bg-gradient-to-br from-amber-500/10 to-orange-500/10 rounded-3xl blur-3xl" />
                  <img
                    src={BACK_COVER_EN}
                    alt="Back Cover"
                    className="relative w-64 lg:w-72 rounded-sm shadow-2xl transition-transform group-hover:scale-105"
                    crossOrigin="anonymous"
                    onError={(e) => {
                      console.error("Back cover failed");
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                </div>
              )}
            </div>

            {/* Synopsis */}
            <div className="lg:col-span-2 space-y-6">
              <h2 className="font-display text-3xl lg:text-4xl font-semibold">
                {synopsis.title}
              </h2>
              <p className="font-accent italic text-lg text-amber-500">
                {synopsis.subtitle}
              </p>

              <div className="h-px w-16 bg-amber-500/50 my-4" />

              {synopsis.paragraphs.map((p, i) => (
                <p key={i} className="text-lg leading-relaxed text-foreground/80">
                  {p}
                </p>
              ))}

              <div className="pt-8 w-full flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <a href="#" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-full hover:bg-primary/90">
                  <ShoppingCart size={18} />
                  Buy {synopsis.title}
                </a>
                <a href="/excerpt" className="inline-flex items-center gap-2 px-8 py-3 border border-primary/40 text-primary rounded-full hover:bg-primary/10">
                  Read an Excerpt
                </a>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}