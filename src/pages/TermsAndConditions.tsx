import { motion } from "framer-motion";

export default function TermsAndConditions() {
  return (
    <div className="pt-32 pb-20 container-padding">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto prose dark:prose-invert"
      >
        <h1 className="text-4xl font-bold font-display mb-8">Terms and Conditions</h1>
        <p className="text-muted-foreground mb-6">Last updated: January 2026</p>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
          <p>
            By accessing or using the services provided by ShashwatTech ("Company", "we", "us", or "our"), you agree to be bound by these Terms and Conditions. If you do not agree to all of these terms, do not use our services.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">2. Services Overview</h2>
          <p>
            ShashwatTech provides technology services including but not limited to UI/UX Design, Frontend Development, Backend Systems, and Full-Stack Solutions. The specific scope of work for any project will be outlined in a separate service agreement or proposal.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">3. User Responsibilities</h2>
          <p>
            You are responsible for providing accurate information necessary for the completion of our services. You agree not to use our services for any unlawful purpose or in any way that could damage, disable, or impair our systems.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">4. Intellectual Property</h2>
          <p>
            Unless otherwise agreed in writing, all intellectual property rights for work created by ShashwatTech shall remain with the Company until full payment is received, at which point rights specifically outlined in the project agreement will transfer to the client.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">5. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by law, ShashwatTech shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use our services.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">6. Governing Law</h2>
          <p>
            These terms shall be governed by and construed in accordance with the laws of India. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts in Gujarat, India.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">7. Contact Information</h2>
          <p>
            If you have any questions about these Terms, please contact us at shashwattechinfo@gmail.com.
          </p>
        </section>
      </motion.div>
    </div>
  );
}
