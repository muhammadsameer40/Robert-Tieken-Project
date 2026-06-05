import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';
import SectionHeading from '../components/shared/SectionHeading';
import GoldenThread from '../components/shared/GoldenThread';

const newsItems = [
  {
    date: 'May 2026',
    title: 'Distent Cousens Now Available in English',
    excerpt:
      'After months of careful translation and editing, the English edition of "Distant Cousins" is now available worldwide. Robert is thrilled to share Michael Doesburg\'s story with a global audience.',
  },
  {
    date: 'April 2026',
    title: 'Verre Neven — Dutch Edition Published',
    excerpt:
      'The original Dutch edition of the novel, "Verre Neven," has been published to warm reviews. Readers have praised its authentic voice and heartfelt storytelling.',
  },
  {
    date: 'March 2026',
    title: 'Author Interview: The Story Behind the Story',
    excerpt:
      'Robert shares the personal experiences and family discoveries that inspired him to write "Distant Cousins" — a conversation about cross-cultural identity and the surprises that family history can hold.',
  },
];

export default function News() {
  return (
    <section className="pt-28 lg:pt-36 pb-20 lg:pb-32 px-6 lg:px-12">
      <div className="max-w-3xl mx-auto">
        <SectionHeading title="News & Updates" subtitle={"The latest from Robert's writing world"} />

        <div className="space-y-12">
          {newsItems.map((item, i) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group"
            >
              <div className="flex items-center gap-2 mb-3">
                <Calendar className="w-4 h-4 text-accent" />
                <span className="font-body text-sm text-accent font-medium">{item.date}</span>
              </div>
              <h3 className="font-display text-xl lg:text-2xl font-semibold text-foreground mb-3 group-hover:text-accent transition-colors">
                {item.title}
              </h3>
              <p className="font-body text-base text-muted-foreground leading-relaxed">{item.excerpt}</p>
              <div className="mt-8 max-w-16">
                <GoldenThread />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
