import { Fragment, ReactNode } from "react";
import { SwiperSlide } from "swiper/react";
import { SwiperCards } from "../../components/SwiperCards";

type Props = {
  cards: ReactNode[];
};

export const CardContainer = ({ cards }: Props) => {
  return (
    <>
      <div className="md:flex w-full justify-between hidden card">
        {cards.map((child, index) => (
          <Fragment key={index}>{child}</Fragment>
        ))}
      </div>
      <div className="block md:hidden">
        <SwiperCards
          bulletClass="swiper-pagination-bullet-sm"
          swiperName="swiper-custom-pagination-additional"
        >
          {cards.map((child, index) => (
            <SwiperSlide key={index} className={"h-auto"}>
              {child}
            </SwiperSlide>
          ))}
        </SwiperCards>
      </div>
    </>
  );
};