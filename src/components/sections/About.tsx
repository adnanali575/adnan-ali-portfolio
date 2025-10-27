"use client";

import Image from "next/image";
import profileImage from "@/assets/images/profile-picture.jpg";
import { Code, Heart, Zap, Globe, Brain } from "lucide-react";

export function About() {
  const stats = [
    { label: "Years Experience", value: "3+" },
    { label: "Projects Completed", value: "5+" },
    { label: "Technologies", value: "14+" },
  ];

  const interests = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable and scalable code",
    },
    {
      icon: Globe,
      title: "Web Development",
      description: "Building modern web applications",
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Creating fast and efficient solutions",
    },
    {
      icon: Heart,
      title: "User Experience",
      description: "Designing intuitive interfaces",
    },
    {
      icon: Brain,
      title: "Problem Solving",
      description: "Breaking down complex challenges into solutions",
    },
  ];

  return (
    <section id="about" className="py-20 bg-card/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            About <span className="text-blue-500">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get to know the person behind the code
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Photo and Content */}
          <div className="space-y-6">
            {/* Profile Photo */}
            <div className="flex justify-center lg:justify-start mb-8">
              <div className="w-48 h-48 rounded-full bg-linear-to-br from-blue-500/20 to-sky-500/20 p-2">
                <div className="w-full h-full rounded-full overflow-hidden flex justify-center bg-card">
                  <div className="text-center">
                    <div className="w-44 h-auto mx-auto">
                      <Image
                        src={profileImage}
                        alt="Adnan Ali profile photo"
                        width={0}
                        height={0}
                        className="w-full h-full rounded-full object-cover"
                        priority
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Hi, I'm{" "}
                <span className="text-blue-500 font-semibold">Adnan Ali</span>,
                a passionate full-stack developer with over 3 years of
                experience building modern web applications. I specialize in
                creating fast, scalable, and user-friendly solutions using
                cutting-edge technologies.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                My expertise spans both frontend and backend development. On the
                frontend, I work with
                <span className="text-blue-400 font-medium"> Vue.js</span>,{" "}
                <span className="text-blue-400 font-medium">React.js</span>, and{" "}
                <span className="text-blue-400 font-medium">Next.js</span> to
                create dynamic user interfaces. For the backend, I use{" "}
                <span className="text-blue-600 font-medium">Node.js</span> and
                <span className="text-blue-600 font-medium"> MongoDB</span> to
                build robust server-side applications.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm passionate about clean code, performance optimization, and
                creating exceptional user experiences. When I'm not coding,
                you'll find me exploring new technologies, contributing to
                open-source projects, or sharing knowledge with the developer
                community.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 pt-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-4 rounded-lg bg-background/50 hover:bg-background/80 transition-colors duration-200 group"
                >
                  <div className="text-3xl font-bold text-blue-500 mb-1 group-hover:scale-110 transition-transform duration-200">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Interests */}
          <div className="grid grid-cols-2 gap-6">
            {interests.map((interest, index) => (
              <div
                key={index}
                className="p-6 rounded-lg bg-background/50 hover:bg-background/80 transition-all duration-200 group hover:scale-105 hover:shadow-lg hover:shadow-blue-500/10"
              >
                <div className="flex flex-col items-center text-center space-y-3">
                  <div className="p-3 rounded-lg bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors duration-200 group-hover:scale-110">
                    <interest.icon className="w-6 h-6 text-blue-500" />
                  </div>
                  <h3 className="font-semibold text-foreground group-hover:text-blue-500 transition-colors">
                    {interest.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {interest.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
