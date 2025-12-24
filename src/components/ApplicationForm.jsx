import Section from "./Section";
import Heading from "./Heading";
import { googleFormUrl, contactEmail } from "../constants";

const ApplicationForm = () => {
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
              <div className="w-full h-[800px] lg:h-[900px]">
                <iframe
                  src={`${googleFormUrl}?embedded=true`}
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  marginHeight="0"
                  marginWidth="0"
                  className="rounded-lg"
                  title="KoviraAI Application Form"
                >
                  Loading…
                </iframe>
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

