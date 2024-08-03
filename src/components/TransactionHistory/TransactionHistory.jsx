import s from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => {
  return (
    <table className={s.table}>
      <thead>
        <tr>
          <th className={s.text}>Type</th>
          <th className={s.text}>Amount</th>
          <th className={s.text}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <tr className={s.item_list} key={id}>
            <td className={s.type}>{type}</td>
            <td className={s.type}>{amount}</td>
            <td className={s.type}>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
