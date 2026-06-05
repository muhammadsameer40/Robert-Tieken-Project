import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/App.jsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=d703caa5"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/app/src/App.jsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
var _s = $RefreshSig$();
import { Toaster } from "/src/components/ui/toaster.jsx";
import { QueryClientProvider } from "/node_modules/.vite/deps/@tanstack_react-query.js?v=ee36527e";
import { queryClientInstance } from "/src/lib/query-client.js";
import { BrowserRouter as Router, Route, Routes } from "/node_modules/.vite/deps/react-router-dom.js?v=89a0cb40";
import PageNotFound from "/src/lib/PageNotFound.jsx";
import { AuthProvider, useAuth } from "/src/lib/AuthContext.jsx";
import UserNotRegisteredError from "/src/components/UserNotRegisteredError.jsx";
import SiteLayout from "/src/components/layout/SiteLayout.jsx";
import Home from "/src/pages/Home.jsx?t=1778771232158";
import About from "/src/pages/About.jsx?t=1778770921764";
import TheBook from "/src/pages/TheBook.jsx?t=1778771110855";
import Excerpt from "/src/pages/Excerpt.jsx";
import News from "/src/pages/News.jsx";
import Contact from "/src/pages/Contact.jsx";
const AuthenticatedApp = () => {
  _s();
  const { isLoadingAuth, isLoadingPublicSettings, authError, navigateToLogin } = useAuth();
  if (isLoadingPublicSettings || isLoadingAuth) {
    return /* @__PURE__ */ jsxDEV("div", { "data-source-location": "App:22:6", "data-dynamic-content": "false", className: "fixed inset-0 flex items-center justify-center bg-background", children: /* @__PURE__ */ jsxDEV("div", { "data-source-location": "App:23:8", "data-dynamic-content": "false", className: "w-8 h-8 border-4 border-border border-t-accent rounded-full animate-spin" }, void 0, false, {
      fileName: "/app/src/App.jsx",
      lineNumber: 42,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/app/src/App.jsx",
      lineNumber: 41,
      columnNumber: 7
    }, this);
  }
  if (authError) {
    if (authError.type === "user_not_registered") {
      return /* @__PURE__ */ jsxDEV(UserNotRegisteredError, { "data-source-location": "App:30:13", "data-dynamic-content": "false" }, void 0, false, {
        fileName: "/app/src/App.jsx",
        lineNumber: 49,
        columnNumber: 14
      }, this);
    } else if (authError.type === "auth_required") {
      navigateToLogin();
      return null;
    }
  }
  return /* @__PURE__ */ jsxDEV(Routes, { "data-source-location": "App:38:4", "data-dynamic-content": "true", children: [
    /* @__PURE__ */ jsxDEV(Route, { "data-source-location": "App:39:6", "data-dynamic-content": "true", element: /* @__PURE__ */ jsxDEV(SiteLayout, { "data-source-location": "App:39:22", "data-dynamic-content": "false" }, void 0, false, {
      fileName: "/app/src/App.jsx",
      lineNumber: 58,
      columnNumber: 83
    }, this), children: [
      /* @__PURE__ */ jsxDEV(Route, { "data-source-location": "App:40:8", "data-dynamic-content": "true", path: "/", element: /* @__PURE__ */ jsxDEV(Home, { "data-source-location": "App:40:33", "data-dynamic-content": "false" }, void 0, false, {
        fileName: "/app/src/App.jsx",
        lineNumber: 59,
        columnNumber: 94
      }, this) }, void 0, false, {
        fileName: "/app/src/App.jsx",
        lineNumber: 59,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV(Route, { "data-source-location": "App:41:8", "data-dynamic-content": "true", path: "/about", element: /* @__PURE__ */ jsxDEV(About, { "data-source-location": "App:41:38", "data-dynamic-content": "false" }, void 0, false, {
        fileName: "/app/src/App.jsx",
        lineNumber: 60,
        columnNumber: 99
      }, this) }, void 0, false, {
        fileName: "/app/src/App.jsx",
        lineNumber: 60,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV(Route, { "data-source-location": "App:42:8", "data-dynamic-content": "true", path: "/the-book", element: /* @__PURE__ */ jsxDEV(TheBook, { "data-source-location": "App:42:41", "data-dynamic-content": "false" }, void 0, false, {
        fileName: "/app/src/App.jsx",
        lineNumber: 61,
        columnNumber: 102
      }, this) }, void 0, false, {
        fileName: "/app/src/App.jsx",
        lineNumber: 61,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV(Route, { "data-source-location": "App:43:8", "data-dynamic-content": "true", path: "/excerpt", element: /* @__PURE__ */ jsxDEV(Excerpt, { "data-source-location": "App:43:40", "data-dynamic-content": "false" }, void 0, false, {
        fileName: "/app/src/App.jsx",
        lineNumber: 62,
        columnNumber: 101
      }, this) }, void 0, false, {
        fileName: "/app/src/App.jsx",
        lineNumber: 62,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV(Route, { "data-source-location": "App:44:8", "data-dynamic-content": "true", path: "/news", element: /* @__PURE__ */ jsxDEV(News, { "data-source-location": "App:44:37", "data-dynamic-content": "false" }, void 0, false, {
        fileName: "/app/src/App.jsx",
        lineNumber: 63,
        columnNumber: 98
      }, this) }, void 0, false, {
        fileName: "/app/src/App.jsx",
        lineNumber: 63,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV(Route, { "data-source-location": "App:45:8", "data-dynamic-content": "true", path: "/contact", element: /* @__PURE__ */ jsxDEV(Contact, { "data-source-location": "App:45:40", "data-dynamic-content": "false" }, void 0, false, {
        fileName: "/app/src/App.jsx",
        lineNumber: 64,
        columnNumber: 101
      }, this) }, void 0, false, {
        fileName: "/app/src/App.jsx",
        lineNumber: 64,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/app/src/App.jsx",
      lineNumber: 58,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV(Route, { "data-source-location": "App:47:6", "data-dynamic-content": "true", path: "*", element: /* @__PURE__ */ jsxDEV(PageNotFound, { "data-source-location": "App:47:31", "data-dynamic-content": "false" }, void 0, false, {
      fileName: "/app/src/App.jsx",
      lineNumber: 66,
      columnNumber: 92
    }, this) }, void 0, false, {
      fileName: "/app/src/App.jsx",
      lineNumber: 66,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/app/src/App.jsx",
    lineNumber: 57,
    columnNumber: 5
  }, this);
};
_s(AuthenticatedApp, "hc27/Ofx9hlCa4t19zXbf5czR38=", false, function() {
  return [useAuth];
});
_c = AuthenticatedApp;
function App() {
  return /* @__PURE__ */ jsxDEV(AuthProvider, { "data-source-location": "App:54:4", "data-dynamic-content": "true", children: /* @__PURE__ */ jsxDEV(QueryClientProvider, { "data-source-location": "App:55:6", "data-dynamic-content": "true", client: queryClientInstance, children: [
    /* @__PURE__ */ jsxDEV(Router, { "data-source-location": "App:56:8", "data-dynamic-content": "false", children: /* @__PURE__ */ jsxDEV(AuthenticatedApp, { "data-source-location": "App:57:10", "data-dynamic-content": "false" }, void 0, false, {
      fileName: "/app/src/App.jsx",
      lineNumber: 76,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "/app/src/App.jsx",
      lineNumber: 75,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV(Toaster, { "data-source-location": "App:59:8", "data-dynamic-content": "false" }, void 0, false, {
      fileName: "/app/src/App.jsx",
      lineNumber: 78,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "/app/src/App.jsx",
    lineNumber: 74,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "/app/src/App.jsx",
    lineNumber: 73,
    columnNumber: 5
  }, this);
}
_c2 = App;
export default App;
var _c, _c2;
$RefreshReg$(_c, "AuthenticatedApp");
$RefreshReg$(_c2, "App");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/app/src/App.jsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/app/src/App.jsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,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bnN0YW5jZSIsIkJyb3dzZXJSb3V0ZXIiLCJSb3V0ZXIiLCJSb3V0ZSIsIlJvdXRlcyIsIlBhZ2VOb3RGb3VuZCIsIkF1dGhQcm92aWRlciIsInVzZUF1dGgiLCJVc2VyTm90UmVnaXN0ZXJlZEVycm9yIiwiU2l0ZUxheW91dCIsIkhvbWUiLCJBYm91dCIsIlRoZUJvb2siLCJFeGNlcnB0IiwiTmV3cyIsIkNvbnRhY3QiLCJBdXRoZW50aWNhdGVkQXBwIiwiX3MiLCJpc0xvYWRpbmdBdXRoIiwiaXNMb2FkaW5nUHVibGljU2V0dGluZ3MiLCJhdXRoRXJyb3IiLCJuYXZpZ2F0ZVRvTG9naW4iLCJ0eXBlIiwiQXBwIiwiX2MyIiwiX2MiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsiQXBwLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUb2FzdGVyIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS90b2FzdGVyXCI7XG5pbXBvcnQgeyBRdWVyeUNsaWVudFByb3ZpZGVyIH0gZnJvbSAnQHRhbnN0YWNrL3JlYWN0LXF1ZXJ5JztcbmltcG9ydCB7IHF1ZXJ5Q2xpZW50SW5zdGFuY2UgfSBmcm9tICdAL2xpYi9xdWVyeS1jbGllbnQnO1xuaW1wb3J0IHsgQnJvd3NlclJvdXRlciBhcyBSb3V0ZXIsIFJvdXRlLCBSb3V0ZXMgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCBQYWdlTm90Rm91bmQgZnJvbSAnLi9saWIvUGFnZU5vdEZvdW5kJztcbmltcG9ydCB7IEF1dGhQcm92aWRlciwgdXNlQXV0aCB9IGZyb20gJ0AvbGliL0F1dGhDb250ZXh0JztcbmltcG9ydCBVc2VyTm90UmVnaXN0ZXJlZEVycm9yIGZyb20gJ0AvY29tcG9uZW50cy9Vc2VyTm90UmVnaXN0ZXJlZEVycm9yJztcblxuaW1wb3J0IFNpdGVMYXlvdXQgZnJvbSAnLi9jb21wb25lbnRzL2xheW91dC9TaXRlTGF5b3V0JztcbmltcG9ydCBIb21lIGZyb20gJy4vcGFnZXMvSG9tZSc7XG5pbXBvcnQgQWJvdXQgZnJvbSAnLi9wYWdlcy9BYm91dCc7XG5pbXBvcnQgVGhlQm9vayBmcm9tICcuL3BhZ2VzL1RoZUJvb2snO1xuaW1wb3J0IEV4Y2VycHQgZnJvbSAnLi9wYWdlcy9FeGNlcnB0JztcbmltcG9ydCBOZXdzIGZyb20gJy4vcGFnZXMvTmV3cyc7XG5pbXBvcnQgQ29udGFjdCBmcm9tICcuL3BhZ2VzL0NvbnRhY3QnO1xuXG5jb25zdCBBdXRoZW50aWNhdGVkQXBwID0gKCkgPT4ge1xuICBjb25zdCB7IGlzTG9hZGluZ0F1dGgsIGlzTG9hZGluZ1B1YmxpY1NldHRpbmdzLCBhdXRoRXJyb3IsIG5hdmlnYXRlVG9Mb2dpbiB9ID0gdXNlQXV0aCgpO1xuXG4gIGlmIChpc0xvYWRpbmdQdWJsaWNTZXR0aW5ncyB8fCBpc0xvYWRpbmdBdXRoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJBcHA6MjI6NlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJmaXhlZCBpbnNldC0wIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGJnLWJhY2tncm91bmRcIj5cbiAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cIkFwcDoyMzo4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInctOCBoLTggYm9yZGVyLTQgYm9yZGVyLWJvcmRlciBib3JkZXItdC1hY2NlbnQgcm91bmRlZC1mdWxsIGFuaW1hdGUtc3BpblwiPjwvZGl2PlxuICAgICAgPC9kaXY+KTtcblxuICB9XG5cbiAgaWYgKGF1dGhFcnJvcikge1xuICAgIGlmIChhdXRoRXJyb3IudHlwZSA9PT0gJ3VzZXJfbm90X3JlZ2lzdGVyZWQnKSB7XG4gICAgICByZXR1cm4gPFVzZXJOb3RSZWdpc3RlcmVkRXJyb3IgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJBcHA6MzA6MTNcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgLz47XG4gICAgfSBlbHNlIGlmIChhdXRoRXJyb3IudHlwZSA9PT0gJ2F1dGhfcmVxdWlyZWQnKSB7XG4gICAgICBuYXZpZ2F0ZVRvTG9naW4oKTtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPFJvdXRlcyBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cIkFwcDozODo0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCI+XG4gICAgICA8Um91dGUgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJBcHA6Mzk6NlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGVsZW1lbnQ9ezxTaXRlTGF5b3V0IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiQXBwOjM5OjIyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIC8+fT5cbiAgICAgICAgPFJvdXRlIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiQXBwOjQwOjhcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBwYXRoPVwiL1wiIGVsZW1lbnQ9ezxIb21lIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiQXBwOjQwOjMzXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIC8+fSAvPlxuICAgICAgICA8Um91dGUgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJBcHA6NDE6OFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIHBhdGg9XCIvYWJvdXRcIiBlbGVtZW50PXs8QWJvdXQgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJBcHA6NDE6MzhcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgLz59IC8+XG4gICAgICAgIDxSb3V0ZSBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cIkFwcDo0Mjo4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgcGF0aD1cIi90aGUtYm9va1wiIGVsZW1lbnQ9ezxUaGVCb29rIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiQXBwOjQyOjQxXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIC8+fSAvPlxuICAgICAgICA8Um91dGUgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJBcHA6NDM6OFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIHBhdGg9XCIvZXhjZXJwdFwiIGVsZW1lbnQ9ezxFeGNlcnB0IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiQXBwOjQzOjQwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIC8+fSAvPlxuICAgICAgICA8Um91dGUgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJBcHA6NDQ6OFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIHBhdGg9XCIvbmV3c1wiIGVsZW1lbnQ9ezxOZXdzIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiQXBwOjQ0OjM3XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIC8+fSAvPlxuICAgICAgICA8Um91dGUgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJBcHA6NDU6OFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIHBhdGg9XCIvY29udGFjdFwiIGVsZW1lbnQ9ezxDb250YWN0IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiQXBwOjQ1OjQwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIC8+fSAvPlxuICAgICAgPC9Sb3V0ZT5cbiAgICAgIDxSb3V0ZSBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cIkFwcDo0Nzo2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgcGF0aD1cIipcIiBlbGVtZW50PXs8UGFnZU5vdEZvdW5kIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiQXBwOjQ3OjMxXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIC8+fSAvPlxuICAgIDwvUm91dGVzPik7XG5cbn07XG5cbmZ1bmN0aW9uIEFwcCgpIHtcbiAgcmV0dXJuIChcbiAgICA8QXV0aFByb3ZpZGVyIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiQXBwOjU0OjRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIj5cbiAgICAgIDxRdWVyeUNsaWVudFByb3ZpZGVyIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiQXBwOjU1OjZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGllbnQ9e3F1ZXJ5Q2xpZW50SW5zdGFuY2V9PlxuICAgICAgICA8Um91dGVyIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiQXBwOjU2OjhcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCI+XG4gICAgICAgICAgPEF1dGhlbnRpY2F0ZWRBcHAgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJBcHA6NTc6MTBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgLz5cbiAgICAgICAgPC9Sb3V0ZXI+XG4gICAgICAgIDxUb2FzdGVyIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiQXBwOjU5OjhcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgLz5cbiAgICAgIDwvUXVlcnlDbGllbnRQcm92aWRlcj5cbiAgICA8L0F1dGhQcm92aWRlcj4pO1xuXG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDsiXSwiZmlsZSI6Ii9hcHAvc3JjL0FwcC5qc3gifQ==