import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { Sample } from './sample.entity';

@Entity()
export class SampleInfo {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  sampleType: string;
  @Column()
  manufacture: string;
  @Column({ default: false })
  isDeleted: boolean;
  @Column()
  nutrient: string;
  @Column()
  method: string;
  @CreateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
  })
  createdAt: Date;
  @UpdateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
    onUpdate: 'CURRENT_TIMESTAMP(6)',
  })
  updatedAt: Date;
  @OneToOne(() => Sample, (sample) => sample.sampleInfo)
  @JoinColumn()
  sample: Sample;
  @Column({ nullable: true })
  sampleId: number;
}
