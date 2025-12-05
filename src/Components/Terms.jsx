const Terms = () => {
  const companyName = "Gulf Coast Web Design & Development";
  const websiteUrl = "https://gulfcoastwdd.com";
  const lastUpdated = "Dec. 5, 2025";
  const governingState = "Florida";
  return (
    <main className="min-h-screen lg:py-10 py-5 px-5">
      <article className="mx-auto max-w-3xl bg-white rounded-2xl p-8 shadow-lg">
        <header className="mb-6">
          <h1 className="text-2xl md:text-3xl font-semibold">
            Terms and Conditions
          </h1>
          <p className="text-sm text-gray-500 mt-2">
            Last Updated: {lastUpdated}
          </p>
          <p className="mt-4 text-gray-700">
            By accessing and using our website{" "}
            <a
              className="text-indigo-600 hover:underline"
              href={websiteUrl}
              target="_blank"
              rel="noreferrer"
            >
              {websiteUrl}
            </a>
            , you agree to be bound by these Terms and Conditions.
          </p>
        </header>

        <section className="space-y-6">
          <section>
            <h2 className="text-lg font-medium">1. Use of Website</h2>
            <ul className="list-disc list-inside mt-2 text-gray-700 space-y-1">
              <li>You may use our website only for lawful purposes.</li>
              <li>
                You agree not to attempt to interfere with the operation of our
                website or misuse our contact form.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-medium">2. Intellectual Property</h2>
            <ul className="list-disc list-inside mt-2 text-gray-700 space-y-1">
              <li>
                All content on this website, including text, graphics, logos,
                and designs, is the property of {companyName} and is protected
                by copyright and trademark law.
              </li>
              <li>
                You may not copy, reproduce, or distribute our content without
                prior written permission.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-medium">3. Contact Form Submissions</h2>
            <ul className="list-disc list-inside mt-2 text-gray-700 space-y-1">
              <li>
                By submitting information through our contact form, you
                represent that it is accurate and that you have the right to
                share it.
              </li>
              <li>
                We are not responsible for any damages resulting from incorrect
                or incomplete information provided by you.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-medium">4. No Warranties</h2>
            <ul className="list-disc list-inside mt-2 text-gray-700 space-y-1">
              <li>
                This website and its content are provided “as is” without
                warranties of any kind.
              </li>
              <li>
                We do not guarantee that the website will be error-free, secure,
                or uninterrupted.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-medium">5. Limitation of Liability</h2>
            <p className="mt-2 text-gray-700">
              To the fullest extent permitted by law, {companyName} shall not be
              liable for any damages resulting from your use of our website.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium">6. Links to Other Websites</h2>
            <p className="mt-2 text-gray-700">
              Our website may include links to third-party websites. We are not
              responsible for their content or practices.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium">7. Governing Law</h2>
            <p className="mt-2 text-gray-700">
              These Terms shall be governed by and construed under the laws of
              the State of {governingState}.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium">8. Changes to Terms</h2>
            <p className="mt-2 text-gray-700">
              We reserve the right to update these Terms at any time. Continued
              use of our website means you accept those changes.
            </p>
          </section>
        </section>

        <footer className="mt-8 text-sm text-gray-500">
          © {new Date().getFullYear()} {companyName}. All rights reserved.
        </footer>
      </article>
    </main>
  );
};

export default Terms;
