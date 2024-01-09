interface TableHeaderPropsType {
  head1: string;
  head1Icon?: string;
  head2: string;
  head2Icon?: string;
  head3: string;
  head3Icon?: string;
  head4: string;
  head4Icon?: string;
}
const TableHeader = ({
  head1,
  head1Icon,
  head2,
  head2Icon,
  head3,
  head3Icon,
  head4,
  head4Icon,
}: TableHeaderPropsType) => {
  return (
    <tr>
      <th
        className={`text-sm font-medium text-black-30 px-3 py-2.5 text-left ${
          head1Icon && "flex items-center"
        }`}
      >
        {head1}
        {head1Icon && <img src={head1Icon} alt="icon" className="pl-1" />}
      </th>
      <th
        className={`text-sm font-medium text-black-30 px-3 py-2.5 text-left ${
          head2Icon && "flex items-center"
        }`}
      >
        {head2}
        {head2Icon && <img src={head2Icon} alt="icon" className="pl-1" />}
      </th>
      <th
        className={`text-sm font-medium text-black-30 px-3 py-2.5 text-right ${
          head3Icon && "flex items-center"
        }`}
      >
        {head3}
        {head3Icon && <img src={head3Icon} alt="icon" className="pl-1" />}
      </th>
      <th
        className={`text-sm font-medium text-black-30 px-3 py-2.5 text-right ${
          head4Icon && "flex items-center justify-end"
        }`}
      >
        {head4}
        {head4Icon && <img src={head4Icon} alt="icon" className="pl-1" />}
      </th>
    </tr>
  );
};

export default TableHeader;
