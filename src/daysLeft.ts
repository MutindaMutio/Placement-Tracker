export function daysLeft(deadline: string, today: string): number {
    const deadlineDate = new Date(deadline);
    const todayDate = new Date(today);
    const millisecondsLeft = deadlineDate.getTime() - todayDate.getTime();
    return millisecondsLeft / (1000 * 60 * 60 * 24);
}
