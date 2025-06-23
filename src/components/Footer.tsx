import Link from 'next/link';
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaSkype,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa';

export default function Footer() {
  return (
    <footer
      className="bg-white text-gray-700 py-10 mx-[7%] md:mx-[5%] lg:mx-[3%]"
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div>
        <div className="flex flex-col items-center text-center">
          <div className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-serif">
            <span className="font-light text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
              Space Reader
            </span>
          </div>
          <p className="max-w-md my-4 text-xs sm:text-sm md:text-base lg:text-base xl:text-lg">
            Explore the universe of knowledge. Space Reader helps you discover,
            save, and read the content that matters to you.
          </p>
          <div className="flex space-x-4 my-4">
            <Link
              href="https://facebook.com"
              aria-label="Follow us on Facebook"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-10 lg:h-10 xl:w-12 xl:h-12 bg-blue-800 text-white rounded-full flex items-center justify-center"
            >
              <FaFacebookF className="text-xs sm:text-sm md:text-base lg:text-base xl:text-lg" />
            </Link>
            <Link
              href="https://twitter.com"
              aria-label="Follow us on Twitter"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-10 lg:h-10 xl:w-12 xl:h-12 bg-gray-700 text-white rounded-full flex items-center justify-center"
            >
              <FaTwitter className="text-xs sm:text-sm md:text-base lg:text-base xl:text-lg" />
            </Link>
            <Link
              href="https://skype.com"
              aria-label="Contact us on Skype"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-10 lg:h-10 xl:w-12 xl:h-12 bg-sky-500 text-white rounded-full flex items-center justify-center"
            >
              <FaSkype className="text-xs sm:text-sm md:text-base lg:text-base xl:text-lg" />
            </Link>
            <Link
              href="https://instagram.com"
              aria-label="Follow us on Instagram"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-10 lg:h-10 xl:w-12 xl:h-12 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white rounded-full flex items-center justify-center"
            >
              <FaInstagram className="text-xs sm:text-sm md:text-base lg:text-base xl:text-lg" />
            </Link>
            <Link
              href="https://youtube.com"
              aria-label="Subscribe to our Youtube channel"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-10 lg:h-10 xl:w-12 xl:h-12 bg-red-600 text-white rounded-full flex items-center justify-center"
            >
              <FaYoutube className="text-xs sm:text-sm md:text-base lg:text-base xl:text-lg" />
            </Link>
            <Link
              href="https://linkedin.com"
              aria-label="Follow us on LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-10 lg:h-10 xl:w-12 xl:h-12 bg-blue-600 text-white rounded-full flex items-center justify-center"
            >
              <FaLinkedinIn className="text-xs sm:text-sm md:text-base lg:text-base xl:text-lg" />
            </Link>
          </div>
        </div>
        <hr className="my-8 border-gray-200" />
        <div className="flex justify-center space-x-8 text-xs sm:text-sm md:text-sm lg:text-sm xl:text-base font-medium">
          <Link href="/" className="hover:text-gray-900">
            HOME
          </Link>
          <Link href="/contact" className="hover:text-gray-900">
            CONTACT US
          </Link>
        </div>
        <div className="text-center text-gray-500 text-xs sm:text-xs md:text-sm lg:text-sm xl:text-sm mt-8 mb-8">
          <p>
            &copy; {new Date().getFullYear()} Space Reader. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
