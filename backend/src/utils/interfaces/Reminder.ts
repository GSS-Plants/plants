export interface Reminder {
    reminderId: string,
    reminderProfilePlantId: string,
    reminderDescription: string|null,
    reminderRecurrence: number|null,
    reminderStartDate: number,
}