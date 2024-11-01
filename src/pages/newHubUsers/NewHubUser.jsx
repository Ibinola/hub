import React, { useState } from "react";
import { roundClockLogo, hamburgerIcon } from "../../assets";
import { Formik, Form } from "formik";
import CustomInput from "../../components/CustomInput";
import CustomDropdown from "../../components/CustomDropdown";
import EmailVerification from "../../components/EmailVerification";
import { Schemas, initialValues } from "../../utils/validationSchema";

const NewHubUser = () => {
  const [openEmailVerification, setOpenEmailVerification] = useState(false);

  function handleSubmit() {
    setOpenEmailVerification(true);
  }

  return (
    <div className="bg-[#F2F2F2] min-h-screen">
      <div className="p-2 sm:p-4 mx-auto container">
        <header className="flex justify-between p-2 sm:p-4">
          <img
            src={roundClockLogo}
            alt="Round o' Clock Logo"
            className="w-24 sm:w-32"
          />
          <img src={hamburgerIcon} className="w-5 sm:w-6 cursor-pointer" />
        </header>

        <Formik
          initialValues={initialValues.newHubUser}
          validationSchema={Schemas.newHubUserSchema}
          onSubmit={handleSubmit}
        >
          {({ values, isSubmitting }) => (
            <div className="p-[3px] bg-gradient-to-r from-[#FF9B3E] to-[#0f98e0] rounded-2xl border mt-3 sm:mt-5 max-w-[1295px] mx-auto">
              <section className="p-3 sm:p-4 min-h-[600px] sm:min-h-[732px] bg-[#F7F7F6] rounded-lg">
                <div className="text-center mt-5 sm:mt-10">
                  {!openEmailVerification ? (
                    <>
                      <h1 className="font-caslon text-black font-semibold text-2xl sm:text-3xl md:text-4xl px-2">
                        Hello, Welcome to{" "}
                        <span className="bg-gradient-to-br from-[#0DA932] to-[#C29608] bg-clip-text text-transparent">
                          Nexus Hub
                        </span>
                      </h1>
                      <p className="text-[#3B3F49] text-lg sm:text-xl font-semibold">
                        Create an account
                      </p>
                    </>
                  ) : (
                    <EmailVerification email={values.email} />
                  )}
                  {/* <EnterOtp /> */}
                </div>
                {!openEmailVerification && (
                  <Form className="max-w-4xl mx-auto mt-6 sm:mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 px-4 sm:px-6">
                    <CustomInput
                      name="fullName"
                      type="text"
                      label="Full Name"
                      placeholder="Please enter your full name"
                    />
                    <CustomDropdown
                      name="subscriptionType"
                      label="Subscription Type"
                      options={[
                        { value: "one", label: "One" },
                        { value: "two", label: "Two" },
                      ]}
                    />
                    <CustomDropdown
                      name="spaceAllocated"
                      label="Space Allocated"
                      options={[
                        { value: "one", label: "One" },
                        { value: "two", label: "Two" },
                      ]}
                    />
                    <CustomInput
                      name="phoneNumber"
                      type="tel"
                      label="Phone Number"
                      placeholder="+234"
                    />

                    <CustomInput
                      name="email"
                      type="email"
                      label="Email"
                      placeholder="Your email"
                    />
                    <CustomInput
                      name="referralCode"
                      type="text"
                      label="Referral Code (Optional)"
                      placeholder="Enter code"
                    />
                    <CustomDropdown
                      name="howDidYouHear"
                      label="How did you hear about us"
                      defaultValue="Twitter, a friend..."
                      options={[
                        { value: "one", label: "One" },
                        { value: "two", label: "Two" },
                      ]}
                    />
                    <div className="col-span-1 md:col-span-2 mt-4 ">
                      <button
                        type="submit"
                        className=" bg-black md:w-[194px] text-white px-12 py-2 rounded-full"
                      >
                        Get in
                      </button>
                    </div>
                  </Form>
                )}
              </section>
            </div>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default NewHubUser;
