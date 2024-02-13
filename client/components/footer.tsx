import Link from "next/link";

import { FaXTwitter, FaFacebookF, FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-slate-200">
      <div className="footer-container">
        <div className="flex items-start justify-between border-b py-4">
          <div className="flex flex-row gap-12">
            <div className="flex flex-col gap-2">
              <h4 className="font-bold">Categorias</h4>
              <div className="flex flex-col text-sm">
                <Link href="#">Accessories</Link>
                <Link href="#">Laptops</Link>
                <Link href="#">Headphones</Link>
                <Link href="#">Smart Watches</Link>
                <Link href="#">Tablets</Link>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <h4 className="font-bold">Informacoes</h4>
              <div className="flex flex-col text-sm">
                <Link href="#">Privacy policy</Link>
                <Link href="#">Refound Policy</Link>
                <Link href="#">Shipping Policy</Link>
                <Link href="#">Terms of Service</Link>
                <Link href="#">Blog</Link>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <h4 className="font-bold">Account</h4>
              <div className="flex flex-col text-sm">
                <Link href="#">Search</Link>
                <Link href="#">About Us</Link>
                <Link href="#">Faq</Link>
                <Link href="#">Contact</Link>
                <Link href="#">Size Chart</Link>
              </div>
            </div>
          </div>

          <div>
            <div className="flex flex-col gap-4">
              <h4>Contact Us</h4>
              <div className="flex flex-row text-sm gap-2">
                <input
                  type="text"
                  placeholder="New latest"
                  className="input-form"
                />
                <button className="btn-subs">Search</button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-between flex-col gap-4 md:flex-row md:gap-0 py-4">
          <span className="text-sm md:text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Yup LTDA. Todos os direitos
            reservados a empresa.
          </span>
          <div className="row gap-4">
            <Link href="#" className="h-5 w-5">
              <FaFacebookF />
            </Link>
            <Link href="#" className="h-5 w-5">
              <FaXTwitter />
            </Link>
            <Link href="#" className="h-5 w-5">
              <FaInstagram />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
