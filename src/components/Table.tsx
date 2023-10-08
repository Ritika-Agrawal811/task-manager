import { FaPencilAlt, FaTrash } from "react-icons/fa";

type TableProps = {
  labels: string[];
};

const Table = ({ labels }: TableProps) => {
  return (
    <table className="border border-warning w-full">
      <thead>
        <tr className="bg-slate-100 text-left">
          <th className="relative p-2 w-10 text-center">
            <label htmlFor="checkAll" className="absolute left-9999">
              Check All
            </label>
            <input type="checkbox" id="checkAll" />
          </th>
          {labels.map((item, index) => (
            <th key={index} className="p-2">
              {item}
            </th>
          ))}
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="relative p-2">
            <label htmlFor="checkItem1" className="absolute left-9999">
              Check All
            </label>
            <input type="checkbox" id="checkItem1" />
          </td>
          <td className="p-2">Task 1</td>
          <td className="p-2">lorem ipsum</td>
          <td className="p-2">22 sept 2023</td>
          <td className="p-2">
            <button>
              <FaPencilAlt />
            </button>
            <button>
              <FaTrash />
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
