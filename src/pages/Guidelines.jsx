import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";


const criteria = [
  { title: "Age", desc: "Donor must be between 18 to 60 years old." },
  { title: "Weight", desc: "Donors must weigh at least 45 kg." },
  { title: "Temperature", desc: "Donors must be in normal temperature (oral temperature not exceeding 37.5°C)." },
  { title: "Tattoo", desc: "Donors must wait for 6 to 12 months to donate blood after getting a tattoo." },
  { title: "Pregnancy", desc: "Pregnant women are not eligible for donating blood." },
  { title: "Menstruation", desc: "Women should not donate blood during their menstrual cycles." },
  { title: "Haemoglobin", desc: "Donors should not have Haemoglobin level less than 12.5 g/dl." },
  { title: "Pulse", desc: "Donors must have pulse rate between 50 and 100/minute with no irregularities." },
  { title: "Blood Pressure", desc: "Donors must have systolic blood pressure between 100-180 mm Hg and diastolic blood pressure between 50-100 mm Hg." },
  { title: "Diabetes", desc: "Donors should not have diabetes at the time of donation." },
  { title: "Thyroid", desc: "Donors should not have thyroid at the time of donation." },
];

export default function Guidlines() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => setShow(true), 200); // appear effect
  }, []);

  return (
    <div>
        <div>
            <Navbar></Navbar>
        </div>
        <div className="flex justify-center items-center min-h-screen bg-white">
      <div className={`w-[700px] bg-red-100 rounded-lg shadow-lg mt-5 p-4 transition-all duration-700 ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <h2 className="text-center text-xl font-bold text-red-700 mb-4">Blood Donation Criteria</h2>
        <ul className="space-y-3">
          {criteria.map((item, idx) => (
            <li key={item.title} className="bg-white rounded shadow flex items-start p-3 border border-red-200">
              <span className="text-green-600 mr-2 mt-1">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-7.5 7.5a1 1 0 01-1.414 0l-3.5-3.5a1 1 0 111.414-1.414L8 12.086l6.793-6.793a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </span>
              <div>
                <span className="font-semibold text-green-700">{item.title}</span>
                <div className="text-sm text-gray-700">{item.desc}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
    </div>   
  );
}