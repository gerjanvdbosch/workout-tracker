import Exercise from '@/models/Exercise';

export default interface Workout {
  id: string
  date: Date
  name: string
  exercises: Array<Exercise>
}
