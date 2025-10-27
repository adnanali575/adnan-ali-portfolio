'use client';

import { ExternalLink, Github, Calendar, Tag } from 'lucide-react';
import Image from 'next/image';
import gymManagerImage from '@/assets/screenshots/gym-manager.png';
import rentalManagerImage from '@/assets/screenshots/rental-manager.png';
import gbtoursImage from '@/assets/screenshots/gb-tours.png'

export function Projects() {
  const projects = [
    {
      title: 'Cloud Gym Manager',
      description: 'A comprehensive cloud-based gym management platform for managing members, classes, trainers, equipment, payments, and reservations. Features include automated billing, membership management, class scheduling, payment processing, trainer management, and comprehensive reporting with analytics dashboard.',
      image: gymManagerImage,
      technologies: ['Vue.js', 'Vuetify', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Pinia'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      date: '2024',
    },
    {
      title: 'Cloud Rental Manager',
      description: 'A full-featured cloud-based property rental management system for managing properties, tenants, landlords, leases, work orders, and payments. Features include tenant portal, automated lease management, payment processing, maintenance tracking, document management, and comprehensive reporting.',
      image: rentalManagerImage,
      technologies: ['React', 'MUI', 'Bootstrap', 'Node.js', 'Express', 'MongoDB', 'JWT'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      date: '2024',
    },
    {
      title: 'GB Tours - Tourism Platform',
      description: 'A full-stack tourism and hospitality platform connecting tourists with local guides and hotels. Features include tour booking, hotel reservations, real-time chat, payment processing with Stripe, review system, guide profile management, and itinerary planning.',
      image: gbtoursImage,
      technologies: ['Vue.js', 'PrimeVue', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB', 'Socket.io', 'Stripe', 'JWT'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      date: '2024',
    },
    {
      title: 'Hotel Management System (HMS)',
      description: 'A comprehensive hotel management solution for managing rooms, bookings, guests, menu orders, employees, and financial operations. Features include room reservation system, restaurant management with table ordering, customer tracking, profit/loss reports, employee management, and ledger systems.',
      image: '/api/placeholder/600/400',
      technologies: ['Next.js', 'TypeScript', 'React', 'Tailwind CSS', 'Radix UI', 'PostgreSQL', 'Sequelize', 'Express', 'JWT'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      date: '2024',
    },
    {
      title: 'Qadeem Crafts - E-Commerce Platform',
      description: 'A modern e-commerce platform for traditional handicrafts featuring product management, shopping cart, order processing, admin dashboard, payment integration, and customer management. Built with Next.js and MySQL database.',
      image: '/api/placeholder/600/400',
      technologies: ['Next.js', 'React', 'Tailwind CSS', 'MySQL', 'Sequelize', 'Stripe', 'JWT', 'AWS S3'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      date: '2024',
    },
    {
      title: 'OUI - OpenWrt Web Interface (Frontend Development)',
      description: 'Frontend development for an OpenWrt web interface framework using Vue.js and Tailwind CSS. Built responsive and interactive UI components and pages including system management, user management, ACL configuration, backup system, DHCP lease tracking, and station management modules. Utilized Vue Router for navigation, i18n for internationalization, and Vite for build optimization.',
      image: '/api/placeholder/600/400',
      technologies: ['Vue.js', 'Tailwind CSS', 'Vite', 'Vue Router', 'i18n', 'JavaScript'],
      githubUrl: 'https://github.com/zhaojh329/oui',
      liveUrl: 'https://zhaojh329.github.io/oui/',
      date: '2024',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-card/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            My <span className="text-blue-500">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my recent full-stack development work
          </p>
        </div>

        {/* Projects */}
        <div className="space-y-16">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`grid lg:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="relative group">
                  <div className="aspect-video rounded-lg bg-linear-to-br from-blue-500/20 to-sky-500/20 p-1 overflow-hidden">
                    {project.image && project.image !== '/api/placeholder/600/400' ? (
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={600}
                        height={400}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    ) : (
                      <div className="w-full h-full rounded-lg bg-card flex items-center justify-center">
                        <div className="text-center">
                          <div className="w-16 h-16 mx-auto mb-4 bg-blue-500/10 rounded-lg flex items-center justify-center">
                            <Tag className="w-8 h-8 text-blue-500" />
                          </div>
                          <p className="text-muted-foreground">Project Screenshot</p>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="absolute inset-0 rounded-lg bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center space-x-4">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
                    >
                      <Github className="w-6 h-6 text-white" />
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
                    >
                      <ExternalLink className="w-6 h-6 text-white" />
                    </a>
                  </div>
                </div>
              </div>

              <div className={`space-y-4 ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <span>{project.date}</span>
                </div>
                <h3 className="text-2xl font-bold text-foreground">
                  {project.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-xs font-medium bg-blue-500/10 text-blue-500 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4 pt-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-foreground hover:text-blue-500 transition-colors"
                  >
                    <Github className="w-5 h-5" />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-foreground hover:text-blue-500 transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
