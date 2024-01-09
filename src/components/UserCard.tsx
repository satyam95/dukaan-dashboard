import userImage from "/assets/n.png";
import downWhite from "/assets/down-white.svg";

interface UserCardPropsType {
  userName: string;
  storeLink: string;
}

const UserCard = ({ userName, storeLink }: UserCardPropsType) => {
  return (
    <div className="flex gap-3 justify-between items-center">
      <div className="w-10 h-10">
        <img src={userImage} alt="user image" className="rounded" />
      </div>
      <div className="flex flex-col grow">
        <div className="text-body1 text-white font-medium">{userName}</div>
        <div className="text-body2 text-white font-normal underline opacity-80">
          {storeLink}
        </div>
      </div>
      <div className="h-5 w-5">
        <img src={downWhite} alt="down arrow" />
      </div>
    </div>
  );
};

export default UserCard;
