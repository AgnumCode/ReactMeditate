import React, { createContext, useState, useEffect } from "react";
//import { v4 as uuidv4 } from "uuid";

const initialState = {
  notificationInit: "notificationHide",
  notificationInitMessage: "Welcome."
};

export const NotificationContext = createContext(undefined);
export const NotificationProvider = ({ children }) => {
  const [modeNotification, setModeNotification] = useState(
    initialState.notificationInit
  );
  const [notificationText, setNotificationText] = useState(
    initialState.notificationInitMessage
  );

  useEffect(() => {
    setModeNotification("notificationShow");
    const id = setTimeout(() => {
      setModeNotification("notificationHide");
    }, 2000);
    return () => clearTimeout(id);
  }, [notificationText]);

  return (
    <NotificationContext.Provider
      value={{ _notificationText: notificationText,
               _setNotificationText : setNotificationText,
               _modeNotification: modeNotification,
               _setModeNotification: setModeNotification}}>
      {children}
    </NotificationContext.Provider>
  );
};

//read

/*
  each component given standardized css hide/show blocks and a way to update 
  the message based on its change. CSS improvement: use sass to inherit css.
*/

//Callback required in each component
/*
  const notificationMessage = useCallback(() => {
    return notificationText;
  }, [notificationText]);
*/


//CSS requirement
/*
.notificationShow {
  background-color: #2a9fd6;
  text-align: center;
  color: white;

  font-size: 16px;
  transition: font-size 0.5s;
}

.notificationHide {
  background-color: #2a9fd6;
  color: white;
  font-size: 0px;
  text-align: center;
  transition: font-size 0.5s;
} 
*/
