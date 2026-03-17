import { Controller, Get, Post, Body, Param } from '@nestjs/common';

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

    
}
