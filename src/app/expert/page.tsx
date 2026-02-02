import ExpertCounter from "@/components/ExpertCounter";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/shadcnui/card";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Expert | Counter State App",
  description: "Expert Counter State App",
};

const page = async () => {
  return (
    <section className="grid h-[90dvh] place-items-center">
      <Card className="w-xs">
        <CardHeader>
          <CardTitle className="grid place-items-center text-2xl">
            Expert Counter App
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-6">
          <ExpertCounter />
        </CardContent>
      </Card>
    </section>
  );
};

export default page;
