import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';

const COVER_EN = '/book1.jpg';
const COVER_NL = '/book2.jpg';
const COVER_EN_FALLBACK = '/images/the-book/cover-en.svg';
const COVER_NL_FALLBACK = '/images/the-book/cover-nl.svg';

const synopsisEN = {
  title: 'Distant Cousins',
  subtitle: 'English Edition',
  paragraphs: [
    'Robert is forty-something, living alone in Breda, cycling to work every morning and telling himself that this is enough. He has his school, his pupils, his best friend Sjoerd, and the quiet rhythm of a life that fits him like an old coat. Then a Phonecall arrives from a notary in America. There is an inheritance. There is a cousin. And there is a name he has never heard before: Mike.',
    'What follows takes Robert from the flat green fields of the Netherlands to the sunlit harbour of Charlotteville, Michigan, where he meets a man who is technically a stranger but feels, from the very first conversation, like someone he has always known. Mike is warm, generous and rooted in a world completely different from Robert s own. Yet between them runs something real. A shared bloodline, a shared history neither of them knew they had, and a friendship that grows quickly and lasts.',
    'Along the way, Robert encounters boat trips and beach lunches, a city rebuilt from rubble, a carnaval suit worn with pride, a puppy called Buddy, a steward on a transatlantic flight, and a swimming club that turns out to hold more than just good technique. He discovers things about himself he had never allowed himself to look at directly. And he begins, slowly and not without difficulty, to let his life become something larger.',
    'Distant Cousins is a novel about late discoveries. About inheritance in every sense of the word. About the courage it takes to get on a plane when you are not sure what is waiting at the other end, and the even greater courage it takes to come home changed.',
  ],
};

const synopsisNL = {
  title: 'Verre Neven',
  subtitle: 'Nederlandse Editie',
  paragraphs: [
    'Robert is ergens in de veertig, woont alleen in Breda, fietst elke ochtend naar zijn werk en vertelt zichzelf dat dit genoeg is. Hij heeft zijn school, zijn leerlingen, zijn beste vriend Sjoerd, en het rustige ritme van een leven dat hem past als een oude jas. Dan komt er een Telefoongesprek binnen van een notaris in Breda. Er is een erfenis. Er is een neef. En er is een naam die hij nog nooit heeft gehoord: Mike.',
    'Wat volgt, brengt Robert van de vlakke groene velden van Nederland naar de zonnige haven van Charlotteville, Michigan, waar hij een man ontmoet die technisch gezien een vreemde is, maar vanaf het eerste gesprek voelt als iemand die hij altijd al heeft gekend. Mike is warm, genereus en geworteld in een wereld die volledig verschilt van die van Robert. Toch loopt er iets echts tussen hen. Een gedeelde bloedlijn, een gedeelde geschiedenis waarvan geen van beiden wist dat ze die hadden, en een vriendschap die snel groeit en blijft. ',
    'Onderweg komt Robert boottochten en strandlunches tegen, een stad die uit puin is herbouwd, een carnavalskostuum dat met trots wordt gedragen, een puppy genaamd Buddy, een steward op een trans-Atlantische vlucht, en een zwemclub die meer blijkt te bevatten dan alleen goede techniek. Hij ontdekt dingen over zichzelf waar hij zichzelf nooit direct naar heeft durven kijken. En hij begint, langzaam en niet zonder moeite, zijn leven iets groters te laten worden.',
    'Verre Neven is een roman over late ontdekkingen. Over erfgoed in alle betekenissen van het woord. Over de moed die het kost om op een vliegtuig te stappen als je niet zeker weet wat er aan de andere kant wacht, en de nog grotere moed die het kost om veranderd thuis te komen. ',
  ],
};

function coverSrc(lang: 'en' | 'nl') {
  return lang === 'en' ? COVER_EN : COVER_NL;
}

function coverFallback(lang: 'en' | 'nl') {
  return lang === 'en' ? COVER_EN_FALLBACK : COVER_NL_FALLBACK;
}

