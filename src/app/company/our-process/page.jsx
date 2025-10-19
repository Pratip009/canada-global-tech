import IndustryHero from "@/components/Industry/IndustryHero";
import CollaborationTools from "@/components/process/CollaborationTools";
import ProcessLayout from "@/components/process/ProcessSections";
import ProjectCommunicationStructure from "@/components/process/ProjectCommunicationStructure";

export default function OurProcessPage() {
  return (
    <main>
      <IndustryHero
        backgroundImage="/process/process.webp"
        smallHeader="Home / Company / Our Process"
        titleMain="Unmatched Software Expertise"
        titleHighlight="guided by Excellence"
        description="Empower your business with tailored, impactful, and innovative solutions"
      />
      <ProcessLayout/>
      <ProjectCommunicationStructure/>
      <CollaborationTools/>
    </main>
  );
}
