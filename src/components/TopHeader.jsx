"use client";

export default function TopHeader() {
  const message =
    "We're at GITEX Global Oct 13-17 ✦ Discover AI-powered digital transformation at H26, D75, Dubai World Trade Centre";

  return (
    <div className="w-full overflow-hidden">
      <div className="bg-gradient-to-r from-blue-500 via-teal-400 to-yellow-400 px-6 py-2 rounded-b-lg shadow-md">
        <div className="marquee text-gray-700 font-semibold text-sm">
          {message} &nbsp;&nbsp;&nbsp; {message} &nbsp;&nbsp;&nbsp; {message}
        </div>
      </div>
    </div>
  );
}
