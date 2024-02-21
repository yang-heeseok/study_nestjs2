import { Injectable, NotFoundException } from '@nestjs/common';
import { Board, BoardStatus } from './board.mode';
import { v1 as uuid } from 'uuid';
import { CreateBoardDto } from './dto/create-board.dto';

@Injectable()
export class BoardsService {
  private boards: Board[] = [
    {
      id: 'd5e20470-d0a3-11ee-9a6e-59d28c9d4ec3',
      title: '1234',
      description: 'description',
      status: BoardStatus.PUBLIC,
    },
    {
      id: 'd9396cd0-d0a3-11ee-9a6e-59d28c9d4ec3',
      title: '12345',
      description: 'description',
      status: BoardStatus.PUBLIC,
    },
    {
      id: 'db997ce0-d0a3-11ee-9a6e-59d28c9d4ec3',
      title: '123456',
      description: 'description',
      status: BoardStatus.PUBLIC,
    },
  ];

  getAllBoards(): Board[] {
    return this.boards;
  }

  createBoard(createBoardDto: CreateBoardDto): Board {
    const { title, description } = createBoardDto;
    const board = {
      id: uuid(),
      title,
      description,
      status: BoardStatus.PUBLIC,
    };
    this.boards.push(board);
    return board;
  }

  getBoardById(id: string): Board {
    const found = this.boards.find((board) => board.id === id);
    if (!found) {
      throw new NotFoundException(`Can't find Board with id ${id}`);
    }
    return found;
  }

  deleteBoardById(id: string): void {
    this.getBoardById(id);
    this.boards = this.boards.filter((board) => board.id !== id);
  }

  updateBoardStatus(id: string, status: BoardStatus): Board {
    const board = this.getBoardById(id);
    board.status = status;
    return board;
  }
}
