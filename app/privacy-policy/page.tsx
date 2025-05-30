import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";

export const metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy explaining how we collect, use, and protect your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navigation />
      <div className="px-4 lg:px-8">
        <main className="container mx-auto py-12 max-w-4xl">
          {" "}
          <h1 className="text-3xl md:text-4xl font-bold mb-8 flex items-center gap-3">
            <img src="/logo.png" alt="Logo" className="h-8 w-auto" />
            Privacy Policy
          </h1>
          <div className="space-y-6 text-gray-700">
            <p className="text-sm">
              <strong>Effective Date:</strong> May 9, 2025
              <br />
              <strong>Last Updated:</strong> May 9, 2025
            </p>{" "}
            <p>
              We are committed to protecting your privacy. This Privacy Policy
              explains how we collect, use, disclose, and safeguard your
              information when you use our websites, mobile apps, and real
              estate services (collectively, the "Services").
            </p>
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">
                1. Information We Collect
              </h2>
              <p>We collect information in several ways, including:</p>

              <h3 className="text-xl font-medium">
                a. Information You Provide
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Name, email address, phone number, and address</li>
                <li>Property preferences and saved listings</li>
                <li>Content you upload (e.g., listings, messages, feedback)</li>
                <li>Payment and billing details (for premium services)</li>
              </ul>

              <h3 className="text-xl font-medium">
                b. Information We Collect Automatically
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>IP address and device/browser information</li>
                <li>Location data (if enabled)</li>
                <li>
                  Usage activity (pages visited, filters applied, listings
                  viewed)
                </li>
                <li>Cookies and similar tracking technologies</li>
              </ul>

              <h3 className="text-xl font-medium">
                c. Information from Third Parties
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Public property databases, listing services, or partner
                  platforms
                </li>
                <li>Payment processors or identity verification services</li>
              </ul>
            </section>
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">
                2. How We Use Your Information
              </h2>
              <p>We use your information to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide and personalize our Services</li>
                <li>Deliver property recommendations using AI algorithms</li>
                <li>
                  Facilitate communication with buyers, sellers, and agents
                </li>
                <li>Process payments and subscriptions</li>
                <li>Respond to inquiries and support requests</li>
                <li>Prevent fraud and enhance platform security</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">
                3. How We Share Your Information
              </h2>
              <p>We may share your information:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  With real estate professionals, agents, or service providers
                  involved in your transaction
                </li>
                <li>
                  With third-party vendors supporting our platform (e.g., cloud
                  hosting, analytics, payment processing)
                </li>
                <li>With affiliates and subsidiaries</li>
                <li>
                  With law enforcement, government agencies, or legal counsel
                  when required
                </li>
                <li>In connection with a business transfer or acquisition</li>
              </ul>
              <p>We do not sell your personal information to third parties.</p>
            </section>
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">
                4. Your Privacy Choices
              </h2>
              <p>You have control over your data:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  You may update or correct your account information at any
                  time.
                </li>
                <li>You can opt out of non-essential emails and marketing.</li>
                <li>
                  You can disable cookies or location tracking via your device
                  or browser settings.
                </li>
                <li>
                  You may request to delete your account and associated data by
                  contacting us at privacy@homegeeni.com.
                </li>
              </ul>
            </section>
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">5. Data Security</h2>
              <p>
                We implement administrative, technical, and physical safeguards
                to protect your data. However, no system is 100% secure. You are
                responsible for maintaining the confidentiality of your account
                credentials.
              </p>
            </section>
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">
                6. International Data Transfers
              </h2>
              <p>
                Data collected by HomeGeeni may be stored or processed in the
                United States, India, or other countries. We comply with local
                data protection laws, including the California Consumer Privacy
                Act (CCPA), EU GDPR, and India's Digital Personal Data
                Protection Act (DPDP).
              </p>
            </section>
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">7. Children's Privacy</h2>
              <p>
                HomeGeeni is not intended for use by children under the age of
                13. We do not knowingly collect information from children
                without parental consent.
              </p>
            </section>
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">
                8. Changes to This Policy
              </h2>
              <p>
                We may revise this Privacy Policy from time to time. The updated
                version will be posted on our website with a new effective date.
                Your continued use of the Services after such updates
                constitutes acceptance.
              </p>
            </section>
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">9. Contact Us</h2>
              <p>
                If you have any questions or concerns about this Privacy Policy
                or how we handle your data, contact us at:
                <br />
                Email (USA): privacy@homegeeni.com
                <br />
                Email (India): privacy@homegeeni.in
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
