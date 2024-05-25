import { Injectable } from "@nestjs/common";
import { PrismaSevice } from "src/prisma/prisma.service";
import { Task} from "@prisma/client";

@Injectable()
export class TaskService {

    constructor(private prisma: PrismaSevice){}

    async getAllTasks(): Promise<Task[]> {
        return this.prisma.task.findMany();
    }

    async getTaskById(id:number): Promise<Task> {
        return this.prisma.task.findUnique({
            where:{
                id
            }
        })
    }

    async createTask(data: Task): Promise<Task> {
        return this.prisma.task.create({
            data
        })
    }

    async updateTask(id:number, data: Task): Promise<Task> {
        return this.prisma.task.update({
            where:{
                id
            },
            data
        });
    }

    async deleteTask(id:number): Promise<Task> {
        return this.prisma.task.delete({
            where:{
                id
            },
        });
    }

}