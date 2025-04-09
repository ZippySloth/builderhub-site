'use client'

import { useEffect } from "react"

export function AnalyticsScripts() {
  useEffect(() => {
    const consent = localStorage.getItem("analytics_consent")
    if (consent === "true") {
      // 🔹 Google Analytics
      const gaScript = document.createElement("script")
      gaScript.src = "https://www.googletagmanager.com/gtag/js?id=G-57QBK8S1X6"
      gaScript.async = true
      document.head.appendChild(gaScript)

      const gaInit = document.createElement("script")
      gaInit.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-57QBK8S1X6');
      `
      document.head.appendChild(gaInit)

      // 🔹 Microsoft Clarity
      const clarityScript = document.createElement("script")
      clarityScript.innerHTML = `
        (function(c,l,a,r,i,t,y){
          c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
          t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
          y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
        })(window, document, "clarity", "script", "r1b15oount");
      `
      document.head.appendChild(clarityScript)
    }
  }, [])

  return null
}
