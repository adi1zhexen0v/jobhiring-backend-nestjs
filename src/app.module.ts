import { Module } from "@nestjs/common";
import { ConfigModule } from "@common/config/config.module";
import { MongooseConfigModule } from "@common/database/database.module";
import { UserModule } from "@modules/user/user.module";
import { MailModule } from "@services/mail/mail.module";

@Module({
  imports: [ConfigModule, MongooseConfigModule, UserModule, MailModule],
  controllers: [],
  providers: []
})
export class AppModule {}
