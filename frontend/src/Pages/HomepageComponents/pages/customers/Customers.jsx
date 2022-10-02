import React from "react";
import styles from "./customers.module.css";
import { ClientLogo } from "../../components/customers/clintLogo/ClientLogo";
import { CustomerCount } from "../../components/customers/customerCount/CustomerCount";
import { FeaturedStory } from "../../components/customers/featuredStory/FeaturedStory";
import { CustomerHelp } from "../../components/customers/help/CustomerHelp";
import { Start } from "../../components/integrations/start/Start";
import { LeftIntegrations } from "../../components/integrations/leftIntegrations/LeftIntegrations";
import { Cards } from "../../components/integrations/cards/cards";

const customerLinks = [
  {id: '3295f4461421', linkTexts: 'All industries', link: 'a'},  
  {id: '96b2194e3a0e', linkTexts: 'Architecture', link: 'ar'},  
  {id: 'd0cbee6d3680', linkTexts: 'Creative services', link: 'cr'},  
  {id: '7693b904a39a', linkTexts: 'Engineering & design', link: 'en'},  
  {id: '9ae55ca2c373', linkTexts: 'Management consulting', link: 'ma'},  
  {id: 'd5623ccffbca', linkTexts: 'Web development & IT', link: 'w'},  
];

export const Customers = () => {
   
  return (
    <div className={styles.customerContainer}>      
      <CustomerHelp />
      <CustomerCount />
      <FeaturedStory />
      <ClientLogo />
      <div className={styles.cardContainer}>
        <h1>Find stories from teams like yours</h1>
        <div>
          <LeftIntegrations address={"customers"} whichLink={customerLinks}/>
          <Cards address={"customers"} />
        </div>
      </div>
      <Start />
    </div>
  );
};
