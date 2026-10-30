import { Module } from '@nestjs/common';
import { CompanyModule } from './company/company.module';
import { DepartmentModule } from './department/department.module';
import { ConfigModule } from '@nestjs/config';
import { StaffModule } from './staff/staff.module';

@Module({
  imports: [ConfigModule.forRoot({
    envFilePath: '.env',
    isGlobal: true
  }),CompanyModule, DepartmentModule, StaffModule],
})
export class AppModule {}
