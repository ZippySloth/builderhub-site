import React from 'react';
import PhoneIcon from '../../assets/phone (2).png'; 
import MessageIcon from '../../assets/message.png'; 
import ContactIcon from '../../assets/contact.png'; 
import MailIconDark from '../../assets/mail_icon_dark.png'; 

const Contact = () => {
  return (
    <section className="bg-transparent dark:bg-gray-950 py-2">
      <div id="contact" className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-4xl tracking-tight font-bold text-center text-gray-900 dark:text-white">
          Let us know how we can help
        </h2>
        <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
          Feel free to contact us! Submit your queries here and we will listen
        </p>
        <div className="flex flex-col md:flex-row justify-between gap-2 -mb-14 dark:hidden">
          <div className="flex">
            <img src={PhoneIcon} alt="phone icon" className="w-8" />
            <p className="font-bold px-4 py-1 text-xl">438-979-9268</p>
          </div>
          <div className="flex">
            <img src={MessageIcon} alt="message icon" className="w-8" />
            <p className="font-bold px-4 py-1 text-xl">contact@buildrhub.io</p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between mb-9 gap-2 invisible dark:visible dark:text-white">
          <div className="flex">
            <img src={ContactIcon} alt="contact icon" className="w-8" />
            <p className="font-bold px-4 py-1 text-xl">438-979-9268</p>
          </div>
          <div className="flex">
            <img src={MailIconDark} alt="message icon" className="w-8 h-6 mt-2" />
            <p className="font-bold px-4 py-1 text-xl">contact@buildrhub.io</p>
          </div>
        </div>
        <form method="POST" action="https://api.web3forms.com/submit" className="space-y-8">
          <input type="hidden" name="access_key" value="3b782856-0886-4251-a2e0-05e0638a01e1" />
          <div>
            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-darkTheme dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="name"
              required
              name="name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 mt-9">
              Your email
            </label>
            <input
              type="email"
              id="email"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-darkTheme dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="name@gmail.com"
              required
              name="email"
            />
          </div>
          <div>
            <label htmlFor="business" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              Your Business Name
            </label>
            <input
              type="text"
              id="business"
              className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-darkTheme dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="Your business"
              name="business"
            />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
              Type your message here...
            </label>
            <textarea
              id="message"
              rows="6"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-darkTheme dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Leave a comment..."
              required
              name="message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="mt-5 px-10 py-3 rounded-full bg-gradient-to-r from-[#5200FF] to-[#dd2ffc] text-white flex items-center gap-2"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
