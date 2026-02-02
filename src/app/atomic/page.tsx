import GlobalCounterButtons from "@/components/GlobalCounterButtons";
import GlobalCounterText from "@/components/GlobalCounterText";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/shadcnui/card";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Atomic | Counter State App",
  description: "Atomic Counter State App",
};

const page = async () => {
  return (
    <section className="grid h-[90dvh] place-items-center">
      <Card className="w-xs">
        <CardHeader>
          <CardTitle className="grid place-items-center text-2xl">
            Atomic Counter App
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-6">
          <GlobalCounterText />

          <GlobalCounterButtons />
        </CardContent>
      </Card>
    </section>
  );
};

export default page;
