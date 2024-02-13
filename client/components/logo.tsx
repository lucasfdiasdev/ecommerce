import Link from "next/link";

import { AiFillAccountBook } from "react-icons/ai";

const Logo = () => {
  return (
    <Link href="/" className="row">
      <AiFillAccountBook size={32} />
      <span className="text-xl">up.</span>
    </Link>
  );
};

export default Logo;
