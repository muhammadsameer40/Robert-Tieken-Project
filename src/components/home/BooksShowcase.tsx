import { motion } from "framer-motion";
import { ShoppingCart } from "lucide-react";

export default function BooksShowcase() {
  return (
    <section className="bg-[#f5f1e8] py-8 px-6 overflow-hidden">
      <div className="max-w-5xl mx-auto">

        {/* HEADING */}
        <div className="text-center mb-12">

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="font-display font-normal text-[#181818] text-[52px] leading-none tracking-[-0.02em]"
          >
            The Book
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-serif italic text-[#9e9e9d] text-[20px] mt-4"
          >
            Two languages, one unforgettable story
          </motion.p>

          {/* GOLD LINE */}
          <div className="w-[90px] h-[1px] bg-[#d3a24b] mx-auto mt-8"></div>
        </div>

        {/* BOOKS */}
        <div className="grid md:grid-cols-2 gap-16 items-start justify-center max-w-[35rem] mx-auto">

          {/* BOOK 1 */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center group"
          >

            {/* IMAGE WRAPPER */}
            <div className="relative inline-block">

              {/* SHADOW */}
              <div className="absolute left-1/2 -translate-x-1/2 bottom-[-22px] w-[150px] h-[36px] bg-black/20 blur-[24px] rounded-full"></div>

              <img
                src="/book1.jpg"
                alt="Distant Cousins"
                className="relative w-[190px] mx-auto object-contain transition-transform duration-500 group-hover:-translate-y-2"
              />
            </div>

            {/* TITLE */}
            <h3 className="font-display font-semibold text-[#161616] text-[24px] mt-8 leading-none">
              Distant Cousins
            </h3>

            {/* SUBTITLE */}
            <p className="text-[#6d6d6d] text-[14px] mt-3 mb-6">
              English Edition
            </p>

            {/* BUTTON */}
            <a
  href="https://www.amazon.com/s?k=9798181772670&crid=1ZNYHYS8W3ZDE&sprefix=9798181772670%2Caps%2C518&ref=nb_sb_noss"
  target="_blank"
  rel="noopener noreferrer"
  className="h-[48px] px-7 rounded-full bg-[#0d4b46] text-white text-[15px] font-medium inline-flex items-center gap-2.5 hover:scale-[1.03] transition-all duration-300"
>
  <ShoppingCart size={16} strokeWidth={2} />
  Buy the Book
</a>
          </motion.div>

          {/* BOOK 2 */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center group"
          >

            {/* IMAGE WRAPPER */}
            <div className="relative inline-block">

              {/* SHADOW */}
              <div className="absolute left-1/2 -translate-x-1/2 bottom-[-22px] w-[150px] h-[36px] bg-black/20 blur-[24px] rounded-full"></div>

              <img
                src="/book2.jpg"
                alt="Verre Neven"
                className="relative w-[190px] mx-auto object-contain transition-transform duration-500 group-hover:-translate-y-2"
              />
            </div>

            {/* TITLE */}
            <h3 className="font-display font-semibold text-[#161616] text-[24px] mt-8 leading-none">
              Verre Neven
            </h3>

            {/* SUBTITLE */}
            <p className="text-[#6d6d6d] text-[14px] mt-3 mb-6">
              Dutch Edition
            </p>

            {/* BUTTON */}
            <a
  href="https://www.amazon.com/s?k=9798181772076&crid=YUNKBHBTJU9Z&sprefix=9798181772076%2Caps%2C362&ref=nb_sb_noss"
  target="_blank"
  rel="noopener noreferrer"
  className="h-[48px] px-7 rounded-full bg-[#0d4b46] text-white text-[15px] font-medium inline-flex items-center gap-2.5 hover:scale-[1.03] transition-all duration-300"
>
  <ShoppingCart size={16} strokeWidth={2} />
  Buy the Book
</a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}