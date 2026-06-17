import { motion } from "framer-motion";
import {
  Globe,
  Compass,
  ScrollText,
  Heart,
} from "lucide-react";

export default function BlurbSection() {
  return (
    <section className="bg-[#f5f1e8] py-12 px-6 overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">

        {/* TOP QUOTE */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2
            className="font-serif italic text-[#757474] leading-[1.65] mx-auto tracking-[-0.01em]"
            style={{
              fontSize: "23px",
              maxWidth: "760px",
            }}
          >
            A touching story about self-discovery, chosen family, and the
            transformative power of an inheritance that gives far more than
            money.
          </h2>

          {/* LINE */}
          <div className="w-[105px] h-[1px] bg-[#d3a24b] mx-auto mt-12 mb-12"></div>

          {/* DESCRIPTION */}
          <p
            className="text-[#5f5f5f] leading-[1.85] mx-auto font-normal"
            style={{
              fontSize: "17px",
              maxWidth: "760px",
            }}
          >
           
          </p>

          {/* TAGS */}
          <div className="flex flex-wrap justify-center gap-4 mt-12 max-w-[760px] mx-auto">

            {/* TAG 1 */}
            <div className="h-[44px] px-6 rounded-full border border-[#d8d0c3] bg-[#f5f1e8] flex items-center gap-2.5">
              
              <div className="w-[18px] h-[18px] rounded-full flex items-center justify-center bg-[#d8efe5] border border-[#8ab9a4]">
                <Globe
                  size={10}
                  strokeWidth={2}
                  className="text-[#2e7d5b]"
                />
              </div>

              <span className="text-[#646464] text-[13px] font-normal tracking-[-0.01em]">
                Cross-Cultural Family
              </span>
            </div>

            {/* TAG 2 */}
            <div className="h-[44px] px-6 rounded-full border border-[#d8d0c3] bg-[#f5f1e8] flex items-center gap-2.5">

              <div className="w-[18px] h-[18px] rounded-full flex items-center justify-center bg-[#f6ecd2] border border-[#d8b870]">
                <Compass
                  size={10}
                  strokeWidth={2}
                  className="text-[#b9871d]"
                />
              </div>

              <span className="text-[#646464] text-[13px] font-normal tracking-[-0.01em]">
                Self-Discovery
              </span>
            </div>

            {/* TAG 3 */}
            <div className="h-[44px] px-6 rounded-full border border-[#d8d0c3] bg-[#f5f1e8] flex items-center gap-2.5">

              <div className="w-[18px] h-[18px] rounded-full flex items-center justify-center bg-[#efe6dd] border border-[#cbb49d]">
                <ScrollText
                  size={10}
                  strokeWidth={2}
                  className="text-[#8a6a4e]"
                />
              </div>

              <span className="text-[#646464] text-[13px] font-normal tracking-[-0.01em]">
                Inheritance & Legacy
              </span>
            </div>

            {/* TAG 4 */}
            <div className="h-[44px] px-6 rounded-full border border-[#d8d0c3] bg-[#f5f1e8] flex items-center gap-2.5">

              <div className="w-[18px] h-[18px] rounded-full flex items-center justify-center bg-[#f6ebbf] border border-[#d9bf57]">
                <Heart
                  size={10}
                  strokeWidth={2}
                  className="text-[#b4971d]"
                />
              </div>

              <span className="text-[#646464] text-[13px] font-normal tracking-[-0.01em]">
                Chosen Family
              </span>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}