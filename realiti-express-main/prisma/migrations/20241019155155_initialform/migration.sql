-- CreateTable
CREATE TABLE "SpeakerForm" (
    "id" TEXT NOT NULL,
    "authorId" TEXT NOT NULL,

    CONSTRAINT "SpeakerForm_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "SpeakerForm_authorId_key" ON "SpeakerForm"("authorId");

-- AddForeignKey
ALTER TABLE "SpeakerForm" ADD CONSTRAINT "SpeakerForm_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
