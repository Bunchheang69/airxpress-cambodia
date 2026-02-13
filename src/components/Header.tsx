import Image from "next/image";
import Link from "next/link";

const Header = () => {
    return (
        <header className="bg-primary-blue text-white py-4 px-6 md:px-12 flex justify-between items-center relative z-50 sticky top-0 shadow-md">
            <div className="flex items-center">
                <Link href="/">
                    <Image src="/images/og-logo-white.webp" alt="AirXpress Logo" width={150} height={50} />
                </Link>
            </div>

            <nav className="hidden md:flex space-x-8 text-sm font-medium">
                <Link href="/" className="hover:text-primary-red transition-colors">
                    Home
                </Link>
                <Link href="/#about" className="hover:text-primary-red transition-colors">
                    About Us
                </Link>
                <Link href="/#services" className="hover:text-primary-red transition-colors">
                    Services
                </Link>
                <Link href="/careers" className="hover:text-primary-red transition-colors">
                    Careers
                </Link>
            </nav>

            <div>
                <Link
                    href="#contact"
                    className="bg-primary-red hover:bg-red-600 text-white text-sm font-bold py-2 px-6 rounded transition-colors"
                >
                    Contact
                </Link>
            </div>
        </header>
    );
};

export default Header;
