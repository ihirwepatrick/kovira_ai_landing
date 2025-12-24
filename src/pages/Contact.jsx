import Section from "../components/Section";
import Heading from "../components/Heading";
import Button from "../components/Button";
import { contactEmail } from "../constants";

const Contact = () => {
  const handleEmailClick = () => {
    window.location.href = `mailto:${contactEmail}`;
  };

  return (
    <div className="pt-[4.75rem] lg:pt-[5.25rem]">
      <Section className="pt-[12rem] -mt-[5.25rem]" id="contact">
        <div className="container relative z-2">
          <Heading
            tag="Get In Touch"
            title="Contact KoviraAI"
            text="Have questions? We'd love to hear from you. Reach out to us through any of the channels below."
          />

          <div className="max-w-3xl mx-auto">
            <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
              <div className="relative bg-n-8 rounded-[1rem] p-8 lg:p-12">
                <div className="space-y-8">
                  <div>
                    <h3 className="h4 mb-4">Email Us</h3>
                    <a
                      href={`mailto:${contactEmail}`}
                      onClick={handleEmailClick}
                      className="body-1 text-color-1 hover:underline"
                    >
                      {contactEmail}
                    </a>
                  </div>

                  <div>
                    <h3 className="h4 mb-4">Join Our Network</h3>
                    <p className="body-2 text-n-3 mb-6">
                      Are you an AI professional looking to connect with global opportunities? 
                      Apply to join our talent network today.
                    </p>
                    <Button href="/#join-network" white>
                      Apply Now
                    </Button>
                  </div>

                  <div>
                    <h3 className="h4 mb-4">For Companies</h3>
                    <p className="body-2 text-n-3 mb-6">
                      Looking to hire top AI talent? Connect with us to access our network of 
                      skilled professionals from across Africa.
                    </p>
                    <Button href={`mailto:${contactEmail}`} white>
                      Contact Us
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Contact;

