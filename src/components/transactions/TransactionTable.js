export const TransactionTable = ({ type, amount, currency }) => (
  <>
    <tbody>
      <tr>
        <td>{type}</td>
        <td>{amount}</td>
        <td>{currency}</td>
      </tr>
    </tbody>
  </>
);
