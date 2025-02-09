"use client";
import { Card } from "@/components/ui/card";
import { Scroll, Shield, Swords, Crown, Book, Flag } from "lucide-react";
import type React from "react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function RulesPage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1E3B3B] to-[#162929] text-gray-100 relative overflow-hidden">
      {/* Animated background effects */}
      <div className="absolute inset-0 bg-[url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-02-04%20at%2021.51.31-QyjiacryDsLMU8Xwuxpz0O3RvdK1H2.jpeg')] opacity-5 bg-cover bg-center" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#1E3B3B]/80 to-[#162929]/80" />

      <div className="container mx-auto px-4 py-16 relative z-10">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative mb-16 text-center"
        >
          <div className="relative inline-block">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 text-[#4DFFF3] drop-shadow-[0_0_10px_rgba(77,255,243,0.3)]">
              THE RULES
            </h1>
            <div className="absolute -inset-1 border-2 border-[#4DFFF3]/20 rounded-lg transform -skew-x-12" />
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl text-gray-300 max-w-2xl mx-auto mt-6"
          >
            Master these guidelines to emerge victorious in our tournament
          </motion.p>
        </motion.div>

        {/* Rules Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          <RuleCard
            icon={<Crown className="w-8 h-8 text-[#4DFFF3]" />}
            title="General Conduct"
            rules={[
              "Show respect to all participants",
              "Arrive 15 minutes before matches",
              "Wear your tournament badge at all times",
              "Follow staff instructions promptly",
            ]}
            delay={0}
          />
          <RuleCard
            icon={<Swords className="w-8 h-8 text-[#4DFFF3]" />}
            title="Competition Rules"
            rules={[
              "Teams must have 3-5 members",
              "All submissions must be original",
              "Elimination rounds are final",
              "No external assistance during matches",
            ]}
            delay={0.2}
          />
          <RuleCard
            icon={<Shield className="w-8 h-8 text-[#4DFFF3]" />}
            title="Safety Protocols"
            rules={[
              "Keep emergency exits clear",
              "Report suspicious activity",
              "Follow evacuation procedures",
              "First aid stations are marked in blue",
            ]}
            delay={0.4}
          />
          <RuleCard
            icon={<Scroll className="w-8 h-8 text-[#4DFFF3]" />}
            title="Registration"
            rules={[
              "Submit all required documents",
              "Pay entry fees before deadline",
              "Verify team roster at check-in",
              "Keep confirmation receipt safe",
            ]}
            delay={0.6}
          />
          <RuleCard
            icon={<Book className="w-8 h-8 text-[#4DFFF3]" />}
            title="Equipment Rules"
            rules={[
              "Bring your own devices",
              "Equipment must be tested prior",
              "No modified hardware allowed",
              "Backup equipment recommended",
            ]}
            delay={0.8}
          />
          <RuleCard
            icon={<Flag className="w-8 h-8 text-[#4DFFF3]" />}
            title="Tournament Stages"
            rules={[
              "Group stage: Round robin",
              "Playoffs: Single elimination",
              "Finals: Best of three",
              "Tiebreakers decided by judges",
            ]}
            delay={1}
          />
        </motion.div>
      </div>
    </div>
  );
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

function RuleCard({
  icon,
  title,
  rules,
  delay,
}: {
  icon: React.ReactNode;
  title: string;
  rules: string[];
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      whileHover={{ scale: 1.02 }}
      className="group"
    >
      <Card
        className="bg-gradient-to-br from-[#D4C7BA] to-[#C4B7AA] text-[#1E3B3B] p-6 rounded-lg 
        shadow-[0_0_15px_rgba(77,255,243,0.1)] hover:shadow-[0_0_20px_rgba(77,255,243,0.2)] 
        transition-all duration-300 backdrop-blur-sm border border-[#4DFFF3]/10"
      >
        <div className="flex items-center gap-4 mb-4">
          <div className="p-2 rounded-lg bg-[#1E3B3B] group-hover:scale-110 transition-transform duration-300">
            {icon}
          </div>
          <h2 className="text-2xl font-bold">{title}</h2>
        </div>
        <ul className="space-y-3">
          {rules.map((rule, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: delay + index * 0.1 }}
              className="flex items-start gap-2"
            >
              <span className="text-[#4DFFF3] font-bold">•</span>
              <span>{rule}</span>
            </motion.li>
          ))}
        </ul>
      </Card>
    </motion.div>
  );
}

function LoadingScreen() {
  return (
    <div className="min-h-screen bg-[#1E3B3B] flex items-center justify-center">
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
          <Swords className="w-full h-full text-[#4DFFF3]" />
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
          className="text-[#4DFFF3] text-xl font-bold"
        >
          Loading Rules...
        </motion.h2>
      </div>
    </div>
  );
}
