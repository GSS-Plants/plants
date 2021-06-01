export interface Reminder {
    reminderId: string,
    reminderProfilePlantId: string,
    reminderDescription: string|null,
    reminderRecurrence: string|null,
    reminderStartDate: number,
}