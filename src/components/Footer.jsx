export default function Footer() {
    return (
        // Example Footer.jsx
        <footer className="bg-gradient-to-b from-red-500 to-red-950 text-white pt-10 pb-4 px-10 rounded-b-lg">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-10">
                {/* Contact Us */}
                <div className="flex-1">
                <h2 className="text-3xl font-bold mb-2">Contact Us</h2>
                <hr className="border-gray-300 mb-4"/>
                <p className="font-bold mb-1">Blood Bank Address:</p>
                <p className="mb-3">308, Jodhpur Park, Kolkata, West Bengal 700068</p>
                <p className="font-bold inline">Email:</p>
                <a href="mailto:info@bloodbank.com" className="ml-1 underline">info@bloodbank.com</a>
                <br />
                <p className="font-bold inline">Phone:</p>
                <a href="tel:7980340880" className="ml-1 underline">7980340880</a>
                </div>
                {/* Quick Links */}
                <div className="flex-1">
                <h2 className="text-3xl font-bold mb-2">Quick Links</h2>
                <hr className="border-gray-300 mb-4"/>
                <ul className="mb-4 space-y-2">
                    <li><a href="#" className="hover:underline">Home</a></li>
                    <li><a href="#" className="hover:underline">About</a></li>
                    <li><a href="#" className="hover:underline">Donate</a></li>
                    <li><a href="#" className="hover:underline">Services</a></li>
                    <li><a href="#" className="hover:underline">Contact</a></li>
                </ul>
                <div className="flex space-x-4 text-2xl mt-2">
                    <a href="#"><i className="fab fa-facebook"></i></a>
                    <a href="#"><i className="fab fa-twitter"></i></a>
                    <a href="#"><i className="fab fa-instagram"></i></a>
                    <a href="#"><i className="fab fa-linkedin"></i></a>
                </div>
                </div>
            </div>
            <hr className="border-gray-300 my-8"/>
            <div className="text-center text-lg">
                © 2024 Blood Bank. All rights reserved.
            </div>
        </footer>
    )
}