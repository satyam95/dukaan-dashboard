import rightArrow from "/assets/right-arrow.svg";
import leftArrow from "/assets/left-arrow.svg";

const Pagination = () => {
  return (
    <div className="flex items-center gap-4">
      <div className="text-black-30 text-sm font-medium border-black-85 border py-1.5 pr-3 pl-1.5 rounded inline-flex gap-1 cursor-pointer">
        <img src={rightArrow} alt="right-arrow icon" />
        Previous
      </div>
      <ul className="flex gap-2">
        <li className="text-black-30 text-sm px-2 py-1.5 cursor-pointer">1</li>
        <li className="text-black-30 text-sm px-2 py-1.5 cursor-pointer">
          ...
        </li>
        <li className="text-white text-sm px-2 py-1.5 bg-blue rounded cursor-pointer">
          10
        </li>
        <li className="text-black-30 text-sm px-2 py-1.5 cursor-pointer">11</li>
        <li className="text-black-30 text-sm px-2 py-1.5 cursor-pointer">12</li>
        <li className="text-black-30 text-sm px-2 py-1.5 cursor-pointer">13</li>
        <li className="text-black-30 text-sm px-2 py-1.5 cursor-pointer">14</li>
        <li className="text-black-30 text-sm px-2 py-1.5 cursor-pointer">15</li>
        <li className="text-black-30 text-sm px-2 py-1.5 cursor-pointer">16</li>
        <li className="text-black-30 text-sm px-2 py-1.5 cursor-pointer">17</li>
        <li className="text-black-30 text-sm px-2 py-1.5 cursor-pointer">18</li>
      </ul>
      <div className="text-black-30 text-sm font-medium border-black-85 border py-1.5 pr-1.5 pl-3 rounded inline-flex gap-1 cursor-pointer">
        Next
        <img src={leftArrow} alt="right-arrow icon" />
      </div>
    </div>
  );
};

export default Pagination;
