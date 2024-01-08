import { calculateInvestmentResults, formatter } from "../util/investment";
import TableResult from "./result/TableResult";

const tableHeader = (
  <tr>
    <th>Year</th>
    <th>Invesment Value</th>
    <th>Interest (Year)</th>
    <th>Total Interest</th>
    <th>Invested Capital</th>
  </tr>
);

export default function Result({ input }) {
  const results = calculateInvestmentResults(input);
  const initialInvestment =
    results[0].valueEndOfYear -
    results[0].interest -
    results[0].annualInvestment;

  return (
    <TableResult header={tableHeader}>
      {results.map((result) => {
        const totalInterest =
          result.valueEndOfYear -
          result.annualInvestment * result.year -
          initialInvestment;
        const totalAmountInvested = result.valueEndOfYear - totalInterest;
        return (
          <tr key={result.year}>
            <td>{result.year}</td>
            <td>{formatter.format(result.valueEndOfYear)}</td>
            <td>{formatter.format(result.interest)}</td>
            <td>{formatter.format(totalInterest)}</td>
            <td>{formatter.format(totalAmountInvested)}</td>
          </tr>
        );
      })}
    </TableResult>
  );
}
