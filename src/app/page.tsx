import AnimatedCard from "@/components/Card/AnimatedCard";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb";
import CardHeader from "@/components/Card/CardHeader";
import CardBottom from "@/components/Card/CardBottom";
import Publishedby from "@/components/ButtomBrandLogo/PublishedBy";
import { DefaultAccordion } from "@/components/Accordion/AccordionSection";

export default function Home() {
  return (
    <main className="min-h-screen px-[105px] mb-[300px]">
      <div className="flex flex-col pt-[64px]">
        <Breadcrumb />
        <h1 className="mt-10 text-3xl font-bold bg-gradient-to-b from-[#06286E] to-[#164EC0] bg-clip-text text-transparent">
          Relations and Functions ( Mathematics )
        </h1>
      </div>
      <div className="flex flex-col items-center justify-center space-y-4">
        <CardHeader />
        <AnimatedCard />
        <CardBottom />
      </div>
      <div className="my-10">
        <Publishedby />
      </div>
      <DefaultAccordion />
    </main>
  );
}
