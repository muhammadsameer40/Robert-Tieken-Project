import { ShoppingCart, ChevronDown } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      className="
        relative w-full overflow-hidden
        bg-gradient-to-b from-[#3d1f00] to-[#0a1f1a]
      "
    >
      {/* Depth Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/30 pointer-events-none" />

      {/* MAIN CONTENT */}
      <div
        className="
          relative z-10

         max-w-[1280px]
mx-auto

          px-5
          sm:px-6
          md:px-8
          lg:px-10
          xl:px-12

          min-h-screen

          flex
          flex-col
          xl:flex-row

          items-center
          justify-center
          xl:justify-between

          gap-12
          md:gap-14
          xl:gap-[60px]

          pt-[110px]
          sm:pt-[120px]
          md:pt-[90px]
          xl:pt-[60px]

          pb-[40px]

          text-center
          xl:text-left
        "
      >
        {/* LEFT CONTENT */}
        <div
          className="
            w-full
            xl:max-w-[520px]

            flex
            flex-col

            items-center
            xl:items-start

            justify-center

            shrink-0
          "
        >
          <p
            className="
              uppercase
              tracking-[0.10em]

              text-[#d49a2e]

              text-[11px]
              sm:text-[12px]
              md:text-[13px]

              font-medium
              mb-5
            "
          >
            A DEBUT NOVEL BY
          </p>

          <h1
            className="
              font-display
              font-semibold
              leading-[0.9]
              tracking-[-0.03em]
              text-white

              text-[48px]
              min-[380px]:text-[56px]
              sm:text-[68px]
              md:text-[78px]
              lg:text-[72px]
              xl:text-[88px]
              2xl:text-[75px]
            "
          >
            Robert
            <br />
            Tieken
          </h1>

          <div className="w-20 h-px bg-[#b7862f] my-6" />

          <p
            className="
              italic
              text-[#e9d5ac]

              text-[17px]
              sm:text-[19px]
              md:text-[21px]

              max-w-[340px]
              sm:max-w-[540px]

              mb-5
              font-accent
            "
          >
            "Sometimes the most beautiful journeys begin with one unexpected
            phone call."
          </p>

          <p
            className="
              text-[#d4d4d4]

              text-[14px]
              sm:text-[15px]
              md:text-[16px]

              leading-relaxed

              max-w-[360px]
              sm:max-w-[560px]

              mb-9
              font-body
            "
          >
            A touching story about self-discovery, chosen family, and the
            transformative power of an inheritance that gives far more than
            money.
          </p>

          {/* BUTTONS */}
          <div
            className="
              flex
              flex-col
              min-[430px]:flex-row

              items-center
              justify-center
              xl:justify-start

              gap-3

              w-full
              max-w-[330px]
              min-[430px]:max-w-none
            "
          >

            {/* BUTTON 2 */}
            <button
              className="
                w-full
                sm:w-auto

                h-[48px]

                px-[24px]
                md:px-[28px]

                rounded-full

                bg-transparent
                border border-[#8B6824]

                hover:border-[#b98a33]
                hover:bg-[#1b1307]

                text-[#F0B84D]
                hover:text-[#ffd06a]

                text-[11px]
                md:text-[12px]

                font-semibold

                flex items-center justify-center
                gap-[8px]

                transition-all duration-300
              "
            >
              <ShoppingCart size={12} strokeWidth={2} />

              <span className="leading-none">
                Verre Neven — Dutch
              </span>
            </button>

            {/* BUTTON 1 */}
            <button
              className="
                w-full
                sm:w-auto

                h-[48px]

                px-[28px]
                md:px-[32px]

                rounded-full

                bg-[#E7A11B]
                hover:bg-[#f0ae33]

                text-[#17120c]

                text-[11px]
                md:text-[12px]

                font-semibold

                flex items-center justify-center
                gap-[8px]

                border border-[#E7A11B]

                shadow-[0_10px_26px_rgba(231,161,27,0.22)]

                transition-all duration-300
              "
            >
              <ShoppingCart size={12} strokeWidth={2} />

              <span className="leading-none">
                Distant Cousins — English
              </span>
            </button>
          </div>
        </div>

        {/* ================= MOBILE + TABLET ================= */}
        <div
          className="
            relative
            flex
            xl:hidden

            items-end
            justify-center

            w-full

            h-[260px]
sm:h-[320px]
md:h-[340px]
lg:h-[400px]

mt-2
md:-translate-y-[20px]
lg:-translate-y-[10px]
          "
        >
          <div
            className="
              relative

              flex
              items-end
              justify-center

              gap-4
              sm:gap-8
              md:gap-10
            "
          >
            {/* LEFT BOOK */}
            <div
              className="
                group
                relative
                z-10

                rotate-[-5deg]
                translate-y-[12px]

                transition-all
                duration-700
              "
            >
              {/* GOLD GLOW */}
              <div
                className="
                  absolute
                  inset-[-8px]

                  bg-[#ffcf70]/15

                  opacity-0
                  group-hover:opacity-100

                  transition-all
                  duration-500

                  blur-[15px]

                  z-0
                "
              />

              <img
                src="/book2.jpg"
                alt="Distant Cousins"
                draggable="false"
                className="
                  relative
                  z-20

                  w-[120px]
                  sm:w-[170px]
                  md:w-[220px]
                  lg:w-[250px]

                  rounded-md
                  object-contain
                  select-none

                  transition-all
                  duration-500

                  drop-shadow-[0_22px_45px_rgba(0,0,0,0.72)]
                "
              />

              <p
                className="
                  text-center
                  text-[#adadab]

                  mt-4

                  text-[11px]
                  sm:text-[12px]
                  md:text-[13px]

                  tracking-wide
                "
              >
                Verre Neven
              </p>
            </div>

            {/* RIGHT BOOK */}
            <div
              className="
                group
                relative
                z-20

                rotate-[5deg]
                -translate-y-[2px]

                transition-all
                duration-500
              "
            >
              {/* TEAL GLOW */}
              <div
                className="
                  absolute
                  inset-[-10px]

                  bg-[#67ffd7]/20

                  opacity-0
                  group-hover:opacity-100

                  transition-all
                  duration-500

                  blur-[14px]

                  z-0
                "
              />

              <img
                src="/book1.jpg"
                alt="Verre Neven"
                draggable="false"
                className="
                  relative
                  z-20

                 w-[120px]
                  sm:w-[170px]
                  md:w-[220px]
                  lg:w-[250px]

                  object-contain
                  select-none

                  transition-all
                  duration-500

                  drop-shadow-[0_22px_45px_rgba(0,0,0,0.78)]
                "
              />

              <p
                className="
                  text-center
                  text-[#adadab]

                  mt-2

                  text-[11px]
                  sm:text-[12px]
                  md:text-[13px]

                  tracking-wide
                "
              >
                Distant Cousins
              </p>
            </div>
          </div>
        </div>

        {/* ================= DESKTOP ================= */}
        <div
          className="
            relative
            hidden
            xl:flex

            flex-1

            items-center
            justify-center

            h-[620px]

            max-w-[700px]
          "
        >
          {/* BOOKS WRAPPER */}
          <div
            className="
              relative

              flex
              items-end
              justify-center

              gap-[34px]
              2xl:gap-[44px]
            "
          >
            {/* LEFT BOOK */}
            <div
              className="
                group
                relative

                translate-y-[12px]
                -rotate-[5deg]

                z-[1]

                animate-leftBookReveal
              "
            >
              {/* BASE GLOW */}
              <div
                className="
                  absolute
                  inset-[-12px]

                  rounded-[20px]

                  bg-[#ffc95e]/20

                  blur-[32px]

                  opacity-70
                  group-hover:opacity-100

                  transition-all
                  duration-700

                  scale-[0.98]
                  group-hover:scale-[1.06]

                  z-0
                "
              />

              <img
                src="/book2.jpg"
                alt="Distant Cousins"
                draggable="false"
                className="
                  relative
                  z-20

                  w-[260px]
2xl:w-[250px]

                  rounded-md
                  object-contain
                  select-none

                  transition-all
                  duration-700

                  drop-shadow-[0_18px_35px_rgba(0,0,0,0.42)]

                  group-hover:scale-[1.025]
                  group-hover:-translate-y-[4px]

                  group-hover:brightness-[1.04]
                "
              />

              <p className="text-center text-[#adadab] mt-4 text-[12px] tracking-wide">
                Verre Neven
              </p>
            </div>

            {/* RIGHT BOOK */}
            <div
              className="
                group
                relative

                -translate-y-[2px]
                rotate-[3deg]

                z-[30]

                animate-rightBookReveal
              "
            >
              {/* GLOW LAYER */}
              <div
                className="
                  absolute

                  left-1/2
                  top-1/2

                  -translate-x-1/2
                  -translate-y-1/2

                  w-[92%]
                  h-[92%]

                  rounded-[40px]

                  bg-[#67ffd7]

                  opacity-[0.18]
                  group-hover:opacity-[0.32]

                  blur-[55px]

                  scale-[0.92]
                  group-hover:scale-[1.02]

                  transition-all
                  duration-700

                  pointer-events-none
                "
              />

              <img
                src="/book1.jpg"
                alt="Verre Neven"
                draggable="false"
                className="
                  relative
                  z-10

                  w-[260px]
                  2xl:w-[250px]

                  object-contain
                  rounded-md
                  select-none

                  transition-all
                  duration-700

                  drop-shadow-[0_18px_35px_rgba(0,0,0,0.45)]

                  group-hover:scale-[1.025]
                  group-hover:-translate-y-[4px]
                  group-hover:brightness-[1.04]
                "
              />

              <p className="text-center text-[#adadab] mt-4 text-[12px] tracking-wide">
                Distant Cousins
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* SCROLL BUTTON */}
      <button
        onClick={() =>
          window.scrollTo({
            top: document.body.scrollHeight,
            behavior: "smooth",
          })
        }
        className="
          hidden md:flex

          absolute
          bottom-3
          left-1/2
          -translate-x-1/2

          flex-col
          items-center

          text-[#adadab]
          z-20

          hover:text-[#d7ab52]
          transition-colors
        "
      >
        <span className="uppercase tracking-[0.10em] text-[10px] sm:text-xs mb-1.5">
          SCROLL
        </span>

        <ChevronDown size={18} strokeWidth={1.5} />
      </button>
    </section>
  );
}