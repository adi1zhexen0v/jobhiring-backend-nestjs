import { MailerService } from "@nestjs-modules/mailer";
import { Injectable } from "@nestjs/common";
import { join } from "path";

@Injectable()
export class MailService {
  constructor(private mailerService: MailerService) {}

  async sendActivationCode(email: string, fullName: string, code: string) {
    await this.mailerService.sendMail({
      to: email,
      from: '"Support Team" <support@example.com>',
      subject: "Welcome to Nice App! Confirm your Email",
      template: join(__dirname, "templates", "activation-code"),
      context: {
        fullName,
        code
      }
    });
  }
}
