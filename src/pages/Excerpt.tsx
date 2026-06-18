import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import GoldenThread from '../components/shared/GoldenThread';

const EXCERPT_BG =
  'https://media.base44.com/images/public/6a04eb295d2a048bc01a0caa/2d5587b7a_generated_a58160e2.png';

export default function Excerpt() {
  return (
   <section className="pt-[80px] pb-20 lg:pb-32">
      <div className="relative h-64 lg:h-80 overflow-hidden mb-16">
        <img src={EXCERPT_BG} alt="Ink and parchment" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/50 to-background" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="font-display text-4xl lg:text-6xl font-bold text-white">Read an Excerpt</h1>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-display text-2xl lg:text-3xl font-semibold text-foreground mb-8 text-center">
            Preface
          </h2>
          <div className="literary-text text-black space-y-6 font-accent">
            <p>
              There are moments in life that arrive unannounced — quiet, almost ordinary — yet carry within them the
              power to change everything. A letter that arrives on a Tuesday morning. A name mentioned in passing. A
              phone call from a stranger who speaks with an accent you can&apos;t quite place.
            </p>
            <p>
              This is the story of one such moment. It is also the story of what happens after — when curiosity
              overcomes caution, when the pull of the unknown proves stronger than the comfort of the familiar. It is,
              at its heart, a story about family: the one you&apos;re born into, the one you discover, and the one you
              choose to embrace.
            </p>
            <p>
              The events in these pages are fictional, but the emotions are real. I have tried to tell this story with
              honesty — about the awkwardness of meeting strangers who share your blood, about the beauty of landscapes
              that feel like home even when you&apos;ve never been there before, and about the quiet courage it takes to
              open your heart to people you never knew you were missing.
            </p>
            <p>This book is for anyone who has ever wondered what lies beyond the edges of their own story.</p>
            <p className="text-right italic text-black">— Robert Tieken</p>
          </div>
        </motion.div>

        <GoldenThread />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16"
        >
          <h2 className="font-display text-2xl lg:text-3xl font-semibold text-foreground mb-2 text-center">
            Chapter One
          </h2>
          <p className="font-accent italic text-lg text-accent text-center mb-10">The Phone Call</p>

          <div className="literary-text text-black space-y-6 font-accent">
            <p>
              The phone rang at precisely ten minutes past nine on a Monday morning in November, which, as Robert Tieken would later reflect, was an entirely unremarkable time for a life to change direction. He was
              sitting in his office on the third floor of a converted canal house in Amsterdam, staring at a spreadsheet
              that had been staring back at him for the better part of an hour, when his mobile buzzed against the dark
              oak of his desk.
            </p>
            <p>
              The number was English — he could tell from the country code — and unfamiliar. Under normal
              circumstances, Robert would have let it go to voicemail. He was not a man who answered unknown calls. He
              believed, as his father had believed, that anything truly important would find its way to you in due
              course, and anything that couldn&apos;t wait was usually something you&apos;d rather have waited for.
            </p>
            <p>
              But on that particular Monday, with the rain making silver rivers of his windowpanes and the spreadsheet
              refusing to yield any useful insight, Robert picked up.
            </p>
            <p>
              &ldquo;Mr. Tieken?&rdquo; The voice was male, English, and carried the careful enunciation of someone
              accustomed to speaking across international lines. &ldquo;Mr. Robert Tieken?&rdquo;
            </p>
            <p>&ldquo;Speaking.&rdquo;</p>
            <p>
              &ldquo;Good morning, sir. My name is Charles Ashworth. I&apos;m a solicitor with Ashworth, Blake and
              Partners in Cheltenham. I apologise for the unannounced call, but I&apos;m ringing on a matter of some
              delicacy.&rdquo;
            </p>
            <p>
              Robert leaned back in his chair. Solicitor. Cheltenham. Delicacy. None of these words, individually or
              collectively, had any place in his Monday morning. He had no business in Cheltenham, no dealings with
              English solicitors, and as far as he was aware, no matters of delicacy awaiting resolution on the other
              side of the North Sea.
            </p>
            <p>&ldquo;I&apos;m listening,&rdquo; he said, because it seemed the only reasonable response.</p>
            <p className="text-center text-accent font-display text-lg mt-12">* * *</p>
            <p className="text-center font-body text-base text-muted-foreground mt-4">Continue reading in the full book...</p>
          </div>
        </motion.div>

        <div className="text-center mt-16">
          <Link
            to="/the-book"
            className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground font-body text-sm rounded-full hover:bg-primary/90 transition-all duration-300 hover:shadow-lg"
          >
            Get the Full Book
          </Link>
        </div>
      </div>
    </section>
  );
}
