interface AnalyticCardPropsType {
  title: string;
  number: string;
}
const AnalyticCard = ({ title, number }: AnalyticCardPropsType) => {
  return (
    <div className="p-5 bg-white rounded-lg shadow-1 w-full">
      <div className="text-black-30">{title}</div>
      <div className="text-black-12 font-medium text-head1 pt-4">{number}</div>
    </div>
  );
};

export default AnalyticCard;
