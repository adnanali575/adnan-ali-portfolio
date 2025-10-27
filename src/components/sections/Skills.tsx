"use client";

import { Code, Database, Globe, Palette, Wrench } from "lucide-react";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiVuedotjs,
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiMongodb,
  SiVuetify,
  SiPrimevue,
  SiPrimereact,
  SiGithub,
  SiTrello,
} from "react-icons/si";

export function Skills() {
  const skills = [
    { name: "HTML", icon: SiHtml5, color: "bg-orange-500/10 text-orange-500" },
    { name: "CSS", icon: SiCss3, color: "bg-blue-500/10 text-blue-500" },
    {
      name: "JavaScript",
      icon: SiJavascript,
      color: "bg-yellow-500/10 text-yellow-500",
    },
    {
      name: "Vue.js",
      icon: SiVuedotjs,
      color: "bg-green-500/10 text-green-500",
    },
    { name: "React.js", icon: SiReact, color: "bg-cyan-500/10 text-cyan-500" },
    {
      name: "Next.js",
      icon: SiNextdotjs,
      color: "bg-gray-500/10 text-gray-500",
    },
    {
      name: "TypeScript",
      icon: SiTypescript,
      color: "bg-blue-600/10 text-blue-600",
    },
    {
      name: "TailwindCSS",
      icon: SiTailwindcss,
      color: "bg-teal-500/10 text-teal-500",
    },
    {
      name: "PrimeVue",
      icon: SiPrimevue,
      color: "bg-purple-500/10 text-purple-500",
    },
    {
      name: "PrimeReact",
      icon: SiPrimereact,
      color: "bg-purple-600/10 text-purple-600",
    },
    { name: "Vuetify", icon: SiVuetify, color: "bg-blue-400/10 text-blue-400" },
    {
      name: "Node.js",
      icon: SiNodedotjs,
      color: "bg-green-600/10 text-green-600",
    },
    {
      name: "MongoDB",
      icon: SiMongodb,
      color: "bg-green-700/10 text-green-700",
    },
    {
      name: "GitHub",
      icon: SiGithub,
      color: "bg-slate-600/10 text-slate-600 dark:text-slate-400",
    },
    {
      name: "Trello",
      icon: SiTrello,
      color: "bg-blue-600/10 text-blue-600",
    },
  ];

  const skillCategories = [
    {
      title: "Core Languages",
      icon: Code,
      color: "text-blue-700",
      bgColor: "bg-blue-700/10",
      skills: ["HTML", "CSS", "JavaScript", "TypeScript"],
    },
    {
      title: "Frontend Technologies",
      icon: Globe,
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
      skills: ["Vue.js", "React.js", "Next.js"],
    },
    {
      title: "Backend Technologies",
      icon: Database,
      color: "text-blue-600",
      bgColor: "bg-blue-600/10",
      skills: ["Node.js", "MongoDB"],
    },
    {
      title: "UI Frameworks",
      icon: Palette,
      color: "text-sky-500",
      bgColor: "bg-sky-500/10",
      skills: ["PrimeVue", "PrimeReact", "Vuetify", "TailwindCSS"],
    },
    {
      title: "Development Tools",
      icon: Wrench,
      color: "text-purple-500",
      bgColor: "bg-purple-500/10",
      skills: ["GitHub", "Trello"],
    },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            My <span className="text-blue-500">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Technologies and tools I work with to build amazing web applications
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mb-16">
          {skills.map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <div
                key={index}
                className="group p-4 rounded-lg bg-card border border-border hover:border-blue-500/50 transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/10"
              >
                <div className="text-center space-y-2">
                  <div className="flex justify-center mb-2">
                    <div
                      className={`p-2 rounded-lg ${skill.color} group-hover:scale-110 transition-transform duration-200`}
                    >
                      <IconComponent className="w-6 h-6" />
                    </div>
                  </div>
                  <span className="text-sm font-medium text-foreground group-hover:text-blue-500 transition-colors">
                    {skill.name}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Skills Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="p-6 rounded-lg bg-card border border-border hover:border-blue-500/50 transition-all duration-200 group hover:shadow-lg hover:shadow-blue-500/10"
            >
              <div className="flex items-center mb-4">
                <div
                  className={`p-3 rounded-lg ${category.bgColor} group-hover:scale-110 transition-transform duration-200`}
                >
                  <category.icon className={`w-6 h-6 ${category.color}`} />
                </div>
                <h3 className="ml-3 text-lg font-semibold text-foreground">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="px-3 py-1 text-sm bg-secondary text-muted-foreground rounded-full hover:bg-blue-500/10 hover:text-blue-500 transition-colors duration-200"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
