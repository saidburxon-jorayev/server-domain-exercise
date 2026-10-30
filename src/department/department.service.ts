import { Injectable } from '@nestjs/common';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class DepartmentService {
  constructor(private prisma: PrismaService) {}

  async create(createDepartmentDto: CreateDepartmentDto) {
    return await this.prisma.department.create({
      data: {
        title: createDepartmentDto.title,
        companyId: createDepartmentDto.companyId
          ? Number(createDepartmentDto.companyId)
          : null,
      },
    });
  }

  async findAll() {
    const department = await this.prisma.department.findMany();
    return department;
  }

  async findOne(id: number) {
    const department = await this.prisma.department.findUnique({ where: { id } });
    return department;
  }

  async update(id: number, updateDepartmentDto: UpdateDepartmentDto) {
    const department = await this.prisma.department.update({
      where: { id },
      data: updateDepartmentDto,
    });
    return department;
  }

  async remove(id: number) {
    const department = await this.prisma.department.delete({ where: { id } });
    return {};
  }
}
