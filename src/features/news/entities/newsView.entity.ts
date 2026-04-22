import { BaseModel } from 'src/core/base-model';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { News } from './news.entity';
import { User } from '../../../auth/entities/user.entity';
import type { Relation } from 'typeorm';
@Entity('newsView')
export class NewsView extends BaseModel {
  @Column()
  userId: number;

  @Column()
  newsId: number;

  @Column({ type: 'timestamp' })
  firstDate: Date;

  @Column({ type: 'timestamp' })
  lastDate: Date;

  @Column({ default: 1 })
  count: number;

  @ManyToOne(() => News, (n) => n.newsView, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'newsId' })
  news: Relation<News>;

  @ManyToOne(() => User, (u) => u.newsView, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'userId' })
  user: Relation<User>;
}
