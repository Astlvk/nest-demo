import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      host: 'localhost',
      port: 27017,
      database: 'develop',
      synchronize: true,
      useUnifiedTopology: true,
      autoLoadEntities: true,
    }),
  ],
})
export class DataBaseModule {}
