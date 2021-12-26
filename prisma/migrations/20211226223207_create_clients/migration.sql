-- CreateTable
CREATE TABLE "clients" (
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "passsword" TEXT NOT NULL,

    CONSTRAINT "clients_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "clients_username_key" ON "clients"("username");