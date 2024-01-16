const CardHeader = () => {
  return (
    <div className="flex">
      <ul className="flex space-x-10 my-[13px] text-[#696671] font-semibold">
        <li className="text-[#06286e] underline underline-offset-4">Study</li>

        <li>Quiz</li>
        <li>Test</li>
        <li>Game</li>
        <li>Others</li>
      </ul>
    </div>
  );
};

export default CardHeader;
