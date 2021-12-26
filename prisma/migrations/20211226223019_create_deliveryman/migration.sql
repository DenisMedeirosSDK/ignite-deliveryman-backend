-- CreateTable
CREATE TABLE "deliveryman" (
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "passsword" TEXT NOT NULL,

    CONSTRAINT "deliveryman_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "deliveryman_username_key" ON "deliveryman"("username");
