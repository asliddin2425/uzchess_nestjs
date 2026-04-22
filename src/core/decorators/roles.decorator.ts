import { Role } from '../enums/role.enum';
import { SetMetadata } from '@nestjs/common';

export const RolesKey = 'roles';
export const Roles = (...roles: Role[]) => SetMetadata(RolesKey, roles);
