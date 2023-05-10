import { BeverageCard } from "@/utils/SpecCards";
import Link from "next/link";

function CoreBeverage() {
  const CoreBeverage = [
    {
      title: "Cocktails",
      img: "/asset/cocktailnewspec.png",
      href:"/specs/cocktail"
    }, 
    {
      title: "Coffee",
      img: "/asset/coffeenewspec.png",
      href:"/specs/coffee"
    },
    {
      title: "Beer / Seltzer",
      img: "/asset/beverage1.svg",
      href:"/specs/beer"
    },
    {
      title: "Spirits",
      img: "/asset/spirit-specs.svg",
      href:'/specs/spirit'
    },
    {
      title: "Wine",
      img: "/asset/wine-specs.svg",
      href:'/specs/wine'
    },
    {
      title: "Low / No ABV",
      img: "/asset/low_no_abv.svg",
      href:'/specs/low_no_abv'
    },
  ];

  return (
    <div className="core-beverage-container mt-5">
      <h3 className="text-white text-[20px] leading-8 mb-4">Categories</h3>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-1 md:gap-2 lg:gap-3 ">
        {CoreBeverage?.map((card, i) => {
          return (
            <div className=" w-full" key={i}>
              <Link href={card.href}>
              <BeverageCard image={card.img} title={card.title} />
              </Link>
             
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CoreBeverage;
