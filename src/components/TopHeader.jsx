"use client";

export default function TopHeader() {
  const message =
    "Building the Next Generation of Digital Experiences ✦ AI-Powered. Cloud-Native. Human-Centered.";

  return (
    <div className="w-full overflow-hidden">
      <div className="bg-gradient-to-r from-blue-500 via-teal-400 to-yellow-400 px-6 py-2 rounded-b-lg shadow-md">
        <div className="marquee text-gray-800 font-semibold text-sm uppercase tracking-wider">
          {message} &nbsp;&nbsp;&nbsp; {message} &nbsp;&nbsp;&nbsp; {message}
        </div>
      </div>
    </div>
  );
}
