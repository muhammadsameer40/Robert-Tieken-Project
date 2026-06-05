import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/pages/News.jsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=d703caa5"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/app/src/pages/News.jsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
import __vite__cjsImport3_react from "/node_modules/.vite/deps/react.js?v=d703caa5"; const React = __vite__cjsImport3_react.__esModule ? __vite__cjsImport3_react.default : __vite__cjsImport3_react;
import { motion } from "/node_modules/.vite/deps/framer-motion.js?v=d703caa5";
import SectionHeading from "/src/components/shared/SectionHeading.jsx";
import { Calendar } from "/node_modules/.vite/deps/lucide-react.js?v=0929618f";
const newsItems = [
  {
    date: "May 2026",
    title: "Distant Cousin Now Available in English",
    excerpt: `After months of careful translation and editing, the English edition of "Distant Cousin" is now available worldwide. Robert is thrilled to share Michael Doesburg's story with a global audience.`
  },
  {
    date: "April 2026",
    title: "Verre Neven — Dutch Edition Published",
    excerpt: 'The original Dutch edition of the novel, "Verre Neven," has been published to warm reviews. Readers have praised its authentic voice and heartfelt storytelling.'
  },
  {
    date: "March 2026",
    title: "Author Interview: The Story Behind the Story",
    excerpt: 'Robert shares the personal experiences and family discoveries that inspired him to write "Distant Cousin" — a conversation about cross-cultural identity and the surprises that family history can hold.'
  }
];
export default function News() {
  return /* @__PURE__ */ jsxDEV("section", { "data-source-location": "pages/News:26:4", "data-dynamic-content": "true", className: "pt-28 lg:pt-36 pb-20 lg:pb-32 px-6 lg:px-12", children: /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/News:27:6", "data-dynamic-content": "true", className: "max-w-3xl mx-auto", children: [
    /* @__PURE__ */ jsxDEV(
      SectionHeading,
      {
        "data-source-location": "pages/News:28:8",
        "data-dynamic-content": "false",
        title: "News & Updates",
        subtitle: "The latest from Robert's writing world"
      },
      void 0,
      false,
      {
        fileName: "/app/src/pages/News.jsx",
        lineNumber: 47,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/News:33:8", "data-dynamic-content": "true", className: "space-y-12", children: newsItems.map(
      (item, i) => /* @__PURE__ */ jsxDEV(
        motion.article,
        {
          "data-source-location": "pages/News:35:12",
          "data-dynamic-content": "true",
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.6, delay: i * 0.15 },
          className: "group",
          "data-arr-index": i,
          "data-arr-variable-name": "newsItems",
          children: [
            /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/News:43:14", "data-dynamic-content": "true", className: "flex items-center gap-2 mb-3", "data-arr-index": i, "data-arr-variable-name": "newsItems", children: [
              /* @__PURE__ */ jsxDEV(Calendar, { "data-source-location": "pages/News:44:16", "data-dynamic-content": "false", className: "w-4 h-4 text-accent", "data-arr-index": i, "data-arr-variable-name": "newsItems" }, void 0, false, {
                fileName: "/app/src/pages/News.jsx",
                lineNumber: 63,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ jsxDEV("span", { "data-source-location": "pages/News:45:16", "data-dynamic-content": "true", className: "font-body text-sm text-accent font-medium", "data-arr-index": i, "data-arr-variable-name": "newsItems", "data-arr-field": "date", children: item.date }, void 0, false, {
                fileName: "/app/src/pages/News.jsx",
                lineNumber: 64,
                columnNumber: 17
              }, this)
            ] }, void 0, true, {
              fileName: "/app/src/pages/News.jsx",
              lineNumber: 62,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV("h3", { "data-source-location": "pages/News:47:14", "data-dynamic-content": "true", className: "font-display text-xl lg:text-2xl font-semibold text-foreground mb-3 group-hover:text-accent transition-colors", "data-arr-index": i, "data-arr-variable-name": "newsItems", "data-arr-field": "title", children: item.title }, void 0, false, {
              fileName: "/app/src/pages/News.jsx",
              lineNumber: 66,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/News:50:14", "data-dynamic-content": "true", className: "font-body text-base text-muted-foreground leading-relaxed", "data-arr-index": i, "data-arr-variable-name": "newsItems", "data-arr-field": "excerpt", children: item.excerpt }, void 0, false, {
              fileName: "/app/src/pages/News.jsx",
              lineNumber: 69,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/News:53:14", "data-dynamic-content": "false", className: "golden-thread max-w-16 mt-8", "data-arr-index": i, "data-arr-variable-name": "newsItems" }, void 0, false, {
              fileName: "/app/src/pages/News.jsx",
              lineNumber: 72,
              columnNumber: 15
            }, this)
          ]
        },
        i,
        true,
        {
          fileName: "/app/src/pages/News.jsx",
          lineNumber: 54,
          columnNumber: 11
        },
        this
      )
    ) }, void 0, false, {
      fileName: "/app/src/pages/News.jsx",
      lineNumber: 52,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "/app/src/pages/News.jsx",
    lineNumber: 46,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "/app/src/pages/News.jsx",
    lineNumber: 45,
    columnNumber: 5
  }, this);
}
_c = News;
var _c;
$RefreshReg$(_c, "News");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/app/src/pages/News.jsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/app/src/pages/News.jsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,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QUFBQTtBQUFBO0FBQUEsTUFtQkU7QUFBQSxJQUNGLEtBdEJGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0F1QkE7QUFBQSxPQTdCRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBOEJBLEtBL0JGO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FnQ0E7QUFFSjtBQUFDTSxLQXBDdUJUO0FBQUksSUFBQVM7QUFBQSxhQUFBQSxJQUFBIiwibmFtZXMiOlsiUmVhY3QiLCJtb3Rpb24iLCJTZWN0aW9uSGVhZGluZyIsIkNhbGVuZGFyIiwibmV3c0l0ZW1zIiwiZGF0ZSIsInRpdGxlIiwiZXhjZXJwdCIsIk5ld3MiLCJtYXAiLCJpdGVtIiwiaSIsIm9wYWNpdHkiLCJ5Iiwib25jZSIsImR1cmF0aW9uIiwiZGVsYXkiLCJfYyJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlcyI6WyJOZXdzLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XG5pbXBvcnQgU2VjdGlvbkhlYWRpbmcgZnJvbSAnLi4vY29tcG9uZW50cy9zaGFyZWQvU2VjdGlvbkhlYWRpbmcnO1xuaW1wb3J0IHsgQ2FsZW5kYXIgfSBmcm9tICdsdWNpZGUtcmVhY3QnO1xuXG5jb25zdCBuZXdzSXRlbXMgPSBbXG57XG4gIGRhdGU6ICdNYXkgMjAyNicsXG4gIHRpdGxlOiAnRGlzdGFudCBDb3VzaW4gTm93IEF2YWlsYWJsZSBpbiBFbmdsaXNoJyxcbiAgZXhjZXJwdDogJ0FmdGVyIG1vbnRocyBvZiBjYXJlZnVsIHRyYW5zbGF0aW9uIGFuZCBlZGl0aW5nLCB0aGUgRW5nbGlzaCBlZGl0aW9uIG9mIFwiRGlzdGFudCBDb3VzaW5cIiBpcyBub3cgYXZhaWxhYmxlIHdvcmxkd2lkZS4gUm9iZXJ0IGlzIHRocmlsbGVkIHRvIHNoYXJlIE1pY2hhZWwgRG9lc2J1cmdcXCdzIHN0b3J5IHdpdGggYSBnbG9iYWwgYXVkaWVuY2UuJ1xufSxcbntcbiAgZGF0ZTogJ0FwcmlsIDIwMjYnLFxuICB0aXRsZTogJ1ZlcnJlIE5ldmVuIOKAlCBEdXRjaCBFZGl0aW9uIFB1Ymxpc2hlZCcsXG4gIGV4Y2VycHQ6ICdUaGUgb3JpZ2luYWwgRHV0Y2ggZWRpdGlvbiBvZiB0aGUgbm92ZWwsIFwiVmVycmUgTmV2ZW4sXCIgaGFzIGJlZW4gcHVibGlzaGVkIHRvIHdhcm0gcmV2aWV3cy4gUmVhZGVycyBoYXZlIHByYWlzZWQgaXRzIGF1dGhlbnRpYyB2b2ljZSBhbmQgaGVhcnRmZWx0IHN0b3J5dGVsbGluZy4nXG59LFxue1xuICBkYXRlOiAnTWFyY2ggMjAyNicsXG4gIHRpdGxlOiAnQXV0aG9yIEludGVydmlldzogVGhlIFN0b3J5IEJlaGluZCB0aGUgU3RvcnknLFxuICBleGNlcnB0OiAnUm9iZXJ0IHNoYXJlcyB0aGUgcGVyc29uYWwgZXhwZXJpZW5jZXMgYW5kIGZhbWlseSBkaXNjb3ZlcmllcyB0aGF0IGluc3BpcmVkIGhpbSB0byB3cml0ZSBcIkRpc3RhbnQgQ291c2luXCIg4oCUIGEgY29udmVyc2F0aW9uIGFib3V0IGNyb3NzLWN1bHR1cmFsIGlkZW50aXR5IGFuZCB0aGUgc3VycHJpc2VzIHRoYXQgZmFtaWx5IGhpc3RvcnkgY2FuIGhvbGQuJ1xufV07XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmV3cygpIHtcbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL05ld3M6MjY6NFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInB0LTI4IGxnOnB0LTM2IHBiLTIwIGxnOnBiLTMyIHB4LTYgbGc6cHgtMTJcIj5cbiAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9OZXdzOjI3OjZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJtYXgtdy0zeGwgbXgtYXV0b1wiPlxuICAgICAgICA8U2VjdGlvbkhlYWRpbmcgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9OZXdzOjI4OjhcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCJcbiAgICAgICAgdGl0bGU9XCJOZXdzICYgVXBkYXRlc1wiXG4gICAgICAgIHN1YnRpdGxlPVwiVGhlIGxhdGVzdCBmcm9tIFJvYmVydCdzIHdyaXRpbmcgd29ybGRcIiAvPlxuICAgICAgICBcblxuICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvTmV3czozMzo4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwic3BhY2UteS0xMlwiPlxuICAgICAgICAgIHtuZXdzSXRlbXMubWFwKChpdGVtLCBpKSA9PlxuICAgICAgICAgIDxtb3Rpb24uYXJ0aWNsZSBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL05ld3M6MzU6MTJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIlxuICAgICAgICAgIGtleT17aX1cbiAgICAgICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAsIHk6IDMwIH19XG4gICAgICAgICAgd2hpbGVJblZpZXc9e3sgb3BhY2l0eTogMSwgeTogMCB9fVxuICAgICAgICAgIHZpZXdwb3J0PXt7IG9uY2U6IHRydWUgfX1cbiAgICAgICAgICB0cmFuc2l0aW9uPXt7IGR1cmF0aW9uOiAwLjYsIGRlbGF5OiBpICogMC4xNSB9fVxuICAgICAgICAgIGNsYXNzTmFtZT1cImdyb3VwXCIgZGF0YS1hcnItaW5kZXg9e2l9IGRhdGEtYXJyLXZhcmlhYmxlLW5hbWU9XCJuZXdzSXRlbXNcIj5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvTmV3czo0MzoxNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0yIG1iLTNcIiBkYXRhLWFyci1pbmRleD17aX0gZGF0YS1hcnItdmFyaWFibGUtbmFtZT1cIm5ld3NJdGVtc1wiPlxuICAgICAgICAgICAgICAgIDxDYWxlbmRhciBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL05ld3M6NDQ6MTZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidy00IGgtNCB0ZXh0LWFjY2VudFwiIGRhdGEtYXJyLWluZGV4PXtpfSBkYXRhLWFyci12YXJpYWJsZS1uYW1lPVwibmV3c0l0ZW1zXCIgLz5cbiAgICAgICAgICAgICAgICA8c3BhbiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL05ld3M6NDU6MTZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJmb250LWJvZHkgdGV4dC1zbSB0ZXh0LWFjY2VudCBmb250LW1lZGl1bVwiIGRhdGEtYXJyLWluZGV4PXtpfSBkYXRhLWFyci12YXJpYWJsZS1uYW1lPVwibmV3c0l0ZW1zXCIgZGF0YS1hcnItZmllbGQ9XCJkYXRlXCI+e2l0ZW0uZGF0ZX08L3NwYW4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8aDMgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9OZXdzOjQ3OjE0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwiZm9udC1kaXNwbGF5IHRleHQteGwgbGc6dGV4dC0yeGwgZm9udC1zZW1pYm9sZCB0ZXh0LWZvcmVncm91bmQgbWItMyBncm91cC1ob3Zlcjp0ZXh0LWFjY2VudCB0cmFuc2l0aW9uLWNvbG9yc1wiIGRhdGEtYXJyLWluZGV4PXtpfSBkYXRhLWFyci12YXJpYWJsZS1uYW1lPVwibmV3c0l0ZW1zXCIgZGF0YS1hcnItZmllbGQ9XCJ0aXRsZVwiPlxuICAgICAgICAgICAgICAgIHtpdGVtLnRpdGxlfVxuICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICA8cCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL05ld3M6NTA6MTRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJmb250LWJvZHkgdGV4dC1iYXNlIHRleHQtbXV0ZWQtZm9yZWdyb3VuZCBsZWFkaW5nLXJlbGF4ZWRcIiBkYXRhLWFyci1pbmRleD17aX0gZGF0YS1hcnItdmFyaWFibGUtbmFtZT1cIm5ld3NJdGVtc1wiIGRhdGEtYXJyLWZpZWxkPVwiZXhjZXJwdFwiPlxuICAgICAgICAgICAgICAgIHtpdGVtLmV4Y2VycHR9XG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL05ld3M6NTM6MTRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwiZ29sZGVuLXRocmVhZCBtYXgtdy0xNiBtdC04XCIgZGF0YS1hcnItaW5kZXg9e2l9IGRhdGEtYXJyLXZhcmlhYmxlLW5hbWU9XCJuZXdzSXRlbXNcIiAvPlxuICAgICAgICAgICAgPC9tb3Rpb24uYXJ0aWNsZT5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj4pO1xuXG59Il0sImZpbGUiOiIvYXBwL3NyYy9wYWdlcy9OZXdzLmpzeCJ9