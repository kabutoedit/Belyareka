import { type FC, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import Input from "./InputBasketUi";
import PhoneNumberInput from "./phoneNumberInput";
import toast from "react-hot-toast";
import { $api } from "../api";

interface IProps {}

type formTypes = {
  name: string;
  email: string;
  phoneNumber: string;
  companyName: string;
  message: string;
};

const PartnersForm: FC<IProps> = () => {
  const {
    register,
    watch,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm<formTypes>();

  const [isLoading, setIsLoading] = useState(false);

  const onSubmithandler = async (data: formTypes) => {
    setIsLoading(true);

    const payload = {
      name: data.name,
      email: data.email,
      phone: "+" + data.phoneNumber,
      companyName: data.companyName,
      message: data.message,
    };

    const promise = $api.post("/partner-requests", { data: payload });

    toast.promise(promise, {
      loading: "Отправка...",
      success: () => {
        setIsLoading(false);
        reset();
        return "Спасибо! Мы скоро с вами свяжемся.";
      },
      error: () => {
        setIsLoading(false);
        return "Произошла ошибка.";
      },
    });
  };

  return (
    <section className="w-full flex flex-col xl:flex-row gap-5 justify-between pb-1">
      <div className="w-full">
        <h2 className="text-4xl font-bold text-jetblack font-cocosignum">Стать партнером</h2>
        <p className="text-lg w-11/12 mt-2">Заполните форму, чтобы обсудить возможности для сотрудничествас компанией «Белая Река».</p>
      </div>

      <form className="flex flex-col w-full gap-5" onSubmit={handleSubmit(onSubmithandler)}>
        <fieldset className="flex flex-col w-full gap-5">
          <Input
            className="h-[50px]"
            label="Имя"
            error={!!errors.name}
            value={watch("name")}
            {...register("name", { required: true })}
            name="name"
            styleFocusedTop="top-[14px]"
          />
          <Input
            className="h-[50px]"
            error={!!errors.email}
            value={watch("email")}
            {...register("email", { required: true, pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Введите корректный email" } })}
            label="Электронная почта"
            name="email"
            styleFocusedTop="top-[14px]"
          />
          <Controller
            name="phoneNumber"
            control={control}
            rules={{ required: true }}
            render={({ field: { onChange } }) => (
              <PhoneNumberInput
                collectorPhoneValue={(value) => onChange(value)}
                name="phoneNumber"
                label="Контактный телефон"
                error={!!errors?.phoneNumber}
              />
            )}
          />
          <Input
            className="h-[50px]"
            error={!!errors.companyName}
            value={watch("companyName")}
            {...register("companyName", { required: true })}
            label="Название компании"
            name="companyName"
            styleFocusedTop="top-[14px]"
          />
          <Input
            className="min-h-[200px]"
            error={!!errors.message}
            value={watch("message")}
            {...register("message", { required: true })}
            label="Ваше сообщение"
            type="textarea"
            name="message"
          />
        </fieldset>
        <fieldset className="flex gap-y-2 gap-x-4 md:items-center flex-col md:flex-row">
          <button
            type="submit"
            disabled={isLoading}
            className="order-2 md:order-1 bg-hexahrome py-3 rounded-full active:outline-none outline-none button__focus text-white text-base w-[200px]">
            {isLoading ? "Отправка..." : "Отправить"}
          </button>
          <p className="order-1 md:order-2 text-sm">Вашу заявку обработают конфиденциально, она не будет передана третьим лицам.</p>
        </fieldset>
      </form>
    </section>
  );
};

export default PartnersForm;
