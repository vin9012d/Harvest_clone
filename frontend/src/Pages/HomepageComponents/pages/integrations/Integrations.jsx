import React from 'react'
import { Build } from '../../components/integrations/Build/Build';
import { Cards } from '../../components/integrations/cards/cards';
import { Hero } from '../../components/integrations/hero/Hero';
import { LeftIntegrations } from '../../components/integrations/leftIntegrations/LeftIntegrations';
import { Search } from '../../components/integrations/search/Search';
import { Start } from '../../components/integrations/start/Start';
import styles from './integrations.module.css';

const integrationsLinks = [
  {id: 'f08a186345a3', linkTexts: 'All Integrations', link: 'a'},
  {id: 'cf0472791bd1', linkTexts: 'Analytics & reporting', link: 'an'},
  {id: '71d61d9c5d7a', linkTexts: 'Browser extensions', link: 'br'},
  {id: '642a3f900cc5', linkTexts: 'Communication & CRM', link: 'com'},
  {id: '2e28271b5805', linkTexts: 'Contracts & proposals', link: 'con'},
  {id: '1c7e43b95fab', linkTexts: 'Development & connectivity', link: 'de'},
  {id: 'd1f1880a4768', linkTexts: 'Featured integrations', link: 'fe'},
  {id: '0ffd0807e3e8', linkTexts: 'Finance & payments', link: 'fi'},
  {id: '11f59fa8cf3b', linkTexts: 'Issue tracking & support', link: 'is'},
  {id: '1ee61296c65a', linkTexts: 'Productivity', link: 'pr'},
  {id: 'a0f15b21edc8', linkTexts: 'Project management', link: 'proj'}
];

export const Integrations = () => {  
 
  return (
    <div className={styles.container}>
      <Hero />  
      <Search/>    
      <div className={styles.cardsContainer}>
        <LeftIntegrations address={"integrations"} whichLink={integrationsLinks}/>
        <Cards address={"integrations"} />
      </div>
      <Build/>
      <Start/>
    </div>
  )
};

