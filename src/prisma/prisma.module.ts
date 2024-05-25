import { Module } from "@nestjs/common";
import { PrismaSevice } from "./prisma.service";
import { PrismaClient } from "@prisma/client";

@Module({
    providers: [PrismaSevice,PrismaClient],
    exports:[PrismaSevice]
})

export class PrismaModule {}