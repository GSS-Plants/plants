INSERT INTO profilePlant(profilePlantPlantId, profilePlantProfileId, profilePlantNotes)
VALUES (UUID_TO_BIN(''), UUID_TO_BIN(''), 'varchar!');

UPDATE profilePlant
SET profilePlantNotes = 'notes!'
WHERE profilePlantPlantId = UUID_TO_BIN('')
  AND profilePlantProfileId = UUID_TO_BIN('');

SELECT profilePlantPlantId, profilePlantProfileId, profilePlantNotes
FROM profilePlant
WHERE profilePlantProfileId = UUID_TO_BIN('');

SELECT profilePlant.profilePlantNotes,
       plant.plantBloomPeriod,
       plant.plantCommonName,
       plant.plantDuration,
       plant.plantDroughtTolerance,
       plant.plantGrowthHabit,
       plant.plantGrowthPeriod,
       plant.plantMatureHeight,
       plant.plantMinFrostFreeDays,
       plant.plantPrecipitationMax,
       plant.plantPrecipitationMin,
       plant.plantRootDepthMinimum,
       plant.plantScientificName,
       plant.plantShadeTolerance,
       plant.plantToxicity
FROM profilePlant
         INNER JOIN plant on profilePlant.profilePlantPlantId = plant.plantId
WHERE profilePlant.profilePlantProfileId = UUID_TO_BIN('');

SELECT profilePlant.profilePlantNotes,
       plant.plantBloomPeriod,
       plant.plantCommonName,
       plant.plantDuration,
       plant.plantDroughtTolerance,
       plant.plantGrowthHabit,
       plant.plantGrowthPeriod,
       plant.plantMatureHeight,
       plant.plantMinFrostFreeDays,
       plant.plantPrecipitationMax,
       plant.plantPrecipitationMin,
       plant.plantRootDepthMinimum,
       plant.plantScientificName,
       plant.plantShadeTolerance,
       plant.plantToxicity
FROM profilePlant
         INNER JOIN plant on profilePlant.profilePlantPlantId = plant.plantId
WHERE profilePlant.profilePlantProfileId = UUID_TO_BIN('')
  AND profilePlant.profilePlantPlantId = UUID_TO_BIN('');

DELETE
FROM profilePlant
WHERE profilePlantProfileId = UUID_TO_BIN('')
  AND profilePlantPlantId = UUID_TO_BIN('')

