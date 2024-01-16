import Image from "next/image";
const CardBottom = () => {
  return (
    <div className="h-[60px] w-[450px]">
      <Image
        src="/CardBottom.svg"
        alt="cardbottom"
        height={100}
        width={500}
      ></Image>
    </div>
  );
};

export default CardBottom;
