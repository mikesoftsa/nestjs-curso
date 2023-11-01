import { Module } from '@nestjs/common';
import { ProjectsController } from './controllers/projects.controller';
import { ProjectsService } from './services/projects.service';
import { ProjectsEntity } from './entities/projects.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from 'src/users/services/users.service';
import { UsersProjectsEntity } from 'src/users/entities/usersProjects.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ProjectsEntity, UsersProjectsEntity])],
  controllers: [ProjectsController],
  providers: [ProjectsService, UsersService],
})
export class ProjectsModule {}
