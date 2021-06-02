-- this is a comment in SQL (yes, the space is needed!)
-- these statements will drop the tables and re-add them
-- this is akin to reformatting and reinstalling Windows (OS X never needs a reinstall...) ;)
-- never ever ever ever ever ever ever ever ever ever ever ever ever ever ever ever ever ever ever ever
-- do this on live data!!!!
DROP TABLE IF EXISTS reminder;
DROP TABLE IF EXISTS profilePlant;
DROP TABLE IF EXISTS plant;
DROP TABLE IF EXISTS profile;

CREATE TABLE profile
(
    profileId              BINARY(16)   NOT NULL,
    profileActivationToken CHAR(32),
    profileLoginId         VARCHAR(16)  NOT NULL,
    profileEmail           VARCHAR(128) NOT NULL,
    profileHash            CHAR(97)     NOT NULL,
    INDEX (profileEmail),
    INDEX (profileLoginId),
    UNIQUE (profileEmail),
    UNIQUE (profileLoginId),
    PRIMARY KEY (profileId)
);
CREATE TABLE plant
(
    plantId               BINARY(16) NOT NULL,
    plantBloomPeriod      VARCHAR(64),
    plantCommonName       VARCHAR(32),
    plantDuration         VARCHAR(16),
    plantDroughtTolerance CHAR(1),
    plantGrowthHabit      VARCHAR(16),
    plantGrowthPeriod     VARCHAR(64),
    plantMatureHeight     INT,
    plantMinFrostFreeDays INT,
    plantPrecipitationMax INT,
    plantPrecipitationMin INT,
    plantRootDepthMinimum INT,
    plantScientificName   VARCHAR(32),
    plantShadeTolerance   VARCHAR(8),
    plantToxicity         INT,
    INDEX (plantCommonName),
    INDEX (plantScientificName),
    PRIMARY KEY (plantId)
);

CREATE TABLE profilePlant
(
    profilePlantId        BINARY(16)   NOT NULL,
    profilePlantPlantId   BINARY(16)   NOT NULL,
    profilePlantProfileId BINARY(16)   NOT NULL,
    profilePlantNotes     VARCHAR(255) NOT NULL,
    INDEX (profilePlantProfileId),
    INDEX (profilePlantPlantId),
    FOREIGN KEY (profilePlantPlantId) REFERENCES plant (plantId),
    FOREIGN KEY (profilePlantProfileId) REFERENCES profile (profileId),
    PRIMARY KEY (profilePlantId)
);
CREATE TABLE reminder
(
    reminderId             BINARY(16)  NOT NULL,
    reminderProfilePlantId BINARY(16)  NOT NULL,
    reminderDescription    VARCHAR(255),
    reminderRecurrence     INT         NOT NULL,
    reminderStartDate      DATETIME(6) NOT NULL,
    FOREIGN KEY (reminderProfilePlantId) REFERENCES profilePlant (profilePlantId),
    PRIMARY KEY (reminderId)
);

-- Create a profile and three plants, then three profilePlants and three reminders.

INSERT INTO profile(profileId, profileActivationToken, profileLoginId, profileEmail, profileHash)
VALUES (UUID_TO_BIN('718de089e7a945caa0338113e502555a'), '12345678901234567890123456789012', 'MrPotatoHead', '1hotspud@idaho.gov', '1234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567');

INSERT INTO plant(plantId, plantBloomPeriod, plantCommonName, plantDuration, plantDroughtTolerance, plantGrowthHabit, plantGrowthPeriod, plantMatureHeight, plantMinFrostFreeDays, plantPrecipitationMax, plantPrecipitationMin, plantRootDepthMinimum, plantScientificName, plantShadeTolerance, plantToxicity)
VALUES (UUID_TO_BIN('9035cf41c216471ea85793041eb2c9fe'), 'Mid Spring', 'whitethorn acacia', 'Perennial', 3, 'Tree, Shrub', 'Spring and Summer', 6, 250, 11, 4, 12, 'Acacia constricta', 0, 0);

