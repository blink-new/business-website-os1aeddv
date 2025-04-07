
export function Privacy() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        
        <div className="prose prose-lg">
          <p className="text-gray-600 mb-6">
            Last updated: March 19, 2024
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
            <p className="text-gray-600 mb-4">
              We respect your privacy and are committed to protecting your personal data.
              This privacy policy will inform you about how we look after your personal data
              when you visit our website and tell you about your privacy rights and how the
              law protects you.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Data We Collect</h2>
            <p className="text-gray-600 mb-4">
              We may collect, use, store and transfer different kinds of personal data about
              you which we have grouped together as follows:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li>Identity Data</li>
              <li>Contact Data</li>
              <li>Technical Data</li>
              <li>Usage Data</li>
              <li>Marketing and Communications Data</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Data</h2>
            <p className="text-gray-600 mb-4">
              We will only use your personal data when the law allows us to. Most commonly,
              we will use your personal data in the following circumstances:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li>Where we need to perform the contract we are about to enter into or have entered into with you</li>
              <li>Where it is necessary for our legitimate interests and your interests</li>
              <li>Where we need to comply with a legal obligation</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Data Security</h2>
            <p className="text-gray-600 mb-4">
              We have put in place appropriate security measures to prevent your personal
              data from being accidentally lost, used or accessed in an unauthorized way,
              altered or disclosed.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Your Legal Rights</h2>
            <p className="text-gray-600 mb-4">
              Under certain circumstances, you have rights under data protection laws in
              relation to your personal data, including the right to:
            </p>
            <ul className="list-disc pl-6 text-gray-600">
              <li>Request access to your personal data</li>
              <li>Request correction of your personal data</li>
              <li>Request erasure of your personal data</li>
              <li>Object to processing of your personal data</li>
              <li>Request restriction of processing your personal data</li>
              <li>Request transfer of your personal data</li>
              <li>Right to withdraw consent</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Contact Us</h2>
            <p className="text-gray-600">
              If you have any questions about this privacy policy or our privacy practices,
              please contact us at privacy@company.com
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}