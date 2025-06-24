import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef<HTMLFormElement | null>(null);
  const [statusMessage, setStatusMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage("");

    if (!form.current) {
      setStatusMessage("Form reference is not available.");
      setIsSubmitting(false);
      return;
    }

    try {
      const result = await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );

      console.log("Email sent successfully:", result.text);
      setStatusMessage("Message sent successfully! 🎉");

      setTimeout(() => {
        setStatusMessage("");
      }, 3000);

      form.current.reset();
    } catch (error) {
      console.error("Failed to send email:", error);
      setStatusMessage("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="mt-40 flex flex-col items-center justify-center gap-8 px-4 md:px-0">
      <h1 className="text-mainWhite w-[390px] text-center tracking-tight md:w-[650px]">
        Ready to take <span className="gradient-text">your</span> digital
        presence to the <span className="gradient-text">next level</span>?
      </h1>
      <p className="text-mainGray text-center">
        Reach out to me today and let's discuss how I can help you achieve your
        goals.
      </p>
      <div className="flex w-full flex-col items-center justify-center gap-8 rounded-xl border border-white/20 bg-[linear-gradient(90deg,rgba(22,26,49,0.6)_0%,rgba(6,9,31,0.6)_100%)] p-8 md:max-w-[850px]">
        <form
          ref={form}
          onSubmit={sendEmail}
          className="text-mainWhite flex w-full flex-col gap-4"
        >
          <div className="flex flex-col">
            <label htmlFor="name" className="mb-1 text-sm font-semibold">
              Name
            </label>
            <input
              id="name"
              name="user_name"
              required
              type="text"
              placeholder="Enter your name"
              className="text-mainWhite focus:ring-mainGray rounded border border-white/20 bg-transparent bg-[linear-gradient(90deg,rgba(22,26,49,0.6)_0%,rgba(6,9,31,0.6)_100%)] px-4 py-3 focus:ring-2 focus:outline-none"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="email" className="mb-1 text-sm font-semibold">
              Email
            </label>
            <input
              id="email"
              name="user_email"
              required
              type="email"
              placeholder="Enter your email"
              className="text-mainWhite rounded border border-white/20 bg-transparent bg-[linear-gradient(90deg,rgba(22,26,49,0.6)_0%,rgba(6,9,31,0.6)_100%)] px-4 py-3 focus:ring-2 focus:ring-gray-300 focus:outline-none"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="message" className="mb-1 text-sm font-semibold">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              placeholder="Enter your message..."
              className="text-mainWhite resize-none rounded border border-white/20 bg-transparent bg-[linear-gradient(90deg,rgba(22,26,49,0.6)_0%,rgba(6,9,31,0.6)_100%)] px-4 py-3 focus:ring-2 focus:ring-gray-300 focus:outline-none"
            ></textarea>
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              disabled={isSubmitting}
              className="relative mt-2 flex w-full cursor-pointer items-center justify-center gap-4 overflow-hidden rounded-lg border border-white/20 bg-[linear-gradient(90deg,rgba(22,26,49,0.6)_0%,rgba(6,9,31,0.6)_100%)] px-8 py-4 shadow-lg transition-colors duration-300 hover:bg-white/15 md:w-[250px]"
            >
              <div className="pointer-events-none absolute inset-0 z-10 overflow-hidden rounded-lg">
                <img
                  src="./purple-fade-project-background.png"
                  alt="fade overlay"
                  className="h-full w-full object-cover opacity-30"
                />
              </div>
              <h4 className="text-mainGray hover:text-mainWhite relative z-20 flex min-h-[1.5rem] items-center justify-center transition-colors duration-300">
                {isSubmitting ? <span className="email-loader" /> : "SUBMIT"}
              </h4>
              {!isSubmitting && (
                <img src="./arrow.png" alt="arrow" className="relative z-20" />
              )}
            </button>
          </div>
        </form>

        {statusMessage && (
          <p
            className={`mt-4 font-semibold ${
              statusMessage.includes("successfully")
                ? "text-green-400"
                : "text-red-500"
            } text-lg transition-opacity duration-300 md:text-xl`}
          >
            {statusMessage}
          </p>
        )}
      </div>
    </div>
  );
}

export default Contact;
