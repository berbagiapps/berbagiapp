-- CreateTable
CREATE TABLE "public"."FundDonationHistory" (
    "id" TEXT NOT NULL,
    "requestorFirebaseId" TEXT NOT NULL,
    "donatorName" TEXT NOT NULL,
    "donatorDateTime" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "amount" DECIMAL(65,30) NOT NULL,
    "paymentProcess" TEXT NOT NULL,

    CONSTRAINT "FundDonationHistory_pkey" PRIMARY KEY ("id")
);
