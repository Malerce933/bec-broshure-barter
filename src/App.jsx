
import RootLayout from "./pages/Root.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import WhatBec from "/src/components/WhatBec.jsx"
import Barter from "./pages/Barter.jsx";
import { useTranslation } from 'react-i18next';


export default function App() {
    const { t } = useTranslation();
    const propositions = t('packets.propositions', { returnObjects: true });
    localStorage.setItem('language', "ua");

    const router = createBrowserRouter([
        {
            path: "",
            element: <RootLayout />,
            children: [
                // { index: true, element: <WhatBec /> },
                { path: "532525", element: <Barter proposition={propositions[0]} /> },
                { path: "135125", element: <Barter proposition={propositions[1]} /> },
                { path: "645636", element: <Barter proposition={propositions[2]} /> },
            ],
        },
    ]);


    return <RouterProvider router={router} />;
}
