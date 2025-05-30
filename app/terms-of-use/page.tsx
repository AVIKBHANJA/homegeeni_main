import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";

export const metadata = {
  title: "Terms of Use",
  description: "Terms of Use and legal information.",
};

export default function TermsOfUsePage() {
  return (
    <>
      <Navigation />
      <div className="px-4 lg:px-8">
        <main className="container mx-auto py-12 max-w-4xl">
          {" "}
          <h1 className="text-3xl md:text-4xl font-bold mb-8 flex items-center gap-3">
            <img src="/logo.png" alt="Logo" className="h-8 w-auto" />
            Terms of Use
          </h1>
          <div className="space-y-6 text-gray-700">
            <p className="text-sm">
              <strong>Effective Date:</strong> May 9, 2025
              <br />
              <strong>Last Updated:</strong> May 9, 2025
            </p>{" "}
            <p>
              Welcome and thank you for your interest in our real estate
              services platform (collectively referred to as "we," "our," or
              "us"). By clicking a registration or account creation button,
              accessing or using our websites, mobile applications, AI tools, or
              other services (collectively, the "Services"), or accessing any
              content provided through the Services, you agree to be bound by
              the following Terms of Use, as updated from time to time
              ("Terms").
            </p>
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">1. HomeGeeni's Role</h2>
              <p>
                HomeGeeni offers services that facilitate tasks related to real
                estate transactions, including property listings, AI-assisted
                offer generation, form filling, and brokerage services in select
                U.S. states. Unless explicitly provided in a separate written
                agreement or stated in a particular Service's terms ("Product
                Terms"), the Services are not intended to provide financial,
                legal, or real estate advice. You understand and agree that
                HomeGeeni disclaims all liability for any outcome or consequence
                resulting from actions taken based on the Services. You
                acknowledge that the Services may include advertisements, and to
                make them relevant and useful, we may serve ads based on
                collected data. Please refer to our Privacy Policy for more
                information.
              </p>
            </section>
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">
                2. Eligibility and Account Registration
              </h2>
              <p>
                You must be at least 18 years of age to use the Services. By
                creating an account, you represent and warrant that you meet
                this requirement and that the information you provide is
                accurate, complete, and up to date. You are responsible for
                maintaining the confidentiality of your account credentials and
                for all activity occurring under your account. You may not use
                your account for transactions on behalf of others unless you are
                authorized to do so under a separate agreement with HomeGeeni.
              </p>
            </section>
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">3. Use of Services</h2>
              <p>
                Subject to compliance with these Terms, we grant you a limited,
                personal, revocable, non-exclusive, non-transferable license to
                access and use the Services. If you are a licensed real estate
                professional using the Services for business purposes, you
                represent that you have obtained all required consents and
                authorizations from your clients. You may not use any content or
                data from the Services on third-party platforms without our
                prior written consent.
              </p>
            </section>
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">4. Mobile Applications</h2>
              <p>
                To access our Services via mobile apps, you must have a
                compatible device. You agree to receive automatic updates and
                understand that additional mobile data charges may apply. The
                Terms apply to all versions of our apps.
              </p>
            </section>
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">
                5. Listings and Market Information
              </h2>
              <p>
                Listings and market data available through the Services may be
                provided by users, affiliates, or public sources. HomeGeeni does
                not verify ownership, title, or legality of properties unless
                explicitly stated. You are responsible for verifying the
                accuracy and completeness of property data before making any
                decisions.
              </p>
            </section>
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">
                6. AI Services and Disclaimers
              </h2>
              <p>
                HomeGeeni uses artificial intelligence to assist with document
                generation, valuation, and offer preparation. These AI tools are
                not perfect and may produce errors or omissions. Users are
                solely responsible for reviewing and verifying any AI-generated
                output. HomeGeeni makes no guarantees regarding the accuracy or
                suitability of such content and disclaims liability for
                decisions based on it.
              </p>
            </section>
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">
                7. Fees and Subscriptions
              </h2>
              <p>
                Access to certain Services may require payment or subscription.
                All fees are non-refundable unless stated otherwise.
                Subscriptions may auto-renew unless canceled in advance. If fees
                change, you will be notified and have the option to discontinue
                service.
              </p>
            </section>
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">
                8. User-Generated Content
              </h2>
              <p>
                Users may upload listings, comments, and other content ("User
                Content"). You retain ownership of your content but grant
                HomeGeeni a worldwide, royalty-free, perpetual license to use,
                display, and distribute it. You represent that you have the
                necessary rights to share any content you submit. We reserve the
                right to remove any content that violates these Terms.
              </p>
            </section>
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">9. Prohibited Conduct</h2>
              <p>
                You agree not to misuse the Services. Prohibited uses include
                but are not limited to: unauthorized copying or distribution,
                using bots or scrapers, violating any law, posting harmful or
                misleading content, interfering with the Services' security or
                functionality, or attempting to reverse-engineer our platform.
              </p>
            </section>
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">
                10. Third-Party Services
              </h2>
              <p>
                The Services may link to or integrate third-party tools or
                websites. We do not control third-party providers and are not
                responsible for their content, accuracy, or legal compliance.
                Your use of third-party services is at your own risk and subject
                to those parties' terms and policies.
              </p>
            </section>
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">11. Privacy</h2>
              <p>
                By using HomeGeeni, you consent to our collection and use of
                personal data as described in our Privacy Policy. We collect
                user data such as names, email addresses, usage behavior, and
                device information to improve service quality. Data may be
                stored in the U.S., India, or other jurisdictions.
              </p>
            </section>
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">
                12. Intellectual Property
              </h2>
              <p>
                All content, software, trademarks, designs, and AI tools
                provided by HomeGeeni are protected by intellectual property
                laws and remain our property. Except as expressly permitted, you
                may not use, reproduce, or distribute any portion of the
                Services.
              </p>
            </section>
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">13. Feedback</h2>
              <p>
                You may submit suggestions or feedback, and by doing so, you
                grant us a royalty-free, irrevocable license to use such input
                for any purpose, including improving our Services.
              </p>
            </section>
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">
                14. Termination and Suspension
              </h2>
              <p>
                We may suspend or terminate your account at our discretion
                without notice if you violate these Terms. You may request
                account deletion by contacting privacy@homegeeni.com.
              </p>
            </section>
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">15. Indemnity</h2>
              <p>
                You agree to defend, indemnify, and hold harmless HomeGeeni and
                its affiliates from any claims, damages, or liabilities arising
                from your use of the Services, your content, or your violation
                of these Terms.
              </p>
            </section>
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">16. Disclaimers</h2>
              <p className="uppercase">
                THE SERVICES ARE PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY
                KIND. HOMGEENI DISCLAIMS ALL IMPLIED WARRANTIES INCLUDING
                MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND
                NON-INFRINGEMENT. WE DO NOT GUARANTEE THE AVAILABILITY,
                ACCURACY, OR SECURITY OF THE SERVICES.
              </p>
            </section>
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">
                17. Limitation of Liability
              </h2>
              <p className="uppercase">
                TO THE FULLEST EXTENT PERMITTED BY LAW, HOMGEENI SHALL NOT BE
                LIABLE FOR INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR
                PUNITIVE DAMAGES. OUR TOTAL LIABILITY TO YOU SHALL NOT EXCEED
                THE GREATER OF $100 OR THE AMOUNT PAID BY YOU TO US IN THE PAST
                12 MONTHS.
              </p>
            </section>
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">
                18. Governing Law and Dispute Resolution
              </h2>
              <p>
                For U.S. users, these Terms are governed by the laws of the
                State of California, and any disputes must be resolved by
                arbitration in San Francisco, CA. For Indian users, disputes are
                governed by Indian law and subject to arbitration under the
                Arbitration and Conciliation Act, 1996 in Bangalore, Karnataka.
              </p>
            </section>
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">
                19. Modifications to Terms
              </h2>
              <p>
                We may update these Terms periodically. Your continued use after
                such changes constitutes acceptance of the new Terms. We may
                notify you of updates via email or on our website.
              </p>
            </section>
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">
                20. Contact Information
              </h2>
              <p>
                For legal questions or support:
                <br />
                Email: legal@homegeeni.com (USA), legal@homegeeni.in (India)
                <br />
                Mailing Address: 123 Main Street, San Francisco, CA 94105 (USA)
                and 456 Tech Park, Bangalore 560001 (India)
              </p>
            </section>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
