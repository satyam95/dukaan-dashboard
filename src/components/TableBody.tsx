interface TableBodyPropsType {
  orderId: string;
  date: string;
  amount: string;
  fee: string;
}

const TableBody = ({ orderId, date, amount, fee }: TableBodyPropsType) => {
  return (
    <tr className="border-b border-black-90">
      <td className="text-sm font-medium text-blue px-3 py-2.5 text-left">
        {orderId}
      </td>
      <td className="text-sm text-black-12 px-3 py-2.5 text-left">{date}</td>
      <td className="text-sm text-black-12 px-3 py-2.5 text-right">{amount}</td>
      <td className="text-sm text-black-12 px-3 py-2.5 text-right">{fee}</td>
    </tr>
  );
};

export default TableBody;
