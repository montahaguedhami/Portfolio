'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Send } from 'lucide-react'

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log(formData)
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="py-24 px-6 relative">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-center">Get In Touch</h2>
        <p className="text-center text-foreground/60 mb-12">
          Have a project in mind or just want to chat? Feel free to reach out!
        </p>

        <form
          onSubmit={handleSubmit}
          className="space-y-6 p-8 rounded-2xl bg-gradient-to-br from-card to-card/50 border border-border/50 backdrop-blur-sm"
        >
          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              required
              placeholder="Your name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:outline-none transition-colors duration-200 text-foreground placeholder:text-foreground/40"
            />
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              required
              placeholder="your.email@example.com"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:outline-none transition-colors duration-200 text-foreground placeholder:text-foreground/40"
            />
          </div>

          {/* Message Field */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              Message
            </label>
            <textarea
              id="message"
              required
              placeholder="Tell me about your project or just say hello..."
              rows={5}
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:outline-none transition-colors duration-200 text-foreground placeholder:text-foreground/40 resize-none"
            />
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            size="lg"
            className="w-full bg-primary hover:bg-primary/90 text-white group"
          >
            Send Message
            <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </form>

        {/* Contact Info */}
        <div className="grid md:grid-cols-3 gap-6 mt-16">
          <div className="text-center p-6 rounded-lg bg-card border border-border/50 hover:border-primary/50 transition-all duration-300 group">
            <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">Email</h3>
            <a href="mailto:hello@example.com" className="text-foreground/70 hover:text-primary transition-colors">
              hello@example.com
            </a>
          </div>
          <div className="text-center p-6 rounded-lg bg-card border border-border/50 hover:border-primary/50 transition-all duration-300 group">
            <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">LinkedIn</h3>
            <a href="#" className="text-foreground/70 hover:text-primary transition-colors">
              linkedin.com/in/yourprofile
            </a>
          </div>
          <div className="text-center p-6 rounded-lg bg-card border border-border/50 hover:border-primary/50 transition-all duration-300 group">
            <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">GitHub</h3>
            <a href="#" className="text-foreground/70 hover:text-primary transition-colors">
              github.com/yourprofile
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
