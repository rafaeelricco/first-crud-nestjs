import { Injectable } from '@nestjs/common';
import { NotesDto } from '../../dto/notes.dto';
import { NotesEntity } from '../../entities/notes.entity';
import { ICreateNoteService } from './create-note-service.interface';

@Injectable()
export class CreateNoteService implements ICreateNoteService {
  async execute(data: NotesDto): Promise<NotesEntity> {
    const noteEntity = new NotesEntity();
    noteEntity.id = 'kkkk';
    noteEntity.createdAt = new Date();
    Object.assign(noteEntity, data);
    return noteEntity;
  }
}
