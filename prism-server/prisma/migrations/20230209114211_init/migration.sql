-- AlterTable
ALTER TABLE "User" ALTER COLUMN "date" DROP DEFAULT,
ALTER COLUMN "date" SET DATA TYPE DOUBLE PRECISION;

-- CreateTable
CREATE TABLE "Payment" (
    "paymentid" SERIAL NOT NULL,
    "paymentammount" INTEGER NOT NULL,
    "userid" INTEGER NOT NULL,

    CONSTRAINT "Payment_pkey" PRIMARY KEY ("paymentid")
);
