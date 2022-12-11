import css from 'M:/programy/Programy_kodowanie/github/goit-react-hw-01-components/src/components/Transactions/Transaction.module.css';

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
