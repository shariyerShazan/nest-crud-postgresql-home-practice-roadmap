/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AdminService } from './admin/admin.service';
import { AdminModule } from './admin/admin.module';


@Module({
  imports: [UsersModule, AdminModule],
  controllers: [AppController ],
  providers: [AppService, AdminService ],
})
export class AppModule {}
