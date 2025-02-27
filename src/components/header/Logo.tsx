
import { Link } from "react-router-dom";

export const Logo = () => {
  return (
    <Link
      to="/"
      className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent hover:opacity-80 transition-opacity"
    >
      StoreX
    </Link>
  );
};
