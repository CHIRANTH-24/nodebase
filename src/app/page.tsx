import { Button } from "@/components/ui/button";
import prisma from "@/lib/db";
import Image from "next/image";

export default async function Home() {
  // const users = await prisma.user.findMany();
  return (
    <div>
      <Button variant="outline">
        {/* {JSON.stringify(users)} */}
      </Button>
    </div>
  );
}
