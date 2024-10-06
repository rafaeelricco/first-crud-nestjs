import { Module } from '@nestjs/common';
import { NotesController } from './notes.controller';
import { CreateNoteService } from './services/create/create-note.service';

@Module({
  imports: [],
  controllers: [NotesController],
  providers: [CreateNoteService]
})
export class NotesModule {}
