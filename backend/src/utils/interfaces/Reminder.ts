export interface UpdateReminder {
    reminderDescription: string|null,
    reminderRecurrence: number|null,
    reminderStartDate: string|null
}

export interface Reminder {
    reminderId: string,
    reminderProfilePlantId: string,
    reminderDescription: string|null,
    reminderRecurrence: number|null,
    reminderStartDate: string
}

