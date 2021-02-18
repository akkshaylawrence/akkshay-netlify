export default function Navbar() {
  return (
    <div className="flex flex-row px-1 sm:pl-0 items-baseline align-middle font-heading font-light tracking-wide sticky top-0">
      <div className="flex-grow border flex">
        <span className="text-4xl font-bold">akkshay lawrence</span>
      </div>
      <div className="text-gray-800">
        <h3>{`#${Date.now()}`}</h3>
      </div>
    </div>
  );
}
