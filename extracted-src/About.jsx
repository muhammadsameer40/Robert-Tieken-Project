import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../components/shared/SectionHeading';
import GoldenThread from '../components/shared/GoldenThread';

const AUTHOR_PHOTO = 'https://storage.base44.com/apps/e07fd6e7-fc42-4584-a35a-66eb3b55d3c1/files/public/af2e34ba-bd71-4b7b-89e4-3a85b3e8aa09-robert-tieken-author.png';

export default function About() {
  return (
    <section data-source-location="pages/About:10:4" data-dynamic-content="true" className="pt-28 lg:pt-36 pb-20 lg:pb-32 px-6 lg:px-12">
      <div data-source-location="pages/About:11:6" data-dynamic-content="true" className="max-w-6xl mx-auto">
       <div className="text-center mb-20">
  <SectionHeading
    title="About Robert Tieken"
    subtitle="The story behind the storyteller"
  />

  {/* GOLD LINE */}
  <div className="w-[90px] h-[1px] bg-[#d3a24b] mx-auto mt-8"></div>
</div>
        

        <div data-source-location="pages/About:17:8" data-dynamic-content="true" className="grid lg:grid-cols-5 gap-12 lg:gap-20 items-start">
          {/* Bio text */}
          <motion.div data-source-location="pages/About:19:10" data-dynamic-content="true"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-3 space-y-6">
            
            <p data-source-location="pages/About:26:12" data-dynamic-content="false" className="font-body text-lg text-foreground leading-relaxed">
              Robert Tieken was born in 1958 and grew up in the Netherlands. After completing his military service 
              with the Royal Dutch Marine Corps — an experience that shaped his sense of discipline, camaraderie, 
              and respect for human resilience — he built a successful career in international logistics. For decades 
              he worked at the intersection of cultures, languages, and complex human networks, skills that would 
              later find their way into his fiction.
            </p>
            <p data-source-location="pages/About:33:12" data-dynamic-content="false" className="font-body text-lg text-foreground leading-relaxed">
              Literature has always been a quiet companion in Robert's life. An avid reader since childhood, 
              he was drawn to stories that explored the inner lives of ordinary people navigating extraordinary 
              circumstances. Writers like Fredrik Backman, Anne Tyler, and Jan de Hartog — authors who find the 
              universal in the intimate — left a lasting impression.
            </p>
            <p data-source-location="pages/About:39:12" data-dynamic-content="false" className="font-body text-lg text-foreground leading-relaxed">
              The idea for <em data-source-location="pages/About:40:27" data-dynamic-content="false">Distant Cousin</em> — published in Dutch as <em data-source-location="pages/About:40:75" data-dynamic-content="false">Verre Neven</em> — came to Robert 
              after reflecting on questions of family, inheritance, and the unexpected bonds that can form across 
              great distances of geography and time. What began as a personal exploration became a full novel: 
              the story of Michael Doesburg, a Dutch businessman whose life is transformed by a single phone call 
              from an English solicitor.
            </p>

            <GoldenThread data-source-location="pages/About:47:12" data-dynamic-content="false" className="max-w-24" />

            <p data-source-location="pages/About:49:12" data-dynamic-content="false" className="font-body text-lg text-foreground leading-relaxed">
              One of the most remarkable aspects of Robert's debut is that he wrote the novel simultaneously in 
              both English and Dutch — not translating one from the other, but crafting each version as its own 
              authentic text. This bilingual approach reflects the book's core themes of crossing borders, finding 
              common ground, and discovering that identity is never just one thing.
            </p>
            <p data-source-location="pages/About:55:12" data-dynamic-content="false" className="font-body text-lg text-foreground leading-relaxed">
              <em data-source-location="pages/About:56:14" data-dynamic-content="false">Distant Cousin / Verre Neven</em> was published in 2026 and is Robert's debut novel. He is 
              currently at work on his second book.
            </p>
            <p data-source-location="pages/About:59:12" data-dynamic-content="false" className="font-body text-lg text-foreground leading-relaxed">
              Robert lives in the Netherlands with his husband of 33 years. When not writing, he enjoys 
              long walks through the Dutch countryside, exploring English market towns, cooking, and spending 
              time with family and close friends — the real chosen family that inspired this book.
            </p>

            <motion.blockquote data-source-location="pages/About:65:12" data-dynamic-content="true"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="border-l-2 border-accent pl-6 mt-10">
              
              <p data-source-location="pages/About:72:14" data-dynamic-content="false" className="font-accent italic text-2xl text-foreground/80 leading-relaxed">
                "I believe every family has a story waiting to be told — a connection waiting to be discovered. 
                I wrote this book because some journeys are simply too important not to share."
              </p>
              <cite data-source-location="pages/About:76:14" data-dynamic-content="false" className="font-body text-sm text-muted-foreground mt-3 block not-italic">— Robert Tieken</cite>
            </motion.blockquote>
          </motion.div>

          {/* Author photo */}
          <motion.div data-source-location="pages/About:81:10" data-dynamic-content="true"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-2 lg:sticky lg:top-28">
            
            <div data-source-location="pages/About:88:12" data-dynamic-content="false" className="relative">
              <div data-source-location="pages/About:89:14" data-dynamic-content="false" className="absolute -inset-4 bg-gradient-to-br from-secondary/30 to-accent/10 rounded-lg blur-2xl" />
              <img data-source-location="pages/About:90:14" data-dynamic-content="false" src="https://media.base44.com/images/public/6a04eb295d2a048bc01a0caa/9f523ad28_a9207331-08ac-4b95-9c18-60ac5c9a44d3.jpg"

              alt="Robert Tieken, author"
              className="relative rounded-lg w-full object-cover shadow-s" />
              
            </div>
            <p data-source-location="pages/About:96:12" data-dynamic-content="false" className="font-accent italic text-center text-muted-foreground mt-6 text-lg">
              Robert Tieken
            </p>

            {/* Quick facts */}
            <div data-source-location="pages/About:101:12" data-dynamic-content="true" className="mt-8 space-y-3">
              {[
              { label: 'Born', value: '1958, Netherlands' },
              { label: 'Background', value: 'Royal Dutch Marines · International Logistics' },
              { label: 'Debut Novel', value: 'Distant Cousin / Verre Neven (2026)' },
              { label: 'Written in', value: 'English & Dutch simultaneously' },
              { label: 'Lives in', value: 'Netherlands, with his husband of 33 years' }].
              map(({ label, value, id }) =>
              <div data-source-location="pages/About:109:14" data-dynamic-content="true" key={label} className="flex gap-3 items-start">
                  <span data-source-location="pages/About:110:18" data-dynamic-content="true" className="font-body text-xs font-semibold uppercase tracking-wider text-accent pt-0.5 min-w-[6rem]" data-collection-item-field="label" data-collection-item-id={id}>{label}</span>
                  <span data-source-location="pages/About:111:18" data-dynamic-content="true" className="font-body text-sm text-muted-foreground leading-snug" data-collection-item-field="value" data-collection-item-id={id}>{value}</span>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>);

}