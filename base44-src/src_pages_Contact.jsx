import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/pages/Contact.jsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=d703caa5"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
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
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/app/src/pages/Contact.jsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
var _s = $RefreshSig$();
import __vite__cjsImport3_react from "/node_modules/.vite/deps/react.js?v=d703caa5"; const React = __vite__cjsImport3_react.__esModule ? __vite__cjsImport3_react.default : __vite__cjsImport3_react; const useState = __vite__cjsImport3_react["useState"];
import { motion } from "/node_modules/.vite/deps/framer-motion.js?v=d703caa5";
import { base44 } from "/src/api/base44Client.js";
import { Button } from "/src/components/ui/button.jsx";
import { Input } from "/src/components/ui/input.jsx";
import { Textarea } from "/src/components/ui/textarea.jsx";
import { Send, Check, Mail, MessageSquare } from "/node_modules/.vite/deps/lucide-react.js?v=0929618f";
import SectionHeading from "/src/components/shared/SectionHeading.jsx";
const CONTACT_BG = "https://media.base44.com/images/public/6a04eb295d2a048bc01a0caa/c7115cbb9_generated_dcd948c7.png";
export default function Contact() {
  _s();
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await base44.entities.ContactSubmission.create(form);
    setSubmitted(true);
    setLoading(false);
  };
  const handleChange = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
  };
  return /* @__PURE__ */ jsxDEV("section", { "data-source-location": "pages/Contact:30:4", "data-dynamic-content": "true", className: "pt-28 lg:pt-36 pb-20 lg:pb-32", children: [
    /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Contact:32:6", "data-dynamic-content": "true", className: "relative h-64 lg:h-72 overflow-hidden mb-16", children: [
      /* @__PURE__ */ jsxDEV("img", { "data-source-location": "pages/Contact:33:8", "data-dynamic-content": "true", src: CONTACT_BG, alt: "English countryside", className: "w-full h-full object-cover" }, void 0, false, {
        fileName: "/app/src/pages/Contact.jsx",
        lineNumber: 52,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Contact:34:8", "data-dynamic-content": "false", className: "absolute inset-0 bg-gradient-to-b from-foreground/50 to-background" }, void 0, false, {
        fileName: "/app/src/pages/Contact.jsx",
        lineNumber: 53,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Contact:35:8", "data-dynamic-content": "false", className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ jsxDEV("h1", { "data-source-location": "pages/Contact:36:10", "data-dynamic-content": "false", className: "font-display text-4xl lg:text-6xl font-bold text-white", children: "Get in Touch" }, void 0, false, {
        fileName: "/app/src/pages/Contact.jsx",
        lineNumber: 55,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "/app/src/pages/Contact.jsx",
        lineNumber: 54,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "/app/src/pages/Contact.jsx",
      lineNumber: 51,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Contact:40:6", "data-dynamic-content": "true", className: "max-w-4xl mx-auto px-6 lg:px-12", children: /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Contact:41:8", "data-dynamic-content": "true", className: "grid lg:grid-cols-5 gap-12 lg:gap-16", children: [
      /* @__PURE__ */ jsxDEV(
        motion.div,
        {
          "data-source-location": "pages/Contact:43:10",
          "data-dynamic-content": "true",
          initial: { opacity: 0, x: -20 },
          whileInView: { opacity: 1, x: 0 },
          viewport: { once: true },
          transition: { duration: 0.7 },
          className: "lg:col-span-2 space-y-8",
          children: [
            /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Contact:50:12", "data-dynamic-content": "false", children: [
              /* @__PURE__ */ jsxDEV("h3", { "data-source-location": "pages/Contact:51:14", "data-dynamic-content": "false", className: "font-display text-xl font-semibold text-foreground mb-3", children: "Let's Connect" }, void 0, false, {
                fileName: "/app/src/pages/Contact.jsx",
                lineNumber: 70,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/Contact:54:14", "data-dynamic-content": "false", className: "font-body text-base text-muted-foreground leading-relaxed", children: "Whether you'd like to share your thoughts on the book, inquire about events, or simply say hello — Robert would love to hear from you." }, void 0, false, {
                fileName: "/app/src/pages/Contact.jsx",
                lineNumber: 73,
                columnNumber: 15
              }, this)
            ] }, void 0, true, {
              fileName: "/app/src/pages/Contact.jsx",
              lineNumber: 69,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Contact:60:12", "data-dynamic-content": "false", className: "space-y-4", children: [
              /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Contact:61:14", "data-dynamic-content": "false", className: "flex items-center gap-3", children: [
                /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Contact:62:16", "data-dynamic-content": "false", className: "w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center", children: /* @__PURE__ */ jsxDEV(Mail, { "data-source-location": "pages/Contact:63:18", "data-dynamic-content": "false", className: "w-4 h-4 text-primary" }, void 0, false, {
                  fileName: "/app/src/pages/Contact.jsx",
                  lineNumber: 82,
                  columnNumber: 19
                }, this) }, void 0, false, {
                  fileName: "/app/src/pages/Contact.jsx",
                  lineNumber: 81,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Contact:65:16", "data-dynamic-content": "false", children: [
                  /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/Contact:66:18", "data-dynamic-content": "false", className: "font-body text-sm text-muted-foreground", children: "Email" }, void 0, false, {
                    fileName: "/app/src/pages/Contact.jsx",
                    lineNumber: 85,
                    columnNumber: 19
                  }, this),
                  /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/Contact:67:18", "data-dynamic-content": "false", className: "font-body text-foreground", children: "contact@roberttieken.com" }, void 0, false, {
                    fileName: "/app/src/pages/Contact.jsx",
                    lineNumber: 86,
                    columnNumber: 19
                  }, this)
                ] }, void 0, true, {
                  fileName: "/app/src/pages/Contact.jsx",
                  lineNumber: 84,
                  columnNumber: 17
                }, this)
              ] }, void 0, true, {
                fileName: "/app/src/pages/Contact.jsx",
                lineNumber: 80,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Contact:70:14", "data-dynamic-content": "false", className: "flex items-center gap-3", children: [
                /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Contact:71:16", "data-dynamic-content": "false", className: "w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center", children: /* @__PURE__ */ jsxDEV(MessageSquare, { "data-source-location": "pages/Contact:72:18", "data-dynamic-content": "false", className: "w-4 h-4 text-primary" }, void 0, false, {
                  fileName: "/app/src/pages/Contact.jsx",
                  lineNumber: 91,
                  columnNumber: 19
                }, this) }, void 0, false, {
                  fileName: "/app/src/pages/Contact.jsx",
                  lineNumber: 90,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Contact:74:16", "data-dynamic-content": "false", children: [
                  /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/Contact:75:18", "data-dynamic-content": "false", className: "font-body text-sm text-muted-foreground", children: "Response time" }, void 0, false, {
                    fileName: "/app/src/pages/Contact.jsx",
                    lineNumber: 94,
                    columnNumber: 19
                  }, this),
                  /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/Contact:76:18", "data-dynamic-content": "false", className: "font-body text-foreground", children: "Usually within 48 hours" }, void 0, false, {
                    fileName: "/app/src/pages/Contact.jsx",
                    lineNumber: 95,
                    columnNumber: 19
                  }, this)
                ] }, void 0, true, {
                  fileName: "/app/src/pages/Contact.jsx",
                  lineNumber: 93,
                  columnNumber: 17
                }, this)
              ] }, void 0, true, {
                fileName: "/app/src/pages/Contact.jsx",
                lineNumber: 89,
                columnNumber: 15
              }, this)
            ] }, void 0, true, {
              fileName: "/app/src/pages/Contact.jsx",
              lineNumber: 79,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ jsxDEV("blockquote", { "data-source-location": "pages/Contact:81:12", "data-dynamic-content": "false", className: "border-l-2 border-accent pl-4", children: /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/Contact:82:14", "data-dynamic-content": "false", className: "font-accent italic text-lg text-foreground/70", children: '"Every letter, every message reminds me why I write — to connect."' }, void 0, false, {
              fileName: "/app/src/pages/Contact.jsx",
              lineNumber: 101,
              columnNumber: 15
            }, this) }, void 0, false, {
              fileName: "/app/src/pages/Contact.jsx",
              lineNumber: 100,
              columnNumber: 13
            }, this)
          ]
        },
        void 0,
        true,
        {
          fileName: "/app/src/pages/Contact.jsx",
          lineNumber: 62,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ jsxDEV(
        motion.div,
        {
          "data-source-location": "pages/Contact:89:10",
          "data-dynamic-content": "true",
          initial: { opacity: 0, x: 20 },
          whileInView: { opacity: 1, x: 0 },
          viewport: { once: true },
          transition: { duration: 0.7, delay: 0.2 },
          className: "lg:col-span-3",
          children: submitted ? /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Contact:97:14", "data-dynamic-content": "false", className: "bg-card border border-border rounded-xl p-12 text-center", children: [
            /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Contact:98:16", "data-dynamic-content": "false", className: "w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6", children: /* @__PURE__ */ jsxDEV(Check, { "data-source-location": "pages/Contact:99:18", "data-dynamic-content": "false", className: "w-8 h-8 text-accent" }, void 0, false, {
              fileName: "/app/src/pages/Contact.jsx",
              lineNumber: 118,
              columnNumber: 19
            }, this) }, void 0, false, {
              fileName: "/app/src/pages/Contact.jsx",
              lineNumber: 117,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("h3", { "data-source-location": "pages/Contact:101:16", "data-dynamic-content": "false", className: "font-display text-2xl font-semibold text-foreground mb-3", children: "Thank You" }, void 0, false, {
              fileName: "/app/src/pages/Contact.jsx",
              lineNumber: 120,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("p", { "data-source-location": "pages/Contact:104:16", "data-dynamic-content": "false", className: "font-accent italic text-lg text-muted-foreground", children: "Your message has been sent. Robert will get back to you soon." }, void 0, false, {
              fileName: "/app/src/pages/Contact.jsx",
              lineNumber: 123,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "/app/src/pages/Contact.jsx",
            lineNumber: 116,
            columnNumber: 13
          }, this) : /* @__PURE__ */ jsxDEV("form", { "data-source-location": "pages/Contact:109:14", "data-dynamic-content": "true", onSubmit: handleSubmit, className: "bg-card border border-border rounded-xl p-8 lg:p-10 space-y-5", children: [
            /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Contact:110:16", "data-dynamic-content": "true", className: "grid sm:grid-cols-2 gap-5", children: [
              /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Contact:111:18", "data-dynamic-content": "true", children: [
                /* @__PURE__ */ jsxDEV("label", { "data-source-location": "pages/Contact:112:20", "data-dynamic-content": "false", className: "font-body text-sm text-foreground mb-1.5 block", children: "Name" }, void 0, false, {
                  fileName: "/app/src/pages/Contact.jsx",
                  lineNumber: 131,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ jsxDEV(
                  Input,
                  {
                    "data-source-location": "pages/Contact:113:20",
                    "data-dynamic-content": "true",
                    value: form.name,
                    onChange: handleChange("name"),
                    required: true,
                    placeholder: "Your name",
                    className: "bg-background font-body"
                  },
                  void 0,
                  false,
                  {
                    fileName: "/app/src/pages/Contact.jsx",
                    lineNumber: 132,
                    columnNumber: 21
                  },
                  this
                )
              ] }, void 0, true, {
                fileName: "/app/src/pages/Contact.jsx",
                lineNumber: 130,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Contact:121:18", "data-dynamic-content": "true", children: [
                /* @__PURE__ */ jsxDEV("label", { "data-source-location": "pages/Contact:122:20", "data-dynamic-content": "false", className: "font-body text-sm text-foreground mb-1.5 block", children: "Email" }, void 0, false, {
                  fileName: "/app/src/pages/Contact.jsx",
                  lineNumber: 141,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ jsxDEV(
                  Input,
                  {
                    "data-source-location": "pages/Contact:123:20",
                    "data-dynamic-content": "true",
                    type: "email",
                    value: form.email,
                    onChange: handleChange("email"),
                    required: true,
                    placeholder: "your@email.com",
                    className: "bg-background font-body"
                  },
                  void 0,
                  false,
                  {
                    fileName: "/app/src/pages/Contact.jsx",
                    lineNumber: 142,
                    columnNumber: 21
                  },
                  this
                )
              ] }, void 0, true, {
                fileName: "/app/src/pages/Contact.jsx",
                lineNumber: 140,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "/app/src/pages/Contact.jsx",
              lineNumber: 129,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Contact:133:16", "data-dynamic-content": "true", children: [
              /* @__PURE__ */ jsxDEV("label", { "data-source-location": "pages/Contact:134:18", "data-dynamic-content": "false", className: "font-body text-sm text-foreground mb-1.5 block", children: "Subject" }, void 0, false, {
                fileName: "/app/src/pages/Contact.jsx",
                lineNumber: 153,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV(
                Input,
                {
                  "data-source-location": "pages/Contact:135:18",
                  "data-dynamic-content": "true",
                  value: form.subject,
                  onChange: handleChange("subject"),
                  placeholder: "What is this about?",
                  className: "bg-background font-body"
                },
                void 0,
                false,
                {
                  fileName: "/app/src/pages/Contact.jsx",
                  lineNumber: 154,
                  columnNumber: 19
                },
                this
              )
            ] }, void 0, true, {
              fileName: "/app/src/pages/Contact.jsx",
              lineNumber: 152,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV("div", { "data-source-location": "pages/Contact:142:16", "data-dynamic-content": "true", children: [
              /* @__PURE__ */ jsxDEV("label", { "data-source-location": "pages/Contact:143:18", "data-dynamic-content": "false", className: "font-body text-sm text-foreground mb-1.5 block", children: "Message" }, void 0, false, {
                fileName: "/app/src/pages/Contact.jsx",
                lineNumber: 162,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ jsxDEV(
                Textarea,
                {
                  "data-source-location": "pages/Contact:144:18",
                  "data-dynamic-content": "true",
                  value: form.message,
                  onChange: handleChange("message"),
                  required: true,
                  placeholder: "Your message...",
                  rows: 6,
                  className: "bg-background font-body resize-none"
                },
                void 0,
                false,
                {
                  fileName: "/app/src/pages/Contact.jsx",
                  lineNumber: 163,
                  columnNumber: 19
                },
                this
              )
            ] }, void 0, true, {
              fileName: "/app/src/pages/Contact.jsx",
              lineNumber: 161,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ jsxDEV(
              Button,
              {
                "data-source-location": "pages/Contact:153:16",
                "data-dynamic-content": "true",
                type: "submit",
                disabled: loading,
                className: "w-full bg-primary hover:bg-primary/90 text-primary-foreground font-body gap-2",
                children: [
                  /* @__PURE__ */ jsxDEV(Send, { "data-source-location": "pages/Contact:158:18", "data-dynamic-content": "false", className: "w-4 h-4" }, void 0, false, {
                    fileName: "/app/src/pages/Contact.jsx",
                    lineNumber: 177,
                    columnNumber: 19
                  }, this),
                  loading ? "Sending..." : "Send Message"
                ]
              },
              void 0,
              true,
              {
                fileName: "/app/src/pages/Contact.jsx",
                lineNumber: 172,
                columnNumber: 17
              },
              this
            )
          ] }, void 0, true, {
            fileName: "/app/src/pages/Contact.jsx",
            lineNumber: 128,
            columnNumber: 13
          }, this)
        },
        void 0,
        false,
        {
          fileName: "/app/src/pages/Contact.jsx",
          lineNumber: 108,
          columnNumber: 11
        },
        this
      )
    ] }, void 0, true, {
      fileName: "/app/src/pages/Contact.jsx",
      lineNumber: 60,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "/app/src/pages/Contact.jsx",
      lineNumber: 59,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/app/src/pages/Contact.jsx",
    lineNumber: 49,
    columnNumber: 5
  }, this);
}
_s(Contact, "7ExHozPDxFVZN/j22TmBiDfnmig=");
_c = Contact;
var _c;
$RefreshReg$(_c, "Contact");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/app/src/pages/Contact.jsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/app/src/pages/Contact.jsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,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ImJhc2U0NCIsIkJ1dHRvbiIsIklucHV0IiwiVGV4dGFyZWEiLCJTZW5kIiwiQ2hlY2siLCJNYWlsIiwiTWVzc2FnZVNxdWFyZSIsIlNlY3Rpb25IZWFkaW5nIiwiQ09OVEFDVF9CRyIsIkNvbnRhY3QiLCJfcyIsImZvcm0iLCJzZXRGb3JtIiwibmFtZSIsImVtYWlsIiwic3ViamVjdCIsIm1lc3NhZ2UiLCJzdWJtaXR0ZWQiLCJzZXRTdWJtaXR0ZWQiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImVudGl0aWVzIiwiQ29udGFjdFN1Ym1pc3Npb24iLCJjcmVhdGUiLCJoYW5kbGVDaGFuZ2UiLCJmaWVsZCIsInByZXYiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm9wYWNpdHkiLCJ4Iiwib25jZSIsImR1cmF0aW9uIiwiZGVsYXkiLCJfYyJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlcyI6WyJDb250YWN0LmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcbmltcG9ydCB7IGJhc2U0NCB9IGZyb20gJ0AvYXBpL2Jhc2U0NENsaWVudCc7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICdAL2NvbXBvbmVudHMvdWkvYnV0dG9uJztcbmltcG9ydCB7IElucHV0IH0gZnJvbSAnQC9jb21wb25lbnRzL3VpL2lucHV0JztcbmltcG9ydCB7IFRleHRhcmVhIH0gZnJvbSAnQC9jb21wb25lbnRzL3VpL3RleHRhcmVhJztcbmltcG9ydCB7IFNlbmQsIENoZWNrLCBNYWlsLCBNZXNzYWdlU3F1YXJlIH0gZnJvbSAnbHVjaWRlLXJlYWN0JztcbmltcG9ydCBTZWN0aW9uSGVhZGluZyBmcm9tICcuLi9jb21wb25lbnRzL3NoYXJlZC9TZWN0aW9uSGVhZGluZyc7XG5cbmNvbnN0IENPTlRBQ1RfQkcgPSAnaHR0cHM6Ly9tZWRpYS5iYXNlNDQuY29tL2ltYWdlcy9wdWJsaWMvNmEwNGViMjk1ZDJhMDQ4YmMwMWEwY2FhL2M3MTE1Y2JiOV9nZW5lcmF0ZWRfZGNkOTQ4YzcucG5nJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29udGFjdCgpIHtcbiAgY29uc3QgW2Zvcm0sIHNldEZvcm1dID0gdXNlU3RhdGUoeyBuYW1lOiAnJywgZW1haWw6ICcnLCBzdWJqZWN0OiAnJywgbWVzc2FnZTogJycgfSk7XG4gIGNvbnN0IFtzdWJtaXR0ZWQsIHNldFN1Ym1pdHRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xuICAgIGF3YWl0IGJhc2U0NC5lbnRpdGllcy5Db250YWN0U3VibWlzc2lvbi5jcmVhdGUoZm9ybSk7XG4gICAgc2V0U3VibWl0dGVkKHRydWUpO1xuICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChmaWVsZCkgPT4gKGUpID0+IHtcbiAgICBzZXRGb3JtKChwcmV2KSA9PiAoeyAuLi5wcmV2LCBbZmllbGRdOiBlLnRhcmdldC52YWx1ZSB9KSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0NvbnRhY3Q6MzA6NFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInB0LTI4IGxnOnB0LTM2IHBiLTIwIGxnOnBiLTMyXCI+XG4gICAgICB7LyogSGVybyBiYW5uZXIgKi99XG4gICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQ29udGFjdDozMjo2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwicmVsYXRpdmUgaC02NCBsZzpoLTcyIG92ZXJmbG93LWhpZGRlbiBtYi0xNlwiPlxuICAgICAgICA8aW1nIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQ29udGFjdDozMzo4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgc3JjPXtDT05UQUNUX0JHfSBhbHQ9XCJFbmdsaXNoIGNvdW50cnlzaWRlXCIgY2xhc3NOYW1lPVwidy1mdWxsIGgtZnVsbCBvYmplY3QtY292ZXJcIiAvPlxuICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQ29udGFjdDozNDo4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cImFic29sdXRlIGluc2V0LTAgYmctZ3JhZGllbnQtdG8tYiBmcm9tLWZvcmVncm91bmQvNTAgdG8tYmFja2dyb3VuZFwiIC8+XG4gICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9Db250YWN0OjM1OjhcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwiYWJzb2x1dGUgaW5zZXQtMCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICAgIDxoMSBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0NvbnRhY3Q6MzY6MTBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwiZm9udC1kaXNwbGF5IHRleHQtNHhsIGxnOnRleHQtNnhsIGZvbnQtYm9sZCB0ZXh0LXdoaXRlXCI+R2V0IGluIFRvdWNoPC9oMT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0NvbnRhY3Q6NDA6NlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cIm1heC13LTR4bCBteC1hdXRvIHB4LTYgbGc6cHgtMTJcIj5cbiAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0NvbnRhY3Q6NDE6OFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cImdyaWQgbGc6Z3JpZC1jb2xzLTUgZ2FwLTEyIGxnOmdhcC0xNlwiPlxuICAgICAgICAgIHsvKiBJbmZvICovfVxuICAgICAgICAgIDxtb3Rpb24uZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQ29udGFjdDo0MzoxMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiXG4gICAgICAgICAgaW5pdGlhbD17eyBvcGFjaXR5OiAwLCB4OiAtMjAgfX1cbiAgICAgICAgICB3aGlsZUluVmlldz17eyBvcGFjaXR5OiAxLCB4OiAwIH19XG4gICAgICAgICAgdmlld3BvcnQ9e3sgb25jZTogdHJ1ZSB9fVxuICAgICAgICAgIHRyYW5zaXRpb249e3sgZHVyYXRpb246IDAuNyB9fVxuICAgICAgICAgIGNsYXNzTmFtZT1cImxnOmNvbC1zcGFuLTIgc3BhY2UteS04XCI+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9Db250YWN0OjUwOjEyXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiPlxuICAgICAgICAgICAgICA8aDMgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9Db250YWN0OjUxOjE0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cImZvbnQtZGlzcGxheSB0ZXh0LXhsIGZvbnQtc2VtaWJvbGQgdGV4dC1mb3JlZ3JvdW5kIG1iLTNcIj5cbiAgICAgICAgICAgICAgICBMZXQncyBDb25uZWN0XG4gICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICAgIDxwIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQ29udGFjdDo1NDoxNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJmb250LWJvZHkgdGV4dC1iYXNlIHRleHQtbXV0ZWQtZm9yZWdyb3VuZCBsZWFkaW5nLXJlbGF4ZWRcIj5cbiAgICAgICAgICAgICAgICBXaGV0aGVyIHlvdSdkIGxpa2UgdG8gc2hhcmUgeW91ciB0aG91Z2h0cyBvbiB0aGUgYm9vaywgaW5xdWlyZSBhYm91dCBldmVudHMsIFxuICAgICAgICAgICAgICAgIG9yIHNpbXBseSBzYXkgaGVsbG8g4oCUIFJvYmVydCB3b3VsZCBsb3ZlIHRvIGhlYXIgZnJvbSB5b3UuXG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQ29udGFjdDo2MDoxMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJzcGFjZS15LTRcIj5cbiAgICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0NvbnRhY3Q6NjE6MTRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTNcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQ29udGFjdDo2MjoxNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ3LTEwIGgtMTAgcm91bmRlZC1mdWxsIGJnLXByaW1hcnkvMTAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgIDxNYWlsIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQ29udGFjdDo2MzoxOFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ3LTQgaC00IHRleHQtcHJpbWFyeVwiIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0NvbnRhY3Q6NjU6MTZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCI+XG4gICAgICAgICAgICAgICAgICA8cCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0NvbnRhY3Q6NjY6MThcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwiZm9udC1ib2R5IHRleHQtc20gdGV4dC1tdXRlZC1mb3JlZ3JvdW5kXCI+RW1haWw8L3A+XG4gICAgICAgICAgICAgICAgICA8cCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0NvbnRhY3Q6Njc6MThcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwiZm9udC1ib2R5IHRleHQtZm9yZWdyb3VuZFwiPmNvbnRhY3RAcm9iZXJ0dGlla2VuLmNvbTwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9Db250YWN0OjcwOjE0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0zXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0NvbnRhY3Q6NzE6MTZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidy0xMCBoLTEwIHJvdW5kZWQtZnVsbCBiZy1wcmltYXJ5LzEwIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICA8TWVzc2FnZVNxdWFyZSBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0NvbnRhY3Q6NzI6MThcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidy00IGgtNCB0ZXh0LXByaW1hcnlcIiAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9Db250YWN0Ojc0OjE2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiPlxuICAgICAgICAgICAgICAgICAgPHAgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9Db250YWN0Ojc1OjE4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cImZvbnQtYm9keSB0ZXh0LXNtIHRleHQtbXV0ZWQtZm9yZWdyb3VuZFwiPlJlc3BvbnNlIHRpbWU8L3A+XG4gICAgICAgICAgICAgICAgICA8cCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0NvbnRhY3Q6NzY6MThcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwiZm9udC1ib2R5IHRleHQtZm9yZWdyb3VuZFwiPlVzdWFsbHkgd2l0aGluIDQ4IGhvdXJzPC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8YmxvY2txdW90ZSBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0NvbnRhY3Q6ODE6MTJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwiYm9yZGVyLWwtMiBib3JkZXItYWNjZW50IHBsLTRcIj5cbiAgICAgICAgICAgICAgPHAgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9Db250YWN0OjgyOjE0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cImZvbnQtYWNjZW50IGl0YWxpYyB0ZXh0LWxnIHRleHQtZm9yZWdyb3VuZC83MFwiPlxuICAgICAgICAgICAgICAgIFwiRXZlcnkgbGV0dGVyLCBldmVyeSBtZXNzYWdlIHJlbWluZHMgbWUgd2h5IEkgd3JpdGUg4oCUIHRvIGNvbm5lY3QuXCJcbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPC9ibG9ja3F1b3RlPlxuICAgICAgICAgIDwvbW90aW9uLmRpdj5cblxuICAgICAgICAgIHsvKiBGb3JtICovfVxuICAgICAgICAgIDxtb3Rpb24uZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQ29udGFjdDo4OToxMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiXG4gICAgICAgICAgaW5pdGlhbD17eyBvcGFjaXR5OiAwLCB4OiAyMCB9fVxuICAgICAgICAgIHdoaWxlSW5WaWV3PXt7IG9wYWNpdHk6IDEsIHg6IDAgfX1cbiAgICAgICAgICB2aWV3cG9ydD17eyBvbmNlOiB0cnVlIH19XG4gICAgICAgICAgdHJhbnNpdGlvbj17eyBkdXJhdGlvbjogMC43LCBkZWxheTogMC4yIH19XG4gICAgICAgICAgY2xhc3NOYW1lPVwibGc6Y29sLXNwYW4tM1wiPlxuICAgICAgICAgICAgXG4gICAgICAgICAgICB7c3VibWl0dGVkID9cbiAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9Db250YWN0Ojk3OjE0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cImJnLWNhcmQgYm9yZGVyIGJvcmRlci1ib3JkZXIgcm91bmRlZC14bCBwLTEyIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0NvbnRhY3Q6OTg6MTZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidy0xNiBoLTE2IHJvdW5kZWQtZnVsbCBiZy1hY2NlbnQvMTAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgbXgtYXV0byBtYi02XCI+XG4gICAgICAgICAgICAgICAgICA8Q2hlY2sgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9Db250YWN0Ojk5OjE4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInctOCBoLTggdGV4dC1hY2NlbnRcIiAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxoMyBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0NvbnRhY3Q6MTAxOjE2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cImZvbnQtZGlzcGxheSB0ZXh0LTJ4bCBmb250LXNlbWlib2xkIHRleHQtZm9yZWdyb3VuZCBtYi0zXCI+XG4gICAgICAgICAgICAgICAgICBUaGFuayBZb3VcbiAgICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICAgIDxwIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQ29udGFjdDoxMDQ6MTZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwiZm9udC1hY2NlbnQgaXRhbGljIHRleHQtbGcgdGV4dC1tdXRlZC1mb3JlZ3JvdW5kXCI+XG4gICAgICAgICAgICAgICAgICBZb3VyIG1lc3NhZ2UgaGFzIGJlZW4gc2VudC4gUm9iZXJ0IHdpbGwgZ2V0IGJhY2sgdG8geW91IHNvb24uXG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8L2Rpdj4gOlxuXG4gICAgICAgICAgICA8Zm9ybSBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0NvbnRhY3Q6MTA5OjE0XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0gY2xhc3NOYW1lPVwiYmctY2FyZCBib3JkZXIgYm9yZGVyLWJvcmRlciByb3VuZGVkLXhsIHAtOCBsZzpwLTEwIHNwYWNlLXktNVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9Db250YWN0OjExMDoxNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cImdyaWQgc206Z3JpZC1jb2xzLTIgZ2FwLTVcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9Db250YWN0OjExMToxOFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9Db250YWN0OjExMjoyMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJmb250LWJvZHkgdGV4dC1zbSB0ZXh0LWZvcmVncm91bmQgbWItMS41IGJsb2NrXCI+TmFtZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0NvbnRhY3Q6MTEzOjIwXCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtLm5hbWV9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlKCduYW1lJyl9XG4gICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJZb3VyIG5hbWVcIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctYmFja2dyb3VuZCBmb250LWJvZHlcIiAvPlxuICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9Db250YWN0OjEyMToxOFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9Db250YWN0OjEyMjoyMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJmb250LWJvZHkgdGV4dC1zbSB0ZXh0LWZvcmVncm91bmQgbWItMS41IGJsb2NrXCI+RW1haWw8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8SW5wdXQgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJwYWdlcy9Db250YWN0OjEyMzoyMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm0uZW1haWx9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlKCdlbWFpbCcpfVxuICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwieW91ckBlbWFpbC5jb21cIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctYmFja2dyb3VuZCBmb250LWJvZHlcIiAvPlxuICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQ29udGFjdDoxMzM6MTZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIj5cbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0NvbnRhY3Q6MTM0OjE4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cImZvbnQtYm9keSB0ZXh0LXNtIHRleHQtZm9yZWdyb3VuZCBtYi0xLjUgYmxvY2tcIj5TdWJqZWN0PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgIDxJbnB1dCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0NvbnRhY3Q6MTM1OjE4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybS5zdWJqZWN0fVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2UoJ3N1YmplY3QnKX1cbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIldoYXQgaXMgdGhpcyBhYm91dD9cIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWJhY2tncm91bmQgZm9udC1ib2R5XCIgLz5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQ29udGFjdDoxNDI6MTZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIj5cbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0NvbnRhY3Q6MTQzOjE4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cImZvbnQtYm9keSB0ZXh0LXNtIHRleHQtZm9yZWdyb3VuZCBtYi0xLjUgYmxvY2tcIj5NZXNzYWdlPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgIDxUZXh0YXJlYSBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0NvbnRhY3Q6MTQ0OjE4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybS5tZXNzYWdlfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2UoJ21lc3NhZ2UnKX1cbiAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiWW91ciBtZXNzYWdlLi4uXCJcbiAgICAgICAgICAgICAgICByb3dzPXs2fVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWJhY2tncm91bmQgZm9udC1ib2R5IHJlc2l6ZS1ub25lXCIgLz5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIGRhdGEtc291cmNlLWxvY2F0aW9uPVwicGFnZXMvQ29udGFjdDoxNTM6MTZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIlxuICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgZGlzYWJsZWQ9e2xvYWRpbmd9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBiZy1wcmltYXJ5IGhvdmVyOmJnLXByaW1hcnkvOTAgdGV4dC1wcmltYXJ5LWZvcmVncm91bmQgZm9udC1ib2R5IGdhcC0yXCI+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICA8U2VuZCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cInBhZ2VzL0NvbnRhY3Q6MTU4OjE4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInctNCBoLTRcIiAvPlxuICAgICAgICAgICAgICAgICAge2xvYWRpbmcgPyAnU2VuZGluZy4uLicgOiAnU2VuZCBNZXNzYWdlJ31cbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgfVxuICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+KTtcblxufSJdLCJmaWxlIjoiL2FwcC9zcmMvcGFnZXMvQ29udGFjdC5qc3gifQ==