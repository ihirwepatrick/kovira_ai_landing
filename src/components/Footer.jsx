import React from "react";
import { Link } from "react-router-dom";
import Section from "./Section";
import { socials, contactEmail } from "../constants";

const Footer = () => {
  return (
    <Section crosses className="!px-0 !py-10">
      <div className="container">
        <div className="flex sm:justify-between justify-center items-start gap-10 max-sm:flex-col mb-8">
          <div className="max-w-md">
            <h5 className="h5 mb-4">KoviraAI</h5>
            <p className="body-2 text-n-3 mb-4">
              Africa's first intelligent AI talent ecosystem connecting skilled professionals with global opportunities.
            </p>
            <a
              href={`mailto:${contactEmail}`}
              className="body-2 text-color-1 hover:underline"
            >
              {contactEmail}
            </a>
          </div>

          <div className="flex flex-col gap-4">
            <div>
              <h6 className="h6 mb-3">Quick Links</h6>
              <ul className="flex flex-col gap-2">
                <Link to="/about" className="body-2 text-n-3 hover:text-color-1 transition-colors">
                  About
                </Link>
                <Link to="/contact" className="body-2 text-n-3 hover:text-color-1 transition-colors">
                  Contact
                </Link>
                <Link to="/terms" className="body-2 text-n-3 hover:text-color-1 transition-colors">
                  Terms & Conditions
                </Link>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col pt-8 border-t border-n-6">
          <p className="caption text-n-4 lg:block">
            © {new Date().getFullYear()} KoviraAI. All rights reserved.
          </p>

          <ul className="flex gap-5 flex-wrap">
            {socials.map((item) => (
              <a
                key={item.id}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 bg-n-7 rounded-full transition-colors hover:bg-n-6"
                aria-label={item.title}
              >
                <img src={item.iconUrl} width={16} height={16} alt={item.title} />
              </a>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
};

export default Footer;
