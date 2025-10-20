import ContactSectionContact from "@/components/ContactSectionContact";
import OfficeLocation from "@/components/OfficeLocation";
import StatsSection from "@/components/StatsSection";
import React from "react";

const page = () => {
  return (
    <main>
      <ContactSectionContact />
      <StatsSection />
      <OfficeLocation/>
    </main>
  );
};

export default page;
