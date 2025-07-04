import React from "react";

function LoaddingPage() {
  return (
    <div className="h-screen flex items-center justify-center">
      <span className="loading text-4xl bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 loading-dots loading-xl"></span>
    </div>
  );
}

export default LoaddingPage;
