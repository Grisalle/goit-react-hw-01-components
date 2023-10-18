export const TransactionHistory = ({ items }) => {
  return (
    <table className="transactionHistory">
      <thead className="transactionTable">
        <tr className="transactionName">
          <th className="type">Type</th>
          <th className="amount">Amount</th>
          <th className="currency">Currency</th>
        </tr>
      </thead>
      <tbody className="transactionList">
        {items.map(item => (
          <tr key={item.id} className="transactionItem">
            <td className="typeItem">{item.type}</td>
            <td className="amountItem">{item.amount}</td>
            <td className="currencyItem">{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
