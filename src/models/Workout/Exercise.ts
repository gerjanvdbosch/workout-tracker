import Set from '@/models/Workout/Set';

export default interface Exercise {
  name: string
  sets: Array<Set>
}
