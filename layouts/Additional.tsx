import { Caption } from "@/components/Caption";
import { CardPassion } from "@/components/CardPassion";
import { CardContainer } from "modules/additional/CardContainer";
import { passions } from "@/data/passions";

export const Additional = () => {
  const passionCards = passions.map((pass, index) => (
    <CardPassion
      key={index}
      alt={pass.alt}
      description={pass.description}
      work={pass.work}
      image={pass.image}
    />
  ));
  return (
    <div className="xl:mt-28 md:mt-20 mt-14 sm:mt-16">
      <Caption title1={"Additional"} title2={"passions"} />
      <CardContainer cards={passionCards} />
    </div>
  );
};
