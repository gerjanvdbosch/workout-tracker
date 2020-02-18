import Set from '@/models/Set';

export default interface Exercise {
  name: string
  type: string
  group: string
  code: string
  color: string
  sets: Array<Set>
}
