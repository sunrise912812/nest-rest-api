import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { createProductDto } from './dto/create-product.dto';
import { Model } from 'mongoose';
import { ProductsModule } from './products.module';
import { Product } from './schemas/product.schema';
import { updateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductsService {

	constructor(@InjectModel(Product.name) private productModel: Model<Product>) {

	}

	async getAll(): Promise<Product[]> {
		return this.productModel.find().exec();
	};

	async getById(id: string): Promise<Product> {
		return this.productModel.findById(id);
	};

	async create(productDto: createProductDto): Promise<Product> {
		const newProduct = new this.productModel(productDto);
		return newProduct.save();
	}

	async remove(id: string): Promise<Product> {
		return this.productModel.findByIdAndDelete(id);
	}

	async update(id: string, productDto: updateProductDto): Promise<Product> {
		return this.productModel.findByIdAndUpdate(id, productDto, { new: true }); // {new : new} - данная опция создаст новую модель если по id она не была найдена.
	}
};