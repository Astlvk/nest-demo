import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DataBaseModule } from './data-base/data-base.module';
import { CatModule } from './app/cat/cat.module';
import { UserModule } from './app/user/user.module';

@Module({
  imports: [DataBaseModule, CatModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
