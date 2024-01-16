import { GrHomeRounded } from "react-icons/gr";
import { MdKeyboardArrowRight } from "react-icons/md";

const Breadcrumb = () => {
  return (
    <div>
      <nav className="flex" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
          <li className="inline-flex items-center">
            <a
              href="/"
              className="inline-flex items-center text-sm font-semibold text-[#696671]"
            >
              <GrHomeRounded className="font-bold text-lg text-[#696671] size-5" />
              <MdKeyboardArrowRight className="text-2xl font-black text-[#06286e]" />
              Flashcard
            </a>
          </li>
          <li>
            <div className="flex items-center">
              <MdKeyboardArrowRight className="text-2xl font-black text-[#06286e]" />
              <a
                href="/"
                className="ms-1 text-sm font-semibold text-[#696671] md:ms-2"
              >
                Mathematics
              </a>
            </div>
          </li>
          <li aria-current="page">
            <div className="flex items-center">
              <MdKeyboardArrowRight className="text-2xl font-black text-[#06286e]" />

              <span className="ms-1 text-sm font-semibold text-[#06286e] md:ms-2 ">
                Relation and Function
              </span>
            </div>
          </li>
        </ol>
      </nav>
    </div>
  );
};

export default Breadcrumb;
