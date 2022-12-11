import css from './Transaction.module.css';

export const TransactionTable = ({ type, amount, currency }) => (
  <>
    <tbody className={css.tableBody}>
      <tr className={css.tableBodyRow}>
        <td>{type}</td>
        <td>{amount}</td>
        <td>{currency}</td>
      </tr>
    </tbody>
  </>
);
