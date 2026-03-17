import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { CreatePropertyDto } from './dto/create-property.dto';
import { UpdatePropertyDto } from './dto/update-property.dto';

@Controller('property')
export class PropertyController {

    @Get()
    findAll() {
        return 'This action returns all properties';
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return `This action returns a #${id} property`;
    }

    @Post()
    create(@Body() createPropertyDto: CreatePropertyDto) {
        return 'This action adds a new property';
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updatePropertyDto: UpdatePropertyDto) {
        return `This action updates a #${id} property`;
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return `This action removes a #${id} property`;
    }

    
}
