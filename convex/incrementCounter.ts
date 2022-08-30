import { mutation } from './_generated/server'

export default mutation(
  async ({ db }, counterName: string, increment: number) => {
    const counterDoc = await db
      .table('counters')
      .filter((q) => q.eq(q.field('name'), counterName))
      .first()
    if (counterDoc === null) {
      db.insert('counters', {
        name: counterName,
        counter: increment,
      })
      // console.log messages appear in your browser's console and the Convex dashboard.
      console.log('Created counter.')
    } else {
      counterDoc.counter += increment
      db.replace(counterDoc._id, counterDoc)
      console.log(`Value of counter is now ${counterDoc.counter}.`)
    }
  }
)
