import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/layout/SiteLayout.jsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=d703caa5"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/app/src/components/layout/SiteLayout.jsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
import __vite__cjsImport3_react from "/node_modules/.vite/deps/react.js?v=d703caa5"; const React = __vite__cjsImport3_react.__esModule ? __vite__cjsImport3_react.default : __vite__cjsImport3_react;
import { Outlet } from "/node_modules/.vite/deps/react-router-dom.js?v=89a0cb40";
import Navbar from "/src/components/layout/Navbar.jsx";
import Footer from "/src/components/layout/Footer.jsx";
export default function SiteLayout() {
  return /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/layout/SiteLayout:8:4", "data-dynamic-content": "false", className: "min-h-screen flex flex-col", children: [
    /* @__PURE__ */ jsxDEV(Navbar, { "data-source-location": "components/layout/SiteLayout:9:6", "data-dynamic-content": "false" }, void 0, false, {
      fileName: "/app/src/components/layout/SiteLayout.jsx",
      lineNumber: 28,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("main", { "data-source-location": "components/layout/SiteLayout:10:6", "data-dynamic-content": "false", className: "flex-1", children: /* @__PURE__ */ jsxDEV(Outlet, { "data-source-location": "components/layout/SiteLayout:11:8", "data-dynamic-content": "false" }, void 0, false, {
      fileName: "/app/src/components/layout/SiteLayout.jsx",
      lineNumber: 30,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/app/src/components/layout/SiteLayout.jsx",
      lineNumber: 29,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(Footer, { "data-source-location": "components/layout/SiteLayout:13:6", "data-dynamic-content": "false" }, void 0, false, {
      fileName: "/app/src/components/layout/SiteLayout.jsx",
      lineNumber: 32,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/app/src/components/layout/SiteLayout.jsx",
    lineNumber: 27,
    columnNumber: 5
  }, this);
}
_c = SiteLayout;
var _c;
$RefreshReg$(_c, "SiteLayout");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/app/src/components/layout/SiteLayout.jsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/app/src/components/layout/SiteLayout.jsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBUU07Ozs7Ozs7Ozs7Ozs7Ozs7QUFSTixPQUFPQSxXQUFXO0FBQ2xCLFNBQVNDLGNBQWM7QUFDdkIsT0FBT0MsWUFBWTtBQUNuQixPQUFPQyxZQUFZO0FBRW5CLHdCQUF3QkMsYUFBYTtBQUNuQyxTQUNFLHVCQUFDLFNBQUksd0JBQXFCLG9DQUFtQyx3QkFBcUIsU0FBUSxXQUFVLDhCQUNsRztBQUFBLDJCQUFDLFVBQU8sd0JBQXFCLG9DQUFtQyx3QkFBcUIsV0FBckY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUE0RjtBQUFBLElBQzVGLHVCQUFDLFVBQUssd0JBQXFCLHFDQUFvQyx3QkFBcUIsU0FBUSxXQUFVLFVBQ3BHLGlDQUFDLFVBQU8sd0JBQXFCLHFDQUFvQyx3QkFBcUIsV0FBdEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUE2RixLQUQvRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBRUE7QUFBQSxJQUNBLHVCQUFDLFVBQU8sd0JBQXFCLHFDQUFvQyx3QkFBcUIsV0FBdEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUE2RjtBQUFBLE9BTC9GO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FNQTtBQUVKO0FBQUNDLEtBVnVCRDtBQUFVLElBQUFDO0FBQUEsYUFBQUEsSUFBQSIsIm5hbWVzIjpbIlJlYWN0IiwiT3V0bGV0IiwiTmF2YmFyIiwiRm9vdGVyIiwiU2l0ZUxheW91dCIsIl9jIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VzIjpbIlNpdGVMYXlvdXQuanN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBPdXRsZXQgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCBOYXZiYXIgZnJvbSAnLi9OYXZiYXInO1xuaW1wb3J0IEZvb3RlciBmcm9tICcuL0Zvb3Rlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNpdGVMYXlvdXQoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvbGF5b3V0L1NpdGVMYXlvdXQ6ODo0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cIm1pbi1oLXNjcmVlbiBmbGV4IGZsZXgtY29sXCI+XG4gICAgICA8TmF2YmFyIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9sYXlvdXQvU2l0ZUxheW91dDo5OjZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgLz5cbiAgICAgIDxtYWluIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9sYXlvdXQvU2l0ZUxheW91dDoxMDo2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cImZsZXgtMVwiPlxuICAgICAgICA8T3V0bGV0IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9sYXlvdXQvU2l0ZUxheW91dDoxMTo4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIC8+XG4gICAgICA8L21haW4+XG4gICAgICA8Rm9vdGVyIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiY29tcG9uZW50cy9sYXlvdXQvU2l0ZUxheW91dDoxMzo2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIC8+XG4gICAgPC9kaXY+KTtcblxufSJdLCJmaWxlIjoiL2FwcC9zcmMvY29tcG9uZW50cy9sYXlvdXQvU2l0ZUxheW91dC5qc3gifQ==