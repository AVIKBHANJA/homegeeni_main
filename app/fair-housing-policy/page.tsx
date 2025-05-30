import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";

export const metadata = {
  title: "Fair Housing Policy",
  description:
    "Our commitment to fair housing and equal opportunity in real estate.",
};

export default function FairHousingPolicyPage() {
  return (
    <>
      <Navigation />
      <div className="px-4 lg:px-8">
        <main className="container mx-auto py-12 max-w-4xl">
          {" "}
          <h1 className="text-3xl md:text-4xl font-bold mb-8 flex items-center gap-3">
            <img src="/logo.png" alt="Logo" className="h-8 w-auto" />
            Fair Housing and Equal Opportunity Policy
          </h1>
          <div className="space-y-6 text-gray-700">
            {" "}
            <p>
              We are committed to providing fair, inclusive, and equitable
              access to housing opportunities for all individuals, without
              exception. We are dedicated to ensuring that our platform,
              services, partnerships, and interactions are free from
              discrimination of any kind and are in full compliance with all
              applicable federal, state, and local fair housing laws in the
              United States, as well as housing-related anti-discrimination laws
              in India where applicable.
            </p>
            <p>
              {" "}
              All employees, contractors, representatives, and licensed real
              estate professionals affiliated with or partnered with us are
              required to abide by this policy at all times. This includes
              strict adherence to the U.S. Fair Housing Act, the Equal
              Opportunity Act, and all corresponding anti-discrimination
              statutes at every level of jurisdiction.
            </p>
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">
                Zero Tolerance for Discrimination
              </h2>{" "}
              <p>
                We have a zero-tolerance policy for violations of fair housing
                laws. Discrimination in any form, whether direct, indirect,
                intentional, or unintentional, is strictly prohibited in the
                delivery of our services. This includes, but is not limited to,
                discrimination based on:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Race or color</li>
                <li>Religion or creed</li>
                <li>Sex, gender, sexual orientation, or gender identity</li>
                <li>
                  Marital or familial status (including pregnancy or having
                  children)
                </li>
                <li>Age</li>
                <li>National origin, immigration, or citizenship status</li>
                <li>
                  Physical, sensory, or mental disability (including recovery
                  from substance use)
                </li>
                <li>
                  Source of income (including housing vouchers, social security,
                  unemployment, alimony, disability, etc.)
                </li>
                <li>Military or veteran status</li>
                <li>Caste (where applicable under Indian jurisdiction)</li>
                <li>
                  Any other protected class as defined by federal, state, or
                  local law
                </li>
              </ul>
            </section>
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">Prohibited Practices</h2>
              <p>
                The following behaviors are strictly prohibited by HomeGeeni and
                may result in disciplinary action, including suspension, account
                termination, or referral to appropriate legal authorities:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Denying access to services based on a person's membership in a
                  protected class.
                </li>
                <li>
                  Participating in or facilitating discriminatory agreements or
                  practices.
                </li>
                <li>
                  Refusing to show, list, or promote properties due to the
                  presence of protected classes in a geographic area.
                </li>
                <li>
                  Providing inaccurate, incomplete, or misleading information to
                  users based on protected characteristics.
                </li>
                <li>
                  Steering users toward or away from properties or neighborhoods
                  based on assumptions or stereotypes.
                </li>
                <li>
                  Publishing discriminatory statements in listings,
                  advertisements, or communications.
                </li>
                <li>
                  Marketing services selectively based on inclusion in or
                  exclusion from protected groups.
                </li>
                <li>
                  Applying unequal qualification standards to individuals based
                  on protected characteristics.
                </li>
                <li>Harassment or intimidation based on identity or status.</li>
                <li>
                  Retaliation against individuals who report discrimination or
                  participate in investigations.
                </li>
                <li>
                  Blockbusting practices (i.e., inducing sellers to sell
                  property by suggesting that members of a particular protected
                  group are moving into the area).
                </li>
              </ul>
            </section>
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">
                Accountability and Enforcement
              </h2>
              <p>
                All HomeGeeni staff, agents, and partners are expected to be
                proactive in identifying and addressing discriminatory conduct.
                Violations of this policy may result in disciplinary measures,
                including deactivation of accounts, severance of partnerships,
                or legal referral. Individuals who feel they have experienced or
                witnessed discriminatory behavior through HomeGeeni are
                encouraged to report it immediately by emailing
                fairhousing@example.com.
              </p>
            </section>
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">Our Commitment</h2>
              <p>
                HomeGeeni believes that everyone deserves equal access to
                housing, and we are proud to stand for transparency, fairness,
                and inclusivity in every transaction, feature, and policy we
                design. We continually assess and evolve our technology and
                services to uphold these values and create a real estate
                experience that reflects and respects the diversity of our users
                and communities.
              </p>
            </section>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
