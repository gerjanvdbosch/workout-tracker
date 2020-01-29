import Set from '@/models/workout/Set';

export default interface Exercise {
  name: string
  sets: Array<Set>
}
