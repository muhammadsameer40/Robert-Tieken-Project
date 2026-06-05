import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/pages/About.jsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=d703caa5"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/app/src/pages/About.jsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
import __vite__cjsImport3_react from "/node_modules/.vite/deps/react.js?v=d703caa5"; const React = __vite__cjsImport3_react.__esModule ? __vite__cjsImport3_react.default : __vite__cjsImport3_react;
import { motion } from "/node_modules/.vite/deps/framer-motion.js?v=d703caa5";
import SectionHeading from "/src/components/shared/SectionHeading.jsx";
import GoldenThread from "/src/components/shared/GoldenThread.jsx";
const AUTHOR_PHOTO = "https://storage.base44.com/apps/e07fd6e7-fc42-4584-a35a-66eb3b55d3c1/files/public/af2e34ba-bd71-4b7b-89e4-3a85b3e8aa09-robert-tieken-author.png";
export default function About() {
  return /* @__PURE__ */ jsxDEV("section", { "data-source-location": "pages/About:10:4", "data-dynamic-content": "true", className: "pt-28 lg:pt-36 pb-20 lg:pb-32 px-6 lg:px-12", children: /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/About:11:6", "data-dynamic-content": "true", className: "max-w-6xl mx-auto", children: [
    /* @__PURE__ */ jsxDEV(
      SectionHeading,
      {
        "data-source-location": "pages/About:12:8",
        "data-dynamic-content": "false",
        title: "About Robert Tieken",
        subtitle: "The story behind the storyteller"
      },
      void 0,
      false,
      {
        fileName: "/app/src/pages/About.jsx",
        lineNumber: 31,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/About:17:8", "data-dynamic-content": "true", className: "grid lg:grid-cols-5 gap-12 lg:gap-20 items-start", children: [
      /* @__PURE__ */ jsxDEV(
        motion.div,
        {
          "data-source-location": "pages/About:19:10",
          "data-dynamic-content": "true",
          initial: { opacity: 0, x: -30 },
          whileInView: { opacity: 1, x: 0 },
          viewport: { once: true },
          transition: { duration: 0.8 },
          className: "lg:col-span-3 space-y-6",
          children: [
            /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/About:26:12", "data-dynamic-content": "false", className: "font-body text-lg text-foreground leading-relaxed", children: "Robert Tieken was born in 1958 and grew up in the Netherlands. After completing his military service with the Royal Dutch Marine Corps — an experience that shaped his sense of discipline, camaraderie, and respect for human resilience — he built a successful career in international logistics. For decades he worked at the intersection of cultures, languages, and complex human networks, skills that would later find their way into his fiction." }, void 0, false, {
              fileName: "/app/src/pages/About.jsx",
              lineNumber: 45,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/About:33:12", "data-dynamic-content": "false", className: "font-body text-lg text-foreground leading-relaxed", children: "Literature has always been a quiet companion in Robert's life. An avid reader since childhood, he was drawn to stories that explored the inner lives of ordinary people navigating extraordinary circumstances. Writers like Fredrik Backman, Anne Tyler, and Jan de Hartog — authors who find the universal in the intimate — left a lasting impression." }, void 0, false, {
              fileName: "/app/src/pages/About.jsx",
              lineNumber: 52,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/About:39:12", "data-dynamic-content": "false", className: "font-body text-lg text-foreground leading-relaxed", children: [
              "The idea for ",
              /* @__PURE__ */ jsxDEV("em", { "data-source-location": "pages/About:40:27", "data-dynamic-content": "false", children: "Distant Cousin" }, void 0, false, {
                fileName: "/app/src/pages/About.jsx",
                lineNumber: 59,
                columnNumber: 28
              }, this),
              " — published in Dutch as ",
              /* @__PURE__ */ jsxDEV("em", { "data-source-location": "pages/About:40:75", "data-dynamic-content": "false", children: "Verre Neven" }, void 0, false, {
                fileName: "/app/src/pages/About.jsx",
                lineNumber: 59,
                columnNumber: 146
              }, this),
              " — came to Robert after reflecting on questions of family, inheritance, and the unexpected bonds that can form across great distances of geography and time. What began as a personal exploration became a full novel: the story of Michael Doesburg, a Dutch businessman whose life is transformed by a single phone call from an English solicitor."
            ] }, void 0, true, {
              fileName: "/app/src/pages/About.jsx",
              lineNumber: 58,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV(GoldenThread, { "data-source-location": "pages/About:47:12", "data-dynamic-content": "false", className: "max-w-24" }, void 0, false, {
              fileName: "/app/src/pages/About.jsx",
              lineNumber: 66,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/About:49:12", "data-dynamic-content": "false", className: "font-body text-lg text-foreground leading-relaxed", children: "One of the most remarkable aspects of Robert's debut is that he wrote the novel simultaneously in both English and Dutch — not translating one from the other, but crafting each version as its own authentic text. This bilingual approach reflects the book's core themes of crossing borders, finding common ground, and discovering that identity is never just one thing." }, void 0, false, {
              fileName: "/app/src/pages/About.jsx",
              lineNumber: 68,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/About:55:12", "data-dynamic-content": "false", className: "font-body text-lg text-foreground leading-relaxed", children: [
              /* @__PURE__ */ jsxDEV("em", { "data-source-location": "pages/About:56:14", "data-dynamic-content": "false", children: "Distant Cousin / Verre Neven" }, void 0, false, {
                fileName: "/app/src/pages/About.jsx",
                lineNumber: 75,
                columnNumber: 15
              }, this),
              " was published in 2026 and is Robert's debut novel. He is currently at work on his second book."
            ] }, void 0, true, {
              fileName: "/app/src/pages/About.jsx",
              lineNumber: 74,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/About:59:12", "data-dynamic-content": "false", className: "font-body text-lg text-foreground leading-relaxed", children: "Robert lives in the Netherlands with his husband of 33 years. When not writing, he enjoys long walks through the Dutch countryside, exploring English market towns, cooking, and spending time with family and close friends — the real chosen family that inspired this book." }, void 0, false, {
              fileName: "/app/src/pages/About.jsx",
              lineNumber: 78,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV(
              motion.blockquote,
              {
                "data-source-location": "pages/About:65:12",
                "data-dynamic-content": "true",
                initial: { opacity: 0 },
                whileInView: { opacity: 1 },
                viewport: { once: true },
                transition: { delay: 0.4, duration: 0.8 },
                className: "border-l-2 border-accent pl-6 mt-10",
                children: [
                  /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/About:72:14", "data-dynamic-content": "false", className: "font-accent italic text-2xl text-foreground/80 leading-relaxed", children: '"I believe every family has a story waiting to be told — a connection waiting to be discovered. I wrote this book because some journeys are simply too important not to share."' }, void 0, false, {
                    fileName: "/app/src/pages/About.jsx",
                    lineNumber: 91,
                    columnNumber: 15
                  }, this),
                  /* @__PURE__ */ jsxDEV("cite", { "data-source-location": "pages/About:76:14", "data-dynamic-content": "false", className: "font-body text-sm text-muted-foreground mt-3 block not-italic", children: "— Robert Tieken" }, void 0, false, {
                    fileName: "/app/src/pages/About.jsx",
                    lineNumber: 95,
                    columnNumber: 15
                  }, this)
                ]
              },
              void 0,
              true,
              {
                fileName: "/app/src/pages/About.jsx",
                lineNumber: 84,
                columnNumber: 13
              },
              this
            )
          ]
        },
        void 0,
        true,
        {
          fileName: "/app/src/pages/About.jsx",
          lineNumber: 38,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ jsxDEV(
        motion.div,
        {
          "data-source-location": "pages/About:81:10",
          "data-dynamic-content": "true",
          initial: { opacity: 0, x: 30 },
          whileInView: { opacity: 1, x: 0 },
          viewport: { once: true },
          transition: { duration: 0.8, delay: 0.2 },
          className: "lg:col-span-2 lg:sticky lg:top-28",
          children: [
            /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/About:88:12", "data-dynamic-content": "false", className: "relative", children: [
              /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/About:89:14", "data-dynamic-content": "false", className: "absolute -inset-4 bg-gradient-to-br from-secondary/30 to-accent/10 rounded-lg blur-2xl" }, void 0, false, {
                fileName: "/app/src/pages/About.jsx",
                lineNumber: 108,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ jsxDEV(
                "img",
                {
                  "data-source-location": "pages/About:90:14",
                  "data-dynamic-content": "false",
                  src: "https://media.base44.com/images/public/6a04eb295d2a048bc01a0caa/9f523ad28_a9207331-08ac-4b95-9c18-60ac5c9a44d3.jpg",
                  alt: "Robert Tieken, author",
                  className: "relative rounded-lg w-full object-cover shadow-s"
                },
                void 0,
                false,
                {
                  fileName: "/app/src/pages/About.jsx",
                  lineNumber: 109,
                  columnNumber: 15
                },
                this
              )
            ] }, void 0, true, {
              fileName: "/app/src/pages/About.jsx",
              lineNumber: 107,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/About:96:12", "data-dynamic-content": "false", className: "font-accent italic text-center text-muted-foreground mt-6 text-lg", children: "Robert Tieken" }, void 0, false, {
              fileName: "/app/src/pages/About.jsx",
              lineNumber: 115,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/About:101:12", "data-dynamic-content": "true", className: "mt-8 space-y-3", children: [
              { label: "Born", value: "1958, Netherlands" },
              { label: "Background", value: "Royal Dutch Marines · International Logistics" },
              { label: "Debut Novel", value: "Distant Cousin / Verre Neven (2026)" },
              { label: "Written in", value: "English & Dutch simultaneously" },
              { label: "Lives in", value: "Netherlands, with his husband of 33 years" }
            ].map(
              ({ label, value, id }) => /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/About:109:14", "data-dynamic-content": "true", className: "flex gap-3 items-start", children: [
                /* @__PURE__ */ jsxDEV("span", { "data-source-location": "pages/About:110:18", "data-dynamic-content": "true", className: "font-body text-xs font-semibold uppercase tracking-wider text-accent pt-0.5 min-w-[6rem]", "data-collection-item-field": "label", "data-collection-item-id": id, children: label }, void 0, false, {
                  fileName: "/app/src/pages/About.jsx",
                  lineNumber: 129,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ jsxDEV("span", { "data-source-location": "pages/About:111:18", "data-dynamic-content": "true", className: "font-body text-sm text-muted-foreground leading-snug", "data-collection-item-field": "value", "data-collection-item-id": id, children: value }, void 0, false, {
                  fileName: "/app/src/pages/About.jsx",
                  lineNumber: 130,
                  columnNumber: 19
                }, this)
              ] }, label, true, {
                fileName: "/app/src/pages/About.jsx",
                lineNumber: 128,
                columnNumber: 15
              }, this)
            ) }, void 0, false, {
              fileName: "/app/src/pages/About.jsx",
              lineNumber: 120,
              columnNumber: 13
            }, this)
          ]
        },
        void 0,
        true,
        {
          fileName: "/app/src/pages/About.jsx",
          lineNumber: 100,
          columnNumber: 11
        },
        this
      )
    ] }, void 0, true, {
      fileName: "/app/src/pages/About.jsx",
      lineNumber: 36,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "/app/src/pages/About.jsx",
    lineNumber: 30,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "/app/src/pages/About.jsx",
    lineNumber: 29,
    columnNumber: 5
  }, this);
}
_c = About;
var _c;
$RefreshReg$(_c, "About");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/app/src/pages/About.jsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/app/src/pages/About.jsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,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QUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1Ba0NBO0FBQUEsU0FsR0Y7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQW1HQTtBQUFBLE9BekdGO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0EwR0EsS0EzR0Y7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQTRHQTtBQUVKO0FBQUNJLEtBaEh1QlY7QUFBSyxJQUFBVTtBQUFBLGFBQUFBLElBQUEiLCJuYW1lcyI6WyJSZWFjdCIsIm1vdGlvbiIsIlNlY3Rpb25IZWFkaW5nIiwiR29sZGVuVGhyZWFkIiwiQVVUSE9SX1BIT1RPIiwiQWJvdXQiLCJvcGFjaXR5IiwieCIsIm9uY2UiLCJkdXJhdGlvbiIsImRlbGF5IiwibGFiZWwiLCJ2YWx1ZSIsIm1hcCIsImlkIiwiX2MiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsiQWJvdXQuanN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcbmltcG9ydCBTZWN0aW9uSGVhZGluZyBmcm9tICcuLi9jb21wb25lbnRzL3NoYXJlZC9TZWN0aW9uSGVhZGluZyc7XG5pbXBvcnQgR29sZGVuVGhyZWFkIGZyb20gJy4uL2NvbXBvbmVudHMvc2hhcmVkL0dvbGRlblRocmVhZCc7XG5cbmNvbnN0IEFVVEhPUl9QSE9UTyA9ICdodHRwczovL3N0b3JhZ2UuYmFzZTQ0LmNvbS9hcHBzL2UwN2ZkNmU3LWZjNDItNDU4NC1hMzVhLTY2ZWIzYjU1ZDNjMS9maWxlcy9wdWJsaWMvYWYyZTM0YmEtYmQ3MS00YjdiLTg5ZTQtM2E4NWIzZThhYTA5LXJvYmVydC10aWVrZW4tYXV0aG9yLnBuZyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFib3V0KCkge1xuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQWJvdXQ6MTA6NFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInB0LTI4IGxnOnB0LTM2IHBiLTIwIGxnOnBiLTMyIHB4LTYgbGc6cHgtMTJcIj5cbiAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9BYm91dDoxMTo2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwibWF4LXctNnhsIG14LWF1dG9cIj5cbiAgICAgICAgPFNlY3Rpb25IZWFkaW5nIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQWJvdXQ6MTI6OFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIlxuICAgICAgICB0aXRsZT1cIkFib3V0IFJvYmVydCBUaWVrZW5cIlxuICAgICAgICBzdWJ0aXRsZT1cIlRoZSBzdG9yeSBiZWhpbmQgdGhlIHN0b3J5dGVsbGVyXCIgLz5cbiAgICAgICAgXG5cbiAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0Fib3V0OjE3OjhcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJncmlkIGxnOmdyaWQtY29scy01IGdhcC0xMiBsZzpnYXAtMjAgaXRlbXMtc3RhcnRcIj5cbiAgICAgICAgICB7LyogQmlvIHRleHQgKi99XG4gICAgICAgICAgPG1vdGlvbi5kaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9BYm91dDoxOToxMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiXG4gICAgICAgICAgaW5pdGlhbD17eyBvcGFjaXR5OiAwLCB4OiAtMzAgfX1cbiAgICAgICAgICB3aGlsZUluVmlldz17eyBvcGFjaXR5OiAxLCB4OiAwIH19XG4gICAgICAgICAgdmlld3BvcnQ9e3sgb25jZTogdHJ1ZSB9fVxuICAgICAgICAgIHRyYW5zaXRpb249e3sgZHVyYXRpb246IDAuOCB9fVxuICAgICAgICAgIGNsYXNzTmFtZT1cImxnOmNvbC1zcGFuLTMgc3BhY2UteS02XCI+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDxwIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQWJvdXQ6MjY6MTJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwiZm9udC1ib2R5IHRleHQtbGcgdGV4dC1mb3JlZ3JvdW5kIGxlYWRpbmctcmVsYXhlZFwiPlxuICAgICAgICAgICAgICBSb2JlcnQgVGlla2VuIHdhcyBib3JuIGluIDE5NTggYW5kIGdyZXcgdXAgaW4gdGhlIE5ldGhlcmxhbmRzLiBBZnRlciBjb21wbGV0aW5nIGhpcyBtaWxpdGFyeSBzZXJ2aWNlIFxuICAgICAgICAgICAgICB3aXRoIHRoZSBSb3lhbCBEdXRjaCBNYXJpbmUgQ29ycHMg4oCUIGFuIGV4cGVyaWVuY2UgdGhhdCBzaGFwZWQgaGlzIHNlbnNlIG9mIGRpc2NpcGxpbmUsIGNhbWFyYWRlcmllLCBcbiAgICAgICAgICAgICAgYW5kIHJlc3BlY3QgZm9yIGh1bWFuIHJlc2lsaWVuY2Ug4oCUIGhlIGJ1aWx0IGEgc3VjY2Vzc2Z1bCBjYXJlZXIgaW4gaW50ZXJuYXRpb25hbCBsb2dpc3RpY3MuIEZvciBkZWNhZGVzIFxuICAgICAgICAgICAgICBoZSB3b3JrZWQgYXQgdGhlIGludGVyc2VjdGlvbiBvZiBjdWx0dXJlcywgbGFuZ3VhZ2VzLCBhbmQgY29tcGxleCBodW1hbiBuZXR3b3Jrcywgc2tpbGxzIHRoYXQgd291bGQgXG4gICAgICAgICAgICAgIGxhdGVyIGZpbmQgdGhlaXIgd2F5IGludG8gaGlzIGZpY3Rpb24uXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8cCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0Fib3V0OjMzOjEyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cImZvbnQtYm9keSB0ZXh0LWxnIHRleHQtZm9yZWdyb3VuZCBsZWFkaW5nLXJlbGF4ZWRcIj5cbiAgICAgICAgICAgICAgTGl0ZXJhdHVyZSBoYXMgYWx3YXlzIGJlZW4gYSBxdWlldCBjb21wYW5pb24gaW4gUm9iZXJ0J3MgbGlmZS4gQW4gYXZpZCByZWFkZXIgc2luY2UgY2hpbGRob29kLCBcbiAgICAgICAgICAgICAgaGUgd2FzIGRyYXduIHRvIHN0b3JpZXMgdGhhdCBleHBsb3JlZCB0aGUgaW5uZXIgbGl2ZXMgb2Ygb3JkaW5hcnkgcGVvcGxlIG5hdmlnYXRpbmcgZXh0cmFvcmRpbmFyeSBcbiAgICAgICAgICAgICAgY2lyY3Vtc3RhbmNlcy4gV3JpdGVycyBsaWtlIEZyZWRyaWsgQmFja21hbiwgQW5uZSBUeWxlciwgYW5kIEphbiBkZSBIYXJ0b2cg4oCUIGF1dGhvcnMgd2hvIGZpbmQgdGhlIFxuICAgICAgICAgICAgICB1bml2ZXJzYWwgaW4gdGhlIGludGltYXRlIOKAlCBsZWZ0IGEgbGFzdGluZyBpbXByZXNzaW9uLlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPHAgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9BYm91dDozOToxMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJmb250LWJvZHkgdGV4dC1sZyB0ZXh0LWZvcmVncm91bmQgbGVhZGluZy1yZWxheGVkXCI+XG4gICAgICAgICAgICAgIFRoZSBpZGVhIGZvciA8ZW0gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9BYm91dDo0MDoyN1wiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIj5EaXN0YW50IENvdXNpbjwvZW0+IOKAlCBwdWJsaXNoZWQgaW4gRHV0Y2ggYXMgPGVtIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQWJvdXQ6NDA6NzVcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCI+VmVycmUgTmV2ZW48L2VtPiDigJQgY2FtZSB0byBSb2JlcnQgXG4gICAgICAgICAgICAgIGFmdGVyIHJlZmxlY3Rpbmcgb24gcXVlc3Rpb25zIG9mIGZhbWlseSwgaW5oZXJpdGFuY2UsIGFuZCB0aGUgdW5leHBlY3RlZCBib25kcyB0aGF0IGNhbiBmb3JtIGFjcm9zcyBcbiAgICAgICAgICAgICAgZ3JlYXQgZGlzdGFuY2VzIG9mIGdlb2dyYXBoeSBhbmQgdGltZS4gV2hhdCBiZWdhbiBhcyBhIHBlcnNvbmFsIGV4cGxvcmF0aW9uIGJlY2FtZSBhIGZ1bGwgbm92ZWw6IFxuICAgICAgICAgICAgICB0aGUgc3Rvcnkgb2YgTWljaGFlbCBEb2VzYnVyZywgYSBEdXRjaCBidXNpbmVzc21hbiB3aG9zZSBsaWZlIGlzIHRyYW5zZm9ybWVkIGJ5IGEgc2luZ2xlIHBob25lIGNhbGwgXG4gICAgICAgICAgICAgIGZyb20gYW4gRW5nbGlzaCBzb2xpY2l0b3IuXG4gICAgICAgICAgICA8L3A+XG5cbiAgICAgICAgICAgIDxHb2xkZW5UaHJlYWQgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9BYm91dDo0NzoxMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJtYXgtdy0yNFwiIC8+XG5cbiAgICAgICAgICAgIDxwIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQWJvdXQ6NDk6MTJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwiZm9udC1ib2R5IHRleHQtbGcgdGV4dC1mb3JlZ3JvdW5kIGxlYWRpbmctcmVsYXhlZFwiPlxuICAgICAgICAgICAgICBPbmUgb2YgdGhlIG1vc3QgcmVtYXJrYWJsZSBhc3BlY3RzIG9mIFJvYmVydCdzIGRlYnV0IGlzIHRoYXQgaGUgd3JvdGUgdGhlIG5vdmVsIHNpbXVsdGFuZW91c2x5IGluIFxuICAgICAgICAgICAgICBib3RoIEVuZ2xpc2ggYW5kIER1dGNoIOKAlCBub3QgdHJhbnNsYXRpbmcgb25lIGZyb20gdGhlIG90aGVyLCBidXQgY3JhZnRpbmcgZWFjaCB2ZXJzaW9uIGFzIGl0cyBvd24gXG4gICAgICAgICAgICAgIGF1dGhlbnRpYyB0ZXh0LiBUaGlzIGJpbGluZ3VhbCBhcHByb2FjaCByZWZsZWN0cyB0aGUgYm9vaydzIGNvcmUgdGhlbWVzIG9mIGNyb3NzaW5nIGJvcmRlcnMsIGZpbmRpbmcgXG4gICAgICAgICAgICAgIGNvbW1vbiBncm91bmQsIGFuZCBkaXNjb3ZlcmluZyB0aGF0IGlkZW50aXR5IGlzIG5ldmVyIGp1c3Qgb25lIHRoaW5nLlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPHAgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9BYm91dDo1NToxMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJmb250LWJvZHkgdGV4dC1sZyB0ZXh0LWZvcmVncm91bmQgbGVhZGluZy1yZWxheGVkXCI+XG4gICAgICAgICAgICAgIDxlbSBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0Fib3V0OjU2OjE0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiPkRpc3RhbnQgQ291c2luIC8gVmVycmUgTmV2ZW48L2VtPiB3YXMgcHVibGlzaGVkIGluIDIwMjYgYW5kIGlzIFJvYmVydCdzIGRlYnV0IG5vdmVsLiBIZSBpcyBcbiAgICAgICAgICAgICAgY3VycmVudGx5IGF0IHdvcmsgb24gaGlzIHNlY29uZCBib29rLlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPHAgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9BYm91dDo1OToxMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJmb250LWJvZHkgdGV4dC1sZyB0ZXh0LWZvcmVncm91bmQgbGVhZGluZy1yZWxheGVkXCI+XG4gICAgICAgICAgICAgIFJvYmVydCBsaXZlcyBpbiB0aGUgTmV0aGVybGFuZHMgd2l0aCBoaXMgaHVzYmFuZCBvZiAzMyB5ZWFycy4gV2hlbiBub3Qgd3JpdGluZywgaGUgZW5qb3lzIFxuICAgICAgICAgICAgICBsb25nIHdhbGtzIHRocm91Z2ggdGhlIER1dGNoIGNvdW50cnlzaWRlLCBleHBsb3JpbmcgRW5nbGlzaCBtYXJrZXQgdG93bnMsIGNvb2tpbmcsIGFuZCBzcGVuZGluZyBcbiAgICAgICAgICAgICAgdGltZSB3aXRoIGZhbWlseSBhbmQgY2xvc2UgZnJpZW5kcyDigJQgdGhlIHJlYWwgY2hvc2VuIGZhbWlseSB0aGF0IGluc3BpcmVkIHRoaXMgYm9vay5cbiAgICAgICAgICAgIDwvcD5cblxuICAgICAgICAgICAgPG1vdGlvbi5ibG9ja3F1b3RlIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQWJvdXQ6NjU6MTJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIlxuICAgICAgICAgICAgaW5pdGlhbD17eyBvcGFjaXR5OiAwIH19XG4gICAgICAgICAgICB3aGlsZUluVmlldz17eyBvcGFjaXR5OiAxIH19XG4gICAgICAgICAgICB2aWV3cG9ydD17eyBvbmNlOiB0cnVlIH19XG4gICAgICAgICAgICB0cmFuc2l0aW9uPXt7IGRlbGF5OiAwLjQsIGR1cmF0aW9uOiAwLjggfX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJvcmRlci1sLTIgYm9yZGVyLWFjY2VudCBwbC02IG10LTEwXCI+XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICA8cCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0Fib3V0OjcyOjE0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cImZvbnQtYWNjZW50IGl0YWxpYyB0ZXh0LTJ4bCB0ZXh0LWZvcmVncm91bmQvODAgbGVhZGluZy1yZWxheGVkXCI+XG4gICAgICAgICAgICAgICAgXCJJIGJlbGlldmUgZXZlcnkgZmFtaWx5IGhhcyBhIHN0b3J5IHdhaXRpbmcgdG8gYmUgdG9sZCDigJQgYSBjb25uZWN0aW9uIHdhaXRpbmcgdG8gYmUgZGlzY292ZXJlZC4gXG4gICAgICAgICAgICAgICAgSSB3cm90ZSB0aGlzIGJvb2sgYmVjYXVzZSBzb21lIGpvdXJuZXlzIGFyZSBzaW1wbHkgdG9vIGltcG9ydGFudCBub3QgdG8gc2hhcmUuXCJcbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8Y2l0ZSBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0Fib3V0Ojc2OjE0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cImZvbnQtYm9keSB0ZXh0LXNtIHRleHQtbXV0ZWQtZm9yZWdyb3VuZCBtdC0zIGJsb2NrIG5vdC1pdGFsaWNcIj7igJQgUm9iZXJ0IFRpZWtlbjwvY2l0ZT5cbiAgICAgICAgICAgIDwvbW90aW9uLmJsb2NrcXVvdGU+XG4gICAgICAgICAgPC9tb3Rpb24uZGl2PlxuXG4gICAgICAgICAgey8qIEF1dGhvciBwaG90byAqL31cbiAgICAgICAgICA8bW90aW9uLmRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0Fib3V0OjgxOjEwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCJcbiAgICAgICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAsIHg6IDMwIH19XG4gICAgICAgICAgd2hpbGVJblZpZXc9e3sgb3BhY2l0eTogMSwgeDogMCB9fVxuICAgICAgICAgIHZpZXdwb3J0PXt7IG9uY2U6IHRydWUgfX1cbiAgICAgICAgICB0cmFuc2l0aW9uPXt7IGR1cmF0aW9uOiAwLjgsIGRlbGF5OiAwLjIgfX1cbiAgICAgICAgICBjbGFzc05hbWU9XCJsZzpjb2wtc3Bhbi0yIGxnOnN0aWNreSBsZzp0b3AtMjhcIj5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0Fib3V0Ojg4OjEyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInJlbGF0aXZlXCI+XG4gICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9BYm91dDo4OToxNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJhYnNvbHV0ZSAtaW5zZXQtNCBiZy1ncmFkaWVudC10by1iciBmcm9tLXNlY29uZGFyeS8zMCB0by1hY2NlbnQvMTAgcm91bmRlZC1sZyBibHVyLTJ4bFwiIC8+XG4gICAgICAgICAgICAgIDxpbWcgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9BYm91dDo5MDoxNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBzcmM9XCJodHRwczovL21lZGlhLmJhc2U0NC5jb20vaW1hZ2VzL3B1YmxpYy82YTA0ZWIyOTVkMmEwNDhiYzAxYTBjYWEvOWY1MjNhZDI4X2E5MjA3MzMxLTA4YWMtNGI5NS05YzE4LTYwYWM1YzlhNDRkMy5qcGdcIlxuXG4gICAgICAgICAgICAgIGFsdD1cIlJvYmVydCBUaWVrZW4sIGF1dGhvclwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJlbGF0aXZlIHJvdW5kZWQtbGcgdy1mdWxsIG9iamVjdC1jb3ZlciBzaGFkb3ctc1wiIC8+XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8cCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0Fib3V0Ojk2OjEyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cImZvbnQtYWNjZW50IGl0YWxpYyB0ZXh0LWNlbnRlciB0ZXh0LW11dGVkLWZvcmVncm91bmQgbXQtNiB0ZXh0LWxnXCI+XG4gICAgICAgICAgICAgIFJvYmVydCBUaWVrZW5cbiAgICAgICAgICAgIDwvcD5cblxuICAgICAgICAgICAgey8qIFF1aWNrIGZhY3RzICovfVxuICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0Fib3V0OjEwMToxMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cIm10LTggc3BhY2UteS0zXCI+XG4gICAgICAgICAgICAgIHtbXG4gICAgICAgICAgICAgIHsgbGFiZWw6ICdCb3JuJywgdmFsdWU6ICcxOTU4LCBOZXRoZXJsYW5kcycgfSxcbiAgICAgICAgICAgICAgeyBsYWJlbDogJ0JhY2tncm91bmQnLCB2YWx1ZTogJ1JveWFsIER1dGNoIE1hcmluZXMgwrcgSW50ZXJuYXRpb25hbCBMb2dpc3RpY3MnIH0sXG4gICAgICAgICAgICAgIHsgbGFiZWw6ICdEZWJ1dCBOb3ZlbCcsIHZhbHVlOiAnRGlzdGFudCBDb3VzaW4gLyBWZXJyZSBOZXZlbiAoMjAyNiknIH0sXG4gICAgICAgICAgICAgIHsgbGFiZWw6ICdXcml0dGVuIGluJywgdmFsdWU6ICdFbmdsaXNoICYgRHV0Y2ggc2ltdWx0YW5lb3VzbHknIH0sXG4gICAgICAgICAgICAgIHsgbGFiZWw6ICdMaXZlcyBpbicsIHZhbHVlOiAnTmV0aGVybGFuZHMsIHdpdGggaGlzIGh1c2JhbmQgb2YgMzMgeWVhcnMnIH1dLlxuICAgICAgICAgICAgICBtYXAoKHsgbGFiZWwsIHZhbHVlLCBpZCB9KSA9PlxuICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQWJvdXQ6MTA5OjE0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIga2V5PXtsYWJlbH0gY2xhc3NOYW1lPVwiZmxleCBnYXAtMyBpdGVtcy1zdGFydFwiPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9BYm91dDoxMTA6MThcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJmb250LWJvZHkgdGV4dC14cyBmb250LXNlbWlib2xkIHVwcGVyY2FzZSB0cmFja2luZy13aWRlciB0ZXh0LWFjY2VudCBwdC0wLjUgbWluLXctWzZyZW1dXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0tZmllbGQ9XCJsYWJlbFwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWlkPXtpZH0+e2xhYmVsfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQWJvdXQ6MTExOjE4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwiZm9udC1ib2R5IHRleHQtc20gdGV4dC1tdXRlZC1mb3JlZ3JvdW5kIGxlYWRpbmctc251Z1wiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWZpZWxkPVwidmFsdWVcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1pZD17aWR9Pnt2YWx1ZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPik7XG5cbn0iXSwiZmlsZSI6Ii9hcHAvc3JjL3BhZ2VzL0Fib3V0LmpzeCJ9