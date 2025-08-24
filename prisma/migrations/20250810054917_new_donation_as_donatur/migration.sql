-- CreateTable
CREATE TABLE "public"."DonationFulfillment" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "donorFirebaseId" TEXT NOT NULL,
    "donorName" TEXT NOT NULL,
    "donorNotes" TEXT,
    "donationRequestId" TEXT NOT NULL,

    CONSTRAINT "DonationFulfillment_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."DonationFulfillment" ADD CONSTRAINT "DonationFulfillment_donationRequestId_fkey" FOREIGN KEY ("donationRequestId") REFERENCES "public"."DonationRequest"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
