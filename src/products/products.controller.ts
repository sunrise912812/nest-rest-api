import { Controller, Get, Param, Post, Delete, Put, Body, HttpCode, HttpStatus, Header } from '@nestjs/common';
import { createProductDto } from './dto/create-product.dto';
import { updateProductDto } from './dto/update-product.dto';
import { ProductsService } from './products.service';
import { Product } from './schemas/product.schema';

@Controller('products')
export class ProductsController {

	constructor(private readonly productsService: ProductsService) {

	}

	//@Get()
	//@Redirect('https://google.com', 301)
	//getAll(@Req() req: Request, @Res() res: Response): string {
	//res.status(201).end('Ok');
	//return 'getAll';
	//};

	@Get()
	getAll(): Promise<Product[]> {
		return this.productsService.getAll();
	}

	@Get(':id')
	getOne(@Param('id') id: string): Promise<Product> {
		return this.productsService.getById(id);
	};

	@Post()
	@HttpCode(HttpStatus.CREATED)
	@Header('Cache-Control', 'none')
	create(@Body() createProduct: createProductDto): Promise<Product> {
		return this.productsService.create(createProduct);
		//return `Title : ${createProduct.title}, Price : ${createProduct.price}`;
	};

	@Delete(':id')
	remove(@Param('id') id: string): Promise<Product> {
		return this.productsService.remove(id);
	};

	@Put(':id')
	update(@Body() updateProduct: updateProductDto, @Param('id') id: string): Promise<Product> {
		return this.productsService.update(id, updateProduct);
		//return `update ID : ${id}, Title : ${updateProduct.title}, Price : ${updateProduct.price}`;
	};
}
