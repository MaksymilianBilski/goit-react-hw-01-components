import css from './transactionsHistory.module.css';
import { TransactionsTable } from '../TransactionsTable/TransactionsTable';
import PropTypes from 'prop-types';

export const TransactionsHistory = ({ items }) => (
  <table className={css.transactionHistory}>
    <thead>
      <tr className={css.tableHeadRow}>
        <th>type</th>
        <th>amount</th>
        <th>currency</th>
      </tr>
    </thead>
    {items.map(transaction => (
      <TransactionsTable
        key={transaction.id}
        type={transaction.type}
        currency={transaction.currency}
        amount={transaction.amount}
      />
    ))}
  </table>
);

TransactionsHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      type: PropTypes.string,
      amount: PropTypes.number,
      currency: PropTypes.string,
    })
  ),
};
