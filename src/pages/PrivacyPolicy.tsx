import { motion } from "framer-motion";

export default function PrivacyPolicy() {
  return (
    <div className="pt-32 pb-20 container-padding">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto prose dark:prose-invert"
      >
        <h1 className="text-4xl font-bold font-display mb-8">Privacy Policy</h1>
        <p className="text-muted-foreground mb-6">Last updated: January 2026</p>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">1. Information We Collect</h2>
          <p>
            We collect minimal information necessary to provide our services. This includes information you provide directly through our contact form, such as your name, email address, and any message content.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">2. How We Use Information</h2>
          <p>
            We use the information we collect to respond to your inquiries, provide the requested services, and improve our website and service offerings. We do not sell your personal information to third parties.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">3. Data Security</h2>
          <p>
            We implement appropriate technical and organizational measures to protect the security of your personal information. However, please be aware that no method of transmission over the internet is 100% secure.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">4. Cookies</h2>
          <p>
            Our website may use basic cookies to enhance user experience and analyze site traffic. You can choose to disable cookies through your browser settings, though this may affect some functionality of the site.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">5. Your Rights</h2>
          <p>
            You have the right to access, update, or delete the personal information we hold about you. To exercise these rights, please contact us at shashwattechinfo@gmail.com.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">6. Changes to This Policy</h2>
          <p>
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">7. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at shashwattechinfo@gmail.com.
          </p>
        </section>
      </motion.div>
    </div>
  );
}
