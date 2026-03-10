import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Reflector } from '@nestjs/core';
import { RolesKey } from '../decorators/roles.decorator';
import { Role } from '../enums/role.enum';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    let roles = this.reflector.getAllAndOverride<Role[]>(RolesKey, [context.getHandler(), context.getClass()]);
    if (!roles) {
      return true;
    }

    let { user } = context.switchToHttp().getRequest();

    if (!user) {
      throw new UnauthorizedException('Credentials were not found');
    }

    return roles.includes(user.role);
  }
}