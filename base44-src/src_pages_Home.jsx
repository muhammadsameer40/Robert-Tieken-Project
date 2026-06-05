import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/pages/Home.jsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=d703caa5"; const Fragment = __vite__cjsImport0_react_jsxDevRuntime["Fragment"]; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/app/src/pages/Home.jsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
import __vite__cjsImport3_react from "/node_modules/.vite/deps/react.js?v=d703caa5"; const React = __vite__cjsImport3_react.__esModule ? __vite__cjsImport3_react.default : __vite__cjsImport3_react;
import HeroSection from "/src/components/home/HeroSection.jsx?t=1778771232158";
import BlurbSection from "/src/components/home/BlurbSection.jsx";
import BooksShowcase from "/src/components/home/BooksShowcase.jsx?t=1778770854590";
import AuthorTeaser from "/src/components/home/AuthorTeaser.jsx?t=1778770854591";
export default function Home() {
  return /* @__PURE__ */ jsxDEV(Fragment, { children: [
    /* @__PURE__ */ jsxDEV(HeroSection, { "data-source-location": "pages/Home:10:6", "data-dynamic-content": "false" }, void 0, false, {
      fileName: "/app/src/pages/Home.jsx",
      lineNumber: 29,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(BlurbSection, { "data-source-location": "pages/Home:11:6", "data-dynamic-content": "false" }, void 0, false, {
      fileName: "/app/src/pages/Home.jsx",
      lineNumber: 30,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(BooksShowcase, { "data-source-location": "pages/Home:12:6", "data-dynamic-content": "false" }, void 0, false, {
      fileName: "/app/src/pages/Home.jsx",
      lineNumber: 31,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(AuthorTeaser, { "data-source-location": "pages/Home:13:6", "data-dynamic-content": "false" }, void 0, false, {
      fileName: "/app/src/pages/Home.jsx",
      lineNumber: 32,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/app/src/pages/Home.jsx",
    lineNumber: 28,
    columnNumber: 5
  }, this);
}
_c = Home;
var _c;
$RefreshReg$(_c, "Home");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/app/src/pages/Home.jsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/app/src/pages/Home.jsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBUUksbUJBQ0UsY0FERjs7Ozs7Ozs7Ozs7Ozs7OztBQVJKLE9BQU9BLFdBQVc7QUFDbEIsT0FBT0MsaUJBQWlCO0FBQ3hCLE9BQU9DLGtCQUFrQjtBQUN6QixPQUFPQyxtQkFBbUI7QUFDMUIsT0FBT0Msa0JBQWtCO0FBRXpCLHdCQUF3QkMsT0FBTztBQUM3QixTQUNFLG1DQUNFO0FBQUEsMkJBQUMsZUFBWSx3QkFBcUIsbUJBQWtCLHdCQUFxQixXQUF6RTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQWdGO0FBQUEsSUFDaEYsdUJBQUMsZ0JBQWEsd0JBQXFCLG1CQUFrQix3QkFBcUIsV0FBMUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFpRjtBQUFBLElBQ2pGLHVCQUFDLGlCQUFjLHdCQUFxQixtQkFBa0Isd0JBQXFCLFdBQTNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBa0Y7QUFBQSxJQUNsRix1QkFBQyxnQkFBYSx3QkFBcUIsbUJBQWtCLHdCQUFxQixXQUExRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQWlGO0FBQUEsT0FKbkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUtBO0FBRUo7QUFBQ0MsS0FUdUJEO0FBQUksSUFBQUM7QUFBQSxhQUFBQSxJQUFBIiwibmFtZXMiOlsiUmVhY3QiLCJIZXJvU2VjdGlvbiIsIkJsdXJiU2VjdGlvbiIsIkJvb2tzU2hvd2Nhc2UiLCJBdXRob3JUZWFzZXIiLCJIb21lIiwiX2MiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsiSG9tZS5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBIZXJvU2VjdGlvbiBmcm9tICcuLi9jb21wb25lbnRzL2hvbWUvSGVyb1NlY3Rpb24nO1xuaW1wb3J0IEJsdXJiU2VjdGlvbiBmcm9tICcuLi9jb21wb25lbnRzL2hvbWUvQmx1cmJTZWN0aW9uJztcbmltcG9ydCBCb29rc1Nob3djYXNlIGZyb20gJy4uL2NvbXBvbmVudHMvaG9tZS9Cb29rc1Nob3djYXNlJztcbmltcG9ydCBBdXRob3JUZWFzZXIgZnJvbSAnLi4vY29tcG9uZW50cy9ob21lL0F1dGhvclRlYXNlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZXJvU2VjdGlvbiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0hvbWU6MTA6NlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiAvPlxuICAgICAgPEJsdXJiU2VjdGlvbiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0hvbWU6MTE6NlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiAvPlxuICAgICAgPEJvb2tzU2hvd2Nhc2UgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9Ib21lOjEyOjZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgLz5cbiAgICAgIDxBdXRob3JUZWFzZXIgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9Ib21lOjEzOjZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgLz5cbiAgICA8Lz4pO1xuXG59Il0sImZpbGUiOiIvYXBwL3NyYy9wYWdlcy9Ib21lLmpzeCJ9