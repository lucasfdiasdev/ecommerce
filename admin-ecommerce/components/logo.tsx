import Link from "next/link";

import { AiFillAccountBook } from "react-icons/ai";

const Logo = () => {
  return (
    <Link href={"#"} className="flex items-center pl-3 mb-14">
      <AiFillAccountBook size={32} />
      <span className="text-xl">up.</span>
    </Link>
  );
};

export default Logo;
