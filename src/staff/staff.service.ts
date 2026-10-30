import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateStaffDto } from './dto/create-staff.dto';
import { UpdateStaffDto } from './dto/update-staff.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class StaffService {
  constructor(private prisma: PrismaService) {}

  async create(createStaffDto: CreateStaffDto) {
    return await this.prisma.staff.create({
      data: {
        fullName: createStaffDto.fullName,
        departmentId: createStaffDto.departmentId
          ? Number(createStaffDto.departmentId)
          : null,
      },
    });
  }

  async findAll() {
    return await this.prisma.staff.findMany();
  }

  async findOne(id: number) {
    const staff = await this.prisma.staff.findUnique({
      where: { id },
    });

    if (!staff) {
      throw new NotFoundException(`Staff member with ID ${id} not found`);
    }
    return staff;
  }

  async update(id: number, updateStaffDto: UpdateStaffDto) {
    return await this.prisma.staff.update({
      where: { id },
      data: updateStaffDto,
    });
  }

  async remove(id: number) {
    await this.prisma.staff.delete({
      where: { id },
    });
    return { message: `Staff member with ID ${id} successfully removed` };
  }
}
