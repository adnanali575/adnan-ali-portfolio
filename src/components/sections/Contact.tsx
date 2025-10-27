'use client';

import { Mail, MessageCircle, Github, Linkedin } from 'lucide-react';
import { UpworkIcon } from '@/components/icons/UpworkIcon';
import { TeamsIcon } from '@/components/icons/TeamsIcon';

export function Contact() {

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'adnanali25753@gmail.com',
      href: 'mailto:adnanali25753@gmail.com',
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      value: '+92 310 9178235',
      href: 'https://wa.me/923109178235',
    },
    {
      icon: UpworkIcon,
      title: 'Upwork',
      value: 'Connect with me on Upwork',
      href: 'https://www.upwork.com/freelancers/~019ce1d5335435b63e?mp_source=share',
      isCustomIcon: true,
    },
    {
      icon: TeamsIcon,
      title: 'Microsoft Teams',
      value: 'Connect via Microsoft Teams',
      href: 'https://teams.microsoft.com/l/chat/0/0?users=adnanali25753@gmail.com',
      isCustomIcon: true,
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      name: 'GitHub',
      href: 'https://github.com/adnanali575',
      color: 'hover:text-gray-400',
    },
    {
      icon: Linkedin,
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/adnan-ali-69084528a/',
      color: 'hover:text-blue-400',
    },
  ];

  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Get In <span className="text-blue-500">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to work together? Let's discuss your next project
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Let's Connect
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm always interested in new opportunities and exciting projects. 
                Whether you have a question or just want to say hi, I'll try my 
                best to get back to you!
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 p-4 rounded-lg bg-card border border-border hover:border-blue-500/50 transition-all duration-200 group"
                >
                  <div className="p-3 rounded-lg bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors duration-200">
                    <info.icon className="w-6 h-6 text-blue-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">
                      {info.title}
                    </h4>
                    <p className="text-muted-foreground">
                      {info.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-4">
                Follow Me
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 rounded-lg bg-secondary hover:bg-accent transition-all duration-200 ${social.color}`}
                    aria-label={social.name}
                  >
                    <social.icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
