import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from '../repositories/user.repository';
import { RecoveryRepository } from '../repositories/recovery.repository';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from '../dtos/create-user.dto';
import { ResetPasswordDto } from '../dtos/reset-password.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserRepository)
    private userRepository: UserRepository,
    @InjectRepository(RecoveryRepository)
    private recoveryRepository: RecoveryRepository,
    private jwtService: JwtService,
  ) {}

  async login(email: string, password: string): Promise<any> {
    const user = await this.userRepository.findOne({ where: { email } });
    if (!user || user.blockStatus) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const payload = { email: user.email, sub: user.uid };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async createUser(createUserDto: CreateUserDto): Promise<any> {
    const existingUser = await this.userRepository.findOne({ where: { email: createUserDto.email } });
    if (existingUser) {
      throw new UnauthorizedException('Email already exists');
    }

    const user = await this.userRepository.createUser(createUserDto);
    return { message: 'User created successfully' };
  }

  async requestPasswordReset(email: string): Promise<any> {
    const user = await this.userRepository.findOne({ where: { email } });
    if (!user) {
      throw new UnauthorizedException('Invalid email');
    }

    const recovery = await this.recoveryRepository.createRecovery(email);

    // Send email with recovery code (recovery.rid)

    return { message: 'Password reset email sent' };
  }

  async resetPassword(resetPasswordDto: ResetPasswordDto): Promise<any> {
    const { recoveryCode, newPassword } = resetPasswordDto;
    const recovery = await this.recoveryRepository.findOne({ where: { rid: recoveryCode } });
    if (!recovery) {
      throw new UnauthorizedException('Invalid recovery code');
    }

    const user = await this.userRepository.findOne({ where: { email: recovery.email } });
    if (!user) {
      throw new UnauthorizedException('Invalid email');
    }

    user.password = newPassword;
    await this.userRepository.save(user);
    await this.recoveryRepository.remove(recovery);

    return { message: 'Password reset successful' };
  }
}