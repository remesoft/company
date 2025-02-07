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
              By engaging with [Your Company Name] ("we," "us," or "our"), you
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
        </div>
      </section>
    </>
  );
}
