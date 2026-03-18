import { type FC, useState } from "react";
import { useForm } from "react-hook-form";
import InputBasketUi from "./InputBasketUi";
import Space from "./Space";
import toast from 'react-hot-toast'; 
import { $api } from '../api';

interface FormInputs {
  name: string;
  email: string;
  message: string;
}

interface ContactsFormProps {
  category?: string;
}

const ContactsSectionForm: FC<ContactsFormProps> = ({ category }) => {
  const {
    register,
    watch,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<FormInputs>();
  
  const [isLoading, setIsLoading] = useState(false);

  const onSubmithandler = async (data: FormInputs) => {
    setIsLoading(true);

    const promise = $api.post("/contact-requests", {
      data: {
        name: data.name,
        email: data.email,
        message: data.message,
        department: category ?? "Общая заявка",
      }
    });

    toast.promise(promise, {
      loading: 'Отправка...',
      success: () => {
        setIsLoading(false);
        reset();
        return 'Ваша заявка успешно отправлена!';
      },
      error: () => {
        setIsLoading(false);
        return 'Произошла ошибка. Пожалуйста, попробуйте снова.';
      }
    });
  };
  
  return (
    <>
      <Space height={"100px"} />
      <div className="w-full flex flex-col xl:flex-row gap-5 justify-between">
        <div className="w-full">
          <h2 className="text-4xl font-bold text-jetblack font-cocosignum">Связаться с нами</h2>
          <p className="text-lg w-11/12 mt-2">Заполните необходимые поля, чтобы мы могли связаться с вами или обработать ваш запрос</p>
        </div>

        <form className="flex flex-col w-full gap-5" onSubmit={handleSubmit(onSubmithandler)}>
          <InputBasketUi
            className="h-[50px]"
            error={!!errors?.name}
            value={watch("name")}
            {...register("name", { required: "Поле 'Имя' обязательно" })}
            label="Имя"
            name="name"
            styleFocusedTop="top-[14px]"
          />
          <InputBasketUi
            className="h-[50px]"
            styleFocusedTop="top-[15px]"
            error={!!errors?.email}
            value={watch("email")}
            {...register("email", { required: "Поле 'Email' обязательно", pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Введите корректный email" } })}
            label="Email"
            name="email"
          />
          <InputBasketUi
            className="min-h-[200px]"
            error={!!errors?.message}
            value={watch("message")}
            {...register("message", { required: "Поле 'Сообщение' обязательно" })}
            label="Ваше сообщение"
            type="textarea"
            name="message"
          />
          <button
            type="submit"
            disabled={isLoading}
            className="bg-hexahrome py-3 rounded-full active:outline-none outline-none button__focus text-white text-base w-[200px]">
            {isLoading ? 'Отправка...' : 'Отправить'}
          </button>
        </form>
      </div>
    </>
  );
};

export default ContactsSectionForm;