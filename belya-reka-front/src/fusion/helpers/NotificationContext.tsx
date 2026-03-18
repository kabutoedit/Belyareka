import React, { createContext, useState } from "react";
import Notification from "common/Notification";

type NotificationVariant = "error" | "success";
export interface NotificationState {
  message: string;
  variant: NotificationVariant;
  onClose?: () => void;
  onOkay?: () => void;
  navigate?: string;
  navigateText?: string;
  showPage?: string;
  // timeShow?: number;
}

interface NotificationContextType {
  showNotification: (notification: NotificationState) => void;
}

export const NotificationContext = createContext<NotificationContextType | undefined>(undefined);

interface INotificationContext {
  children: React.ReactNode;
}

export const NotificationProvider: React.FC<INotificationContext> = ({ children }) => {
  const [notification, setNotification] = useState<NotificationState | null>(null);

  const showNotification = (notification: NotificationState) => {
    setNotification(notification);
  };

  const closeNotification = () => {
    setNotification(null);
  };

  return (
    <NotificationContext.Provider value={{ showNotification }}>
      {children}
      {notification && (
        <Notification
          message={notification.message}
          variant={notification.variant}
          // timeShow={notification.timeShow}
          showPage={notification.showPage && notification.showPage}
          timerIfAction={notification.onOkay ? true : false}
          onClose={() => {
            notification.onClose?.();
            closeNotification();
          }}
          onOkay={
            notification.onOkay
              ? () => {
                  notification.onOkay?.();
                  closeNotification();
                }
              : undefined
          }
          navigate={notification.navigate ? notification.navigate : undefined}
          navigateText={notification.navigate ? notification.navigateText : undefined}
        />
      )}
    </NotificationContext.Provider>
  );
};
