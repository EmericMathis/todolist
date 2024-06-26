"use client";

import { useEffect, useState } from 'react';
import { useTheme } from "next-themes";
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { LoadingSpinner } from './ui/spinner';

export function ThemeToggle() {
    const { setTheme, theme } = useTheme();
    const [isMounted, setIsMounted] = useState(false);
    const [currentTheme, setCurrentTheme] = useState("light");

    useEffect(() => {
        setIsMounted(true);
        setCurrentTheme(theme || "light"); // Si theme est undefined, "light" sera utilisé
    }, [theme]);

    return (
        <DarkModeSwitch
            size={25}
            checked={currentTheme === "dark"}
            onChange={() => {
                if (isMounted) {
                    setTheme(currentTheme === "light" ? "dark" : "light");
                }
            }}
        />
    );
}