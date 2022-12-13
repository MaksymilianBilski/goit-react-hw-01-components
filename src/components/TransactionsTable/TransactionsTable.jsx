import css from './transactionsTable.module.css';
import PropTypes from 'prop-types';

export const TransactionsTable = ({ type, amount, currency }) => (
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

TransactionsTable.propTypes = {
  type: PropTypes.string,
  amount: PropTypes.number,
  currency: PropTypes.string
}