import Exercise from '@/models/Workout/Exercise';

export default interface Workout {
  id: string
  date: Date
  exercises: Array<Exercise>
  notes: string
}
