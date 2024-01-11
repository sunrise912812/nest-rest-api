import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';


@Module({
	imports: [
		ProductsModule,
		MongooseModule.forRoot(`mongodb+srv://pavelbazarkin19912812:x59heqQJ0o9RgDnW@cluster0.unzywu3.mongodb.net/?retryWrites=true&w=majority`)
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule { }
