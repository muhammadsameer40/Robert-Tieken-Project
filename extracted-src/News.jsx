import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../components/shared/SectionHeading';
import { Calendar } from 'lucide-react';

const newsItems = [
{
  date: 'May 2026',
  title: 'Distant Cousin Now Available in English',
  excerpt: 'After months of careful translation and editing, the English edition of "Distant Cousin" is now available worldwide. Robert is thrilled to share Michael Doesburg\'s story with a global audience.'
},
{
  date: 'April 2026',
  title: 'Verre Neven — Dutch Edition Published',
  excerpt: 'The original Dutch edition of the novel, "Verre Neven," has been published to warm reviews. Readers have praised its authentic voice and heartfelt storytelling.'
},
{
  date: 'March 2026',
  title: 'Author Interview: The Story Behind the Story',
  excerpt: 'Robert shares the personal experiences and family discoveries that inspired him to write "Distant Cousin" — a conversation about cross-cultural identity and the surprises that family history can hold.'
}];


export default function News() {
  return (
    <section data-source-location="pages/News:26:4" data-dynamic-content="true" className="pt-28 lg:pt-36 pb-20 lg:pb-32 px-6 lg:px-12">
      <div data-source-location="pages/News:27:6" data-dynamic-content="true" className="max-w-3xl mx-auto">
        <SectionHeading data-source-location="pages/News:28:8" data-dynamic-content="false"
        title="News & Updates"
        subtitle="The latest from Robert's writing world" />
        

        <div data-source-location="pages/News:33:8" data-dynamic-content="true" className="space-y-12">
          {newsItems.map((item, i) =>
          <motion.article data-source-location="pages/News:35:12" data-dynamic-content="true"
          key={i}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: i * 0.15 }}
          className="group" data-arr-index={i} data-arr-variable-name="newsItems">
            
              <div data-source-location="pages/News:43:14" data-dynamic-content="true" className="flex items-center gap-2 mb-3" data-arr-index={i} data-arr-variable-name="newsItems">
                <Calendar data-source-location="pages/News:44:16" data-dynamic-content="false" className="w-4 h-4 text-accent" data-arr-index={i} data-arr-variable-name="newsItems" />
                <span data-source-location="pages/News:45:16" data-dynamic-content="true" className="font-body text-sm text-accent font-medium" data-arr-index={i} data-arr-variable-name="newsItems" data-arr-field="date">{item.date}</span>
              </div>
              <h3 data-source-location="pages/News:47:14" data-dynamic-content="true" className="font-display text-xl lg:text-2xl font-semibold text-foreground mb-3 group-hover:text-accent transition-colors" data-arr-index={i} data-arr-variable-name="newsItems" data-arr-field="title">
                {item.title}
              </h3>
              <p data-source-location="pages/News:50:14" data-dynamic-content="true" className="font-body text-base text-muted-foreground leading-relaxed" data-arr-index={i} data-arr-variable-name="newsItems" data-arr-field="excerpt">
                {item.excerpt}
              </p>
              <div data-source-location="pages/News:53:14" data-dynamic-content="false" className="golden-thread max-w-16 mt-8" data-arr-index={i} data-arr-variable-name="newsItems" />
            </motion.article>
          )}
        </div>
      </div>
    </section>);

}