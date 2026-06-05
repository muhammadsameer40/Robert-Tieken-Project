import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/ui/toaster.jsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=d703caa5"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/app/src/components/ui/toaster.jsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
var _s = $RefreshSig$();
import { useToast } from "/src/components/ui/use-toast.jsx";
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport
} from "/src/components/ui/toast.jsx";
export function Toaster() {
  _s();
  const { toasts } = useToast();
  return /* @__PURE__ */ jsxDEV(ToastProvider, { "data-source-location": "components/ui/toaster:15:4", "data-dynamic-content": "true", children: [
    toasts.map(function({ id, title, description, action, ...props }) {
      return /* @__PURE__ */ jsxDEV(Toast, { "data-source-location": "components/ui/toaster:18:10", "data-dynamic-content": "true", ...props, "data-collection-item-field": "action", "data-collection-item-id": id, children: [
        /* @__PURE__ */ jsxDEV("div", { "data-source-location": "components/ui/toaster:19:12", "data-dynamic-content": "true", className: "grid gap-1", children: [
          title && /* @__PURE__ */ jsxDEV(ToastTitle, { "data-source-location": "components/ui/toaster:20:24", "data-dynamic-content": "true", "data-collection-item-field": "title", "data-collection-item-id": id, children: title }, void 0, false, {
            fileName: "/app/src/components/ui/toaster.jsx",
            lineNumber: 39,
            columnNumber: 25
          }, this),
          description && /* @__PURE__ */ jsxDEV(ToastDescription, { "data-source-location": "components/ui/toaster:22:16", "data-dynamic-content": "true", "data-collection-item-field": "description", "data-collection-item-id": id, children: description }, void 0, false, {
            fileName: "/app/src/components/ui/toaster.jsx",
            lineNumber: 41,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "/app/src/components/ui/toaster.jsx",
          lineNumber: 38,
          columnNumber: 13
        }, this),
        action,
        /* @__PURE__ */ jsxDEV(ToastClose, { "data-source-location": "components/ui/toaster:26:12", "data-dynamic-content": "false" }, void 0, false, {
          fileName: "/app/src/components/ui/toaster.jsx",
          lineNumber: 45,
          columnNumber: 13
        }, this)
      ] }, id, true, {
        fileName: "/app/src/components/ui/toaster.jsx",
        lineNumber: 37,
        columnNumber: 11
      }, this);
    }),
    /* @__PURE__ */ jsxDEV(ToastViewport, { "data-source-location": "components/ui/toaster:30:6", "data-dynamic-content": "false" }, void 0, false, {
      fileName: "/app/src/components/ui/toaster.jsx",
      lineNumber: 49,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/app/src/components/ui/toaster.jsx",
    lineNumber: 34,
    columnNumber: 5
  }, this);
}
_s(Toaster, "1YTCnXrq2qRowe0H/LBWLjtXoYc=", false, function() {
  return [useToast];
});
_c = Toaster;
var _c;
$RefreshReg$(_c, "Toaster");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/app/src/components/ui/toaster.jsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/app/src/components/ui/toaster.jsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBbUJ3Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFuQnhCLFNBQVNBLGdCQUFnQjtBQUN6QjtBQUFBLEVBQ0VDO0FBQUFBLEVBQ0FDO0FBQUFBLEVBQ0FDO0FBQUFBLEVBQ0FDO0FBQUFBLEVBQ0FDO0FBQUFBLEVBQ0FDO0FBQUFBLE9BQ0Y7QUFFTyxnQkFBU0MsVUFBVTtBQUFBQyxLQUFBO0FBQ3hCLFFBQU0sRUFBRUMsT0FBTyxJQUFJVCxTQUFTO0FBRTVCLFNBQ0UsdUJBQUMsaUJBQWMsd0JBQXFCLDhCQUE2Qix3QkFBcUIsUUFDbkZTO0FBQUFBLFdBQU9DLElBQUksU0FBVSxFQUFFQyxJQUFJQyxPQUFPQyxhQUFhQyxRQUFRLEdBQUdDLE1BQU0sR0FBRztBQUNsRSxhQUNFLHVCQUFDLFNBQU0sd0JBQXFCLCtCQUE4Qix3QkFBcUIsUUFBZ0IsR0FBSUEsT0FBTyw4QkFBMkIsVUFBUywyQkFBeUJKLElBQ3JLO0FBQUEsK0JBQUMsU0FBSSx3QkFBcUIsK0JBQThCLHdCQUFxQixRQUFPLFdBQVUsY0FDM0ZDO0FBQUFBLG1CQUFTLHVCQUFDLGNBQVcsd0JBQXFCLCtCQUE4Qix3QkFBcUIsUUFBTyw4QkFBMkIsU0FBUSwyQkFBeUJELElBQUtDLG1CQUE1SjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUFrSztBQUFBLFVBQzNLQyxlQUNELHVCQUFDLG9CQUFpQix3QkFBcUIsK0JBQThCLHdCQUFxQixRQUFPLDhCQUEyQixlQUFjLDJCQUF5QkYsSUFBS0UseUJBQXhLO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQW9MO0FBQUEsYUFIdEw7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUtBO0FBQUEsUUFDQ0M7QUFBQUEsUUFDRCx1QkFBQyxjQUFXLHdCQUFxQiwrQkFBOEIsd0JBQXFCLFdBQXBGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBMkY7QUFBQSxXQVJGSCxJQUEzRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBU0E7QUFBQSxJQUVKLENBQUM7QUFBQSxJQUNELHVCQUFDLGlCQUFjLHdCQUFxQiw4QkFBNkIsd0JBQXFCLFdBQXRGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBNkY7QUFBQSxPQWYvRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBZ0JBO0FBRUo7QUFBQ0gsR0F0QmVELFNBQU87QUFBQSxVQUNGUCxRQUFRO0FBQUE7QUFBQSxLQURiTztBQUFPLElBQUFTO0FBQUEsYUFBQUEsSUFBQSIsIm5hbWVzIjpbInVzZVRvYXN0IiwiVG9hc3QiLCJUb2FzdENsb3NlIiwiVG9hc3REZXNjcmlwdGlvbiIsIlRvYXN0UHJvdmlkZXIiLCJUb2FzdFRpdGxlIiwiVG9hc3RWaWV3cG9ydCIsIlRvYXN0ZXIiLCJfcyIsInRvYXN0cyIsIm1hcCIsImlkIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImFjdGlvbiIsInByb3BzIiwiX2MiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsidG9hc3Rlci5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlVG9hc3QgfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL3VzZS10b2FzdFwiO1xuaW1wb3J0IHtcbiAgVG9hc3QsXG4gIFRvYXN0Q2xvc2UsXG4gIFRvYXN0RGVzY3JpcHRpb24sXG4gIFRvYXN0UHJvdmlkZXIsXG4gIFRvYXN0VGl0bGUsXG4gIFRvYXN0Vmlld3BvcnQgfSBmcm9tXG5cIkAvY29tcG9uZW50cy91aS90b2FzdFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gVG9hc3RlcigpIHtcbiAgY29uc3QgeyB0b2FzdHMgfSA9IHVzZVRvYXN0KCk7XG5cbiAgcmV0dXJuIChcbiAgICA8VG9hc3RQcm92aWRlciBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvdWkvdG9hc3RlcjoxNTo0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCI+XG4gICAgICB7dG9hc3RzLm1hcChmdW5jdGlvbiAoeyBpZCwgdGl0bGUsIGRlc2NyaXB0aW9uLCBhY3Rpb24sIC4uLnByb3BzIH0pIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8VG9hc3QgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL3VpL3RvYXN0ZXI6MTg6MTBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBrZXk9e2lkfSB7Li4ucHJvcHN9IGRhdGEtY29sbGVjdGlvbi1pdGVtLWZpZWxkPVwiYWN0aW9uXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0taWQ9e2lkfT5cbiAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL3VpL3RvYXN0ZXI6MTk6MTJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJncmlkIGdhcC0xXCI+XG4gICAgICAgICAgICAgIHt0aXRsZSAmJiA8VG9hc3RUaXRsZSBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvdWkvdG9hc3RlcjoyMDoyNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGRhdGEtY29sbGVjdGlvbi1pdGVtLWZpZWxkPVwidGl0bGVcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1pZD17aWR9Pnt0aXRsZX08L1RvYXN0VGl0bGU+fVxuICAgICAgICAgICAgICB7ZGVzY3JpcHRpb24gJiZcbiAgICAgICAgICAgICAgPFRvYXN0RGVzY3JpcHRpb24gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJjb21wb25lbnRzL3VpL3RvYXN0ZXI6MjI6MTZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBkYXRhLWNvbGxlY3Rpb24taXRlbS1maWVsZD1cImRlc2NyaXB0aW9uXCIgZGF0YS1jb2xsZWN0aW9uLWl0ZW0taWQ9e2lkfT57ZGVzY3JpcHRpb259PC9Ub2FzdERlc2NyaXB0aW9uPlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIHthY3Rpb259XG4gICAgICAgICAgICA8VG9hc3RDbG9zZSBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvdWkvdG9hc3RlcjoyNjoxMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiAvPlxuICAgICAgICAgIDwvVG9hc3Q+KTtcblxuICAgICAgfSl9XG4gICAgICA8VG9hc3RWaWV3cG9ydCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cImNvbXBvbmVudHMvdWkvdG9hc3RlcjozMDo2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIC8+XG4gICAgPC9Ub2FzdFByb3ZpZGVyPik7XG5cbn0iXSwiZmlsZSI6Ii9hcHAvc3JjL2NvbXBvbmVudHMvdWkvdG9hc3Rlci5qc3gifQ==