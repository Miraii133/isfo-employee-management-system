/*
  Warnings:

  - Added the required column `unit` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "middleName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "unit" TEXT NOT NULL,
    "designation" TEXT NOT NULL,
    "employeeStatus" TEXT NOT NULL
);
INSERT INTO "new_User" ("designation", "email", "employeeStatus", "firstName", "id", "lastName", "middleName") SELECT "designation", "email", "employeeStatus", "firstName", "id", "lastName", "middleName" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
