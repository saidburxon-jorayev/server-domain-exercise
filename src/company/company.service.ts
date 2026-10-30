import { Injectable } from '@nestjs/common';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class CompanyService {
  constructor(private prisma: PrismaService) {}

  async create(createCompanyDto: CreateCompanyDto) {
    const company = await this.prisma.company.create({
      data: createCompanyDto,
    });
    return company;
  }

  async findAll() {
    const company = await this.prisma.company.findMany({
      include: {
        departments: {
          include: {
            staffs: true,
          },
        },
      },
    });
    return company;
  }

  async findOne(id: number) {
    const company = await this.prisma.company.findUnique({
      where: { id },
      include: { departments: { include: { staffs: true } } },
    });
    return company;
  }

  async update(id: number, updateCompanyDto: UpdateCompanyDto) {
    const company = await this.prisma.company.update({
      where: { id },
      data: updateCompanyDto,
    });
    return company;
  }

  async remove(id: number) {
    const company = await this.prisma.company.delete({ where: { id } });
    return {};
  }
}
