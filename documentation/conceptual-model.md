#ERD Conceptual Model

##User
- PK: userID
- userEmail
- userLoginID
- userPassword

##UserPlant (weak entity)
- FK: userPlantUserID
- FK: userPlantPlantID
- userPlantPicture

##Plant
- PK: plantID
- plantBloomPeriod
- plantCommonName
- plantDuration
- plantDroughtTolerance
- plantGrowthHabit
- plantGrowthPeriod
- plantInvasive
- plantMatureHeight
- plantMinFrostFreeDays
- plantPrecipitationRange
- plantRootDepthMinimum
- plantScientificName
- plantShadeTolerance
- plantStateNoxiousStatus
- plantStateNoxiousCommonName
- plantStates
- plantStateThreatStatus
- plantStateThreatCommonName
- plantToxicity

##Reminder
- PK: reminderID
- FK: reminderUserPlantID
- reminderDescription
- reminderMethod
- reminderRecurrence
- reminderStartDate