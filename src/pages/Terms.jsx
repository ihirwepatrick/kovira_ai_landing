import Section from "../components/Section";
import Heading from "../components/Heading";

const Terms = () => {
  return (
    <div className="pt-[4.75rem] lg:pt-[5.25rem]">
      <Section className="pt-[12rem] -mt-[5.25rem]" id="terms">
        <div className="container relative z-2">
          <Heading
            tag="Terms & Conditions"
            title="Terms and Conditions of Use"
          />

          <div className="max-w-4xl mx-auto space-y-8">
            <div>
              <h3 className="h4 mb-4">1. Agreement to Terms</h3>
              <p className="body-2 text-n-3">
                By accessing and using the KoviraAI website and services, you accept and agree to be 
                bound by the terms and provision of this agreement. If you do not agree to abide by 
                the above, please do not use this service.
              </p>
            </div>

            <div>
              <h3 className="h4 mb-4">2. Use License</h3>
              <p className="body-2 text-n-3 mb-3">
                Permission is granted to temporarily access the materials on KoviraAI's website for 
                personal, non-commercial transitory viewing only. This is the grant of a license, not 
                a transfer of title, and under this license you may not:
              </p>
              <ul className="space-y-2 body-2 text-n-3 ml-6">
                <li>• Modify or copy the materials</li>
                <li>• Use the materials for any commercial purpose or for any public display</li>
                <li>• Attempt to reverse engineer any software contained on the website</li>
                <li>• Remove any copyright or other proprietary notations from the materials</li>
              </ul>
            </div>

            <div>
              <h3 className="h4 mb-4">3. Talent Network Participation</h3>
              <p className="body-2 text-n-3">
                By joining the KoviraAI talent network, you agree to provide accurate information 
                about your skills, experience, and qualifications. You understand that KoviraAI 
                facilitates connections between professionals and companies but does not guarantee 
                employment or project opportunities.
              </p>
            </div>

            <div>
              <h3 className="h4 mb-4">4. Privacy Policy</h3>
              <p className="body-2 text-n-3">
                Your use of our services is also governed by our Privacy Policy. Please review our 
                Privacy Policy to understand our practices regarding the collection and use of your 
                personal information.
              </p>
            </div>

            <div>
              <h3 className="h4 mb-4">5. Disclaimer</h3>
              <p className="body-2 text-n-3">
                The materials on KoviraAI's website are provided on an 'as is' basis. KoviraAI makes 
                no warranties, expressed or implied, and hereby disclaims and negates all other 
                warranties including, without limitation, implied warranties or conditions of 
                merchantability, fitness for a particular purpose, or non-infringement of intellectual 
                property or other violation of rights.
              </p>
            </div>

            <div>
              <h3 className="h4 mb-4">6. Limitations</h3>
              <p className="body-2 text-n-3">
                In no event shall KoviraAI or its suppliers be liable for any damages (including, 
                without limitation, damages for loss of data or profit, or due to business interruption) 
                arising out of the use or inability to use the materials on KoviraAI's website, even 
                if KoviraAI or a KoviraAI authorized representative has been notified orally or in writing 
                of the possibility of such damage.
              </p>
            </div>

            <div>
              <h3 className="h4 mb-4">7. Revisions</h3>
              <p className="body-2 text-n-3">
                KoviraAI may revise these terms of service for its website at any time without notice. 
                By using this website you are agreeing to be bound by the then current version of these 
                terms of service.
              </p>
            </div>

            <div>
              <h3 className="h4 mb-4">8. Contact Information</h3>
              <p className="body-2 text-n-3">
                If you have any questions about these Terms and Conditions, please contact us at{" "}
                <a href="mailto:kovira.aai@gmail.com" className="text-color-1 hover:underline">
                  kovira.aai@gmail.com
                </a>
              </p>
            </div>

            <div className="pt-8 border-t border-n-6">
              <p className="caption text-n-4">
                Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Terms;

