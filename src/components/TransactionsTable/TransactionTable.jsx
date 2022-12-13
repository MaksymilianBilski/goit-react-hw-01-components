import css from '../Transactions/Transaction.module.css';
import PropTypes from 'prop-types';

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

TransactionTable.propTypes = {
  type: PropTypes.string,
  amount: PropTypes.number,
  currency: PropTypes.string
}