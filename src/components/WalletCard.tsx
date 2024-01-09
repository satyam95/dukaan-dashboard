import wallet from "/assets/wallet.svg";

interface WalletCardPropsType {
  title: string;
  amount: number;
}

const WalletCard = ({ title, amount }: WalletCardPropsType) => {
  return (
    <div className="bg-primary-100 px-3 py-2 rounded mt-6 flex gap-3 items-center">
      <div className="bg-white-100 rounded p-1.5">
        <img src={wallet} alt="wallet icon" />
      </div>
      <div className="grow">
        <div className="text-body2 text-white font-normal opacity-80">
          {title}
        </div>
        <div className="text-base text-white font-medium">{amount}</div>
      </div>
    </div>
  );
};

export default WalletCard;
