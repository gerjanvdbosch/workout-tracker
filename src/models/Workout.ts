import Exercise from '@/models/Exercise';

export default interface Workout {
  id: string
  date: Date
  name: string
  code: string
  color: string
  exercises: Array<Exercise>
}
