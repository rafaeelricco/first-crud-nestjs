import { NotesDto } from '../../dto/notes.dto';
import { NotesEntity } from '../../entities/notes.entity';

export interface ICreateNoteService {
  execute: (data: NotesDto) => Promise<NotesEntity>;
}
