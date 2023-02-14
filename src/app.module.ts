import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Neo4jModule } from 'nest-neo4j';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { EncryptionModule } from './encryption/encryption.module';



@Module({
  imports: [    
    ConfigModule.forRoot({ isGlobal: true }),
    Neo4jModule.forRoot({
      scheme: 'neo4j+s',
      host: 'fe0e9f77.databases.neo4j.io',
      port: 7687,
      username: 'neo4j',
      password: '76E_mhURTEj0jOk_ipC-7ipSjNFt4i-5ApZ41xx1UKE',
    }), 
    AuthModule, 
    UserModule, 
    EncryptionModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
