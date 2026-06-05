import { useToast } from "@/components/ui/use-toast";
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport } from
"@/components/ui/toast";

export function Toaster() {
  const { toasts } = useToast();

  return (
    <ToastProvider data-source-location="components/ui/toaster:15:4" data-dynamic-content="true">
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast data-source-location="components/ui/toaster:18:10" data-dynamic-content="true" key={id} {...props} data-collection-item-field="action" data-collection-item-id={id}>
            <div data-source-location="components/ui/toaster:19:12" data-dynamic-content="true" className="grid gap-1">
              {title && <ToastTitle data-source-location="components/ui/toaster:20:24" data-dynamic-content="true" data-collection-item-field="title" data-collection-item-id={id}>{title}</ToastTitle>}
              {description &&
              <ToastDescription data-source-location="components/ui/toaster:22:16" data-dynamic-content="true" data-collection-item-field="description" data-collection-item-id={id}>{description}</ToastDescription>
              }
            </div>
            {action}
            <ToastClose data-source-location="components/ui/toaster:26:12" data-dynamic-content="false" />
          </Toast>);

      })}
      <ToastViewport data-source-location="components/ui/toaster:30:6" data-dynamic-content="false" />
    </ToastProvider>);

}