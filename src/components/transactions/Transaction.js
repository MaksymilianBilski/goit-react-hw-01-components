import css from './Transaction.module.css';
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
    {item.map(el => (
      <TransactionTable
        key={el.id}
        type={el.type}
        currency={el.currency}
        amount={el.amount}
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
