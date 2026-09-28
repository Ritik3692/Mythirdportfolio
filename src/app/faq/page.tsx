import React from 'react';

export const metadata = {
  title: 'Frequently Asked Questions | ritik -prof3',
  description: 'Find answers to common questions about ritik -prof3, features, security, and services on my-secondportfolio-so5v.vercel.app.',
  alternates: { canonical: 'https://my-secondportfolio-so5v.vercel.app/faq' },
  openGraph: {
    title: 'Frequently Asked Questions | ritik -prof3',
    description: 'Find answers to common questions about ritik -prof3.',
    url: 'https://my-secondportfolio-so5v.vercel.app/faq',
    siteName: 'ritik -prof3',
    type: 'website',
  },
};

export default function FAQPage() {
  const schemaData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What kind of software development services does Ritik specialize in?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ritik specializes in full-stack development, leveraging expertise in both frontend and backend technologies. From building responsive interfaces with HTML, CSS, and JavaScript to architecting robust server-side solutions using Java, he delivers end-to-end software products."
      }
    },
    {
      "@type": "Question",
      "name": "Can Ritik integrate AI and Machine Learning into my project?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, Ritik has a strong foundation in AI and ML. He can help you integrate intelligent features into your applications, ranging from predictive data modeling to automated workflows, ensuring your software stays ahead of the curve."
      }
    },
    {
      "@type": "Question",
      "name": "Does Ritik work with modern frontend frameworks?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely. While Ritik has a deep understanding of core HTML, CSS, and JavaScript, he is proficient in modern frontend frameworks to ensure your website is fast, scalable, and provides a seamless user experience."
      }
    },
    {
      "@type": "Question",
      "name": "What backend technologies does Ritik use for application development?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ritik primarily utilizes Java for backend development, known for its reliability and scalability. He builds secure, high-performance server-side architectures that handle complex business logic and database interactions efficiently."
      }
    },
    {
      "@type": "Question",
      "name": "How can I hire Ritik for a full-stack development project?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can reach out to Ritik directly through his portfolio website. Whether you need a custom software solution, an AI-driven application, or a full-stack overhaul, feel free to contact him to discuss your project requirements and goals."
      }
    }
  ]
};

  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <div className="mb-6">
        <a
          href="/"
          className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-md text-sm font-medium hover:bg-gray-200 transition-colors border border-gray-300"
        >
          ← Back to Home
        </a>
      </div>
      <h1 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h1>
      <p className="text-gray-600 mb-8">Everything you need to know about ritik -prof3.</p>
      <div className="faq-list">
          <div key={0} className="mb-6 border-b border-gray-200 pb-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">What kind of software development services does Ritik specialize in?</h3>
            <p className="text-gray-600">Ritik specializes in full-stack development, leveraging expertise in both frontend and backend technologies. From building responsive interfaces with HTML, CSS, and JavaScript to architecting robust server-side solutions using Java, he delivers end-to-end software products.</p>
          </div>
          <div key={1} className="mb-6 border-b border-gray-200 pb-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Can Ritik integrate AI and Machine Learning into my project?</h3>
            <p className="text-gray-600">Yes, Ritik has a strong foundation in AI and ML. He can help you integrate intelligent features into your applications, ranging from predictive data modeling to automated workflows, ensuring your software stays ahead of the curve.</p>
          </div>
          <div key={2} className="mb-6 border-b border-gray-200 pb-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Does Ritik work with modern frontend frameworks?</h3>
            <p className="text-gray-600">Absolutely. While Ritik has a deep understanding of core HTML, CSS, and JavaScript, he is proficient in modern frontend frameworks to ensure your website is fast, scalable, and provides a seamless user experience.</p>
          </div>
          <div key={3} className="mb-6 border-b border-gray-200 pb-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">What backend technologies does Ritik use for application development?</h3>
            <p className="text-gray-600">Ritik primarily utilizes Java for backend development, known for its reliability and scalability. He builds secure, high-performance server-side architectures that handle complex business logic and database interactions efficiently.</p>
          </div>
          <div key={4} className="mb-6 border-b border-gray-200 pb-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">How can I hire Ritik for a full-stack development project?</h3>
            <p className="text-gray-600">You can reach out to Ritik directly through his portfolio website. Whether you need a custom software solution, an AI-driven application, or a full-stack overhaul, feel free to contact him to discuss your project requirements and goals.</p>
          </div>
      </div>
    </main>
  );
}
