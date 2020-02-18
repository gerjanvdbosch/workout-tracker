import Exercise from '@/models/Exercise';

export default interface Workout {
  id: string
  date: Date
  exercises: Array<Exercise>
}
