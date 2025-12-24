import Section from "../components/Section";
import Heading from "../components/Heading";
import Button from "../components/Button";

const About = () => {
  return (
    <div className="pt-[4.75rem] lg:pt-[5.25rem]">
      <Section className="pt-[12rem] -mt-[5.25rem]" id="about">
        <div className="container relative z-2">
          <Heading
            tag="About KoviraAI"
            title="Building Africa's First Intelligent AI Talent Ecosystem"
          />

          <div className="max-w-4xl mx-auto space-y-8">
            <div>
              <h3 className="h3 mb-4">Company Overview</h3>
              <p className="body-1 text-n-2 mb-4">
                KoviraAI is building a global AI talent network powered by top African engineers — 
                matching them with companies worldwide through intelligent automation.
              </p>
              <p className="body-1 text-n-2">
                We connect AI professionals from all fields, including engineering, data science, 
                finance, medicine, robotics, and more.
              </p>
            </div>

            <div>
              <h3 className="h3 mb-4">Our Mission</h3>
              <p className="body-1 text-n-2">
                To create Africa's first intelligent AI talent ecosystem and link skilled AI 
                professionals to global opportunities faster, smarter, and more affordably.
              </p>
            </div>

            <div>
              <h3 className="h3 mb-4">What We Do</h3>
              <p className="body-1 text-n-2 mb-4">
                KoviraAI serves as a bridge between talented African AI professionals and global 
                companies seeking top-tier expertise. Through our intelligent matching system, we:
              </p>
              <ul className="space-y-3 body-1 text-n-2">
                <li className="flex items-start">
                  <span className="text-color-1 mr-3">•</span>
                  <span>Connect AI professionals across multiple domains with global opportunities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-color-1 mr-3">•</span>
                  <span>Use intelligent automation to match skills with the perfect opportunities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-color-1 mr-3">•</span>
                  <span>Provide affordable access to global markets for African talent</span>
                </li>
                <li className="flex items-start">
                  <span className="text-color-1 mr-3">•</span>
                  <span>Build a comprehensive network spanning engineering, data science, finance, medicine, and robotics</span>
                </li>
              </ul>
            </div>

            <div className="pt-8">
              <Button href="/#join-network" white>
                Join Our Network
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default About;

