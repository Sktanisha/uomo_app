"use client";

import Logo from "../components/common/Logo";



const Loading = () => {
  return (
    <div className="fixed inset-0 `z-[9999]` flex items-center justify-center bg-white">

      {/* Background Glow */}
      <div className="absolute w-72 h-72 rounded-full bg-primary/10 blur-3xl" />

      <div className="relative flex flex-col items-center">

        {/* Spinner */}

        <div className="relative flex items-center justify-center w-36 h-36">

          {/* Outer Ring */}

          <div className="absolute w-36 h-36 rounded-full border-[5px] border-gray-200" />

          {/* Animated Ring */}

          <div className="absolute w-36 h-36 rounded-full border-t-[5px] border-primary border-r-[5px] border-r-secondary animate-spin" />

          {/* Inner Ring */}

          <div className="absolute w-24 h-24 rounded-full border-4 border-primary/20" />

          {/* Logo */}

          <div className="z-10 scale-90 bg-primary">
            <Logo/>
          </div>

        </div>

        {/* Loading */}

        <div className="mt-10 w-52 h-1 bg-gray-200 rounded-full overflow-hidden">

          <div className="h-full bg-primary animate-loading" />

        </div>

        <p className="mt-5 text-sm tracking-[6px] uppercase text-primary-gray">
          Loading...
        </p>

      </div>

    </div>
  );
};

export default Loading;