const CardHeader = () => {
  return (
    <div className="flex">
      <ul className="flex space-x-10 my-[13px] text-[#696671] font-semibold">
        <li className="text-[#06286e] border-b-2 border-[#06286e] cursor-pointer">
          Study
        </li>

        <li className="cursor-pointer">Quiz</li>
        <li className="cursor-pointer">Test</li>
        <li className="cursor-pointer">Game</li>
        <li className="cursor-pointer">Others</li>
      </ul>
    </div>
  );
};

export default CardHeader;
