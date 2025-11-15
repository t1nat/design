/** 
// TODO: da se opravi tupoto neshto n

"use client"

import { useEffect, useState } from "react"
import Script from "next/script"

// Extend the Window interface to include Google Translate
declare global {
  interface Window {
    googleTranslateElementInit?: () => void
    google?: any
  }
}

export const GoogleTranslate: React.FC = () => {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    window.googleTranslateElementInit = () => {
      if (window.google) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            layout: window.google.translate.TranslateElement.SIMPLE, // Small dropdown
            autoDisplay: false, // Don't auto-show the big banner
          },
          "google_translate_element"
        )
        setLoaded(true)
      }
    }
  }, [])

  return (
    <>
      {/* Load Google Translate script *//** }
      <Script
        src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
        strategy="afterInteractive"
      />

      {/* Subtle button *//** }
      <div
        id="google_translate_element"
        className="fixed top-16 right-4 z-50 bg-white rounded-md p-1 shadow-sm border border-gray-200"
      >
        {!loaded && <span className="text-xs text-gray-500">Loading…</span>}
      </div>
    </>
  )
}

export default GoogleTranslate */
