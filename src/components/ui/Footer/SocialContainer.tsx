import React from "react";
import { FacebookIcon, InstagrammIcon, LocationIcon, PhoneIcon } from "../../../imgs/icons";

const footerDataContacts = [
  { id: 1, icon: <PhoneIcon />, txt: "+7 (926) 223-10-11", link: "" },
  {
    id: 2,
    icon: <LocationIcon />,
    txt: "Москва, ул. Юных Ленинцев, д.99",
    link: "",
  },
];
const footerDataSocials = [
  { id: 1, icon: <FacebookIcon />, txt: "Facebok", link: "" },
  { id: 2, icon: <InstagrammIcon />, txt: "Instagram", link: "" },
];

const SocialContainer = () => {
  return (
    <>
     <div>
              <ul>
                {footerDataContacts.map((e) => (
                  <li className="my-4" key={e.id}>
                    <a className="flex flex-row space-x-3" href={e.link}>
                      {e.icon}
                      <span>{e.txt}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
    <div className="social__container">
      <ul className="flex flex-row space-x-6">
        {footerDataSocials.map((e) => (
          <li>
            <a className="flex flex-row space-x-3" href={e.link}>
              {e.icon}
              <span>{e.txt}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
        </>
  );
};

export default SocialContainer;
