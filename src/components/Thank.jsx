import React from "react";
import iconThank from "../assets/images/icon-thank-you.svg";

function Thank() {
  return (
    <div className="lg:ml-[90px]  flex items-center justify-center">
      <div className="flex flex-col items-center text-center">
        <img src={iconThank} className="w-[18%] mb-4" alt="thank you icon" />
        <h1 className="text-blue-950 font-ub text-3xl mt-2">Thank you!</h1>
        <p className="font-reg font-medium text-gray-400 mt-2 max-w-md">
          Thanks for confirming your subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to email us
          at support@loremgaming.com.
        </p>
      </div>
    </div>
  );
}

export default Thank;
