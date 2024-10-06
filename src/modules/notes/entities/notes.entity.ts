import { ApiProperty } from '@nestjs/swagger';

export class NotesEntity {
  @ApiProperty({ description: 'ID of the note', type: String })
  id: string;
  @ApiProperty({ description: 'Title of the note', type: String })
  title: string;
  @ApiProperty({ description: 'Description of the note', type: String })
  description: string;
  @ApiProperty({ description: 'Is the note completed or not', type: Boolean })
  isCompleted: boolean;
  @ApiProperty({ description: 'Date of creation of the note', type: Date })
  createdAt: Date;
}
