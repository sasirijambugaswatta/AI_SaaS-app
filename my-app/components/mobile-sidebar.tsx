"use client"

import React from 'react';
import {Button} from "@/components/ui/button";
import {Menu} from "lucide-react";

const MobileSidebar = () => {
    return (
        <div>
            <Button variant={"ghost"} size={"icon"}
                    className={"md:hidden"}>
                <Menu/>
            </Button>
        </div>
    );
};

export default MobileSidebar;
