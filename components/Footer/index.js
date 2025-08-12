/* eslint-disable @next/next/no-img-element */
import React from "react";

const Footer = ({}) => {
  return (
    <div
      className="relative bottom-0 laptop:p-0"
      style={{ backgroundColor: "var(--color-cream)" }}
    >
      <img className="w-full" alt="logomarcas" src="/regua_logos.png" />
    </div>
  );
};

{
  /*  <div
        className="flex flex-wrap items-center justify-between p-2 mob:flex-nowrap link"
        style={{ color: "#fff", backgroundColor: "#000" }}
      >
        <span>CONTATO IMPRENSA</span>
        <div className="flex flex-wrap mob:flex-nowrap link">
          {yourData.socials.map((social, index) => (
            <Button key={index} onClick={() => window.open(social.link)}>
              {social.title}
            </Button>
          ))}
        </div>
          </div>*/
}
export default Footer;
