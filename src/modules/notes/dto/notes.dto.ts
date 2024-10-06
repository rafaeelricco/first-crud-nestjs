import { ApiProperty } from '@nestjs/swagger';

export class NotesDto {
  @ApiProperty({ description: 'Title of the note', type: String })
  title: string;
  @ApiProperty({ description: 'Description of the note', type: String })
  description: string;
  @ApiProperty({ description: 'Is the note completed or not', type: Boolean })
  isCompleted: boolean;
}
