"use client";

import { ContactsBlock } from "@/components";
import { useForm } from "react-hook-form";
import { sendEmail } from "@/utils/send-email";
import { useTranslations } from "next-intl";

import { FormDataEmail } from "@/types/formDataEmail.type";

const Contacts = () => {
  const { register, handleSubmit } = useForm<FormDataEmail>();
  const t = useTranslations("Contacts");

  function onSubmit(data: FormDataEmail) {
    sendEmail(data);
  }

  const quotesDetector = (e: any) => {
    e.target.value = e.target.value.replace(/['"`«»]/g, "");
  };

  return (
    <main>
      <div className="container !py-[35px]">
        <h3 className="col-span-full _768:text-h4">{t("heading")}</h3>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="col-span-half _1024:col-span-full"
        >
          <div className="col-span-half flex flex-col gap-[25px] _1240:col-span-full">
            <div className="flex flex-col gap-[25px] p-[25px] border border-blue h-max _768:p-[15px]">
              <h4 className="simple font-semibold _768:text-h5">
                {t("contactUs")}
              </h4>
              <label className="text-p1 font-semibold text-blue-light _491:text-p2">
                {t("fullName")}
                <input
                  {...register("fullName", { required: true })}
                  pattern="^[A-Za-zА-Яа-яЁё\s]{2,36}$"
                  title="Только буквы и пробелы, максимум 36 символов"
                  type="text"
                  className="w-full block mt-[15px] p-[15px] focus:bg-[var(--green-light)] border border-blue-light bg-green-bg focus:outline-none font-normal"
                />
              </label>
              <label className="text-p1 font-semibold text-blue-light _491:text-p2">
                {t("phoneNumber")}
                <input
                  {...register("phone", { required: true })}
                  className="w-full block mt-[15px] p-[15px] focus:bg-[var(--green-light)] border border-blue-light bg-green-bg focus:outline-none font-normal"
                  type="tel"
                  pattern="[0-9+]{1,15}"
                  title="Только цифры и символ +, максимум 15 символов"
                />
              </label>
              <label className="text-p1 font-semibold text-blue-light _491:text-p2">
                {t("yourMessage")}
                <textarea
                  {...register("message", { required: true })}
                  className="w-full block mt-[15px] p-[15px] focus:bg-[var(--green-light)] border border-blue-light bg-green-bg focus:outline-none font-normal"
                  rows={10}
                  onChange={quotesDetector}
                />
              </label>
              <button
                className="p-[20px] border border-blue-light w-full max-w-[300px] self-center text-blue-light font-bold bg-blue text-[24px]"
                type="submit"
              >
                {t("sendButton")}
              </button>
            </div>
          </div>
        </form>
        <ContactsBlock className="col-span-half flex flex-col gap-[25px] _1024:col-span-full" />
      </div>
    </main>
  );
};

export default Contacts;
