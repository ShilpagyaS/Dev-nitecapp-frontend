import { BeverageCard } from "@/utils/SpecCards";

function CoreBeverage() {
  const CoreBeverage = [
    {
      title: "Beer / Seltzer",
      img: "/asset/beverage1.svg",
    },
    {
      title: "Beer / Seltzer",
      img: "/asset/beverage1.svg",
    },
    {
      title: "Beer / Seltzer",
      img: "/asset/beverage1.svg",
    },
    {
      title: "Beer / Seltzer",
      img: "/asset/beverage1.svg",
    },
  ];

  return (
    <div className="core-beverage-container mt-5">
      <h3 className="text-white text-[20px] leading-8 mb-4">Categories</h3>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-1 md:gap-2 lg:gap-3 ">
        {CoreBeverage.map((card, i) => {
          return (
            <div className=" w-full" key={i}>
              <BeverageCard image={card.img} title={card.title} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CoreBeverage;