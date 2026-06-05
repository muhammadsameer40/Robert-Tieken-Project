import {
  Instagram,
  Facebook,
  BookOpen,
  Send,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="overflow-hidden bg-[linear-gradient(to_bottom,#f5f1e8_0%,#f3eccd_45%,#f5f1e8_100%)]">
      <div
  className="
    absolute
   
  "
/>
      
      {/* WRAPPER */}
      <div className="relative z-10 max-w-[1280px] mx-auto px-[42px] mb-14">
        
        {/* TOP AREA */}
        <div className="pt-[40px] pb-[54px]">
          
          {/* CENTER CONTENT */}
          <div className="flex flex-col items-center text-center">
            
            {/* HEADING */}
            <h2
              className="
               font-display
text-[#222121]

text-[30px]

leading-[1]

font-medium

tracking-[-0.03em]

mb-[12px]
              "
            >
              Join Robert's Journey
            </h2>

            {/* SUBTEXT */}
            <p
              className="
                text-[#746d64]

                text-[17px]

                leading-[1.75]

                max-w-[450px]

                mb-[22px]
              "
            >
              Be the first to hear about new releases, events, and
              behind-the-scenes stories.
            </p>

            {/* FORM */}
            <div
  className="
    flex
    flex-col
    sm:flex-row

    items-center
    justify-center

    gap-[10px]

    w-full

    mx-auto
  "
>
  {/* INPUT */}
  <input
    type="email"
    placeholder="Your email address"
    className="
      w-full
      max-w-[330px]
      sm:w-[320px]

      h-[42px]

      px-[16px]

      rounded-[5px]

      border border-[#ddd3c4]

      bg-[#f8f4ec]

      shadow-[inset_0_1px_0_rgba(255,255,255,0.9)]

      outline-none

      text-[#555]

      text-[16px]

      placeholder:text-[#585856]
    "
  />

  {/* BUTTON */}
  <button
    className="
      w-full
      max-w-[330px]
      sm:w-auto

      h-[42px]

      px-[18px]

      rounded-[5px]

      bg-[#123f3b]

      shadow-[0_3px_10px_rgba(18,63,59,0.16)]

      text-white

      text-[13px]

      font-medium

      flex
      items-center
      justify-center
      gap-[6px]

      hover:bg-[#103733]

      transition-all
      duration-300
    "
  >
    <Send size={18} strokeWidth={2.5} />
    Subscribe
  </button>
</div>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="h-[1px] w-full bg-[#d6a44c] mt-[12px]" />

        {/* BOTTOM */}
        <div
  className="
    grid
    grid-cols-1
    lg:grid-cols-[1fr_auto_1fr]

    items-center

    gap-6
    lg:gap-0

    text-center

    py-[28px]
  "
>
          
          {/* LEFT */}
          <div className="flex flex-col items-center lg:items-start">
            
            <h3
              className="
               font-display

text-[#183734]

text-[19px]

leading-none



mb-[17px]
              "
            >
              Robert Tieken
            </h3>

            <p
              className="
              font-serif
italic

text-[#999897]

text-[13px]

leading-none
              "
            >
              Author of Distant Cousins / Verre Neven
            </p>
          </div>

          {/* CENTER SOCIALS */}
          <div className="flex items-center justify-center gap-[8px]">
            
            {/* ICON */}
            <button
              className="
                w-[34px]
               h-[34px]

                rounded-full

                border border-[#d8cdbc]

                bg-[#f5f1e8]

                shadow-[0_1px_2px_rgba(0,0,0,0.05)]

                flex
                items-center
                justify-center

                text-[#4c6662]

                hover:bg-[#184842]
                hover:text-white

                transition-all
                duration-300
              "
            >
              <Instagram size={14} strokeWidth={2} />
            </button>

            {/* ICON */}
            <button
              className="
               w-[34px]
               h-[34px]

                rounded-full

                border border-[#d8cdbc]

                bg-[#f5f1e8]

                shadow-[0_1px_2px_rgba(0,0,0,0.05)]

                flex
                items-center
                justify-center

                text-[#4c6662]

                hover:bg-[#184842]
                hover:text-white

                transition-all
                duration-300
              "
            >
              <Facebook size={14} strokeWidth={2} />
            </button>

            {/* ICON */}
            <button
              className="
                w-[34px]
               h-[34px]

                rounded-full

                border border-[#d8cdbc]

                bg-[#f5f1e8]

                shadow-[0_1px_2px_rgba(0,0,0,0.05)]

                flex
                items-center
                justify-center

                text-[#4c6662]

                hover:bg-[#184842]
                hover:text-white

                transition-all
                duration-300
              "
            >
              <BookOpen size={14} strokeWidth={2} />
            </button>
          </div>

          {/* RIGHT */}
         <div className="text-center lg:text-right">
            <p
              className="
               text-[#6c6c6c]

text-[14px]

tracking-[0.01em]
              "
            >
              © 2026 Robert Tieken. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}