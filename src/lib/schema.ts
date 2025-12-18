// Organization Schema - used sitewide
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Launch Big Brands",
  "url": "https://launchbigbrands.com",
  "logo": "https://launchbigbrands.com/assets/images/Untitled_design_16.png",
  "description": "Expert ecommerce growth agency helping Shopify brands scale with proven ad strategies and systems.",
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "Customer Service",
    "url": "https://launchbigbrands.com/contact"
  },
  "sameAs": []
};

// Service Schema
export const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Ecommerce Growth & Marketing",
  "provider": {
    "@type": "Organization",
    "name": "Launch Big Brands"
  },
  "areaServed": "Worldwide",
  "description": "Done-for-you ecommerce growth services including Facebook ads, Google ads, email marketing, and conversion optimization for Shopify stores."
};

// Article Schema Generator
export function generateArticleSchema(article: {
  headline: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified: string;
  author: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.headline,
    "description": article.description,
    "image": article.image,
    "datePublished": article.datePublished,
    "dateModified": article.dateModified,
    "author": {
      "@type": "Organization",
      "name": article.author || "Launch Big Brands"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Launch Big Brands",
      "logo": {
        "@type": "ImageObject",
        "url": "https://launchbigbrands.com/assets/images/Untitled_design_16.png"
      }
    }
  };
}

// FAQ Schema Generator
export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
}
