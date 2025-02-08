import React from "react";
import PageIntro from "../components/PageIntro";

export default function PrivacyPolicy() {
  return (
    <>
      <PageIntro
        title="Privacy Policy"
        description="At [Company Name], we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you visit our website or use our services."
      />
      <section>
        <div className="mx-auto flex max-w-[900px] flex-col gap-10 px-4 py-10 lg:px-0">
          <div>
            <h2 className="text-xl font-semibold">1. Information We Collect</h2>
            <p className="mt-2">
            We may collect the following types of information:
            </p>
            <ul className="p-4">
              <li className="list-disc mb-2"> <strong>Personal Information:</strong> Name, email address, phone number, and other details you provide when contacting us or using our services.</li>
              <li className="list-disc mb-2"> <strong>Usage Data:</strong> Information about how you interact with our website, such as IP address, browser type, pages visited, and time spent on the site.</li>
              <li className="list-disc mb-2"> <strong>Cookies:</strong> We use cookies to enhance your experience and analyze website traffic. You can manage cookie preferences in your browser settings.</li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold">2. How We Use Your Information</h2>
            <p className="mt-2">
            We use your information for the following purposes:
            </p>
            <ul className="p-4">
              <li className="list-disc mb-2">To provide and improve our services.</li>
              <li className="list-disc mb-2">To respond to your inquiries and support requests.</li>
              <li className="list-disc mb-2">To send updates, newsletters, or promotional materials (with your consent).</li>
              <li className="list-disc mb-2">To analyze website usage and improve user experience.</li>
              <li className="list-disc mb-2">To comply with legal obligations and protect our rights.</li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold">3. Sharing Your Information</h2>
            <p className="mt-2">
            We do not sell or rent your personal information to third parties. However, we may share your data in the following circumstances:
            </p>
            <ul className="p-4">
              <li className="list-disc mb-2">With trusted service providers who assist us in operating our website or delivering services.</li>
              <li className="list-disc mb-2">When required by law or to protect our legal rights.</li>
              <li className="list-disc mb-2">With your consent or at your direction.</li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold">4. Data Security</h2>
            <p className="mt-2">
            We implement industry-standard security measures to protect your information from unauthorized access, alteration, or disclosure. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold">5. Your Rights</h2>
            <p className="mt-2">
            Depending on your location, you may have the following rights regarding your personal data:
            </p>
            <ul className="p-4">
              <li className="list-disc mb-2"><strong>Access:</strong> Request a copy of the data we hold about you.</li>
              <li className="list-disc mb-2"><strong>Correction:</strong> Update or correct inaccurate information.</li>
              <li className="list-disc mb-2"><strong>Deletion:</strong> Request deletion of your data under certain conditions.</li>
              <li className="list-disc mb-2"><strong>Opt-Out:</strong> Unsubscribe from marketing communications at any time.</li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold">6. Third-Party Links</h2>
            <p className="mt-2">
            Our website may contain links to third-party sites. We are not responsible for the privacy practices or content of these sites. Please review their privacy policies before providing any personal information.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold">7. Changes to This Policy</h2>
            <p className="mt-2">
            We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date. We encourage you to review this policy periodically.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
