import { profile } from "../data/profile";

export default function ContactFooter() {
  return (
    <section id="contact" className="contact" aria-labelledby="contact-h">
      <div className="wrap">
        <h2 id="contact-h" className="contact__kicker">
          Have a project or a role in mind?
        </h2>
        <a className="contact__email" href={`mailto:${profile.email}`}>
          {profile.email}
        </a>
        <div className="contact__channels">
          <a href={profile.whatsapp} target="_blank" rel="noopener noreferrer">
            WhatsApp
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href={profile.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </div>
        <footer className="footer">
          <span>© {new Date().getFullYear()} {profile.name}</span>
          <span>{profile.location}</span>
        </footer>
      </div>
    </section>
  );
}
