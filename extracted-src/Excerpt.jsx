import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../components/shared/SectionHeading';
import GoldenThread from '../components/shared/GoldenThread';

const EXCERPT_BG = 'https://media.base44.com/images/public/6a04eb295d2a048bc01a0caa/2d5587b7a_generated_a58160e2.png';

export default function Excerpt() {
  return (
    <section data-source-location="pages/Excerpt:10:4" data-dynamic-content="true" className="pt-28 lg:pt-36 pb-20 lg:pb-32">
      {/* Hero banner */}
      <div data-source-location="pages/Excerpt:12:6" data-dynamic-content="true" className="relative h-64 lg:h-80 overflow-hidden mb-16">
        <img data-source-location="pages/Excerpt:13:8" data-dynamic-content="true" src={EXCERPT_BG} alt="Ink and parchment" className="w-full h-full object-cover" />
        <div data-source-location="pages/Excerpt:14:8" data-dynamic-content="false" className="absolute inset-0 bg-gradient-to-b from-foreground/50 to-background" />
        <div data-source-location="pages/Excerpt:15:8" data-dynamic-content="false" className="absolute inset-0 flex items-center justify-center">
          <h1 data-source-location="pages/Excerpt:16:10" data-dynamic-content="false" className="font-display text-4xl lg:text-6xl font-bold text-white">Read an Excerpt</h1>
        </div>
      </div>

      <div data-source-location="pages/Excerpt:20:6" data-dynamic-content="true" className="max-w-3xl mx-auto px-6 lg:px-12">
        {/* Preface */}
        <motion.div data-source-location="pages/Excerpt:22:8" data-dynamic-content="true"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}>
          
          <h2 data-source-location="pages/Excerpt:28:10" data-dynamic-content="false" className="font-display text-2xl lg:text-3xl font-semibold text-foreground mb-8 text-center">
            Preface
          </h2>
          <div data-source-location="pages/Excerpt:31:10" data-dynamic-content="false" className="literary-text text-foreground/80 space-y-6 font-accent">
            <p data-source-location="pages/Excerpt:32:12" data-dynamic-content="false">
              There are moments in life that arrive unannounced — quiet, almost ordinary — yet carry within 
              them the power to change everything. A letter that arrives on a Tuesday morning. A name mentioned 
              in passing. A phone call from a stranger who speaks with an accent you can't quite place.
            </p>
            <p data-source-location="pages/Excerpt:37:12" data-dynamic-content="false">
              This is the story of one such moment. It is also the story of what happens after — when curiosity 
              overcomes caution, when the pull of the unknown proves stronger than the comfort of the familiar. 
              It is, at its heart, a story about family: the one you're born into, the one you discover, and the 
              one you choose to embrace.
            </p>
            <p data-source-location="pages/Excerpt:43:12" data-dynamic-content="false">
              The events in these pages are fictional, but the emotions are real. I have tried to tell this story 
              with honesty — about the awkwardness of meeting strangers who share your blood, about the beauty 
              of landscapes that feel like home even when you've never been there before, and about the quiet 
              courage it takes to open your heart to people you never knew you were missing.
            </p>
            <p data-source-location="pages/Excerpt:49:12" data-dynamic-content="false">
              This book is for anyone who has ever wondered what lies beyond the edges of their own story.
            </p>
            <p data-source-location="pages/Excerpt:52:12" data-dynamic-content="false" className="text-right italic text-muted-foreground">— Robert Tieken</p>
          </div>
        </motion.div>

        <GoldenThread data-source-location="pages/Excerpt:56:8" data-dynamic-content="false" />

        {/* Chapter 1 */}
        <motion.div data-source-location="pages/Excerpt:59:8" data-dynamic-content="true"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}>
          
          <h2 data-source-location="pages/Excerpt:65:10" data-dynamic-content="false" className="font-display text-2xl lg:text-3xl font-semibold text-foreground mb-2 text-center">
            Chapter One
          </h2>
          <p data-source-location="pages/Excerpt:68:10" data-dynamic-content="false" className="font-accent italic text-lg text-accent text-center mb-10">
            The Phone Call
          </p>

          <div data-source-location="pages/Excerpt:72:10" data-dynamic-content="false" className="literary-text text-foreground/80 space-y-6 font-accent">
            <p data-source-location="pages/Excerpt:73:12" data-dynamic-content="false">
              The phone rang at precisely ten minutes past nine on a Monday morning in November, which, as 
              Michael Doesburg would later reflect, was an entirely unremarkable time for a life to change 
              direction. He was sitting in his office on the third floor of a converted canal house in Amsterdam, 
              staring at a spreadsheet that had been staring back at him for the better part of an hour, when 
              his mobile buzzed against the dark oak of his desk.
            </p>
            <p data-source-location="pages/Excerpt:80:12" data-dynamic-content="false">
              The number was English — he could tell from the country code — and unfamiliar. Under normal 
              circumstances, Michael would have let it go to voicemail. He was not a man who answered unknown 
              calls. He believed, as his father had believed, that anything truly important would find its way 
              to you in due course, and anything that couldn't wait was usually something you'd rather have 
              waited for.
            </p>
            <p data-source-location="pages/Excerpt:87:12" data-dynamic-content="false">
              But on that particular Monday, with the rain making silver rivers of his windowpanes and the 
              spreadsheet refusing to yield any useful insight, Michael picked up.
            </p>
            <p data-source-location="pages/Excerpt:91:12" data-dynamic-content="false">
              "Mr. Doesburg?" The voice was male, English, and carried the careful enunciation of someone 
              accustomed to speaking across international lines. "Mr. Michael Doesburg?"
            </p>
            <p data-source-location="pages/Excerpt:95:12" data-dynamic-content="false">
              "Speaking."
            </p>
            <p data-source-location="pages/Excerpt:98:12" data-dynamic-content="false">
              "Good morning, sir. My name is Charles Ashworth. I'm a solicitor with Ashworth, Blake and 
              Partners in Cheltenham. I apologise for the unannounced call, but I'm ringing on a matter 
              of some delicacy."
            </p>
            <p data-source-location="pages/Excerpt:103:12" data-dynamic-content="false">
              Michael leaned back in his chair. Solicitor. Cheltenham. Delicacy. None of these words, 
              individually or collectively, had any place in his Monday morning. He had no business in 
              Cheltenham, no dealings with English solicitors, and as far as he was aware, no matters 
              of delicacy awaiting resolution on the other side of the North Sea.
            </p>
            <p data-source-location="pages/Excerpt:109:12" data-dynamic-content="false">
              "I'm listening," he said, because it seemed the only reasonable response.
            </p>
            <p data-source-location="pages/Excerpt:112:12" data-dynamic-content="false" className="text-center text-accent font-display text-lg mt-12">
              * * *
            </p>
            <p data-source-location="pages/Excerpt:115:12" data-dynamic-content="false" className="text-center font-body text-base text-muted-foreground mt-4">
              Continue reading in the full book...
            </p>
          </div>
        </motion.div>

        <div data-source-location="pages/Excerpt:121:8" data-dynamic-content="false" className="text-center mt-16">
          <a data-source-location="pages/Excerpt:122:10" data-dynamic-content="false"
          href="#"
          className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground font-body text-sm rounded-full hover:bg-primary/90 transition-all duration-300 hover:shadow-lg">
            
            Get the Full Book
          </a>
        </div>
      </div>
    </section>);

}