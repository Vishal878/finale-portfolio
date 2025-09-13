import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-3xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Get In <span className="text-primary"> Touch</span>
        </h2>

        <p className="text-muted-foreground mb-12">
          Feel free to reach out. <br />
          I'm always open to new opportunities.
        </p>

        <div className="space-y-8">
          {/* Email */}
          <div className="flex items-center justify-center space-x-4">
            <div className="p-3 rounded-full bg-primary/10">
              <Mail className="h-6 w-6 text-primary" />
            </div>
            <a
              href="mailto:vs4575747@gmail.com?subject=Let's Connect&body=Hi Vishal,"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              vs4575747@gmail.com
            </a>
          </div>

          {/* Phone */}
          <div className="flex items-center justify-center space-x-4">
            <div className="p-3 rounded-full bg-primary/10">
              <Phone className="h-6 w-6 text-primary" />
            </div>
            <a
              href="tel:+919084336171"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              +91 9084336171
            </a>
          </div>

          {/* Location */}
          <div className="flex items-center justify-center space-x-4">
            <div className="p-3 rounded-full bg-primary/10">
              <MapPin className="h-6 w-6 text-primary" />
            </div>
            <span className="text-muted-foreground">Uttarakhand, India</span>
          </div>

          {/* Social Links */}
          <div className="pt-8">
            <h4 className="font-medium mb-4">Connect With Me</h4>
            <div className="flex space-x-6 justify-center">
              <a
                href="https://www.linkedin.com/in/vishal-saini-a81a97373/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                <Linkedin />
              </a>
              <a
                href="https://www.instagram.com/vishalsaini.20/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                <Instagram />
              </a>
              <a
                href="mailto:vs4575747@gmail.com"
                className="hover:text-primary transition-colors"
              >
                <Mail />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
