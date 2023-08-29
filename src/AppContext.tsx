import React, { createContext, useState } from "react";


export interface ITask {
    title: string;
    id: number;
    done: boolean;
}
interface IApp {
    items: ITask[];
    setItems: React.Dispatch<React.SetStateAction<ITask[]>>;
    task: string;
    setTask: (task: string) => void;
    isButtonActive: boolean
    setIsButtonActive: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IAppProvider {
    children: React.ReactNode;
}
export const AppContext = createContext<IApp>({} as IApp);



export const AppContextProvider: React.FC<IAppProvider> = ({ children }) => {

    const [items, setItems] = useState<ITask[]>([]);
    const [task, setTask] = useState<string>("");
    const [isButtonActive, setIsButtonActive] = useState(true);
    return (
        <AppContext.Provider
            value={{
                items, setItems,
                task, setTask,
                isButtonActive, setIsButtonActive,

            }}>
            {children}
        </AppContext.Provider>
    )

}