import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/pages/TheBook.jsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=d703caa5"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
import * as RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope;
let prevRefreshReg;
let prevRefreshSig;
if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react can't detect preamble. Something is wrong."
    );
  }
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/app/src/pages/TheBook.jsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
var _s = $RefreshSig$();
import __vite__cjsImport3_react from "/node_modules/.vite/deps/react.js?v=d703caa5"; const React = __vite__cjsImport3_react.__esModule ? __vite__cjsImport3_react.default : __vite__cjsImport3_react; const useState = __vite__cjsImport3_react["useState"];
import { motion, AnimatePresence } from "/node_modules/.vite/deps/framer-motion.js?v=d703caa5";
import SectionHeading from "/src/components/shared/SectionHeading.jsx";
import GoldenThread from "/src/components/shared/GoldenThread.jsx";
const COVER_EN = "https://storage.base44.com/apps/e07fd6e7-fc42-4584-a35a-66eb3b55d3c1/files/public/d2d20b30-5e7c-46be-8e3b-97e22e2c2b0a-distant-cousin-softcover.png";
const COVER_NL = "https://storage.base44.com/apps/e07fd6e7-fc42-4584-a35a-66eb3b55d3c1/files/public/0e1b21ed-5fed-4e45-adfe-84e40f4e0bff-verre-neven-softcover.png";
const BOOK_BG = "https://media.base44.com/images/public/6a04eb295d2a048bc01a0caa/777755e7b_generated_d062f754.png";
const synopsisEN = {
  title: "Distant Cousin",
  subtitle: "English Edition",
  paragraphs: [
    "When Michael Doesburg, a successful Dutch businessman, receives an unexpected phone call from an English solicitor named Charles Ashworth, his orderly life takes an extraordinary turn. A distant relative he never knew existed has passed away in England, leaving behind not just an inheritance — but a web of family secrets spanning decades and two countries.",
    "Drawn to the quiet English countryside, Michael discovers a world far removed from his busy Amsterdam life. As he unravels the story of his English cousin, he encounters a cast of unforgettable characters — from the stoic villagers of a small Cotswold town to the warm-hearted family members who help him piece together a puzzle that reaches back to the Second World War.",
    "What begins as a simple legal matter becomes a deeply personal journey. Michael must confront questions about identity, belonging, and the ties that bind families across borders and generations. Along the way, he discovers that the most unexpected connections can become the most meaningful.",
    '"Distant Cousin" is a heartwarming tale of discovery, told with warmth, humor, and a deep affection for both Dutch and English culture. It is a story about finding family where you least expect it — and finding yourself in the process.'
  ]
};
const synopsisNL = {
  title: "Verre Neven",
  subtitle: "Nederlandse Editie",
  paragraphs: [
    "Wanneer Michael Doesburg, een succesvolle Nederlandse zakenman, een onverwacht telefoontje krijgt van een Engelse notaris genaamd Charles Ashworth, neemt zijn geordende leven een buitengewone wending. Een verre verwant van wie hij het bestaan niet kende is in Engeland overleden en laat niet alleen een erfenis achter — maar ook een web van familiegeheimen dat decennia en twee landen omspant.",
    "Aangetrokken door het rustige Engelse platteland ontdekt Michael een wereld die ver afstaat van zijn drukke Amsterdamse leven. Terwijl hij het verhaal van zijn Engelse neef ontrafeld, ontmoet hij een reeks onvergetelijke personages — van de stoïcijnse dorpsbewoners van een klein stadje in de Cotswolds tot de hartelijke familieleden die hem helpen een puzzel in elkaar te zetten die terugreikt tot de Tweede Wereldoorlog.",
    "Wat begint als een eenvoudige juridische kwestie wordt een diep persoonlijke reis. Michael moet vragen onder ogen zien over identiteit, verbondenheid en de banden die families verbinden over grenzen en generaties heen. Onderweg ontdekt hij dat de meest onverwachte connecties de meest betekenisvolle kunnen worden.",
    '"Verre Neven" is een hartverwarmend verhaal over ontdekking, verteld met warmte, humor en een diepe genegenheid voor zowel de Nederlandse als de Engelse cultuur. Het is een verhaal over het vinden van familie waar je het het minst verwacht — en jezelf vinden in het proces.'
  ]
};
export default function TheBook() {
  _s();
  const [activeLang, setActiveLang] = useState("en");
  const synopsis = activeLang === "en" ? synopsisEN : synopsisNL;
  const coverUrl = activeLang === "en" ? COVER_EN : COVER_NL;
  return /* @__PURE__ */ jsxDEV("section", { "data-source-location": "pages/TheBook:38:4", "data-dynamic-content": "true", className: "pt-28 lg:pt-36 pb-20 lg:pb-32", children: [
    /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/TheBook:40:6", "data-dynamic-content": "true", className: "relative h-64 lg:h-80 overflow-hidden mb-16", children: [
      /* @__PURE__ */ jsxDEV("img", { "data-source-location": "pages/TheBook:41:8", "data-dynamic-content": "true", src: BOOK_BG, alt: "Dutch canal", className: "w-full h-full object-cover" }, void 0, false, {
        fileName: "/app/src/pages/TheBook.jsx",
        lineNumber: 60,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/TheBook:42:8", "data-dynamic-content": "false", className: "absolute inset-0 bg-gradient-to-b from-foreground/50 to-background" }, void 0, false, {
        fileName: "/app/src/pages/TheBook.jsx",
        lineNumber: 61,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/TheBook:43:8", "data-dynamic-content": "false", className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ jsxDEV("h1", { "data-source-location": "pages/TheBook:44:10", "data-dynamic-content": "false", className: "font-display text-4xl lg:text-6xl font-bold text-white", children: "The Book" }, void 0, false, {
        fileName: "/app/src/pages/TheBook.jsx",
        lineNumber: 63,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "/app/src/pages/TheBook.jsx",
        lineNumber: 62,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/app/src/pages/TheBook.jsx",
      lineNumber: 59,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/TheBook:48:6", "data-dynamic-content": "true", className: "max-w-6xl mx-auto px-6 lg:px-12", children: [
      /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/TheBook:50:8", "data-dynamic-content": "true", className: "flex items-center justify-center mb-16", children: /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/TheBook:51:10", "data-dynamic-content": "true", className: "inline-flex bg-muted rounded-full p-1", children: [
        /* @__PURE__ */ jsxDEV(
          "button",
          {
            "data-source-location": "pages/TheBook:52:12",
            "data-dynamic-content": "true",
            onClick: () => setActiveLang("en"),
            className: `px-6 py-2.5 rounded-full font-body text-sm transition-all duration-300 ${activeLang === "en" ? "bg-primary text-primary-foreground shadow-md" : "text-muted-foreground hover:text-foreground"}`,
            children: "English"
          },
          void 0,
          false,
          {
            fileName: "/app/src/pages/TheBook.jsx",
            lineNumber: 71,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ jsxDEV(
          "button",
          {
            "data-source-location": "pages/TheBook:62:12",
            "data-dynamic-content": "true",
            onClick: () => setActiveLang("nl"),
            className: `px-6 py-2.5 rounded-full font-body text-sm transition-all duration-300 ${activeLang === "nl" ? "bg-primary text-primary-foreground shadow-md" : "text-muted-foreground hover:text-foreground"}`,
            children: "Nederlands"
          },
          void 0,
          false,
          {
            fileName: "/app/src/pages/TheBook.jsx",
            lineNumber: 81,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, true, {
        fileName: "/app/src/pages/TheBook.jsx",
        lineNumber: 70,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "/app/src/pages/TheBook.jsx",
        lineNumber: 69,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV(AnimatePresence, { "data-source-location": "pages/TheBook:75:8", "data-dynamic-content": "true", mode: "wait", children: /* @__PURE__ */ jsxDEV(
        motion.div,
        {
          "data-source-location": "pages/TheBook:76:10",
          "data-dynamic-content": "true",
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          exit: { opacity: 0, y: -20 },
          transition: { duration: 0.5 },
          className: "grid lg:grid-cols-3 gap-12 lg:gap-20",
          children: [
            /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/TheBook:85:12", "data-dynamic-content": "true", className: "flex justify-center lg:justify-end", children: /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/TheBook:86:14", "data-dynamic-content": "true", className: "relative", children: [
              /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/TheBook:87:16", "data-dynamic-content": "false", className: "absolute -inset-6 bg-gradient-to-br from-secondary/20 to-accent/10 rounded-xl blur-3xl" }, void 0, false, {
                fileName: "/app/src/pages/TheBook.jsx",
                lineNumber: 106,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV(
                "img",
                {
                  "data-source-location": "pages/TheBook:88:16",
                  "data-dynamic-content": "true",
                  src: "https://media.base44.com/images/public/6a04eb295d2a048bc01a0caa/c1b9c3e3f_ENGLISH__FINAL__BACK.jpg",
                  alt: synopsis.title,
                  className: "relative w-64 lg:w-72 rounded-sm shadow-2xl"
                },
                void 0,
                false,
                {
                  fileName: "/app/src/pages/TheBook.jsx",
                  lineNumber: 107,
                  columnNumber: 17
                },
                this
              )
            ] }, void 0, true, {
              fileName: "/app/src/pages/TheBook.jsx",
              lineNumber: 105,
              columnNumber: 15
            }, this) }, void 0, false, {
              fileName: "/app/src/pages/TheBook.jsx",
              lineNumber: 104,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/TheBook:97:12", "data-dynamic-content": "true", className: "lg:col-span-2 space-y-6", "data-collection-item-field": "paragraphs", "data-collection-item-id": synopsis?.id || synopsis?._id, children: [
              /* @__PURE__ */ jsxDEV("h2", { "data-source-location": "pages/TheBook:98:14", "data-dynamic-content": "true", className: "font-display text-3xl lg:text-4xl font-semibold text-foreground", "data-collection-item-field": "title", "data-collection-item-id": synopsis?.id || synopsis?._id, children: synopsis.title }, void 0, false, {
                fileName: "/app/src/pages/TheBook.jsx",
                lineNumber: 117,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/TheBook:101:14", "data-dynamic-content": "true", className: "font-accent italic text-lg text-accent", "data-collection-item-field": "subtitle", "data-collection-item-id": synopsis?.id || synopsis?._id, children: synopsis.subtitle }, void 0, false, {
                fileName: "/app/src/pages/TheBook.jsx",
                lineNumber: 120,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ jsxDEV(GoldenThread, { "data-source-location": "pages/TheBook:102:14", "data-dynamic-content": "false", className: "max-w-16" }, void 0, false, {
                fileName: "/app/src/pages/TheBook.jsx",
                lineNumber: 121,
                columnNumber: 15
              }, this),
              synopsis.paragraphs.map(
                (p, i) => /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/TheBook:104:14", "data-dynamic-content": "true", className: "font-body text-lg text-foreground/80 leading-relaxed", "data-collection-item-field": "p", children: p }, i, false, {
                  fileName: "/app/src/pages/TheBook.jsx",
                  lineNumber: 123,
                  columnNumber: 15
                }, this)
              ),
              /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/TheBook:109:14", "data-dynamic-content": "true", className: "pt-8 flex flex-wrap gap-4", children: [
                /* @__PURE__ */ jsxDEV(
                  "a",
                  {
                    "data-source-location": "pages/TheBook:110:16",
                    "data-dynamic-content": "true",
                    href: "#",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground font-body text-sm rounded-full hover:bg-primary/90 transition-all duration-300 hover:shadow-lg",
                    "data-collection-item-field": "title",
                    "data-collection-item-id": synopsis?.id || synopsis?._id,
                    children: [
                      "Buy ",
                      synopsis.title
                    ]
                  },
                  void 0,
                  true,
                  {
                    fileName: "/app/src/pages/TheBook.jsx",
                    lineNumber: 129,
                    columnNumber: 17
                  },
                  this
                ),
                /* @__PURE__ */ jsxDEV(
                  "a",
                  {
                    "data-source-location": "pages/TheBook:118:16",
                    "data-dynamic-content": "false",
                    href: "/excerpt",
                    className: "inline-flex items-center gap-2 px-8 py-3 border border-primary/40 text-primary font-body text-sm rounded-full hover:bg-primary/10 transition-all duration-300",
                    children: "Read an Excerpt"
                  },
                  void 0,
                  false,
                  {
                    fileName: "/app/src/pages/TheBook.jsx",
                    lineNumber: 137,
                    columnNumber: 17
                  },
                  this
                )
              ] }, void 0, true, {
                fileName: "/app/src/pages/TheBook.jsx",
                lineNumber: 128,
                columnNumber: 15
              }, this)
            ] }, void 0, true, {
              fileName: "/app/src/pages/TheBook.jsx",
              lineNumber: 116,
              columnNumber: 13
            }, this)
          ]
        },
        activeLang,
        true,
        {
          fileName: "/app/src/pages/TheBook.jsx",
          lineNumber: 95,
          columnNumber: 11
        },
        this
      ) }, void 0, false, {
        fileName: "/app/src/pages/TheBook.jsx",
        lineNumber: 94,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/app/src/pages/TheBook.jsx",
      lineNumber: 67,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/app/src/pages/TheBook.jsx",
    lineNumber: 57,
    columnNumber: 5
  }, this);
}
_s(TheBook, "DmU5XbBuGsb0N9Qkkc1TLv3zJeE=");
_c = TheBook;
var _c;
$RefreshReg$(_c, "TheBook");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/app/src/pages/TheBook.jsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/app/src/pages/TheBook.jsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,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QUE7QUFBQTtBQUFBO0FBQUEsZ0JBS0E7QUFBQSxtQkFkRjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQWVBO0FBQUEsaUJBM0JGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBNEJBO0FBQUE7QUFBQTtBQUFBLFFBaERHTTtBQUFBQSxRQURMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFrREEsS0FuREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQW9EQTtBQUFBLFNBL0VGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FnRkE7QUFBQSxPQTFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBMkZBO0FBRUo7QUFBQ0QsR0FuR3VCRCxTQUFPO0FBQUEsS0FBUEE7QUFBTyxJQUFBYztBQUFBLGFBQUFBLElBQUEiLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwibW90aW9uIiwiQW5pbWF0ZVByZXNlbmNlIiwiU2VjdGlvbkhlYWRpbmciLCJHb2xkZW5UaHJlYWQiLCJDT1ZFUl9FTiIsIkNPVkVSX05MIiwiQk9PS19CRyIsInN5bm9wc2lzRU4iLCJ0aXRsZSIsInN1YnRpdGxlIiwicGFyYWdyYXBocyIsInN5bm9wc2lzTkwiLCJUaGVCb29rIiwiX3MiLCJhY3RpdmVMYW5nIiwic2V0QWN0aXZlTGFuZyIsInN5bm9wc2lzIiwiY292ZXJVcmwiLCJvcGFjaXR5IiwieSIsImR1cmF0aW9uIiwiaWQiLCJfaWQiLCJtYXAiLCJwIiwiaSIsIl9jIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VzIjpbIlRoZUJvb2suanN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IG1vdGlvbiwgQW5pbWF0ZVByZXNlbmNlIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XG5pbXBvcnQgU2VjdGlvbkhlYWRpbmcgZnJvbSAnLi4vY29tcG9uZW50cy9zaGFyZWQvU2VjdGlvbkhlYWRpbmcnO1xuaW1wb3J0IEdvbGRlblRocmVhZCBmcm9tICcuLi9jb21wb25lbnRzL3NoYXJlZC9Hb2xkZW5UaHJlYWQnO1xuXG5jb25zdCBDT1ZFUl9FTiA9ICdodHRwczovL3N0b3JhZ2UuYmFzZTQ0LmNvbS9hcHBzL2UwN2ZkNmU3LWZjNDItNDU4NC1hMzVhLTY2ZWIzYjU1ZDNjMS9maWxlcy9wdWJsaWMvZDJkMjBiMzAtNWU3Yy00NmJlLThlM2ItOTdlMjJlMmMyYjBhLWRpc3RhbnQtY291c2luLXNvZnRjb3Zlci5wbmcnO1xuY29uc3QgQ09WRVJfTkwgPSAnaHR0cHM6Ly9zdG9yYWdlLmJhc2U0NC5jb20vYXBwcy9lMDdmZDZlNy1mYzQyLTQ1ODQtYTM1YS02NmViM2I1NWQzYzEvZmlsZXMvcHVibGljLzBlMWIyMWVkLTVmZWQtNGU0NS1hZGZlLTg0ZTQwZjRlMGJmZi12ZXJyZS1uZXZlbi1zb2Z0Y292ZXIucG5nJztcbmNvbnN0IEJPT0tfQkcgPSAnaHR0cHM6Ly9tZWRpYS5iYXNlNDQuY29tL2ltYWdlcy9wdWJsaWMvNmEwNGViMjk1ZDJhMDQ4YmMwMWEwY2FhLzc3Nzc1NWU3Yl9nZW5lcmF0ZWRfZDA2MmY3NTQucG5nJztcblxuY29uc3Qgc3lub3BzaXNFTiA9IHtcbiAgdGl0bGU6ICdEaXN0YW50IENvdXNpbicsXG4gIHN1YnRpdGxlOiAnRW5nbGlzaCBFZGl0aW9uJyxcbiAgcGFyYWdyYXBoczogW1xuICAnV2hlbiBNaWNoYWVsIERvZXNidXJnLCBhIHN1Y2Nlc3NmdWwgRHV0Y2ggYnVzaW5lc3NtYW4sIHJlY2VpdmVzIGFuIHVuZXhwZWN0ZWQgcGhvbmUgY2FsbCBmcm9tIGFuIEVuZ2xpc2ggc29saWNpdG9yIG5hbWVkIENoYXJsZXMgQXNod29ydGgsIGhpcyBvcmRlcmx5IGxpZmUgdGFrZXMgYW4gZXh0cmFvcmRpbmFyeSB0dXJuLiBBIGRpc3RhbnQgcmVsYXRpdmUgaGUgbmV2ZXIga25ldyBleGlzdGVkIGhhcyBwYXNzZWQgYXdheSBpbiBFbmdsYW5kLCBsZWF2aW5nIGJlaGluZCBub3QganVzdCBhbiBpbmhlcml0YW5jZSDigJQgYnV0IGEgd2ViIG9mIGZhbWlseSBzZWNyZXRzIHNwYW5uaW5nIGRlY2FkZXMgYW5kIHR3byBjb3VudHJpZXMuJyxcbiAgJ0RyYXduIHRvIHRoZSBxdWlldCBFbmdsaXNoIGNvdW50cnlzaWRlLCBNaWNoYWVsIGRpc2NvdmVycyBhIHdvcmxkIGZhciByZW1vdmVkIGZyb20gaGlzIGJ1c3kgQW1zdGVyZGFtIGxpZmUuIEFzIGhlIHVucmF2ZWxzIHRoZSBzdG9yeSBvZiBoaXMgRW5nbGlzaCBjb3VzaW4sIGhlIGVuY291bnRlcnMgYSBjYXN0IG9mIHVuZm9yZ2V0dGFibGUgY2hhcmFjdGVycyDigJQgZnJvbSB0aGUgc3RvaWMgdmlsbGFnZXJzIG9mIGEgc21hbGwgQ290c3dvbGQgdG93biB0byB0aGUgd2FybS1oZWFydGVkIGZhbWlseSBtZW1iZXJzIHdobyBoZWxwIGhpbSBwaWVjZSB0b2dldGhlciBhIHB1enpsZSB0aGF0IHJlYWNoZXMgYmFjayB0byB0aGUgU2Vjb25kIFdvcmxkIFdhci4nLFxuICAnV2hhdCBiZWdpbnMgYXMgYSBzaW1wbGUgbGVnYWwgbWF0dGVyIGJlY29tZXMgYSBkZWVwbHkgcGVyc29uYWwgam91cm5leS4gTWljaGFlbCBtdXN0IGNvbmZyb250IHF1ZXN0aW9ucyBhYm91dCBpZGVudGl0eSwgYmVsb25naW5nLCBhbmQgdGhlIHRpZXMgdGhhdCBiaW5kIGZhbWlsaWVzIGFjcm9zcyBib3JkZXJzIGFuZCBnZW5lcmF0aW9ucy4gQWxvbmcgdGhlIHdheSwgaGUgZGlzY292ZXJzIHRoYXQgdGhlIG1vc3QgdW5leHBlY3RlZCBjb25uZWN0aW9ucyBjYW4gYmVjb21lIHRoZSBtb3N0IG1lYW5pbmdmdWwuJyxcbiAgJ1wiRGlzdGFudCBDb3VzaW5cIiBpcyBhIGhlYXJ0d2FybWluZyB0YWxlIG9mIGRpc2NvdmVyeSwgdG9sZCB3aXRoIHdhcm10aCwgaHVtb3IsIGFuZCBhIGRlZXAgYWZmZWN0aW9uIGZvciBib3RoIER1dGNoIGFuZCBFbmdsaXNoIGN1bHR1cmUuIEl0IGlzIGEgc3RvcnkgYWJvdXQgZmluZGluZyBmYW1pbHkgd2hlcmUgeW91IGxlYXN0IGV4cGVjdCBpdCDigJQgYW5kIGZpbmRpbmcgeW91cnNlbGYgaW4gdGhlIHByb2Nlc3MuJ11cblxufTtcblxuY29uc3Qgc3lub3BzaXNOTCA9IHtcbiAgdGl0bGU6ICdWZXJyZSBOZXZlbicsXG4gIHN1YnRpdGxlOiAnTmVkZXJsYW5kc2UgRWRpdGllJyxcbiAgcGFyYWdyYXBoczogW1xuICAnV2FubmVlciBNaWNoYWVsIERvZXNidXJnLCBlZW4gc3VjY2Vzdm9sbGUgTmVkZXJsYW5kc2UgemFrZW5tYW4sIGVlbiBvbnZlcndhY2h0IHRlbGVmb29udGplIGtyaWpndCB2YW4gZWVuIEVuZ2Vsc2Ugbm90YXJpcyBnZW5hYW1kIENoYXJsZXMgQXNod29ydGgsIG5lZW10IHppam4gZ2VvcmRlbmRlIGxldmVuIGVlbiBidWl0ZW5nZXdvbmUgd2VuZGluZy4gRWVuIHZlcnJlIHZlcndhbnQgdmFuIHdpZSBoaWogaGV0IGJlc3RhYW4gbmlldCBrZW5kZSBpcyBpbiBFbmdlbGFuZCBvdmVybGVkZW4gZW4gbGFhdCBuaWV0IGFsbGVlbiBlZW4gZXJmZW5pcyBhY2h0ZXIg4oCUIG1hYXIgb29rIGVlbiB3ZWIgdmFuIGZhbWlsaWVnZWhlaW1lbiBkYXQgZGVjZW5uaWEgZW4gdHdlZSBsYW5kZW4gb21zcGFudC4nLFxuICAnQWFuZ2V0cm9ra2VuIGRvb3IgaGV0IHJ1c3RpZ2UgRW5nZWxzZSBwbGF0dGVsYW5kIG9udGRla3QgTWljaGFlbCBlZW4gd2VyZWxkIGRpZSB2ZXIgYWZzdGFhdCB2YW4gemlqbiBkcnVra2UgQW1zdGVyZGFtc2UgbGV2ZW4uIFRlcndpamwgaGlqIGhldCB2ZXJoYWFsIHZhbiB6aWpuIEVuZ2Vsc2UgbmVlZiBvbnRyYWZlbGQsIG9udG1vZXQgaGlqIGVlbiByZWVrcyBvbnZlcmdldGVsaWprZSBwZXJzb25hZ2VzIOKAlCB2YW4gZGUgc3Rvw69jaWpuc2UgZG9ycHNiZXdvbmVycyB2YW4gZWVuIGtsZWluIHN0YWRqZSBpbiBkZSBDb3Rzd29sZHMgdG90IGRlIGhhcnRlbGlqa2UgZmFtaWxpZWxlZGVuIGRpZSBoZW0gaGVscGVuIGVlbiBwdXp6ZWwgaW4gZWxrYWFyIHRlIHpldHRlbiBkaWUgdGVydWdyZWlrdCB0b3QgZGUgVHdlZWRlIFdlcmVsZG9vcmxvZy4nLFxuICAnV2F0IGJlZ2ludCBhbHMgZWVuIGVlbnZvdWRpZ2UganVyaWRpc2NoZSBrd2VzdGllIHdvcmR0IGVlbiBkaWVwIHBlcnNvb25saWprZSByZWlzLiBNaWNoYWVsIG1vZXQgdnJhZ2VuIG9uZGVyIG9nZW4gemllbiBvdmVyIGlkZW50aXRlaXQsIHZlcmJvbmRlbmhlaWQgZW4gZGUgYmFuZGVuIGRpZSBmYW1pbGllcyB2ZXJiaW5kZW4gb3ZlciBncmVuemVuIGVuIGdlbmVyYXRpZXMgaGVlbi4gT25kZXJ3ZWcgb250ZGVrdCBoaWogZGF0IGRlIG1lZXN0IG9udmVyd2FjaHRlIGNvbm5lY3RpZXMgZGUgbWVlc3QgYmV0ZWtlbmlzdm9sbGUga3VubmVuIHdvcmRlbi4nLFxuICAnXCJWZXJyZSBOZXZlblwiIGlzIGVlbiBoYXJ0dmVyd2FybWVuZCB2ZXJoYWFsIG92ZXIgb250ZGVra2luZywgdmVydGVsZCBtZXQgd2FybXRlLCBodW1vciBlbiBlZW4gZGllcGUgZ2VuZWdlbmhlaWQgdm9vciB6b3dlbCBkZSBOZWRlcmxhbmRzZSBhbHMgZGUgRW5nZWxzZSBjdWx0dXVyLiBIZXQgaXMgZWVuIHZlcmhhYWwgb3ZlciBoZXQgdmluZGVuIHZhbiBmYW1pbGllIHdhYXIgamUgaGV0IGhldCBtaW5zdCB2ZXJ3YWNodCDigJQgZW4gamV6ZWxmIHZpbmRlbiBpbiBoZXQgcHJvY2VzLiddXG5cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRoZUJvb2soKSB7XG4gIGNvbnN0IFthY3RpdmVMYW5nLCBzZXRBY3RpdmVMYW5nXSA9IHVzZVN0YXRlKCdlbicpO1xuICBjb25zdCBzeW5vcHNpcyA9IGFjdGl2ZUxhbmcgPT09ICdlbicgPyBzeW5vcHNpc0VOIDogc3lub3BzaXNOTDtcbiAgY29uc3QgY292ZXJVcmwgPSBhY3RpdmVMYW5nID09PSAnZW4nID8gQ09WRVJfRU4gOiBDT1ZFUl9OTDtcblxuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvVGhlQm9vazozODo0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwicHQtMjggbGc6cHQtMzYgcGItMjAgbGc6cGItMzJcIj5cbiAgICAgIHsvKiBIZXJvIGJhbm5lciAqL31cbiAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9UaGVCb29rOjQwOjZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBoLTY0IGxnOmgtODAgb3ZlcmZsb3ctaGlkZGVuIG1iLTE2XCI+XG4gICAgICAgIDxpbWcgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9UaGVCb29rOjQxOjhcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBzcmM9e0JPT0tfQkd9IGFsdD1cIkR1dGNoIGNhbmFsXCIgY2xhc3NOYW1lPVwidy1mdWxsIGgtZnVsbCBvYmplY3QtY292ZXJcIiAvPlxuICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvVGhlQm9vazo0Mjo4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cImFic29sdXRlIGluc2V0LTAgYmctZ3JhZGllbnQtdG8tYiBmcm9tLWZvcmVncm91bmQvNTAgdG8tYmFja2dyb3VuZFwiIC8+XG4gICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9UaGVCb29rOjQzOjhcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwiYWJzb2x1dGUgaW5zZXQtMCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICAgIDxoMSBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1RoZUJvb2s6NDQ6MTBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwiZm9udC1kaXNwbGF5IHRleHQtNHhsIGxnOnRleHQtNnhsIGZvbnQtYm9sZCB0ZXh0LXdoaXRlXCI+VGhlIEJvb2s8L2gxPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvVGhlQm9vazo0ODo2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwibWF4LXctNnhsIG14LWF1dG8gcHgtNiBsZzpweC0xMlwiPlxuICAgICAgICB7LyogTGFuZ3VhZ2UgdG9nZ2xlICovfVxuICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvVGhlQm9vazo1MDo4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgbWItMTZcIj5cbiAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvVGhlQm9vazo1MToxMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cImlubGluZS1mbGV4IGJnLW11dGVkIHJvdW5kZWQtZnVsbCBwLTFcIj5cbiAgICAgICAgICAgIDxidXR0b24gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9UaGVCb29rOjUyOjEyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldEFjdGl2ZUxhbmcoJ2VuJyl9XG4gICAgICAgICAgICBjbGFzc05hbWU9e2BweC02IHB5LTIuNSByb3VuZGVkLWZ1bGwgZm9udC1ib2R5IHRleHQtc20gdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwICR7XG4gICAgICAgICAgICBhY3RpdmVMYW5nID09PSAnZW4nID9cbiAgICAgICAgICAgICdiZy1wcmltYXJ5IHRleHQtcHJpbWFyeS1mb3JlZ3JvdW5kIHNoYWRvdy1tZCcgOlxuICAgICAgICAgICAgJ3RleHQtbXV0ZWQtZm9yZWdyb3VuZCBob3Zlcjp0ZXh0LWZvcmVncm91bmQnfWBcbiAgICAgICAgICAgIH0+XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICBFbmdsaXNoXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b24gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9UaGVCb29rOjYyOjEyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldEFjdGl2ZUxhbmcoJ25sJyl9XG4gICAgICAgICAgICBjbGFzc05hbWU9e2BweC02IHB5LTIuNSByb3VuZGVkLWZ1bGwgZm9udC1ib2R5IHRleHQtc20gdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwICR7XG4gICAgICAgICAgICBhY3RpdmVMYW5nID09PSAnbmwnID9cbiAgICAgICAgICAgICdiZy1wcmltYXJ5IHRleHQtcHJpbWFyeS1mb3JlZ3JvdW5kIHNoYWRvdy1tZCcgOlxuICAgICAgICAgICAgJ3RleHQtbXV0ZWQtZm9yZWdyb3VuZCBob3Zlcjp0ZXh0LWZvcmVncm91bmQnfWBcbiAgICAgICAgICAgIH0+XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICBOZWRlcmxhbmRzXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPEFuaW1hdGVQcmVzZW5jZSBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1RoZUJvb2s6NzU6OFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIG1vZGU9XCJ3YWl0XCI+XG4gICAgICAgICAgPG1vdGlvbi5kaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9UaGVCb29rOjc2OjEwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCJcbiAgICAgICAgICBrZXk9e2FjdGl2ZUxhbmd9XG4gICAgICAgICAgaW5pdGlhbD17eyBvcGFjaXR5OiAwLCB5OiAyMCB9fVxuICAgICAgICAgIGFuaW1hdGU9e3sgb3BhY2l0eTogMSwgeTogMCB9fVxuICAgICAgICAgIGV4aXQ9e3sgb3BhY2l0eTogMCwgeTogLTIwIH19XG4gICAgICAgICAgdHJhbnNpdGlvbj17eyBkdXJhdGlvbjogMC41IH19XG4gICAgICAgICAgY2xhc3NOYW1lPVwiZ3JpZCBsZzpncmlkLWNvbHMtMyBnYXAtMTIgbGc6Z2FwLTIwXCI+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHsvKiBDb3ZlciAqL31cbiAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9UaGVCb29rOjg1OjEyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBsZzpqdXN0aWZ5LWVuZFwiPlxuICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvVGhlQm9vazo4NjoxNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInJlbGF0aXZlXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1RoZUJvb2s6ODc6MTZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwiYWJzb2x1dGUgLWluc2V0LTYgYmctZ3JhZGllbnQtdG8tYnIgZnJvbS1zZWNvbmRhcnkvMjAgdG8tYWNjZW50LzEwIHJvdW5kZWQteGwgYmx1ci0zeGxcIiAvPlxuICAgICAgICAgICAgICAgIDxpbWcgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9UaGVCb29rOjg4OjE2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgc3JjPVwiaHR0cHM6Ly9tZWRpYS5iYXNlNDQuY29tL2ltYWdlcy9wdWJsaWMvNmEwNGViMjk1ZDJhMDQ4YmMwMWEwY2FhL2MxYjljM2UzZl9FTkdMSVNIX19GSU5BTF9fQkFDSy5qcGdcIlxuXG4gICAgICAgICAgICAgICAgYWx0PXtzeW5vcHNpcy50aXRsZX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyZWxhdGl2ZSB3LTY0IGxnOnctNzIgcm91bmRlZC1zbSBzaGFkb3ctMnhsXCIgLz5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgey8qIFN5bm9wc2lzICovfVxuICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1RoZUJvb2s6OTc6MTJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJsZzpjb2wtc3Bhbi0yIHNwYWNlLXktNlwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWZpZWxkPVwicGFyYWdyYXBoc1wiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWlkPXtzeW5vcHNpcz8uaWQgfHwgc3lub3BzaXM/Ll9pZH0+XG4gICAgICAgICAgICAgIDxoMiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1RoZUJvb2s6OTg6MTRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJmb250LWRpc3BsYXkgdGV4dC0zeGwgbGc6dGV4dC00eGwgZm9udC1zZW1pYm9sZCB0ZXh0LWZvcmVncm91bmRcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1maWVsZD1cInRpdGxlXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0taWQ9e3N5bm9wc2lzPy5pZCB8fCBzeW5vcHNpcz8uX2lkfT5cbiAgICAgICAgICAgICAgICB7c3lub3BzaXMudGl0bGV9XG4gICAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICAgIDxwIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvVGhlQm9vazoxMDE6MTRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJmb250LWFjY2VudCBpdGFsaWMgdGV4dC1sZyB0ZXh0LWFjY2VudFwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWZpZWxkPVwic3VidGl0bGVcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1pZD17c3lub3BzaXM/LmlkIHx8IHN5bm9wc2lzPy5faWR9PntzeW5vcHNpcy5zdWJ0aXRsZX08L3A+XG4gICAgICAgICAgICAgIDxHb2xkZW5UaHJlYWQgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9UaGVCb29rOjEwMjoxNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJtYXgtdy0xNlwiIC8+XG4gICAgICAgICAgICAgIHtzeW5vcHNpcy5wYXJhZ3JhcGhzLm1hcCgocCwgaSkgPT5cbiAgICAgICAgICAgICAgPHAgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9UaGVCb29rOjEwNDoxNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGtleT17aX0gY2xhc3NOYW1lPVwiZm9udC1ib2R5IHRleHQtbGcgdGV4dC1mb3JlZ3JvdW5kLzgwIGxlYWRpbmctcmVsYXhlZFwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWZpZWxkPVwicFwiPlxuICAgICAgICAgICAgICAgICAge3B9XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICApfVxuXG4gICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9UaGVCb29rOjEwOToxNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInB0LTggZmxleCBmbGV4LXdyYXAgZ2FwLTRcIj5cbiAgICAgICAgICAgICAgICA8YSBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1RoZUJvb2s6MTEwOjE2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICBocmVmPVwiI1wiXG4gICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgcHgtOCBweS0zIGJnLXByaW1hcnkgdGV4dC1wcmltYXJ5LWZvcmVncm91bmQgZm9udC1ib2R5IHRleHQtc20gcm91bmRlZC1mdWxsIGhvdmVyOmJnLXByaW1hcnkvOTAgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwIGhvdmVyOnNoYWRvdy1sZ1wiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWZpZWxkPVwidGl0bGVcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1pZD17c3lub3BzaXM/LmlkIHx8IHN5bm9wc2lzPy5faWR9PlxuICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICBCdXkge3N5bm9wc2lzLnRpdGxlfVxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8YSBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL1RoZUJvb2s6MTE4OjE2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiXG4gICAgICAgICAgICAgICAgaHJlZj1cIi9leGNlcnB0XCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgcHgtOCBweS0zIGJvcmRlciBib3JkZXItcHJpbWFyeS80MCB0ZXh0LXByaW1hcnkgZm9udC1ib2R5IHRleHQtc20gcm91bmRlZC1mdWxsIGhvdmVyOmJnLXByaW1hcnkvMTAgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwXCI+XG4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgIFJlYWQgYW4gRXhjZXJwdFxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgIDwvQW5pbWF0ZVByZXNlbmNlPlxuICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPik7XG5cbn0iXSwiZmlsZSI6Ii9hcHAvc3JjL3BhZ2VzL1RoZUJvb2suanN4In0=