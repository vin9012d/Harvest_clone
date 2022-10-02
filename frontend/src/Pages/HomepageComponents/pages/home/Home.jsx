import React from "react";
import {Container} from "@chakra-ui/react";
import { Introdiv } from "../../components/home/Introdiv/Introdiv";
import Company from "../../components/home/CompanyLogo/CompanyLogo";
import { Getting } from "../../components/home/Getting/Getting";
import { Features } from "../../components/home/Featurediv/Features";
import { Integration } from "../../components/home/Integrationdiv/Integration";
import { Customer } from "../../components/home/Customer/Customer";
import Learning from "../../components/home/Learning/Learning";
import { EndTrack } from "../../components/home/Start-trackl/EndTrack";
const Home = () => {
  return (
    <Container bgColor="#fff8f1" maxW="100%">
      <Introdiv/>
      <Company opacity={.2}/>
      <Getting />
      <Features/>
      <Integration/>
      <Customer />

      <Learning />
      <EndTrack/>
    </Container>
  );
};

export default Home;
