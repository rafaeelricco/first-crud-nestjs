import { Body, Controller, Post, Res } from '@nestjs/common';
import { NotesDto } from './dto/notes.dto';
import { CreateNoteService } from './services/create/create-note.service';

@Controller('notes')
export class NotesController {
  constructor(private readonly createNoteService: CreateNoteService) {}

  @Post()
  async createNote(@Body() body: NotesDto, @Res() res) {
    const note = await this.createNoteService.execute(body);
    return res.status(201).json(note);
  }
}
