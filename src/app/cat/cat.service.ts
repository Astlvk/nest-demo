import { Injectable } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
import { Cat } from './entities/cat.entity';

@Injectable()
export class CatService {
  async create(createCatDto: CreateCatDto): Promise<Cat> {
    const cat: Cat = new Cat();
    cat.name = createCatDto.name;
    // cat.sex = createCatDto.sex;
    cat.desc = createCatDto.desc;
    return cat.save();
  }

  async findAll() {
    const cats: Cat[] = await Cat.find();
    return cats;
  }

  async findOne(id: string) {
    const cat: Cat = await Cat.findOneBy({ id });
    return cat;
  }

  update(id: string, updateCatDto: UpdateCatDto) {
    return `This action updates a #${id} cat`;
  }

  async remove(id: string) {
    return await Cat.delete(id);
  }
}
