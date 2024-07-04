import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { UserModule } from "@modules/user/user.module";

const { DB_URL } = process.env;

@Module({
  imports: [MongooseModule.forRoot(DB_URL), UserModule]
})
export class MongooseConfigModule {}
