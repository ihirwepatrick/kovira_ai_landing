import Section from "./Section";
import Heading from "./Heading";
import Button from "./Button";
import { googleFormUrl, contactEmail } from "../constants";

const ApplicationForm = () => {
  const handleApplyClick = () => {
    window.open(googleFormUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <Section id="join-network">
      <div className="container relative z-2">
        <Heading
          tag="Join Our Network"
          title="Become Part of Africa's AI Talent Network"
          text="Connect with global opportunities. Apply now to join our network of top AI professionals."
        />

        <div className="relative mt-10">
          <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
            <div className="relative bg-n-8 rounded-[1rem] p-8 lg:p-12">
              <div className="flex flex-col items-center justify-center text-center py-16 lg:py-24">
                <h3 className="h3 mb-6">Ready to Join?</h3>
                <p className="body-1 text-n-2 mb-10 max-w-2xl">
                  Take the first step towards connecting with global opportunities. 
                  Click the button below to access our application form and become part of 
                  Africa's premier AI talent network.
                </p>
                <Button onClick={handleApplyClick} white>
                  Apply Now
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="body-2 text-n-3">
            Having trouble with the form?{" "}
            <a
              href={`mailto:${contactEmail}`}
              className="text-color-1 hover:underline"
            >
              Contact us directly
            </a>
          </p>
        </div>
      </div>
    </Section>
  );
};

export default ApplicationForm;