export default function TheBook() {
  const [activeLang, setActiveLang] = useState<'en' | 'nl'>('en');
  const synopsis = activeLang === 'en' ? synopsisEN : synopsisNL;

  return (
    <section className="bg-[#d9cdb8] pt-[88px] lg:pt-[80px] pb-16 lg:pb-24 min-h-screen">
      {/* HERO HEADER */}
      <div className="relative w-full h-[260px] lg:h-[340px] overflow-hidden">
        {/* Background */}
        <img
          src="https://media.base44.com/images/public/6a04eb295d2a048bc01a0caa/777755e7b_generated_d062f754.png"
          alt="The Book"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/35" />

        {/* Fade Bottom */}
        <div className="absolute bottom-0 left-0 w-full h-[150px] bg-gradient-to-b from-transparent via-[#d9cdb8]/70 to-[#d9cdb8]" />

        {/* Title */}
        <div className="relative z-10 flex items-center justify-center h-full">
          <h1 className="font-serif text-white text-[42px] lg:text-[64px] font-semibold">
            The Book
          </h1>
        </div>
      </div>
      <motion.div className="max-w-[1120px] mx-auto px-6 lg:px-10 pt-14 lg:pt-20">
        <motion.div className="flex justify-center mb-10 lg:mb-14">
          <motion.div
            className="inline-flex rounded-full p-1 bg-[#ebe4d6]"
            role="tablist"
            aria-label="Book language"
          >
            <button
              type="button"
              role="tab"
              aria-selected={activeLang === 'en'}
              onClick={() => setActiveLang('en')}
              className={`px-7 py-2.5 rounded-full text-[14px] font-medium transition-all duration-300 ${activeLang === 'en'
                ? 'bg-[#0d4b46] text-white shadow-sm'
                : 'text-[#6b5d4a] hover:text-[#1a1208]'
                }`}
            >
              English
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeLang === 'nl'}
              onClick={() => setActiveLang('nl')}
              className={`px-7 py-2.5 rounded-full text-[14px] font-medium transition-all duration-300 ${activeLang === 'nl'
                ? 'bg-[#0d4b46] text-white shadow-sm'
                : 'text-[#6b5d4a] hover:text-[#1a1208]'
                }`}
            >
              Dutch
            </button>
          </motion.div>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeLang}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.45 }}
            className="flex flex-col items-center gap-10 lg:grid lg:grid-cols-[minmax(0,320px)_1fr] lg:gap-x-14 xl:gap-x-20 lg:items-start"
          >
            <motion.div
              className="
    w-full
    flex
    justify-center
    lg:justify-start

    lg:pt-1

    md:sticky
    md:top-28

    self-start
  "
            >
              <motion.div className="relative shrink-0">
                <motion.div
                  className="absolute left-1/2 -translate-x-1/2 bottom-[-18px] w-[70%] h-8 bg-black/15 blur-2xl rounded-full pointer-events-none"
                  aria-hidden
                />
                <img
                  src={coverSrc(activeLang)}
                  alt={synopsis.title}
                  width={280}
                  height={420}
                  className="relative w-[220px] sm:w-[250px] lg:w-[280px] h-auto object-contain"
                  decoding="async"
                  onError={(e) => {
                    const img = e.currentTarget;
                    const fallback = coverFallback(activeLang);
                    if (img.src.endsWith(fallback)) return;
                    img.src = fallback;
                  }}
                />
              </motion.div>
            </motion.div>

            <motion.div className="w-full max-w-[640px] lg:max-w-none mx-auto lg:mx-0 text-left">
              <h1 className="font-serif font-semibold text-[#141414] text-[36px] sm:text-[40px] lg:text-[44px] leading-[1.1] tracking-[-0.02em]">
                {synopsis.title}
              </h1>
              <p className="font-serif italic text-[#b99252] text-[18px] lg:text-[20px] mt-2 lg:mt-3">
                {synopsis.subtitle}
              </p>

              <motion.div className="w-16 h-px bg-[#d3a24b]/55 my-5 lg:my-6" aria-hidden />

              <motion.div className="space-y-5 lg:space-y-[1.35rem]">
                {synopsis.paragraphs.map((p, i) => (
                  <p
                    key={i}
                    className="font-accent text-black text-[17px] lg:text-[18px] leading-[1.75] lg:leading-[1.8]"
                  >
                    {p}
                  </p>
                ))}
              </motion.div>

              <motion.div className="pt-8 lg:pt-10 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-4">
                <a
                  href="#"
                  className="inline-flex items-center justify-center gap-2.5 h-[48px] px-8 rounded-full bg-[#0d4b46] text-white text-[15px] font-medium hover:bg-[#0f5a54] transition-colors duration-300"
                >
                  <ShoppingCart size={17} strokeWidth={2} />
                  Buy {synopsis.title}
                </a>
                <Link
                  to="/excerpt"
                  className="inline-flex items-center justify-center h-[48px] px-8 rounded-full border border-[#0d4b46]/35 text-[#0d4b46] text-[15px] font-medium hover:bg-[#0d4b46]/8 transition-colors duration-300"
                >
                  Read an Excerpt
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
