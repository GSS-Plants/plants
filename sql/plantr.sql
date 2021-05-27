-- this is a comment in SQL (yes, the space is needed!)
-- these statements will drop the tables and re-add them
-- this is akin to reformatting and reinstalling Windows (OS X never needs a reinstall...) ;)
-- never ever ever ever ever ever ever ever ever ever ever ever ever ever ever ever ever ever ever ever
-- do this on live data!!!!
DROP TABLE IF EXISTS reminder;
DROP TABLE IF EXISTS profilePlant;
DROP TABLE IF EXISTS plant;
DROP TABLE IF EXISTS profile;

CREATE TABLE profile (
                         profileId BINARY(16) NOT NULL,
                         profileActivationToken CHAR(32),
                         profileLoginId VARCHAR(16) NOT NULL,
                         profileEmail VARCHAR(128) NOT NULL,
                         profileHash CHAR(97) NOT NULL,
                         INDEX(profileEmail),
                         INDEX (profileLoginId),
                         UNIQUE(profileEmail),
                         UNIQUE(profileLoginId),
                         PRIMARY KEY(profileId)
);
CREATE TABLE plant (
                       plantId BINARY(16) NOT NULL,
                       plantBloomPeriod VARCHAR(64),
                       plantCommonName VARCHAR(32),
                       plantDuration VARCHAR(16),
                       plantDroughtTolerance CHAR(1),
                       plantGrowthHabit VARCHAR(16),
                       plantGrowthPeriod VARCHAR(64),
                       plantMatureHeight INT,
                       plantMinFrostFreeDays INT,
                       plantPrecipitationMax INT,
                       plantPrecipitationMin INT,
                       plantRootDepthMinimum INT,
                       plantScientificName VARCHAR(32),
                       plantShadeTolerance VARCHAR(8),
                       plantToxicity INT,
                       INDEX (plantCommonName),
                       INDEX (plantScientificName),
                       PRIMARY KEY(plantId)
);

CREATE TABLE profilePlant (
                              profilePlantPlantId BINARY(16) NOT NULL,
                              profilePlantProfileId BINARY(16) NOT NULL,
                              profilePlantNotes VARCHAR(255) NOT NULL,
                              INDEX(profilePlantProfileId),
                              INDEX(profilePlantPlantId),
                              FOREIGN KEY(profilePlantPlantId) REFERENCES plant(plantId),
                              FOREIGN KEY(profilePlantProfileId) REFERENCES profile(profileId),
                              PRIMARY KEY (profilePlantPlantId, profilePlantProfileId)
);
CREATE TABLE reminder (
                        reminderId BINARY(16) NOT NULL,
                        reminderProfilePlantId BINARY(16) NOT NULL,
                        reminderDescription VARCHAR(255),
                        reminderRecurrence INT NOT NULL,
                        reminderStartDate DATETIME(6) NOT NULL,
                        FOREIGN KEY(reminderProfilePlantId) REFERENCES profilePlant(profilePlantPlantId),
                        PRIMARY KEY(reminderId)
);

