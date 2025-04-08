import React from "react";

const PrivacyPolicy = () => {
  return (
    <div>
      <section className="container mx-auto py-20 px-5 lg:px-24 text-black dark:text-white mt-10">
        <h1 className="text-4xl font-bold text-center mb-8">Privacy Policy</h1>
        
        <p className="mb-4">
          At <strong>BuildRhub</strong>, we are committed to protecting your personal information and your right to privacy.
          This Privacy Policy describes how we collect, use, and protect your information when you visit our website{" "}
          <a href="https://buildrhub.io" className="text-blue-500 underline">
            https://buildrhub.io
          </a>.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4">Information We Collect</h2>
        <p className="mb-4">
          We collect personal information that you provide to us when you use our website, such as your name, email address,
          business information, and any other information you voluntarily provide through our contact forms.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4">How We Use Your Information</h2>
        <p className="mb-4">The information we collect is used to:</p>
        <ul className="list-disc ml-8 mb-4">
          <li>Respond to your inquiries and requests</li>
          <li>Provide services you request</li>
          <li>Improve our website functionality and content</li>
          <li>Communicate with you about updates and promotions</li>
        </ul>

        <h2 className="text-2xl font-bold mt-10 mb-4">Cookies and Tracking Technologies</h2>
        <p className="mb-4">
          We use cookies to enhance your browsing experience. By continuing to use our website, you consent to the use of cookies.
          You can manage your cookie preferences through your browser settings.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4">Data Security</h2>
        <p className="mb-4">
          We take data security seriously and implement reasonable measures to protect your personal information. However, no
          transmission over the internet is completely secure. Therefore, we cannot guarantee its absolute security.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4">Your Rights</h2>
        <p className="mb-4">
          You have the right to access, update, or delete your personal information. If you wish to exercise these rights, please
          contact us at{" "}
          <a href="mailto:contact@buildrhub.io" className="text-blue-500 underline">
            contact@buildrhub.io
          </a>.
        </p>

        <h2 className="text-2xl font-bold mt-10 mb-4">Changes to This Policy</h2>
        <p className="mb-4">
          We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective
          date. We encourage you to review this policy periodically.
        </p>

        <p className="mt-10">
          If you have any questions about this Privacy Policy, please contact us at{" "}
          <a href="mailto:contact@buildrhub.io" className="text-blue-500 underline">
            contact@buildrhub.io
          </a>.
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
