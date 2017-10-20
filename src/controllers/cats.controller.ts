import { Controller, Get, Post, Body, HttpStatus, Res, Req } from '@nestjs/common';
import { Observable } from 'rxjs/Observable';
import { CreateCatDto } from '../dto/create-cat.dto';

@Controller('cats')
export class CatsController {
  private initialCat: CreateCatDto = {
    name: 'bob',
    age: 42,
    breed: 'random',
  };
  private cats: CreateCatDto[] = [this.initialCat];

  @Post()
  create(@Res() res, @Req() req, @Body() createCatDto: CreateCatDto) {
    const cat: CreateCatDto = req.body;
    this.cats.push(cat);
    // this.cats.push(createCatDto);
    res.status(HttpStatus.CREATED).send(this.cats);
  }

  @Get()
  findAll(@Res() res) {
    res.status(HttpStatus.OK).json(this.cats);
  }
}
