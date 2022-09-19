-- CreateTable
CREATE TABLE "teacher_disciplines" (
    "id" SERIAL NOT NULL,
    "teacherId" INTEGER NOT NULL,
    "disciplineId" INTEGER NOT NULL,

    CONSTRAINT "teacher_disciplines_pkey" PRIMARY KEY ("id")
);
