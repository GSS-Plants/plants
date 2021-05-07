#ERD Conceptual Model

##Profile
- PK: profileID
- profileEmail
- profileLoginID
- profilePassword

##profilePlant (weak entity)
- FK: profilePlantProfileID
- FK: profilePlantPlantID
- profilePlantNotes
- profilePlantPicture

##Plant
- PK: plantID
- plantBloomPeriod
- plantCommonName
- plantDuration
- plantDroughtTolerance
- plantGrowthHabit
- plantGrowthPeriod
- plantMatureHeight
- plantMinFrostFreeDays
- plantPrecipitationRange
- plantRootDepthMinimum
- plantScientificName
- plantShadeTolerance
- plantToxicity

##Reminder
- PK: reminderID
- FK: reminderProfilePlantID
- reminderDescription
- reminderMethod
- reminderRecurrence
- reminderStartDate