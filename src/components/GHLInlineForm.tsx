import { useEffect, useRef } from "react";

/**
 * GHL embed script manipulates the DOM. To avoid React reconciliation errors
 * (e.g. removeChild not a child), we inject the iframe markup into a ref
 * container so React only owns the wrapper element.
 */
export default function GHLInlineForm() {
  const hostRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Inject iframe markup outside React's managed children
    if (hostRef.current) {
      hostRef.current.innerHTML = `
        <iframe
          src="https://api.leadconnectorhq.com/widget/form/l08xUplWrxyWWvSMHtOq"
          style="width:100%;min-height:670px;height:760px;border:none;border-radius:25px"
          id="inline-l08xUplWrxyWWvSMHtOq"
          data-layout="{'id':'INLINE'}"
          data-trigger-type="alwaysShow"
          data-trigger-value=""
          data-activation-type="alwaysActivated"
          data-activation-value=""
          data-deactivation-type="neverDeactivate"
          data-deactivation-value=""
          data-form-name="Opt-In Template"
          data-height="670"
          data-layout-iframe-id="inline-l08xUplWrxyWWvSMHtOq"
          data-form-id="l08xUplWrxyWWvSMHtOq"
          title="Opt-In Template"
        ></iframe>
      `;
    }

    // Load script once (no cleanup)
    const src = "https://link.msgsndr.com/js/form_embed.js";
    if (!document.querySelector(`script[src="${src}"]`)) {
      const script = document.createElement("script");
      script.src = src;
      script.async = true;
      document.body.appendChild(script);
    }

    return () => {
      // Clean up injected markup (safe: React doesn't own these children)
      if (hostRef.current) hostRef.current.innerHTML = "";
    };
  }, []);

  return <div ref={hostRef} />;
}
