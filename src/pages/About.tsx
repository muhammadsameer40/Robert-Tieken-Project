import { motion } from 'framer-motion';
import SectionHeading from '../components/shared/SectionHeading';
import GoldenThread from '../components/shared/GoldenThread';

const AUTHOR_PHOTO =
  'https://media.base44.com/images/public/6a04eb295d2a048bc01a0caa/9f523ad28_a9207331-08ac-4b95-9c18-60ac5c9a44d3.jpg';

const facts = [
  { label: 'Born', value: '1958, Netherlands' },
  { label: 'Background', value: 'Korps Mariniers · International Logistics' },
  { label: 'Debut Novel', value: 'Distant Cousins / Verre Neven (2026)' },
  { label: 'Written in', value: 'English & Dutch simultaneously' },
  { label: 'Lives in', value: 'Netherlands' },
];

export default function About() {
  return (
    <section className="pt-28 lg:pt-36 pb-20 lg:pb-32 px-6 lg:px-12">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title="About Robert Tieken"
          subtitle="The story behind the storyteller"
        />

        <div
          className="
            grid
            lg:grid-cols-5

            gap-12
            lg:gap-20

            items-start

            text-center
            lg:text-left
          "
        >
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="
              lg:col-span-3
              space-y-6

              flex
              flex-col

              items-center
              lg:items-start
            "
          >
            <p className="font-body text-lg text-foreground leading-relaxed">
              Robert Tieken was born in Den Haag and grew up in Amstelveen and
              Prinsenbeek. After completing the MAVO, he served 18 months with
              the Korps Mariniers — 9 of which were spent on Curaçao, where his
              career in logistics first took shape working in the barracks
              warehouse.
            </p>

            <p className="font-body text-lg text-foreground leading-relaxed">
              After his military service, Robert continued in logistics: working
              in automotive parts, then as a seasonal swimming-pool supervisor,
              before becoming a manager at a large computer distribution centre.
              He later took on roles as warehouse chief and logistics
              administrator — a career he pursued until his retirement in 2025.
            </p>

            <GoldenThread className="max-w-24" />

            <p className="font-body text-lg text-foreground leading-relaxed">
              The moment Robert came home to retire, he picked up a hidden
              passion that almost nobody knew about. In 2012 he had already
              started an autofiction story, but could never find the ending —
              that manuscript is still on the shelf. By then, however, a new
              idea had been growing in his mind: <em>Verre Neven</em>, a
              working title that stuck.
            </p>

            <p className="font-body text-lg text-foreground leading-relaxed">
              Determined to prove to himself that he could finish the complete
              picture this time, Robert wrote at least an hour and a half every
              day for nine months — and he did it. The biggest challenge then
              came: finding a publisher willing to take a chance. Of the four
              publishers he approached, one said yes: APEX Book Publishing. The
              book is planned for launch in June 2026 — the month Robert turns
              68. A dream come true, and already a new manuscript is underway,
              with the working title <em>Tim&apos;s Herinnering</em>.
            </p>

            <p className="font-body text-lg text-foreground leading-relaxed">
              Robert lives happily in the Netherlands with his partner of 33
              years. When not writing, he enjoys long walks through the Dutch
              countryside, cooking, and spending time with family and close
              friends — the real chosen family that inspired this book.
            </p>

            <motion.blockquote
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
  transition={{ delay: 0.4, duration: 0.8 }}
  className="
    border-l-2
    border-accent

    pl-5
    sm:pl-6

    mt-10

    text-left

    max-w-[720px]
    mx-auto
    lg:mx-0
  "
>
  <p
    className="
      font-accent
      italic

      text-[22px]
      sm:text-2xl

      text-foreground/80

      leading-relaxed
    "
  >
    &ldquo;I believe every family has a story waiting to be told —
    a connection waiting to be discovered. I wrote this book because
    some journeys are simply too important not to share.&rdquo;
  </p>

  <cite
    className="
      font-body
      text-sm

      text-muted-foreground

      mt-3
      block

      not-italic
    "
  >
    — Robert Tieken
  </cite>
</motion.blockquote>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="
              lg:col-span-2

              lg:sticky
              lg:top-28

              flex
              flex-col

              items-center
              lg:items-start
            "
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-secondary/30 to-accent/10 rounded-lg blur-2xl" />

              <img
                src={AUTHOR_PHOTO}
                alt="Robert Tieken, author"
                className="
  relative

  w-[240px]
  sm:w-[300px]
  lg:w-full

  rounded-lg
  object-cover
  shadow-xl
"
              />
            </div>

            <p className="font-accent italic text-center text-muted-foreground mt-6 text-lg">
              Robert Tieken
            </p>

            <div className="mt-8 space-y-3">
              {facts.map(({ label, value }) => (
                <div
                  key={label}
                  className="
                    flex
                    flex-col
                    sm:flex-row

                    gap-1
                    sm:gap-3

                    items-center
                    sm:items-start

                    text-center
                    sm:text-left
                  "
                >
                  <span className="font-body text-xs font-semibold uppercase tracking-wider text-accent pt-0.5 sm:min-w-[6rem]">
                    {label}
                  </span>

                  <span className="font-body text-sm text-muted-foreground leading-snug">
                    {value}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}