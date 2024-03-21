"use client";

import {useEffect} from "react";
import {Crisp} from "crisp-sdk-web";

export const CrispChat = () => {
    useEffect(() => {
        Crisp.configure("f4683b45-b5bb-4377-8f07-5fce144f83d4");
    }, [])
    return null;
}