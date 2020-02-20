import Exercise from '@/models/Exercise';

export default interface Workout {
  id: string
  name: string
  date: Date
  exercises: Array<Exercise>
}
