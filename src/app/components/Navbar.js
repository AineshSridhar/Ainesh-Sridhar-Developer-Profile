export default function Navbar() {
  return (
    <nav className="w-full px-8 py-6 flex items-center justify-between 
        absolute top-0 left-0 z-50
        bg-white/10 backdrop-blur-md">
      <div className="font-extrabold text-2xl tracking-wide">Ainesh Sridhar</div>
      <ul className="hidden md:flex gap-8 font-medium">
        <li><a href="#" className="hover:text-orange-300 transition">Home</a></li>
        <li><a href="#" className="hover:text-orange-300 transition">Features</a></li>
        <li><a href="#" className="hover:text-orange-300 transition">Pricing</a></li>
        <li><a href="#" className="hover:text-orange-300 transition">Contact</a></li>
      </ul>
    </nav>
  );
}
