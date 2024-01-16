import Image from "next/image";

const Publishedby = () => {
  return (
    <div className="flex justify-between">
      <Image
        className="h-[80px] w-[218px]"
        src="/BottomLogo.svg"
        alt=""
        height={100}
        width={250}
      ></Image>

      <Image
        className="h-[60px] w-[300px]"
        src="/CreateFlashcard.svg"
        alt=""
        height={100}
        width={300}
      ></Image>
    </div>
  );
};

export default Publishedby;
