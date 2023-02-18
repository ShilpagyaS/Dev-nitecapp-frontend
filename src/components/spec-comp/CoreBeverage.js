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
      <h3 className="text-white text-[20px] leading-8 mb-4">Core Beverage</h3>
      <div className="grid grid-cols-2 gap-3">
        {CoreBeverage.map((card, i) => {
          return (
            <div className="my-2 mx-1" key={i}>
              <BeverageCard image={card.img} title={card.title} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CoreBeverage;
