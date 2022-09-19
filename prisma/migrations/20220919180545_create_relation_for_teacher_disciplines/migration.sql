-- AddForeignKey
ALTER TABLE "teacher_disciplines" ADD CONSTRAINT "teacher_disciplines_disciplineId_fkey" FOREIGN KEY ("disciplineId") REFERENCES "disciplines"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
