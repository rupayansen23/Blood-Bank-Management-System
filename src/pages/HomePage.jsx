import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

export default function HomePage() {
    return (
        <div className="mt-0 pt-0">
            <Navbar></Navbar>
            <div className="">
                <img src="/banner1.jpg"></img>
            </div>
            <div className="flex bg-blue-500">
                <div className="m-2 ml-5">
                    <img src="/bg1.png" height="150px" width="150px"></img>
                </div>
                <div className="justify-center items-center mt-5 pt-3 ml-10">
                    <h2 className="text-2xl font-bold">High Professional Doctors</h2>
                    <p className="mt-2 ml-5 mr-5 text-xl">all specialists have extensive practical experience and regularly training courses in educational centers of the world</p>
                </div>
            </div>
            <div className="flex flex-col ">
                    <div className="p-5 m-10  bg-red-400 rounded-2xl shadow-lg">
                        <h1 className="font-bold text-3xl text-center">BLOOD GROUPS</h1>
                        <p className="text-xl text-center">blood group of any human being will mainly fall in any one of the following groups..</p>
                    </div>
                    <div className="flex flex-border pb-8 px-8 gap-6 md:flex-row">
                        <div className="bg-gradient-to-br from-red-700 via-red-500 to-red-800 m-2 p-5 rounded-2xl flex-1 flex flex-col justify-center items-center shadow-md">
                            <ul className="list-disc pl-5 text-xl">
                                <li>A+ or A-</li>
                                <li>B+ or B-</li>
                                <li>O+ or O-</li>
                                <li>AB+ or AB-</li>
                            </ul>
                        </div>
                        <div className="bg-gradient-to-br from-amber-400 via-amber-500 to-amber-700 m-2 p-5 rounded-2xl flex-1 shadow-md">
                            <p className="m-10 text-justify"> A healthy diet helps ensure a successful blood donation, and also makes you feel better! Check out the following recommended foods to eat prior to your donation.</p>
                        </div>
                        <div className="bg-gradient-to-br from-blue-700 via-blue-500 to-blue-900 m-2 p-5 rounded-2xl flex-1 flex flex-col justify-center items-center shadow-md">
                                <ul className="list-disc pl-5 text-xl">
                                    <li>Red meat</li>
                                    <li>Eggs</li>
                                    <li>Leafy green vegetables</li>
                                    <li>Fish</li>
                                </ul>
                        </div>
                    </div>
            </div>
            <div>
                <div className="m-10 p-8 bg-white rounded-xl shadow-md">
                    <h2 className="text-2xl font-bold mb-4 text-red-700 text-center">UNIVERSAL DONORS AND RECIPIENTS</h2>
                    <p className="text-lg text-gray-800 text-justify">The most common blood type is O, followed by type A. Type O individuals are often called "universal donors" since their blood can be transfused into persons with any blood type. Those with type AB blood are called "universal recipients" because they can receive blood of any type.</p>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}