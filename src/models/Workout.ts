import Exercise from '@/models/workout/Exercise';

export default interface Workout {
  id: string
  date: Date
  exercises: Array<Exercise>
}
