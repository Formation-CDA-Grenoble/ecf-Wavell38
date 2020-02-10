import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as helmet from 'helmet';
import * as rateLimit from 'express-rate-limit';

async function bootstrap() {
  	const app = await NestFactory.create(AppModule);
  	app.enableCors();

  	//middleware globale 
	app.use(helmet());
	app.use(
  		rateLimit({
		    windowMs: 15 * 60 * 1000,
		    max: 100,
  		}),
	);

	//il manque CSRF pour la sécurité (pour les cookies, session)

 	await app.listen(3001);
}
bootstrap();
