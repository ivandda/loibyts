import Image from "next/image";
import MyRewardList from "@/components/web3/my-rewards";

export default async function AcquirerMain() {

  return (
    <>
      <div className="z-10 w-full max-w-xl px-5 xl:px-0">
        <h1 className="animate-fade-up bg-gradient-to-br from-white to-stone-400 bg-clip-text text-center font-display text-4xl font-bold tracking-[-0.02em] text-transparent opacity-0 drop-shadow-sm [text-wrap:balance] md:text-7xl md:leading-[5rem]"
            style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}>
          My Rewards
        </h1>
        <div
          className="mx-auto mt-6 flex animate-fade-up items-center justify-center space-x-5 opacity-0"
          style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
        >
          <button
            className="group flex max-w-fit items-center justify-center space-x-2 rounded-full border border-black bg-black px-5 py-2 text-sm text-white transition-colors hover:border-gray-500"
            rel="noopener noreferrer"
          >
            <Image
              src="/money.webp"
              alt="Logo"
              width="30"
              height="30"
              className="mr-2 rounded-sm"
            />
            <p>Simulate Payment</p>
          </button>
          <button
            className="flex max-w-fit items-center justify-center space-x-2 rounded-full border border-gray-300 bg-white px-5 py-2 text-sm text-gray-600 shadow-md transition-colors hover:border-gray-800"
            rel="noopener noreferrer"
          >
            <Image
              src="/giftcard.webp"
              alt="Logo"
              width="30"
              height="30"
              className="mr-2 rounded-sm"
            />
            <p>
              Add Reward
            </p>
          </button>
        </div>
      </div>
      <MyRewardList/>
    </>
  );
}

const rewards = [
  {
    title: "25% Discount",
    description:
      "This is a 25% discount at a small business in Belgrano",
    cost: 10000,
    demo: (
      <div className="flex items-center justify-center space-x-20">
        <Image alt="Discount" src="/discount.png" width={180} height={180} />
      </div>
    ),
  },
  {
    title: "10k pesos Giftcard",
    description:
      "This is a giftcard 10k in a small business in Palermo",
    cost: 10000,
    demo: (
      <div className="flex items-center justify-center space-x-20">
        <Image alt="Giftcard" src="/gift.webp" width={180} height={180} />
      </div>
    ),
  },
  {
    title: "2 course Meal",
    description:
      "This is a a dinner at a beatiful dinner in Puerto Madero",
    cost: 50000,
    demo: (
      <div className="flex items-center justify-center space-x-20">
        <Image alt="gastronomy" src="/gastronomy.webp" width={180} height={180} />
      </div>
    ),
  },
  {
    title: "Malbec Wine",
    description:
      "Take one of our nicest wines coming to our Bodega.",
    cost: 20000,
    demo: (
      <div className="flex items-center justify-center space-x-20">
        <Image alt="beverage" src="/beverage.png" width={180} height={180} />
      </div>
    ),
  },
  {
    title: "Weekend trip",
    description:
      "Take a 2 day trip to our hotel in the small town of Jofre",
    cost: 400000,
    demo: (
      <div className="flex items-center justify-center space-x-20">
        <Image alt="trip" src="/trip.webp" width={180} height={180} />
      </div>
    ),
  },
];
