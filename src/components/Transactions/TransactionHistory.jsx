import css from 'src/components/Transactions/Transaction.module.css';
import { TransactionTable } from './TransactionTable';
import PropTypes from 'prop-types';

export const Transaction = ({ item }) => (
  <table className={css.transactionHistory}>
    <thead>
      <tr className={css.tableHeadRow}>
        <th>type</th>
        <th>amount</th>
        <th>currency</th>
      </tr>
    </thead>
    {item.map(transaction => (
      <TransactionTable
        key={transaction.id}
        type={transaction.type}
        currency={transaction.currency}
        amount={transaction.amount}
      />
    ))}
  </table>
);

Transaction.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      type: PropTypes.string,
      amount: PropTypes.number,
      currency: PropTypes.string,
    })
  ),
};
