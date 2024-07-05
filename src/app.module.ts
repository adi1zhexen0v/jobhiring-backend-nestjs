import { Module } from "@nestjs/common";
import { ConfigModule } from "@common/config/config.module";
import { MongooseConfigModule } from "@common/database/database.module";
import { UserModule } from "@modules/user/user.module";
import { MailModule } from "@services/mail/mail.module";
import { JwtModule } from "@services/jwt/jwt.module";
import { ResumeModule } from './modules/resume/resume.module';
import { JobModule } from './modules/job/job.module';

@Module({
  imports: [ConfigModule, MongooseConfigModule, UserModule, MailModule, JwtModule, ResumeModule, JobModule],
  controllers: [],
  providers: []
})
export class AppModule { }
