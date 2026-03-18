import { AnimatePresence, motion } from "framer-motion";
// CDN Base URL for DigitalOcean Spaces
const CDN_BASE = "https://belaya-reka-storage.fra1.digitaloceanspaces.com";

const error = `${CDN_BASE}/assets/media/svg/error.svg`;

import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCountdown } from "usehooks-ts";
type NotificationVariant = "error" | "success";

interface NotificationProps {
  message: string;
  variant: NotificationVariant;
  onClose?: () => void;
  onOkay?: () => void;
  navigate?: string;
  navigateText?: string;
  timerIfAction: boolean;
  showPage?: string;
  // timeShow?: number;
}

const successSvg = (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M20 40C22.6264 40 25.2272 39.4827 27.6537 38.4776C30.0802 37.4725 32.285 35.9993 34.1421 34.1421C35.9993 32.285 37.4725 30.0802 38.4776 27.6537C39.4827 25.2272 40 22.6264 40 20C40 17.3736 39.4827 14.7728 38.4776 12.3463C37.4725 9.91982 35.9993 7.71504 34.1421 5.85786C32.285 4.00069 30.0802 2.5275 27.6537 1.52241C25.2272 0.517315 22.6264 -3.9137e-08 20 0C14.6957 7.90407e-08 9.60859 2.10714 5.85786 5.85786C2.10714 9.60859 0 14.6957 0 20C0 25.3043 2.10714 30.3914 5.85786 34.1421C9.60859 37.8929 14.6957 40 20 40ZM19.4844 28.0889L30.5956 14.7556L27.1822 11.9111L17.6267 23.3756L12.6822 18.4289L9.54 21.5711L16.2067 28.2378L17.9267 29.9578L19.4844 28.0889Z"
      fill="#00AFEF"
    />
  </svg>
);

const Notification: React.FC<NotificationProps> = ({
  message,
  variant,
  onClose,
  onOkay,
  navigate,
  timerIfAction,
  navigateText,
  showPage,
  // timeShow,
}) => {
  const navigateIFSuccess = useNavigate();
  // const timeShowCons = timeShow ? timeShow : 5000;

  const [count, { startCountdown }] = useCountdown({
    countStart: 3,
    // timeShow / 1000
  });

  useEffect(() => {
    if (navigateText && navigate) {
      startCountdown();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigate, navigateText]);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    const handleCloseNotification = () => {
      onClose?.();

      if (navigate) {
        navigateIFSuccess(navigate);
      }
    };

    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      event.preventDefault();
      handleCloseNotification();
      event.returnValue = "";
    };

    if (showPage) {
      if (showPage !== window.location.pathname) {
        handleCloseNotification();
      } else {
        window.addEventListener("beforeunload", handleBeforeUnload);
        if (!timerIfAction) {
          timer = setTimeout(() => {
            handleCloseNotification();
          }, 3000);
        }
        return () => {
          window.removeEventListener("beforeunload", handleBeforeUnload);
          if (timer) {
            clearTimeout(timer);
          }
        };
      }
    } else if (!timerIfAction) {
      timer = setTimeout(() => {
        handleCloseNotification();
      }, 3000);
      return () => {
        if (timer) {
          clearTimeout(timer);
        }
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [onClose, onOkay, window.location.pathname, navigate, navigateIFSuccess, timerIfAction]);

  const handleOkay = () => {
    onOkay?.();
  };

  const handleCancel = () => {
    onClose?.();
  };

  return (
    <div className="notification-wrapper__fixed">
      <AnimatePresence>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          exit={{ y: 20, opacity: 0 }}>
          <div
            className={`bg-white flex flex-col justify-center sm:flex-row items-center notification-custom-shadow pb-8 md:pb-5 ${
              variant === "success" ? "border-hexahrome" : "border-[#EF4545]"
            } `}>
            <div className={`flex items-center py-6 px-5 md:pl-5 gap-6 flex-col md:flex-row text-center md:text-left`}>
              <div>{variant === "success" ? successSvg : <img src={error} alt="error icon" />}</div>

              <div>
                <p className="text-base leading-5 text-jetblack font-normal max-w-[636px]">{message}</p>
                {navigate && navigateText && (
                  <>
                    <p className="mt-1">
                      Вы будете перенаправлены в {navigateText} через: {count}
                      {/* navigateTime */}
                    </p>
                  </>
                )}
              </div>
            </div>

            {onClose && onOkay && (
              <div className="flex gap-4 mr-7">
                <button
                  className="rounded-[50px] py-2 px-5 text-base font-normal text-[#AAAAAA] border border-solid border-[#AAAAAA] bg-white"
                  onClick={handleCancel}>
                  Отмена
                </button>
                <button
                  className="w-full rounded-[50px] py-2 px-5 text-base font-normal text-white bg-hexahrome border border-solid border-hexahrome"
                  onClick={handleOkay}>
                  Ок
                </button>
              </div>
              // <p>
              //   <button onClick={handleCancel}>Отмена</button>
              //   <button onClick={handleOkay}>Ок</button>
              // </p>
            )}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Notification;

/*

<div className="notification-wrapper__fixed">
      <div className="bg-blue-600 ">
        <p>{message}</p>
        {navigate && navigateText && (
          <p>
            <button onClick={handleNavigate}>{navigateText}</button>
          </p>
        )}
        {onClose && onOkay && (
          <p>
            <button onClick={handleCancel}>Отмена</button>
            <button onClick={handleOkay}>Ок</button>
          </p>
        )}
      </div>
    </div>

<Notification btnConfirm={"Ок"} btnCancel={"Отмена"} onClickConfirm={} onClickCancel={}  />

*/
