export default function TableResult({ header, children }) {
  return (
    <table id="result">
      <thead>{header}</thead>
      <tbody>{children}</tbody>
    </table>
  );
}
