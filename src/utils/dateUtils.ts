import { eachDayOfInterval, endOfMonth, startOfMonth } from "date-fns";

export function monthMaker (date:Date) {
    return eachDayOfInterval({
        start: startOfMonth(date),
        end: endOfMonth(date)
    })
}