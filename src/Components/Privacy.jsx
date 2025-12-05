const Privacy = () => {
  const companyName = "Gulf Coast Web Design & Development";
  const websiteUrl = "https://gulfcoastwdd.com";
  const lastUpdated = "Dec. 5, 2025";
  const contactEmail = "gulfcoastwdd@protonmail.com";
  const businessAddress = "[Business Address]";

  return (
    <main className="min-h-screen lg:py-10 py-5 px-5">
      <article className="mx-auto max-w-3xl bg-white rounded-2xl p-8 shadow-lg">
        <header className="mb-6">
          <h1 className="text-2xl md:text-3xl font-semibold">Privacy Policy</h1>
          <p className="text-sm text-gray-500 mt-2">
            Last Updated: {lastUpdated}
          </p>
          <p className="mt-4 text-gray-700">
            {companyName} ("we," "our," "us") respects your privacy and is
            committed to protecting it. This Privacy Policy explains how we
            collect, use, and safeguard your information when you visit our
            website{" "}
            <a
              className="text-indigo-600 hover:underline"
              href={websiteUrl}
              target="_blank"
              rel="noreferrer"
            >
              {websiteUrl}
            </a>
            .
          </p>
        </header>

        <section className="space-y-6">
          <section>
            <h2 className="text-lg font-medium">1. Information We Collect</h2>
            <p className="mt-2 text-gray-700">
              When you use our contact form, we may collect:
            </p>
            <ul className="list-disc list-inside mt-2 text-gray-700 space-y-1">
              <li>Your name</li>
              <li>Your email address</li>
              <li>Your phone number (if provided)</li>
              <li>Any information you choose to include in your message</li>
            </ul>
            <p className="mt-2 text-gray-700">
              We do not collect sensitive personal data (such as Social Security
              numbers, payment details, or health information) through our
              website.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium">
              2. How We Use Your Information
            </h2>
            <p className="mt-2 text-gray-700">
              We use the information you provide to:
            </p>
            <ul className="list-disc list-inside mt-2 text-gray-700 space-y-1">
              <li>Respond to your inquiries</li>
              <li>Provide information about our services</li>
              <li>Improve our website and customer support</li>
            </ul>
            <p className="mt-2 text-gray-700">
              We do not sell, rent, or trade your personal information.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium">3. Sharing of Information</h2>
            <p className="mt-2 text-gray-700">
              We may share your information only with:
            </p>
            <ul className="list-disc list-inside mt-2 text-gray-700 space-y-1">
              <li>
                Service providers that help us operate our website (e.g.,
                hosting, email services)
              </li>
              <li>If required by law or to protect our rights</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-medium">4. Data Security</h2>
            <p className="mt-2 text-gray-700">
              We implement reasonable technical and organizational measures to
              protect your information. However, no online transmission or
              storage system can be guaranteed 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium">5. Data Retention</h2>
            <p className="mt-2 text-gray-700">
              We retain your information only as long as necessary to fulfill
              the purposes outlined in this Privacy Policy, unless a longer
              retention period is required by law.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium">6. Your Rights</h2>
            <p className="mt-2 text-gray-700">
              Depending on your location, you may have rights to access,
              correct, or request deletion of your personal information. To
              exercise these rights, please contact us at:
            </p>
            <p className="mt-2 text-indigo-600 font-medium">
              <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium">7. Cookies &amp; Tracking</h2>
            <p className="mt-2 text-gray-700">
              Our website may use cookies or analytics tools to improve user
              experience. You can control cookies through your browser settings.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium">8. Third-Party Links</h2>
            <p className="mt-2 text-gray-700">
              Our website may contain links to third-party sites. We are not
              responsible for their privacy practices.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium">9. Contact Us</h2>
            <p className="mt-2 text-gray-700">
              If you have any questions about this Privacy Policy, contact us
              at:
            </p>
            <address className="not-italic mt-2 text-gray-700 space-y-1">
              <div>{companyName}</div>
              <div>{businessAddress}</div>
              <div>
                <a
                  className="text-indigo-600 hover:underline"
                  href={`mailto:${contactEmail}`}
                >
                  {contactEmail}
                </a>
              </div>
            </address>
          </section>
        </section>
        <footer className="mt-8 text-sm text-gray-500">
          © {new Date().getFullYear()} {companyName}. All rights reserved.
        </footer>
      </article>
    </main>
  );
};
export default Privacy;
