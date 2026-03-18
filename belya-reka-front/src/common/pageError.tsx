import { FC } from "react";

const PageError: FC = () => {
  const reloadPage = () => {
    location.reload();
  };

  return (
    <section className="di w-full flex-col centered">
      <legend>Произошла ошибка</legend>
      <button onClick={() => reloadPage()} className="mnstr__button--dark mnstr__button--active mt-4 w-2/12">
        Обновить
      </button>
    </section>
  );
};

export default PageError;
