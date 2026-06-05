import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const AUTHOR_IMG =
  "https://media.base44.com/images/public/6a04eb295d2a048bc01a0caa/9f523ad28_a9207331-08ac-4b95-9c18-60ac5c9a44d3.jpg";

export default function AuthorTeaser() {
  return (
    <section
      className="
        bg-[#f3efe8]
        overflow-hidden

       py-[90px]
lg:py-[35px]

        px-6
        sm:px-10
        lg:px-0
      "
    >
      <div
  className="
    max-w-[1280px]
    mx-auto

    lg:pl-[0px]
    px-10
  "
>
        <div
  className="
    grid
    lg:grid-cols-[340px_1fr]
    items-center

    gap-[65px]
  "
>
<motion.div
  initial={{ opacity: 0, x: -35 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
  className="flex justify-center lg:justify-end"
>
  <div className="relative w-fit">

    {/* BACK FRAME */}
    <div
      className="
        absolute
        top-[14px]
        left-[14px]

        w-full
        h-full

        bg-[#e7d4aa]

        rounded-[22px]

        z-0
      "
    />

    {/* IMAGE */}
    <img
      src={AUTHOR_IMG}
      alt="Robert Tieken"
      className="
        relative
        z-10

        w-[280px]
        h-[340px]

        lg:w-[285px]
        lg:h-[345px]

        object-cover

        rounded-[22px]

        shadow-[0_18px_40px_rgba(0,0,0,0.10)]
      "
    />
  </div>
</motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
  initial={{ opacity: 0, x: 35 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
  className="
    w-full
    max-w-[690px]

    flex
    flex-col

    items-center
    lg:items-start

    text-center
    lg:text-left

    mx-auto
  "
>
  {/* SMALL HEADING */}
  <p
    className="
      uppercase
      tracking-[0.20em]

      text-[#c7952f]

      text-[11px]
      sm:text-[12px]

      font-medium

      mb-3
    "
  >
    Meet The Author
  </p>

  {/* TITLE */}
  <h2
    className="
      font-display
      text-[#111111]

      text-[36px]
      md:text-[44px]
      lg:text-[52px]

      leading-[1]

      font-medium

      tracking-[-0.04em]
    "
  >
    Robert Tieken
  </h2>

  {/* LINE */}
  <div
    className="
      w-[60px]
      h-[1px]

      bg-[#d5ae63]

      mt-5
      mb-5
    "
  />

  {/* PARA 1 */}
  <p
    className="
      text-[#555555]

      text-[16px]
      md:text-[17px]
      lg:text-[18px]

      leading-7
      md:leading-8

      mb-4

      max-w-[640px]
    "
  >
    Robert Tieken is a Dutch author whose debut novel draws on
    decades of life experience — from a career in international
    logistics to service in the Royal Navy — to craft a
    story that is at once deeply personal and universally human.
  </p>

  {/* PARA 2 */}
  <p
    className="
      text-[#555555]

      text-[15px]
      md:text-[16px]
      lg:text-[17px]

      leading-7
      md:leading-8

      mb-7

      max-w-[640px]
    "
  >
    He wrote <em>Distant Cousins</em> simultaneously in English and
    Dutch, ensuring each version carries its own authentic voice.
    He lives in the Netherlands with his partner of 33 years.
  </p>

  {/* BUTTON */}
  <div className="flex justify-center lg:justify-start w-full">
    <Link
      to="/about"
      className="
        inline-flex
        items-center
        gap-3

        h-[46px]

        px-7

        rounded-full

        border border-[#9da69f]

        text-[#184f49]

        text-[13px]

        font-medium

        hover:bg-[#184f49]
        hover:text-white

        transition-all duration-300
      "
    >
      Read Full Biography

      <ArrowRight
        size={15}
        strokeWidth={2}
      />
    </Link>
  </div>
</motion.div>
        </div>
      </div>
    </section>
  );
}