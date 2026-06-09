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
              power to change everything. Robert receives a phone call on Friday afternoon from a Dutch notary in Breda. A name mentioned in passing. A
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
              Monday, 4:00 PM sharp, I pressed the doorbell at the Bouvignelaan in Breda. He heard a buzzer and the door opened automatically. Behind a small counter further down the hall sat a young man who greeted me kindly and asked who I was, whether I had an appointment and with whom. I answered all his questions and looked into his deep blue eyes. His hair was slicked back with quite a bit of gel in it. He wore a tight white shirt with a few buttons open at the top. I could look right into his décolleté. As far as you can say that about a man. His fingers glided over the keyboard and then said: "You're expected and may proceed immediately, up the stairs and then the first room on the left." 

"Great, thank you, and your name is?" 

He answered: "Nico, sir." 

"Okay, thank you, Nico." And I smiled kindly at him. 

The old stairs creaked loudly and as I climbed the steep stairs, I looked at the modern art on the wall. I knocked on the first door on the left. 

"Come in!" I heard, and I stepped into a modernly decorated office. 

"Good afternoon, Mr. De Haas. Haanstra is my name. Pleased to meet you." 

Notary Haanstra looked like an older version of the young man downstairs at the counter. 

"Please have a seat, and can I offer you something to drink?" 

"Well, if you have a glass of water, that would be fine, thank you." 

From a water dispenser in a corner of the room, a chilled glass of water was poured for me. "Here you go." 

Haanstra sat down behind his glass desk and got straight to work. "As you heard from me last Friday at the end of the day, I have been appointed as executor of the will to inform you regarding an inheritance from a distant relative. I assume you have many questions, but if I may first explain the how and what, then probably many questions will already be answered." 

"That's fine," Robert answered. 

Haanstra began explaining that Mrs. Masters-De Haas was a cousin from Robert's father's side. She had left for New York in the years after the war on the SS Superstar. With her parents, of whom her father was a nephew of his father, they traveled further to the Midwest, where they settled in a small town, Charlotteville. Mrs. Masters lived there her entire life. She married a certain Charlie Masters and they had a son named Mike. Mike Masters is 49 years old and lives in his parents' family home, both of whom have now passed away. Mrs. Masters specifically mentioned you in her will. A clear explanation of this is not mentioned in the papers I received from her notary. Is everything clear so far? 

"Yes, so far, but what does this inheritance consist of?" 

"That is for Mrs. Masters' notary to explain to you. I received an open ticket for you with the papers, so that you can go to the United States, where you will be further informed. Unfortunately, I have no more information for you." 

"Okay," I said. "Thank you for the welcome and I'll see when I can make this trip. Do you have any documents and/or addresses, email or anything like that?" 

"Certainly I do. You can pick that up at the counter with my son Nick. See, I thought so." 

Haanstra laughed a bit and said that his son also wanted to work in the notary profession, but then he had to start from the bottom. 

Robert answered that that's the best way. 

"Thanks again for your time and I'll let you know when I'll be leaving for the US." 

I shook his hand and left the office. Down the creaky stairs and picked up the necessary items from Nick. I thanked Nick and wished him a pleasant evening in advance. 

"You too, Mr. De Haas," and he smiled kindly. 

On the way home, Robert stopped by the supermarket and bought a fresh salad. Once home, he poured himself a glass of rosé and ate his salad. In his breast pocket was the photo he had taken with him, but he had completely forgotten about it. Save it for a next meeting then. There was still some evening sun and with his glass and salad he sat outside with his plate on his lap. How good I have it, he thought to himself. His shirt came off and his muscular, tanned torso absorbed some evening sun while eating. 
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
