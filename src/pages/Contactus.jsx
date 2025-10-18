import { useState } from "react";
import Navbar from "../components/Navbar";

export default function Contact() {
  const [sending, setSending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    const form = new FormData(e.currentTarget);
    const data = {
      name: form.get("name"),
      email: form.get("email"),
      message: form.get("message"),
    };
    console.log("Contact submit:", data);
    // TODO: send `data` to your API
    setTimeout(() => setSending(false), 800);
    e.currentTarget.reset();
  };

  return (
   <div>
    <div>
        <Navbar></Navbar>
    </div>
     <div className="min-h-screen flex items-center justify-center bg-white py-16">
      <div className="w-full max-w-2xl mx-6">
        <div className="bg-gradient-to-b from-pink-50 via-pink-100 to-white rounded-2xl shadow-lg p-8 md:p-12 border border-pink-200">
          <h1 className="text-4xl md:text-5xl font-semibold text-center text-gray-800 mb-8">
            Contact Us
          </h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-lg font-semibold text-gray-700 mb-2">
                Name:
              </label>
              <input
                id="name"
                name="name"
                required
                className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-300"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-lg font-semibold text-gray-700 mb-2">
                Email:
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-300"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-lg font-semibold text-gray-700 mb-2">
                Message:
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                className="w-full rounded-lg border-2 border-red-300 focus:border-red-400 bg-white px-4 py-4 shadow-inner resize-y placeholder-gray-400 focus:outline-none transition-colors duration-150"
                placeholder="Write your message..."
              />
            </div>

            <div className="flex justify-center mt-4">
              <button
                type="submit"
                disabled={sending}
                className="bg-red-600 hover:bg-red-700 active:scale-95 text-white text-lg px-8 py-3 rounded-lg shadow-md transition transform duration-150"
              >
                {sending ? "Sending..." : "Submit"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
   </div>
  );
}