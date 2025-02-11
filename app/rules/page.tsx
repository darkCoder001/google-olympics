"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Swords } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Jersey_10 } from "next/font/google";

const jersey10 = Jersey_10({
  weight: ["400"],
  subsets: ["latin"],
});

type Rule = string;
type Game = {
  name: string;
  rules: Rule[];
};
type Checkpoint = {
  number: number;
  games: Game[];
};

const generateSampleData = (): Checkpoint[] => {
  const checkpoints: Checkpoint[] = [];
  for (let i = 1; i <= 8; i++) {
    const games: Game[] = [];
    for (let j = 1; j <= 3; j++) {
      const rules: Rule[] = [];
      for (let k = 1; k <= 5; k++) {
        rules.push(`Rule ${k} for Game ${j} in Checkpoint ${i}`);
      }
      games.push({ name: `Game ${String.fromCharCode(64 + j)}`, rules });
    }
    checkpoints.push({ number: i, games });
  }
  return checkpoints;
};

const Games = () => {
  const [checkpoints] = useState<Checkpoint[]>(generateSampleData());
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <div className="min-h-screen w-full container mx-auto p-4 space-y-8 bg-black text-white">
      <h1
        className={`text-9xl font-bold text-center mb-8 text-green-700 ${jersey10.className}`}
      >
        Rules
      </h1>
      <Accordion type="single" collapsible className="space-y-4">
        {checkpoints.map((checkpoint) => (
          <AccordionItem
            key={checkpoint.number}
            value={`checkpoint-${checkpoint.number}`}
          >
            <AccordionTrigger className="bg-zinc-950 text-white hover:bg-zinc-900 transition-colors px-4 py-2 rounded-lg">
              <h2 className="text-xl font-semibold">
                Checkpoint {checkpoint.number}
              </h2>
            </AccordionTrigger>
            <AccordionContent className="pt-4 px-4 bg-zinc-900">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {checkpoint.games.map((game) => (
                  <Card
                    key={game.name}
                    className="overflow-hidden bg-zinc-950 text-white shadow-lg transition-all transform hover:scale-105 hover:shadow-xl"
                  >
                    <CardHeader className="bg-zinc-900">
                      <CardTitle className="text-white">{game.name}</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-4">
                      <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="rules">
                          <AccordionTrigger className="hover:text-gray-300 transition-colors">
                            View Rules
                          </AccordionTrigger>
                          <AccordionContent>
                            <ul className="list-disc pl-5 space-y-2">
                              {game.rules.map((rule, index) => (
                                <li
                                  key={index}
                                  className="text-sm text-gray-300"
                                >
                                  <Badge
                                    variant="outline"
                                    className="mr-2 bg-zinc-800 text-white border-zinc-700"
                                  >
                                    {index + 1}
                                  </Badge>
                                  {rule}
                                </li>
                              ))}
                            </ul>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default Games;

const LoadingScreen = () => {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="text-center">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="w-16 h-16 mb-4 mx-auto"
        >
          <Swords className="w-full h-full text-purple-500" />
        </motion.div>
        <motion.h2
          animate={{
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="text-purple-500 text-xl font-bold"
        >
          Loading Rules...
        </motion.h2>
      </div>
    </div>
  );
};
