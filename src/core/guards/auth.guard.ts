import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Request } from 'express';
import { Observable } from 'rxjs';
import { JwtService } from '@nestjs/jwt';
import { Reflector } from '@nestjs/core';
import { RolesKey } from '../decorators/roles.decorator';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private readonly jwtService: JwtService,
    private readonly reflector: Reflector,
  ) {}
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const roles = this.reflector.getAllAndOverride(RolesKey, [
      context.getHandler(),
      context.getClass(),
    ]);
    if (!roles) {
      return true;
    }

    const request: Request = context.switchToHttp().getRequest();
    if (!request.headers.authorization) {
      throw new UnauthorizedException();
    }

    const [bearer, token] = request.headers.authorization.split(' ');

    if (bearer.toLowerCase() !== 'bearer') {
      throw new UnauthorizedException();
    }

    if (!token) {
      throw new UnauthorizedException();
    }

    try {
      // @ts-ignore
      request.user = this.jwtService.verify(token);
      return true;
    } catch (exc) {
      throw new UnauthorizedException();
    }
  }
}
