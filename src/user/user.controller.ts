import { Controller, Get } from '@nestjs/common';
import { UserService } from 'src/user/user.service';

@Controller('users')
export class UserController {
  constructor(private readonly appService: UserService) {}

  @Get('getall')
  getUsers() {
    return this.appService.getUsers();
  }
}
