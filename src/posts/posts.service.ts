import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Post } from './entities/post.entity';
import { User } from '../users/users.entity';
import { CreatePostDto } from './dto/create-post.dto';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post)
    private readonly postRepository: Repository<Post>,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  // Create a post linked to an existing user
  async createPost(dto: CreatePostDto): Promise<Post> {
    const user = await this.userRepository.findOne({
      where: { id: dto.userId },
    });

    if (!user) {
      throw new NotFoundException(`User with ID ${dto.userId} not found`);
    }

    const post = this.postRepository.create({
      title: dto.title,
      content: dto.content,
      user,
    });

    return await this.postRepository.save(post);
  }

  // Step 6: Query Builder to filter posts by title and join user relation
  async getPosts(title?: string): Promise<Post[]> {
    const qb = this.postRepository
      .createQueryBuilder('post')
      .leftJoinAndSelect('post.user', 'user');

    if (title) {
      qb.where('LOWER(post.title) LIKE LOWER(:title)', {
        title: `%${title}%`,
      });
    }

    return await qb.getMany();
  }
}