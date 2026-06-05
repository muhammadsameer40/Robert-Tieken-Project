import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/lib/PageNotFound.jsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=d703caa5"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/app/src/lib/PageNotFound.jsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
var _s = $RefreshSig$();
import { useLocation } from "/node_modules/.vite/deps/react-router-dom.js?v=89a0cb40";
import { base44 } from "/src/api/base44Client.js";
import { useQuery } from "/node_modules/.vite/deps/@tanstack_react-query.js?v=ee36527e";
export default function PageNotFound({ "data-collection-item-id": __dataCollectionItemId }) {
  _s();
  const location = useLocation();
  const pageName = location.pathname.substring(1);
  const { data: authData, isFetched } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      try {
        const user = await base44.auth.me();
        return { user, isAuthenticated: true };
      } catch (error) {
        return { user: null, isAuthenticated: false };
      }
    }
  });
  return /* @__PURE__ */ jsxDEV("div", { "data-source-location": "PageNotFound:23:8", "data-dynamic-content": "true", className: "min-h-screen flex items-center justify-center p-6 bg-background", "data-collection-item-id": __dataCollectionItemId, children: /* @__PURE__ */ jsxDEV("div", { "data-source-location": "PageNotFound:24:12", "data-dynamic-content": "true", className: "max-w-md w-full", children: /* @__PURE__ */ jsxDEV("div", { "data-source-location": "PageNotFound:25:16", "data-dynamic-content": "true", className: "text-center space-y-6", children: [
    /* @__PURE__ */ jsxDEV("div", { "data-source-location": "PageNotFound:27:20", "data-dynamic-content": "false", className: "space-y-2", children: [
      /* @__PURE__ */ jsxDEV("h1", { "data-source-location": "PageNotFound:28:24", "data-dynamic-content": "false", className: "text-7xl font-display text-border", children: "404" }, void 0, false, {
        fileName: "/app/src/lib/PageNotFound.jsx",
        lineNumber: 47,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ jsxDEV("div", { "data-source-location": "PageNotFound:29:24", "data-dynamic-content": "false", className: "golden-thread max-w-16 mx-auto" }, void 0, false, {
        fileName: "/app/src/lib/PageNotFound.jsx",
        lineNumber: 48,
        columnNumber: 25
      }, this)
    ] }, void 0, true, {
      fileName: "/app/src/lib/PageNotFound.jsx",
      lineNumber: 46,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ jsxDEV("div", { "data-source-location": "PageNotFound:33:20", "data-dynamic-content": "false", className: "space-y-3", children: [
      /* @__PURE__ */ jsxDEV("h2", { "data-source-location": "PageNotFound:34:24", "data-dynamic-content": "false", className: "text-2xl font-display font-medium text-foreground", children: "Page Not Found" }, void 0, false, {
        fileName: "/app/src/lib/PageNotFound.jsx",
        lineNumber: 53,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ jsxDEV("p", { "data-source-location": "PageNotFound:37:24", "data-dynamic-content": "false", className: "font-accent italic text-lg text-muted-foreground leading-relaxed", children: "It seems this page has wandered off, much like Michael on his journey..." }, void 0, false, {
        fileName: "/app/src/lib/PageNotFound.jsx",
        lineNumber: 56,
        columnNumber: 25
      }, this)
    ] }, void 0, true, {
      fileName: "/app/src/lib/PageNotFound.jsx",
      lineNumber: 52,
      columnNumber: 21
    }, this),
    isFetched && authData.isAuthenticated && authData.user?.role === "admin" && /* @__PURE__ */ jsxDEV("div", { "data-source-location": "PageNotFound:44:24", "data-dynamic-content": "false", className: "mt-8 p-4 bg-slate-100 rounded-lg border border-slate-200", children: /* @__PURE__ */ jsxDEV("div", { "data-source-location": "PageNotFound:45:28", "data-dynamic-content": "false", className: "flex items-start space-x-3", children: [
      /* @__PURE__ */ jsxDEV("div", { "data-source-location": "PageNotFound:46:32", "data-dynamic-content": "false", className: "flex-shrink-0 w-5 h-5 rounded-full bg-orange-100 flex items-center justify-center mt-0.5", children: /* @__PURE__ */ jsxDEV("div", { "data-source-location": "PageNotFound:47:36", "data-dynamic-content": "false", className: "w-2 h-2 rounded-full bg-orange-400" }, void 0, false, {
        fileName: "/app/src/lib/PageNotFound.jsx",
        lineNumber: 66,
        columnNumber: 37
      }, this) }, void 0, false, {
        fileName: "/app/src/lib/PageNotFound.jsx",
        lineNumber: 65,
        columnNumber: 33
      }, this),
      /* @__PURE__ */ jsxDEV("div", { "data-source-location": "PageNotFound:49:32", "data-dynamic-content": "false", className: "text-left space-y-1", children: [
        /* @__PURE__ */ jsxDEV("p", { "data-source-location": "PageNotFound:50:36", "data-dynamic-content": "false", className: "text-sm font-medium text-slate-700", children: "Admin Note" }, void 0, false, {
          fileName: "/app/src/lib/PageNotFound.jsx",
          lineNumber: 69,
          columnNumber: 37
        }, this),
        /* @__PURE__ */ jsxDEV("p", { "data-source-location": "PageNotFound:51:36", "data-dynamic-content": "false", className: "text-sm text-slate-600 leading-relaxed", children: "This could mean that the AI hasn't implemented this page yet. Ask it to implement it in the chat." }, void 0, false, {
          fileName: "/app/src/lib/PageNotFound.jsx",
          lineNumber: 70,
          columnNumber: 37
        }, this)
      ] }, void 0, true, {
        fileName: "/app/src/lib/PageNotFound.jsx",
        lineNumber: 68,
        columnNumber: 33
      }, this)
    ] }, void 0, true, {
      fileName: "/app/src/lib/PageNotFound.jsx",
      lineNumber: 64,
      columnNumber: 29
    }, this) }, void 0, false, {
      fileName: "/app/src/lib/PageNotFound.jsx",
      lineNumber: 63,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ jsxDEV("div", { "data-source-location": "PageNotFound:60:20", "data-dynamic-content": "true", className: "pt-6", children: /* @__PURE__ */ jsxDEV(
      "button",
      {
        "data-source-location": "PageNotFound:61:24",
        "data-dynamic-content": "true",
        onClick: () => window.location.href = "/",
        className: "inline-flex items-center px-6 py-2.5 font-body text-sm text-primary-foreground bg-primary rounded-full hover:bg-primary/90 transition-all duration-300",
        children: [
          /* @__PURE__ */ jsxDEV("svg", { "data-source-location": "PageNotFound:65:28", "data-dynamic-content": "false", className: "w-4 h-4 mr-2", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsxDEV("path", { "data-source-location": "PageNotFound:66:32", "data-dynamic-content": "false", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" }, void 0, false, {
            fileName: "/app/src/lib/PageNotFound.jsx",
            lineNumber: 85,
            columnNumber: 33
          }, this) }, void 0, false, {
            fileName: "/app/src/lib/PageNotFound.jsx",
            lineNumber: 84,
            columnNumber: 29
          }, this),
          "Go Home"
        ]
      },
      void 0,
      true,
      {
        fileName: "/app/src/lib/PageNotFound.jsx",
        lineNumber: 80,
        columnNumber: 25
      },
      this
    ) }, void 0, false, {
      fileName: "/app/src/lib/PageNotFound.jsx",
      lineNumber: 79,
      columnNumber: 21
    }, this)
  ] }, void 0, true, {
    fileName: "/app/src/lib/PageNotFound.jsx",
    lineNumber: 44,
    columnNumber: 17
  }, this) }, void 0, false, {
    fileName: "/app/src/lib/PageNotFound.jsx",
    lineNumber: 43,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "/app/src/lib/PageNotFound.jsx",
    lineNumber: 42,
    columnNumber: 5
  }, this);
}
_s(PageNotFound, "CdQhHkZI31BBysnji9DTEvRGLEE=", false, function() {
  return [useLocation, useQuery];
});
_c = PageNotFound;
var _c;
$RefreshReg$(_c, "PageNotFound");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/app/src/lib/PageNotFound.jsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/app/src/lib/PageNotFound.jsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,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QTtBQUFBO0FBQUE7QUFBQSxXQVVBLEtBWGxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FZYztBQUFBLElBSUosdUJBQUMsU0FBSSx3QkFBcUIsc0JBQXFCLHdCQUFxQixRQUFPLFdBQVUsUUFDakY7QUFBQSxNQUFDO0FBQUE7QUFBQSxRQUFPLHdCQUFxQjtBQUFBLFFBQXFCLHdCQUFxQjtBQUFBLFFBQ25GLFNBQVMsTUFBTUMsT0FBT2YsU0FBU2dCLE9BQU87QUFBQSxRQUN0QyxXQUFVO0FBQUEsUUFFTTtBQUFBLGlDQUFDLFNBQUksd0JBQXFCLHNCQUFxQix3QkFBcUIsU0FBUSxXQUFVLGdCQUFlLE1BQUssUUFBTyxRQUFPLGdCQUFlLFNBQVEsYUFDM0ksaUNBQUMsVUFBSyx3QkFBcUIsc0JBQXFCLHdCQUFxQixTQUFRLGVBQWMsU0FBUSxnQkFBZSxTQUFRLGFBQWEsR0FBRyxHQUFFLHNKQUE1STtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUE4UixLQURsUztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUVBO0FBQUEsVUFBSztBQUFBO0FBQUE7QUFBQSxNQU5UO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVFBLEtBVEo7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQVVBO0FBQUEsT0E3Q0o7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQThDQSxLQS9DSjtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBZ0RBLEtBakRSO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FrREk7QUFFUjtBQUFDakIsR0FyRXVCRixjQUFZO0FBQUEsVUFDakJILGFBR3FCRSxRQUFRO0FBQUE7QUFBQSxLQUp4QkM7QUFBWSxJQUFBb0I7QUFBQSxhQUFBQSxJQUFBIiwibmFtZXMiOlsidXNlTG9jYXRpb24iLCJiYXNlNDQiLCJ1c2VRdWVyeSIsIlBhZ2VOb3RGb3VuZCIsIl9fZGF0YUNvbGxlY3Rpb25JdGVtSWQiLCJfcyIsImxvY2F0aW9uIiwicGFnZU5hbWUiLCJwYXRobmFtZSIsInN1YnN0cmluZyIsImRhdGEiLCJhdXRoRGF0YSIsImlzRmV0Y2hlZCIsInF1ZXJ5S2V5IiwicXVlcnlGbiIsInVzZXIiLCJhdXRoIiwibWUiLCJpc0F1dGhlbnRpY2F0ZWQiLCJlcnJvciIsInJvbGUiLCJ3aW5kb3ciLCJocmVmIiwiX2MiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsiUGFnZU5vdEZvdW5kLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VMb2NhdGlvbiB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IHsgYmFzZTQ0IH0gZnJvbSAnQC9hcGkvYmFzZTQ0Q2xpZW50JztcbmltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSAnQHRhbnN0YWNrL3JlYWN0LXF1ZXJ5JztcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQYWdlTm90Rm91bmQoeyBcImRhdGEtY29sbGVjdGlvbi1pdGVtLWlkXCI6IF9fZGF0YUNvbGxlY3Rpb25JdGVtSWQgfSkge1xuICBjb25zdCBsb2NhdGlvbiA9IHVzZUxvY2F0aW9uKCk7XG4gIGNvbnN0IHBhZ2VOYW1lID0gbG9jYXRpb24ucGF0aG5hbWUuc3Vic3RyaW5nKDEpO1xuXG4gIGNvbnN0IHsgZGF0YTogYXV0aERhdGEsIGlzRmV0Y2hlZCB9ID0gdXNlUXVlcnkoe1xuICAgIHF1ZXJ5S2V5OiBbJ3VzZXInXSxcbiAgICBxdWVyeUZuOiBhc3luYyAoKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCB1c2VyID0gYXdhaXQgYmFzZTQ0LmF1dGgubWUoKTtcbiAgICAgICAgcmV0dXJuIHsgdXNlciwgaXNBdXRoZW50aWNhdGVkOiB0cnVlIH07XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICByZXR1cm4geyB1c2VyOiBudWxsLCBpc0F1dGhlbnRpY2F0ZWQ6IGZhbHNlIH07XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJQYWdlTm90Rm91bmQ6MjM6OFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cIm1pbi1oLXNjcmVlbiBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBwLTYgYmctYmFja2dyb3VuZFwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWlkPXtfX2RhdGFDb2xsZWN0aW9uSXRlbUlkfT5cbiAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJQYWdlTm90Rm91bmQ6MjQ6MTJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJtYXgtdy1tZCB3LWZ1bGxcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiUGFnZU5vdEZvdW5kOjI1OjE2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgc3BhY2UteS02XCI+XG4gICAgICAgICAgICAgICAgICAgIHsvKiA0MDQgRXJyb3IgQ29kZSAqL31cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cIlBhZ2VOb3RGb3VuZDoyNzoyMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJzcGFjZS15LTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cIlBhZ2VOb3RGb3VuZDoyODoyNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ0ZXh0LTd4bCBmb250LWRpc3BsYXkgdGV4dC1ib3JkZXJcIj40MDQ8L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cIlBhZ2VOb3RGb3VuZDoyOToyNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJnb2xkZW4tdGhyZWFkIG1heC13LTE2IG14LWF1dG9cIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB7LyogTWFpbiBNZXNzYWdlICovfVxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiUGFnZU5vdEZvdW5kOjMzOjIwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInNwYWNlLXktM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiUGFnZU5vdEZvdW5kOjM0OjI0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtZGlzcGxheSBmb250LW1lZGl1bSB0ZXh0LWZvcmVncm91bmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBQYWdlIE5vdCBGb3VuZFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiUGFnZU5vdEZvdW5kOjM3OjI0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cImZvbnQtYWNjZW50IGl0YWxpYyB0ZXh0LWxnIHRleHQtbXV0ZWQtZm9yZWdyb3VuZCBsZWFkaW5nLXJlbGF4ZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBJdCBzZWVtcyB0aGlzIHBhZ2UgaGFzIHdhbmRlcmVkIG9mZiwgbXVjaCBsaWtlIE1pY2hhZWwgb24gaGlzIGpvdXJuZXkuLi5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB7LyogQWRtaW4gTm90ZSAqL31cbiAgICAgICAgICAgICAgICAgICAge2lzRmV0Y2hlZCAmJiBhdXRoRGF0YS5pc0F1dGhlbnRpY2F0ZWQgJiYgYXV0aERhdGEudXNlcj8ucm9sZSA9PT0gJ2FkbWluJyAmJlxuICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJQYWdlTm90Rm91bmQ6NDQ6MjRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwibXQtOCBwLTQgYmctc2xhdGUtMTAwIHJvdW5kZWQtbGcgYm9yZGVyIGJvcmRlci1zbGF0ZS0yMDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiUGFnZU5vdEZvdW5kOjQ1OjI4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtc3RhcnQgc3BhY2UteC0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJQYWdlTm90Rm91bmQ6NDY6MzJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwiZmxleC1zaHJpbmstMCB3LTUgaC01IHJvdW5kZWQtZnVsbCBiZy1vcmFuZ2UtMTAwIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIG10LTAuNVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cIlBhZ2VOb3RGb3VuZDo0NzozNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ3LTIgaC0yIHJvdW5kZWQtZnVsbCBiZy1vcmFuZ2UtNDAwXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiUGFnZU5vdEZvdW5kOjQ5OjMyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInRleHQtbGVmdCBzcGFjZS15LTFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiUGFnZU5vdEZvdW5kOjUwOjM2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1zbGF0ZS03MDBcIj5BZG1pbiBOb3RlPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJQYWdlTm90Rm91bmQ6NTE6MzZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LXNsYXRlLTYwMCBsZWFkaW5nLXJlbGF4ZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUaGlzIGNvdWxkIG1lYW4gdGhhdCB0aGUgQUkgaGFzbid0IGltcGxlbWVudGVkIHRoaXMgcGFnZSB5ZXQuIEFzayBpdCB0byBpbXBsZW1lbnQgaXQgaW4gdGhlIGNoYXQuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgey8qIEFjdGlvbiBCdXR0b24gKi99XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJQYWdlTm90Rm91bmQ6NjA6MjBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJwdC02XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiUGFnZU5vdEZvdW5kOjYxOjI0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy8nfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIHB4LTYgcHktMi41IGZvbnQtYm9keSB0ZXh0LXNtIHRleHQtcHJpbWFyeS1mb3JlZ3JvdW5kIGJnLXByaW1hcnkgcm91bmRlZC1mdWxsIGhvdmVyOmJnLXByaW1hcnkvOTAgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwXCI+XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJQYWdlTm90Rm91bmQ6NjU6MjhcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidy00IGgtNCBtci0yXCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiUGFnZU5vdEZvdW5kOjY2OjMyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIiBzdHJva2VXaWR0aD17Mn0gZD1cIk0zIDEybDItMm0wIDBsNy03IDcgN001IDEwdjEwYTEgMSAwIDAwMSAxaDNtMTAtMTFsMiAybS0yLTJ2MTBhMSAxIDAgMDEtMSAxaC0zbS02IDBhMSAxIDAgMDAxLTF2LTRhMSAxIDAgMDExLTFoMmExIDEgMCAwMTEgMXY0YTEgMSAwIDAwMSAxbS02IDBoNlwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgR28gSG9tZVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2Pik7XG5cbn0iXSwiZmlsZSI6Ii9hcHAvc3JjL2xpYi9QYWdlTm90Rm91bmQuanN4In0=