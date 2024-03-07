import {PrismaClient} from "@prisma/client";
import * as process from "node:process";

declare global{
    let prisma: PrismaClient | undefined;
};

const prismadb = globalThis.prisma || new PrismaClient();

if(process.env.NODE_ENV !== "production") globalThis.prisma = prismadb;

export  default prismadb;