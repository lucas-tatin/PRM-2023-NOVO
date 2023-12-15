import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuarioModule } from './usuarios/usuario.module';
import { AssentoModule } from './assentos/assento.module';
import { OnibusModule } from './onibus/onibus.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'prm_2023', 
      synchronize: true,
      autoLoadEntities: true
    }),
    AssentoModule,
    OnibusModule,
    UsuarioModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
