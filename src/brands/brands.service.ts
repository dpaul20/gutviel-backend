import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { Brand } from './entities/brand.entity';

@Injectable()
export class BrandsService {
  constructor(
    @InjectRepository(Brand)
    private readonly brandRepository: Repository<Brand>,
  ) {}

  async create(createBrandDto: CreateBrandDto): Promise<Brand> {
    const brand = this.brandRepository.create(createBrandDto);
    return this.brandRepository.save(brand);
  }

  async findAll(): Promise<Brand[]> {
    return this.brandRepository.find({ where: { isActive: true } });
  }

  async findOne(id: number): Promise<Brand> {
    return this.brandRepository.findOne({
      relations: ['products'],
      where: { id },
    });
  }

  async update(id: number, updateBrandDto: UpdateBrandDto): Promise<Brand> {
    const brand = await this.brandRepository.findOne({ where: { id } });
    const updatedBrand = Object.assign(brand, updateBrandDto);
    return this.brandRepository.save(updatedBrand);
  }

  async remove(id: number): Promise<void> {
    await this.brandRepository.delete(id);
  }
}
