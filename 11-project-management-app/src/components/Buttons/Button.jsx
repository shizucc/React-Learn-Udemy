export default function Button({ label }) {
  return (
    <button className="bg-gray-700 hover:bg-gray-300 rounded-md px-3 py-1">
      <h2 className="text-gray-400">{label}</h2>
    </button>
  );
}
