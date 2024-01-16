import Image from "next/image";

const Publishedby = () => {
  return (
    <div className="flex justify-between">
      <Image
        className="h-[100px] w-[230px]"
        src="/BottomLogo.svg"
        alt=""
        height={100}
        width={250}
      ></Image>

      <Image
        className="h-[50px] w-[280px]"
        src="/CreateFlashcard.svg"
        alt=""
        height={100}
        width={300}
      ></Image>
    </div>
  );
};

export default Publishedby;
