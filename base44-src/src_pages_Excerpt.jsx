import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/pages/Excerpt.jsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=d703caa5"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/app/src/pages/Excerpt.jsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
import __vite__cjsImport3_react from "/node_modules/.vite/deps/react.js?v=d703caa5"; const React = __vite__cjsImport3_react.__esModule ? __vite__cjsImport3_react.default : __vite__cjsImport3_react;
import { motion } from "/node_modules/.vite/deps/framer-motion.js?v=d703caa5";
import SectionHeading from "/src/components/shared/SectionHeading.jsx";
import GoldenThread from "/src/components/shared/GoldenThread.jsx";
const EXCERPT_BG = "https://media.base44.com/images/public/6a04eb295d2a048bc01a0caa/2d5587b7a_generated_a58160e2.png";
export default function Excerpt() {
  return /* @__PURE__ */ jsxDEV("section", { "data-source-location": "pages/Excerpt:10:4", "data-dynamic-content": "true", className: "pt-28 lg:pt-36 pb-20 lg:pb-32", children: [
    /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Excerpt:12:6", "data-dynamic-content": "true", className: "relative h-64 lg:h-80 overflow-hidden mb-16", children: [
      /* @__PURE__ */ jsxDEV("img", { "data-source-location": "pages/Excerpt:13:8", "data-dynamic-content": "true", src: EXCERPT_BG, alt: "Ink and parchment", className: "w-full h-full object-cover" }, void 0, false, {
        fileName: "/app/src/pages/Excerpt.jsx",
        lineNumber: 32,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Excerpt:14:8", "data-dynamic-content": "false", className: "absolute inset-0 bg-gradient-to-b from-foreground/50 to-background" }, void 0, false, {
        fileName: "/app/src/pages/Excerpt.jsx",
        lineNumber: 33,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Excerpt:15:8", "data-dynamic-content": "false", className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ jsxDEV("h1", { "data-source-location": "pages/Excerpt:16:10", "data-dynamic-content": "false", className: "font-display text-4xl lg:text-6xl font-bold text-white", children: "Read an Excerpt" }, void 0, false, {
        fileName: "/app/src/pages/Excerpt.jsx",
        lineNumber: 35,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "/app/src/pages/Excerpt.jsx",
        lineNumber: 34,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/app/src/pages/Excerpt.jsx",
      lineNumber: 31,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Excerpt:20:6", "data-dynamic-content": "true", className: "max-w-3xl mx-auto px-6 lg:px-12", children: [
      /* @__PURE__ */ jsxDEV(
        motion.div,
        {
          "data-source-location": "pages/Excerpt:22:8",
          "data-dynamic-content": "true",
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.8 },
          children: [
            /* @__PURE__ */ jsxDEV("h2", { "data-source-location": "pages/Excerpt:28:10", "data-dynamic-content": "false", className: "font-display text-2xl lg:text-3xl font-semibold text-foreground mb-8 text-center", children: "Preface" }, void 0, false, {
              fileName: "/app/src/pages/Excerpt.jsx",
              lineNumber: 47,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Excerpt:31:10", "data-dynamic-content": "false", className: "literary-text text-foreground/80 space-y-6 font-accent", children: [
              /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/Excerpt:32:12", "data-dynamic-content": "false", children: "There are moments in life that arrive unannounced — quiet, almost ordinary — yet carry within them the power to change everything. A letter that arrives on a Tuesday morning. A name mentioned in passing. A phone call from a stranger who speaks with an accent you can't quite place." }, void 0, false, {
                fileName: "/app/src/pages/Excerpt.jsx",
                lineNumber: 51,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/Excerpt:37:12", "data-dynamic-content": "false", children: "This is the story of one such moment. It is also the story of what happens after — when curiosity overcomes caution, when the pull of the unknown proves stronger than the comfort of the familiar. It is, at its heart, a story about family: the one you're born into, the one you discover, and the one you choose to embrace." }, void 0, false, {
                fileName: "/app/src/pages/Excerpt.jsx",
                lineNumber: 56,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/Excerpt:43:12", "data-dynamic-content": "false", children: "The events in these pages are fictional, but the emotions are real. I have tried to tell this story with honesty — about the awkwardness of meeting strangers who share your blood, about the beauty of landscapes that feel like home even when you've never been there before, and about the quiet courage it takes to open your heart to people you never knew you were missing." }, void 0, false, {
                fileName: "/app/src/pages/Excerpt.jsx",
                lineNumber: 62,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/Excerpt:49:12", "data-dynamic-content": "false", children: "This book is for anyone who has ever wondered what lies beyond the edges of their own story." }, void 0, false, {
                fileName: "/app/src/pages/Excerpt.jsx",
                lineNumber: 68,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/Excerpt:52:12", "data-dynamic-content": "false", className: "text-right italic text-muted-foreground", children: "— Robert Tieken" }, void 0, false, {
                fileName: "/app/src/pages/Excerpt.jsx",
                lineNumber: 71,
                columnNumber: 13
              }, this)
            ] }, void 0, true, {
              fileName: "/app/src/pages/Excerpt.jsx",
              lineNumber: 50,
              columnNumber: 11
            }, this)
          ]
        },
        void 0,
        true,
        {
          fileName: "/app/src/pages/Excerpt.jsx",
          lineNumber: 41,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ jsxDEV(GoldenThread, { "data-source-location": "pages/Excerpt:56:8", "data-dynamic-content": "false" }, void 0, false, {
        fileName: "/app/src/pages/Excerpt.jsx",
        lineNumber: 75,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV(
        motion.div,
        {
          "data-source-location": "pages/Excerpt:59:8",
          "data-dynamic-content": "true",
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.8 },
          children: [
            /* @__PURE__ */ jsxDEV("h2", { "data-source-location": "pages/Excerpt:65:10", "data-dynamic-content": "false", className: "font-display text-2xl lg:text-3xl font-semibold text-foreground mb-2 text-center", children: "Chapter One" }, void 0, false, {
              fileName: "/app/src/pages/Excerpt.jsx",
              lineNumber: 84,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/Excerpt:68:10", "data-dynamic-content": "false", className: "font-accent italic text-lg text-accent text-center mb-10", children: "The Phone Call" }, void 0, false, {
              fileName: "/app/src/pages/Excerpt.jsx",
              lineNumber: 87,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Excerpt:72:10", "data-dynamic-content": "false", className: "literary-text text-foreground/80 space-y-6 font-accent", children: [
              /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/Excerpt:73:12", "data-dynamic-content": "false", children: "The phone rang at precisely ten minutes past nine on a Monday morning in November, which, as Michael Doesburg would later reflect, was an entirely unremarkable time for a life to change direction. He was sitting in his office on the third floor of a converted canal house in Amsterdam, staring at a spreadsheet that had been staring back at him for the better part of an hour, when his mobile buzzed against the dark oak of his desk." }, void 0, false, {
                fileName: "/app/src/pages/Excerpt.jsx",
                lineNumber: 92,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/Excerpt:80:12", "data-dynamic-content": "false", children: "The number was English — he could tell from the country code — and unfamiliar. Under normal circumstances, Michael would have let it go to voicemail. He was not a man who answered unknown calls. He believed, as his father had believed, that anything truly important would find its way to you in due course, and anything that couldn't wait was usually something you'd rather have waited for." }, void 0, false, {
                fileName: "/app/src/pages/Excerpt.jsx",
                lineNumber: 99,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/Excerpt:87:12", "data-dynamic-content": "false", children: "But on that particular Monday, with the rain making silver rivers of his windowpanes and the spreadsheet refusing to yield any useful insight, Michael picked up." }, void 0, false, {
                fileName: "/app/src/pages/Excerpt.jsx",
                lineNumber: 106,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/Excerpt:91:12", "data-dynamic-content": "false", children: '"Mr. Doesburg?" The voice was male, English, and carried the careful enunciation of someone accustomed to speaking across international lines. "Mr. Michael Doesburg?"' }, void 0, false, {
                fileName: "/app/src/pages/Excerpt.jsx",
                lineNumber: 110,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/Excerpt:95:12", "data-dynamic-content": "false", children: '"Speaking."' }, void 0, false, {
                fileName: "/app/src/pages/Excerpt.jsx",
                lineNumber: 114,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/Excerpt:98:12", "data-dynamic-content": "false", children: `"Good morning, sir. My name is Charles Ashworth. I'm a solicitor with Ashworth, Blake and Partners in Cheltenham. I apologise for the unannounced call, but I'm ringing on a matter of some delicacy."` }, void 0, false, {
                fileName: "/app/src/pages/Excerpt.jsx",
                lineNumber: 117,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/Excerpt:103:12", "data-dynamic-content": "false", children: "Michael leaned back in his chair. Solicitor. Cheltenham. Delicacy. None of these words, individually or collectively, had any place in his Monday morning. He had no business in Cheltenham, no dealings with English solicitors, and as far as he was aware, no matters of delicacy awaiting resolution on the other side of the North Sea." }, void 0, false, {
                fileName: "/app/src/pages/Excerpt.jsx",
                lineNumber: 122,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/Excerpt:109:12", "data-dynamic-content": "false", children: `"I'm listening," he said, because it seemed the only reasonable response.` }, void 0, false, {
                fileName: "/app/src/pages/Excerpt.jsx",
                lineNumber: 128,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/Excerpt:112:12", "data-dynamic-content": "false", className: "text-center text-accent font-display text-lg mt-12", children: "* * *" }, void 0, false, {
                fileName: "/app/src/pages/Excerpt.jsx",
                lineNumber: 131,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/Excerpt:115:12", "data-dynamic-content": "false", className: "text-center font-body text-base text-muted-foreground mt-4", children: "Continue reading in the full book..." }, void 0, false, {
                fileName: "/app/src/pages/Excerpt.jsx",
                lineNumber: 134,
                columnNumber: 13
              }, this)
            ] }, void 0, true, {
              fileName: "/app/src/pages/Excerpt.jsx",
              lineNumber: 91,
              columnNumber: 11
            }, this)
          ]
        },
        void 0,
        true,
        {
          fileName: "/app/src/pages/Excerpt.jsx",
          lineNumber: 78,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Excerpt:121:8", "data-dynamic-content": "false", className: "text-center mt-16", children: /* @__PURE__ */ jsxDEV(
        "a",
        {
          "data-source-location": "pages/Excerpt:122:10",
          "data-dynamic-content": "false",
          href: "#",
          className: "inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground font-body text-sm rounded-full hover:bg-primary/90 transition-all duration-300 hover:shadow-lg",
          children: "Get the Full Book"
        },
        void 0,
        false,
        {
          fileName: "/app/src/pages/Excerpt.jsx",
          lineNumber: 141,
          columnNumber: 11
        },
        this
      ) }, void 0, false, {
        fileName: "/app/src/pages/Excerpt.jsx",
        lineNumber: 140,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/app/src/pages/Excerpt.jsx",
      lineNumber: 39,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/app/src/pages/Excerpt.jsx",
    lineNumber: 29,
    columnNumber: 5
  }, this);
}
_c = Excerpt;
var _c;
$RefreshReg$(_c, "Excerpt");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/app/src/pages/Excerpt.jsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/app/src/pages/Excerpt.jsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,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QUEscUJBS0E7QUFBQSxjQUNBLHVCQUFDLE9BQUUsd0JBQXFCLHdCQUF1Qix3QkFBcUIsU0FBTyx5RkFBM0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFFQTtBQUFBLGNBQ0EsdUJBQUMsT0FBRSx3QkFBcUIsd0JBQXVCLHdCQUFxQixTQUFRLFdBQVUsc0RBQW9ELHFCQUExSTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUVBO0FBQUEsY0FDQSx1QkFBQyxPQUFFLHdCQUFxQix3QkFBdUIsd0JBQXFCLFNBQVEsV0FBVSw4REFBNEQsb0RBQWxKO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRUE7QUFBQSxpQkE3Q0Y7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkE4Q0E7QUFBQTtBQUFBO0FBQUEsUUEzREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BNERBO0FBQUEsTUFFQSx1QkFBQyxTQUFJLHdCQUFxQix1QkFBc0Isd0JBQXFCLFNBQVEsV0FBVSxxQkFDckY7QUFBQSxRQUFDO0FBQUE7QUFBQSxVQUFFLHdCQUFxQjtBQUFBLFVBQXVCLHdCQUFxQjtBQUFBLFVBQ3BFLE1BQUs7QUFBQSxVQUNMLFdBQVU7QUFBQSxVQUE0SztBQUFBO0FBQUEsUUFGdEw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BS0EsS0FORjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBT0E7QUFBQSxTQTVHRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBNkdBO0FBQUEsT0F2SEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQXdIQTtBQUVKO0FBQUNDLEtBNUh1Qkw7QUFBTyxJQUFBSztBQUFBLGFBQUFBLElBQUEiLCJuYW1lcyI6WyJSZWFjdCIsIm1vdGlvbiIsIlNlY3Rpb25IZWFkaW5nIiwiR29sZGVuVGhyZWFkIiwiRVhDRVJQVF9CRyIsIkV4Y2VycHQiLCJvcGFjaXR5IiwieSIsIm9uY2UiLCJkdXJhdGlvbiIsIl9jIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VzIjpbIkV4Y2VycHQuanN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcbmltcG9ydCBTZWN0aW9uSGVhZGluZyBmcm9tICcuLi9jb21wb25lbnRzL3NoYXJlZC9TZWN0aW9uSGVhZGluZyc7XG5pbXBvcnQgR29sZGVuVGhyZWFkIGZyb20gJy4uL2NvbXBvbmVudHMvc2hhcmVkL0dvbGRlblRocmVhZCc7XG5cbmNvbnN0IEVYQ0VSUFRfQkcgPSAnaHR0cHM6Ly9tZWRpYS5iYXNlNDQuY29tL2ltYWdlcy9wdWJsaWMvNmEwNGViMjk1ZDJhMDQ4YmMwMWEwY2FhLzJkNTU4N2I3YV9nZW5lcmF0ZWRfYTU4MTYwZTIucG5nJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRXhjZXJwdCgpIHtcbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0V4Y2VycHQ6MTA6NFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInB0LTI4IGxnOnB0LTM2IHBiLTIwIGxnOnBiLTMyXCI+XG4gICAgICB7LyogSGVybyBiYW5uZXIgKi99XG4gICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvRXhjZXJwdDoxMjo2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwicmVsYXRpdmUgaC02NCBsZzpoLTgwIG92ZXJmbG93LWhpZGRlbiBtYi0xNlwiPlxuICAgICAgICA8aW1nIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvRXhjZXJwdDoxMzo4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgc3JjPXtFWENFUlBUX0JHfSBhbHQ9XCJJbmsgYW5kIHBhcmNobWVudFwiIGNsYXNzTmFtZT1cInctZnVsbCBoLWZ1bGwgb2JqZWN0LWNvdmVyXCIgLz5cbiAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0V4Y2VycHQ6MTQ6OFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBpbnNldC0wIGJnLWdyYWRpZW50LXRvLWIgZnJvbS1mb3JlZ3JvdW5kLzUwIHRvLWJhY2tncm91bmRcIiAvPlxuICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvRXhjZXJwdDoxNTo4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cImFic29sdXRlIGluc2V0LTAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICA8aDEgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9FeGNlcnB0OjE2OjEwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cImZvbnQtZGlzcGxheSB0ZXh0LTR4bCBsZzp0ZXh0LTZ4bCBmb250LWJvbGQgdGV4dC13aGl0ZVwiPlJlYWQgYW4gRXhjZXJwdDwvaDE+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9FeGNlcnB0OjIwOjZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJtYXgtdy0zeGwgbXgtYXV0byBweC02IGxnOnB4LTEyXCI+XG4gICAgICAgIHsvKiBQcmVmYWNlICovfVxuICAgICAgICA8bW90aW9uLmRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0V4Y2VycHQ6MjI6OFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiXG4gICAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCwgeTogMzAgfX1cbiAgICAgICAgd2hpbGVJblZpZXc9e3sgb3BhY2l0eTogMSwgeTogMCB9fVxuICAgICAgICB2aWV3cG9ydD17eyBvbmNlOiB0cnVlIH19XG4gICAgICAgIHRyYW5zaXRpb249e3sgZHVyYXRpb246IDAuOCB9fT5cbiAgICAgICAgICBcbiAgICAgICAgICA8aDIgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9FeGNlcnB0OjI4OjEwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cImZvbnQtZGlzcGxheSB0ZXh0LTJ4bCBsZzp0ZXh0LTN4bCBmb250LXNlbWlib2xkIHRleHQtZm9yZWdyb3VuZCBtYi04IHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICBQcmVmYWNlXG4gICAgICAgICAgPC9oMj5cbiAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvRXhjZXJwdDozMToxMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJsaXRlcmFyeS10ZXh0IHRleHQtZm9yZWdyb3VuZC84MCBzcGFjZS15LTYgZm9udC1hY2NlbnRcIj5cbiAgICAgICAgICAgIDxwIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvRXhjZXJwdDozMjoxMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIj5cbiAgICAgICAgICAgICAgVGhlcmUgYXJlIG1vbWVudHMgaW4gbGlmZSB0aGF0IGFycml2ZSB1bmFubm91bmNlZCDigJQgcXVpZXQsIGFsbW9zdCBvcmRpbmFyeSDigJQgeWV0IGNhcnJ5IHdpdGhpbiBcbiAgICAgICAgICAgICAgdGhlbSB0aGUgcG93ZXIgdG8gY2hhbmdlIGV2ZXJ5dGhpbmcuIEEgbGV0dGVyIHRoYXQgYXJyaXZlcyBvbiBhIFR1ZXNkYXkgbW9ybmluZy4gQSBuYW1lIG1lbnRpb25lZCBcbiAgICAgICAgICAgICAgaW4gcGFzc2luZy4gQSBwaG9uZSBjYWxsIGZyb20gYSBzdHJhbmdlciB3aG8gc3BlYWtzIHdpdGggYW4gYWNjZW50IHlvdSBjYW4ndCBxdWl0ZSBwbGFjZS5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxwIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvRXhjZXJwdDozNzoxMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIj5cbiAgICAgICAgICAgICAgVGhpcyBpcyB0aGUgc3Rvcnkgb2Ygb25lIHN1Y2ggbW9tZW50LiBJdCBpcyBhbHNvIHRoZSBzdG9yeSBvZiB3aGF0IGhhcHBlbnMgYWZ0ZXIg4oCUIHdoZW4gY3VyaW9zaXR5IFxuICAgICAgICAgICAgICBvdmVyY29tZXMgY2F1dGlvbiwgd2hlbiB0aGUgcHVsbCBvZiB0aGUgdW5rbm93biBwcm92ZXMgc3Ryb25nZXIgdGhhbiB0aGUgY29tZm9ydCBvZiB0aGUgZmFtaWxpYXIuIFxuICAgICAgICAgICAgICBJdCBpcywgYXQgaXRzIGhlYXJ0LCBhIHN0b3J5IGFib3V0IGZhbWlseTogdGhlIG9uZSB5b3UncmUgYm9ybiBpbnRvLCB0aGUgb25lIHlvdSBkaXNjb3ZlciwgYW5kIHRoZSBcbiAgICAgICAgICAgICAgb25lIHlvdSBjaG9vc2UgdG8gZW1icmFjZS5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxwIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvRXhjZXJwdDo0MzoxMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIj5cbiAgICAgICAgICAgICAgVGhlIGV2ZW50cyBpbiB0aGVzZSBwYWdlcyBhcmUgZmljdGlvbmFsLCBidXQgdGhlIGVtb3Rpb25zIGFyZSByZWFsLiBJIGhhdmUgdHJpZWQgdG8gdGVsbCB0aGlzIHN0b3J5IFxuICAgICAgICAgICAgICB3aXRoIGhvbmVzdHkg4oCUIGFib3V0IHRoZSBhd2t3YXJkbmVzcyBvZiBtZWV0aW5nIHN0cmFuZ2VycyB3aG8gc2hhcmUgeW91ciBibG9vZCwgYWJvdXQgdGhlIGJlYXV0eSBcbiAgICAgICAgICAgICAgb2YgbGFuZHNjYXBlcyB0aGF0IGZlZWwgbGlrZSBob21lIGV2ZW4gd2hlbiB5b3UndmUgbmV2ZXIgYmVlbiB0aGVyZSBiZWZvcmUsIGFuZCBhYm91dCB0aGUgcXVpZXQgXG4gICAgICAgICAgICAgIGNvdXJhZ2UgaXQgdGFrZXMgdG8gb3BlbiB5b3VyIGhlYXJ0IHRvIHBlb3BsZSB5b3UgbmV2ZXIga25ldyB5b3Ugd2VyZSBtaXNzaW5nLlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPHAgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9FeGNlcnB0OjQ5OjEyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiPlxuICAgICAgICAgICAgICBUaGlzIGJvb2sgaXMgZm9yIGFueW9uZSB3aG8gaGFzIGV2ZXIgd29uZGVyZWQgd2hhdCBsaWVzIGJleW9uZCB0aGUgZWRnZXMgb2YgdGhlaXIgb3duIHN0b3J5LlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPHAgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9FeGNlcnB0OjUyOjEyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInRleHQtcmlnaHQgaXRhbGljIHRleHQtbXV0ZWQtZm9yZWdyb3VuZFwiPuKAlCBSb2JlcnQgVGlla2VuPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L21vdGlvbi5kaXY+XG5cbiAgICAgICAgPEdvbGRlblRocmVhZCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0V4Y2VycHQ6NTY6OFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiAvPlxuXG4gICAgICAgIHsvKiBDaGFwdGVyIDEgKi99XG4gICAgICAgIDxtb3Rpb24uZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvRXhjZXJwdDo1OTo4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCJcbiAgICAgICAgaW5pdGlhbD17eyBvcGFjaXR5OiAwLCB5OiAzMCB9fVxuICAgICAgICB3aGlsZUluVmlldz17eyBvcGFjaXR5OiAxLCB5OiAwIH19XG4gICAgICAgIHZpZXdwb3J0PXt7IG9uY2U6IHRydWUgfX1cbiAgICAgICAgdHJhbnNpdGlvbj17eyBkdXJhdGlvbjogMC44IH19PlxuICAgICAgICAgIFxuICAgICAgICAgIDxoMiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0V4Y2VycHQ6NjU6MTBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwiZm9udC1kaXNwbGF5IHRleHQtMnhsIGxnOnRleHQtM3hsIGZvbnQtc2VtaWJvbGQgdGV4dC1mb3JlZ3JvdW5kIG1iLTIgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgIENoYXB0ZXIgT25lXG4gICAgICAgICAgPC9oMj5cbiAgICAgICAgICA8cCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0V4Y2VycHQ6Njg6MTBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwiZm9udC1hY2NlbnQgaXRhbGljIHRleHQtbGcgdGV4dC1hY2NlbnQgdGV4dC1jZW50ZXIgbWItMTBcIj5cbiAgICAgICAgICAgIFRoZSBQaG9uZSBDYWxsXG4gICAgICAgICAgPC9wPlxuXG4gICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0V4Y2VycHQ6NzI6MTBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwibGl0ZXJhcnktdGV4dCB0ZXh0LWZvcmVncm91bmQvODAgc3BhY2UteS02IGZvbnQtYWNjZW50XCI+XG4gICAgICAgICAgICA8cCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0V4Y2VycHQ6NzM6MTJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCI+XG4gICAgICAgICAgICAgIFRoZSBwaG9uZSByYW5nIGF0IHByZWNpc2VseSB0ZW4gbWludXRlcyBwYXN0IG5pbmUgb24gYSBNb25kYXkgbW9ybmluZyBpbiBOb3ZlbWJlciwgd2hpY2gsIGFzIFxuICAgICAgICAgICAgICBNaWNoYWVsIERvZXNidXJnIHdvdWxkIGxhdGVyIHJlZmxlY3QsIHdhcyBhbiBlbnRpcmVseSB1bnJlbWFya2FibGUgdGltZSBmb3IgYSBsaWZlIHRvIGNoYW5nZSBcbiAgICAgICAgICAgICAgZGlyZWN0aW9uLiBIZSB3YXMgc2l0dGluZyBpbiBoaXMgb2ZmaWNlIG9uIHRoZSB0aGlyZCBmbG9vciBvZiBhIGNvbnZlcnRlZCBjYW5hbCBob3VzZSBpbiBBbXN0ZXJkYW0sIFxuICAgICAgICAgICAgICBzdGFyaW5nIGF0IGEgc3ByZWFkc2hlZXQgdGhhdCBoYWQgYmVlbiBzdGFyaW5nIGJhY2sgYXQgaGltIGZvciB0aGUgYmV0dGVyIHBhcnQgb2YgYW4gaG91ciwgd2hlbiBcbiAgICAgICAgICAgICAgaGlzIG1vYmlsZSBidXp6ZWQgYWdhaW5zdCB0aGUgZGFyayBvYWsgb2YgaGlzIGRlc2suXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8cCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0V4Y2VycHQ6ODA6MTJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCI+XG4gICAgICAgICAgICAgIFRoZSBudW1iZXIgd2FzIEVuZ2xpc2gg4oCUIGhlIGNvdWxkIHRlbGwgZnJvbSB0aGUgY291bnRyeSBjb2RlIOKAlCBhbmQgdW5mYW1pbGlhci4gVW5kZXIgbm9ybWFsIFxuICAgICAgICAgICAgICBjaXJjdW1zdGFuY2VzLCBNaWNoYWVsIHdvdWxkIGhhdmUgbGV0IGl0IGdvIHRvIHZvaWNlbWFpbC4gSGUgd2FzIG5vdCBhIG1hbiB3aG8gYW5zd2VyZWQgdW5rbm93biBcbiAgICAgICAgICAgICAgY2FsbHMuIEhlIGJlbGlldmVkLCBhcyBoaXMgZmF0aGVyIGhhZCBiZWxpZXZlZCwgdGhhdCBhbnl0aGluZyB0cnVseSBpbXBvcnRhbnQgd291bGQgZmluZCBpdHMgd2F5IFxuICAgICAgICAgICAgICB0byB5b3UgaW4gZHVlIGNvdXJzZSwgYW5kIGFueXRoaW5nIHRoYXQgY291bGRuJ3Qgd2FpdCB3YXMgdXN1YWxseSBzb21ldGhpbmcgeW91J2QgcmF0aGVyIGhhdmUgXG4gICAgICAgICAgICAgIHdhaXRlZCBmb3IuXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8cCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0V4Y2VycHQ6ODc6MTJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCI+XG4gICAgICAgICAgICAgIEJ1dCBvbiB0aGF0IHBhcnRpY3VsYXIgTW9uZGF5LCB3aXRoIHRoZSByYWluIG1ha2luZyBzaWx2ZXIgcml2ZXJzIG9mIGhpcyB3aW5kb3dwYW5lcyBhbmQgdGhlIFxuICAgICAgICAgICAgICBzcHJlYWRzaGVldCByZWZ1c2luZyB0byB5aWVsZCBhbnkgdXNlZnVsIGluc2lnaHQsIE1pY2hhZWwgcGlja2VkIHVwLlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPHAgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9FeGNlcnB0OjkxOjEyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiPlxuICAgICAgICAgICAgICBcIk1yLiBEb2VzYnVyZz9cIiBUaGUgdm9pY2Ugd2FzIG1hbGUsIEVuZ2xpc2gsIGFuZCBjYXJyaWVkIHRoZSBjYXJlZnVsIGVudW5jaWF0aW9uIG9mIHNvbWVvbmUgXG4gICAgICAgICAgICAgIGFjY3VzdG9tZWQgdG8gc3BlYWtpbmcgYWNyb3NzIGludGVybmF0aW9uYWwgbGluZXMuIFwiTXIuIE1pY2hhZWwgRG9lc2J1cmc/XCJcbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxwIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvRXhjZXJwdDo5NToxMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIj5cbiAgICAgICAgICAgICAgXCJTcGVha2luZy5cIlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPHAgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9FeGNlcnB0Ojk4OjEyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiPlxuICAgICAgICAgICAgICBcIkdvb2QgbW9ybmluZywgc2lyLiBNeSBuYW1lIGlzIENoYXJsZXMgQXNod29ydGguIEknbSBhIHNvbGljaXRvciB3aXRoIEFzaHdvcnRoLCBCbGFrZSBhbmQgXG4gICAgICAgICAgICAgIFBhcnRuZXJzIGluIENoZWx0ZW5oYW0uIEkgYXBvbG9naXNlIGZvciB0aGUgdW5hbm5vdW5jZWQgY2FsbCwgYnV0IEknbSByaW5naW5nIG9uIGEgbWF0dGVyIFxuICAgICAgICAgICAgICBvZiBzb21lIGRlbGljYWN5LlwiXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8cCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0V4Y2VycHQ6MTAzOjEyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiPlxuICAgICAgICAgICAgICBNaWNoYWVsIGxlYW5lZCBiYWNrIGluIGhpcyBjaGFpci4gU29saWNpdG9yLiBDaGVsdGVuaGFtLiBEZWxpY2FjeS4gTm9uZSBvZiB0aGVzZSB3b3JkcywgXG4gICAgICAgICAgICAgIGluZGl2aWR1YWxseSBvciBjb2xsZWN0aXZlbHksIGhhZCBhbnkgcGxhY2UgaW4gaGlzIE1vbmRheSBtb3JuaW5nLiBIZSBoYWQgbm8gYnVzaW5lc3MgaW4gXG4gICAgICAgICAgICAgIENoZWx0ZW5oYW0sIG5vIGRlYWxpbmdzIHdpdGggRW5nbGlzaCBzb2xpY2l0b3JzLCBhbmQgYXMgZmFyIGFzIGhlIHdhcyBhd2FyZSwgbm8gbWF0dGVycyBcbiAgICAgICAgICAgICAgb2YgZGVsaWNhY3kgYXdhaXRpbmcgcmVzb2x1dGlvbiBvbiB0aGUgb3RoZXIgc2lkZSBvZiB0aGUgTm9ydGggU2VhLlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPHAgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9FeGNlcnB0OjEwOToxMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIj5cbiAgICAgICAgICAgICAgXCJJJ20gbGlzdGVuaW5nLFwiIGhlIHNhaWQsIGJlY2F1c2UgaXQgc2VlbWVkIHRoZSBvbmx5IHJlYXNvbmFibGUgcmVzcG9uc2UuXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8cCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0V4Y2VycHQ6MTEyOjEyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHRleHQtYWNjZW50IGZvbnQtZGlzcGxheSB0ZXh0LWxnIG10LTEyXCI+XG4gICAgICAgICAgICAgICogKiAqXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8cCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0V4Y2VycHQ6MTE1OjEyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIGZvbnQtYm9keSB0ZXh0LWJhc2UgdGV4dC1tdXRlZC1mb3JlZ3JvdW5kIG10LTRcIj5cbiAgICAgICAgICAgICAgQ29udGludWUgcmVhZGluZyBpbiB0aGUgZnVsbCBib29rLi4uXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbW90aW9uLmRpdj5cblxuICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvRXhjZXJwdDoxMjE6OFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBtdC0xNlwiPlxuICAgICAgICAgIDxhIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvRXhjZXJwdDoxMjI6MTBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCJcbiAgICAgICAgICBocmVmPVwiI1wiXG4gICAgICAgICAgY2xhc3NOYW1lPVwiaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIGdhcC0yIHB4LTggcHktMyBiZy1wcmltYXJ5IHRleHQtcHJpbWFyeS1mb3JlZ3JvdW5kIGZvbnQtYm9keSB0ZXh0LXNtIHJvdW5kZWQtZnVsbCBob3ZlcjpiZy1wcmltYXJ5LzkwIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMCBob3ZlcjpzaGFkb3ctbGdcIj5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgR2V0IHRoZSBGdWxsIEJvb2tcbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPik7XG5cbn0iXSwiZmlsZSI6Ii9hcHAvc3JjL3BhZ2VzL0V4Y2VycHQuanN4In0=