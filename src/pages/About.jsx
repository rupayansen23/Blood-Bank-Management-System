import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function About() {
    return (
        <div className="bg-white">
            <div>
                <Navbar></Navbar>
            </div>
            <div className="bg-gray-100 py-12 px-6 mx-6 mt-4 rounded">
                <h1 className="text-5xl font-bold text-center mb-4 text-gray-900">About Us</h1>
                <p className="text-xl text-center text-gray-800">
                    Our mission is to save lives through safe and reliable blood services.
                </p>
            </div>
            <div className="mt-12 mx-10">
                <div className="flex flex-col md:flex-row gap-12">
                    <div className="flex-1">
                        <h2 className="text-4xl font-bold text-red-500 mb-4">Our Mission</h2>
                        <p className="text-xl text-gray-900">
                            We are dedicated to providing safe blood and blood products to those in need, while promoting responsible donation and high-quality healthcare.
                        </p>
                    </div>
                    <div className="flex-1">
                        <h2 className="text-4xl font-bold text-red-500 mb-4">Our Vision</h2>
                        <p className="text-xl text-gray-900">
                            Our vision is to be the trusted leader in blood services, known for our innovation, reliability, and compassion.
                        </p>
                    </div>
                </div>
                <div className="mt-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Our History</h2>
                    <p className="text-xl text-gray-900">
                        Since our founding in 2005, we have been a cornerstone of the community, providing life-saving blood services and collaborating with healthcare providers.
                    </p>
                </div>
            </div>
            <div className="mt-20 mx-10">
                <h2 className="text-5xl font-bold text-gray-900 mb-8">What Our Donors Say</h2>
                <div className="space-y-6">
                    <div className="bg-gray-100 rounded-lg p-6 text-xl italic  text-black">
                        "Donating blood with this organization was easy and safe!"<br />
                        <span className="font-bold not-italic">- Rohit</span>
                    </div>
                    <div className="bg-gray-100 rounded-lg p-6 text-xl italic text-black">
                        "I appreciate their efforts in making a difference in the community."<br />
                        <span className="font-bold not-italic">- Binoy</span>
                    </div>
                    <div className="bg-gray-100 rounded-lg p-6 text-xl italic  text-black">
                        "The team was welcoming and professional during my donation."<br />
                        <span className="font-bold not-italic">- Sourin</span>
                    </div>
                </div>
                <div className="mt-16 flex flex-col items-center">
                    <p className="text-2xl text-gray-800 mb-6">Ready to donate blood or learn more?</p>
                    <button className="bg-red-500 hover:bg-red-600 text-white text-xl px-8 py-4 rounded-lg font-medium transition-colors duration-200">
                        Contact Us
                    </button>
                </div>
            </div>
            <div className="mt-5">
                <Footer></Footer>
            </div>
        </div>
    );
}