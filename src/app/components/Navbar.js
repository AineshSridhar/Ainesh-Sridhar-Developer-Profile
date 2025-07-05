// app/_components/Navbar.js
export default function Navbar() {
  return (
    <nav className="w-full px-8 py-6 flex items-center justify-between">
      <div className="font-extrabold text-2xl tracking-wide">Ainesh Sridhar</div>
      <ul className="hidden md:flex gap-8 font-medium">
        <li><a href="#" className="hover:text-blue-200 transitio">Home</a></li>
        <li><a href="#" className="hover:text-blue-200 transition">Features</a></li>
        <li><a href="#" className="hover:text-blue-200 transition">Pricing</a></li>
        <li><a href="#" className="hover:text-blue-200 transition">Contact</a></li>
      </ul>
    </nav>
  );
}
