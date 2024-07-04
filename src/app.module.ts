import { Module } from "@nestjs/common";
import { ConfigModule } from "@common/config/config.module";
import { MongooseConfigModule } from "@common/database/database.module";
import { UserModule } from "@modules/user/user.module";

@Module({
  imports: [ConfigModule, MongooseConfigModule, UserModule],
  controllers: [],
  providers: []
})
export class AppModule {}
