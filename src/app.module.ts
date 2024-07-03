import { Module } from '@nestjs/common';
import { ConfigModule } from '@common/config/config.module';

@Module({
  imports: [ConfigModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
