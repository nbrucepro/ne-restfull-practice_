import { forwardRef } from "react";
// import Link from "next/link";
import { HomeIcon, CreditCardIcon, UserIcon } from "@heroicons/react/24/solid";
// import { useRouter } from "next/router";

const SideBar = forwardRef(({ showNav }, ref) => {
  // const router = useRouter();

  return (
    <div ref={ref} className="fixed w-56 h-full bg-white shadow-lg">
      <div className="flex justify-center mt-6 mb-14">
        <picture className="text-center">
          <img
            className="w-32 h-auto"
            src="/ferox-transparent.png"
            alt="company logo"
          />
          <p className="text-lg">E-<span className="text-orange-600">vehicle</span> </p>
        </picture>
      </div>

      <div className="flex flex-col">
        <a href="/">
          <div
            className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors bg-orange-100 text-orange-500
   
            `}
          >
            <div className="mr-2">
              <HomeIcon className="h-5 w-5" />
            </div>
            <div>
              <p>Home</p>
            </div>
          </div>
        </a>
        <a href="/account">
          <div
            className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors `}
          >
            <div className="mr-2">
              <UserIcon className="h-5 w-5" />
            </div>
            <div>
              <p>Account</p>
            </div>
          </div>
        </a>
        <a href="/billing">
          <div
            className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors`}
          >
            <div className="mr-2">
              <CreditCardIcon className="h-5 w-5" />
            </div>
            <div>
              <p>Billing</p>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
});

SideBar.displayName = "SideBar";

export default SideBar;
