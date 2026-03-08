import { useEffect } from 'react';

/**
 * useSEO — Updates document <head> meta tags per page.
 * Call this at the top of every page component.
 *
 * @param {Object} options
 * @param {string} options.title        - Page <title>
 * @param {string} options.description  - Meta description
 * @param {string} options.canonical    - Canonical URL
 * @param {string} [options.ogTitle]    - OG title (falls back to title)
 * @param {string} [options.ogDesc]     - OG description (falls back to description)
 * @param {string} [options.ogImage]    - OG image URL
 */
const useSEO = ({ title, description, canonical, ogTitle, ogDesc, ogImage }) => {
  useEffect(() => {
    // --- Title ---
    document.title = title;

    // --- Helper to set or create a meta tag ---
    const setMeta = (selector, content) => {
      let el = document.querySelector(selector);
      if (!el) {
        el = document.createElement('meta');
        // Parse selector to set attribute
        if (selector.includes('name=')) {
          el.setAttribute('name', selector.match(/name="([^"]+)"/)[1]);
        } else if (selector.includes('property=')) {
          el.setAttribute('property', selector.match(/property="([^"]+)"/)[1]);
        }
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    const base = 'https://www.clearbillai.com';
    const resolvedOgImage = ogImage || `${base}/og-image.png`;
    const resolvedOgTitle = ogTitle || title;
    const resolvedOgDesc = ogDesc || description;

    // --- Standard SEO ---
    setMeta('meta[name="description"]', description);

    // --- Canonical ---
    let canonicalEl = document.querySelector('link[rel="canonical"]');
    if (!canonicalEl) {
      canonicalEl = document.createElement('link');
      canonicalEl.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalEl);
    }
    canonicalEl.setAttribute('href', canonical || base + '/');

    // --- Open Graph ---
    setMeta('meta[property="og:title"]', resolvedOgTitle);
    setMeta('meta[property="og:description"]', resolvedOgDesc);
    setMeta('meta[property="og:url"]', canonical || base + '/');
    setMeta('meta[property="og:image"]', resolvedOgImage);

    // --- Twitter ---
    setMeta('meta[name="twitter:title"]', resolvedOgTitle);
    setMeta('meta[name="twitter:description"]', resolvedOgDesc);
    setMeta('meta[name="twitter:image"]', resolvedOgImage);

  }, [title, description, canonical, ogTitle, ogDesc, ogImage]);
};

export default useSEO;
