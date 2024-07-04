import { Module } from "@nestjs/common";
import { MailerModule } from "@nestjs-modules/mailer";
import { HandlebarsAdapter } from "@nestjs-modules/mailer/dist/adapters/handlebars.adapter";
import { join } from "path";
import { MailService } from "./mail.service";

const { NODEMAILER_EMAIL, NODEMAILER_PASSWORD } = process.env;

@Module({
  imports: [
    MailerModule.forRoot({
      transport: {
        service: "gmail",
        auth: {
          user: NODEMAILER_EMAIL,
          pass: NODEMAILER_PASSWORD
        }
      },
      defaults: {
        from: '"No Reply" <noreply@example.com>'
      },
      template: {
        dir: join(__dirname, "templates"),
        adapter: new HandlebarsAdapter(),
        options: {
          strict: true
        }
      }
    })
  ],
  providers: [MailService],
  exports: [MailService]
})
export class MailModule {}
