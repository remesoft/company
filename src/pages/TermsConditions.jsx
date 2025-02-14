import React from "react";
import PageIntro from "../components/PageIntro";

export default function TermsConditions() {
  return (
    <>
      <PageIntro
        title="Terms and Conditions"
        description="By using our services, you agree to the following terms and conditions. Please read them carefully."
      />
      <section>
        <div className="mx-auto flex max-w-[900px] flex-col gap-10 px-4 py-10 lg:px-0">
          <div>
            <h2 className="text-xl font-semibold">1. Acceptance of Terms</h2>
            <p className="mt-2">
              By engaging with Adverse, you
              agree to comply with and be bound by these Terms and Conditions.
              If you do not agree, please refrain from using our services.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold">2. Services Provided</h2>
            <p className="mt-2">
              We offer custom website development, mobile app creation, software
              tools, and related services. The scope of work will be outlined in
              a project proposal or agreement.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold">3. Client Responsibilities</h2>
            <ul className="p-4">
              <li className="list-disc mb-2">Provide accurate and complete information required for the project.</li>
              <li className="list-disc mb-2">Make timely decisions and provide feedback to avoid delays.</li>
              <li className="list-disc mb-2">Ensure all content provided (text, images, etc.) is legally owned or licensed for use.</li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold">4. Payment Terms</h2>
            <ul className="p-4">
              <li className="list-disc mb-2">A deposit may be required before work begins.</li>
              <li className="list-disc mb-2">Payment milestones will be outlined in the project agreement.</li>
              <li className="list-disc mb-2">Late payments may result in project delays or additional fees.</li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold">5. Intellectual Property</h2>
            <ul className="p-4">
              <li className="list-disc mb-2">Upon full payment, the client will own the final deliverables (website, app, or software).</li>
              <li className="list-disc mb-2">We retain the right to showcase the work in our portfolio unless otherwise agreed.</li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold">6. Revisions and Changes</h2>
            <ul className="p-4">
              <li className="list-disc mb-2">Revisions within the agreed scope are included. Additional changes may incur extra charges.</li>
              <li className="list-disc mb-2">Major changes to the project scope may require a new agreement.</li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold">7. Project Timeline</h2>
            <ul className="p-4">
              <li className="list-disc mb-2">Timelines are estimates and may vary based on client feedback, scope changes, or unforeseen circumstances.</li>
              <li className="list-disc mb-2">Delays caused by the client may extend the project timeline.</li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold">8. Confidentiality</h2>
            <ul className="p-4">
              <li className="list-disc mb-2">We will keep all client information confidential unless required by law to disclose it.</li>
              <li className="list-disc mb-2">Clients agree not to share proprietary information about our processes or pricing.</li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold">9. Termination</h2>
            <ul className="p-4">
              <li className="list-disc mb-2">Either party may terminate the project with written notice.</li>
              <li className="list-disc mb-2">Upon termination, the client will pay for all work completed up to that point.</li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold">10. Limitation of Liability</h2>
            <ul className="p-4">
              <li className="list-disc mb-2">We are not liable for any indirect, incidental, or consequential damages arising from the use of our services.</li>
              <li className="list-disc mb-2">Our total liability is limited to the amount paid by the client for the specific project.</li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold">11. Warranty</h2>
            <ul className="p-4">
              <li className="list-disc mb-2">We provide a limited warranty period (e.g., 30 days) to fix any bugs or issues related to our work.</li>
              <li className="list-disc mb-2">This warranty does not cover issues caused by third-party software or client modifications.</li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold">12. Governing Law</h2>
            <ul className="p-4">
              <li className="list-disc mb-2">These Terms and Conditions are governed by the laws of [Your Country/State].</li>
              <li className="list-disc mb-2">Any disputes will be resolved through arbitration or in a court of competent jurisdiction.</li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold">13. Amendments</h2>
            <ul className="p-4">
              <li className="list-disc mb-2">We reserve the right to update these Terms and Conditions at any time. Clients will be notified of significant changes.</li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold">14. Entire Agreement</h2>
            <ul className="p-4">
              <li className="list-disc mb-2">These Terms and Conditions, along with the project agreement, constitute the entire agreement between the parties.</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