INSERT INTO plant(plantId, plantBloomPeriod, plantCommonName, plantDuration, plantDroughtTolerance, plantGrowthHabit, plantGrowthPeriod, plantMatureHeight, plantMinFrostFreeDays, plantPrecipitationMax, plantPrecipitationMin, plantRootDepthMinimum, plantScientificName, plantShadeTolerance, plantToxicity)
VALUES (UUID_TO_BIN('f1d9a2dc5b3d4c7684073a415e25e4b1'), 'Mid Spring', 'coastal wattle', 'Perennial', 3, 'Shrub', 'Spring and Summer', 12, 180, 40, 16, 18, 'Acacia cyclops', 0, 0);

INSERT INTO plant(plantId, plantBloomPeriod, plantCommonName, plantDuration, plantDroughtTolerance, plantGrowthHabit, plantGrowthPeriod, plantMatureHeight, plantMinFrostFreeDays, plantPrecipitationMax, plantPrecipitationMin, plantRootDepthMinimum, plantScientificName, plantShadeTolerance, plantToxicity)
VALUES (UUID_TO_BIN('8af62c10bc39499a8269e192bbe62c5f'), 'Spring', 'koaoha', 'Perennial', 1, 'Tree', 'Year Round', 40, 365, 200, 66, 36, 'Acacia koaia', 0, 1);

INSERT INTO profilePlant(profilePlantId, profilePlantPlantId, profilePlantProfileId, profilePlantNotes)
VALUES (UUID_TO_BIN('40bebe59a4534b459ccdd2e93ee7b3e7'), UUID_TO_BIN('9035cf41c216471ea85793041eb2c9fe'), UUID_TO_BIN('718de089e7a945caa0338113e502555a'), 'Jeremiah the whitethorn acacia sits by my cottage window');

INSERT INTO profilePlant(profilePlantId, profilePlantPlantId, profilePlantProfileId, profilePlantNotes)
VALUES (UUID_TO_BIN('ba6195cdd38e455bbbdec50ebd8cb419'), UUID_TO_BIN('f1d9a2dc5b3d4c7684073a415e25e4b1'), UUID_TO_BIN('718de089e7a945caa0338113e502555a'), 'Justinia is a coastal wattle.  She\'s nice.');

INSERT INTO profilePlant(profilePlantId, profilePlantPlantId, profilePlantProfileId, profilePlantNotes)
VALUES (UUID_TO_BIN('1b6169ace2cf48ba960d2ce78f75dd40'), UUID_TO_BIN('8af62c10bc39499a8269e192bbe62c5f'), UUID_TO_BIN('718de089e7a945caa0338113e502555a'), 'Jubilex the koaoha came to me from Hawai\'i and lives in my greenhouse.');

INSERT INTO reminder(reminderId, reminderProfilePlantId, reminderDescription, reminderRecurrence, reminderStartDate)
VALUES (UUID_TO_BIN('a2f94c4c1a7c4405803977130cd8fb80'), UUID_TO_BIN('40bebe59a4534b459ccdd2e93ee7b3e7'), 'give about 1/2 gal of water, gradually', 14, NOW());

INSERT INTO reminder(reminderId, reminderProfilePlantId, reminderDescription, reminderRecurrence, reminderStartDate)
VALUES (UUID_TO_BIN('9a09860fbefc4680b2091a36ee35f48c'), UUID_TO_BIN('ba6195cdd38e455bbbdec50ebd8cb419'), 'water until soil is saturated.  Sprinkle with sea salt', 7, NOW());

INSERT INTO reminder(reminderId, reminderProfilePlantId, reminderDescription, reminderRecurrence, reminderStartDate)
VALUES (UUID_TO_BIN('749e20a8916a46eeac84af3ae1569f2c'), UUID_TO_BIN('1b6169ace2cf48ba960d2ce78f75dd40'), 'douse it like a tropical storm!', 7, NOW());
