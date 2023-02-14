import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserModule } from '../user/user.module';
import { EncryptionModule } from '../encryption/encryption.module';

@Module({
  imports: [UserModule, EncryptionModule],
  providers: [AuthService],
  controllers: [AuthController]
})
export class AuthModule {}