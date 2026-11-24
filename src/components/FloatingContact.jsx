import { MessageCircle, Send } from "lucide-react";
import "./FloatingContact.css";

// Temporary contact details
const WHATSAPP_NUMBER = "910000000000";

// Replace with your actual Telegram username later
const TELEGRAM_USERNAME = "your_telegram_username";

export default function FloatingContact() {
  const whatsappMessage = encodeURIComponent(
    "Hi TGS Team, I would like to discuss my brokerage technology requirements."
  );

  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`;

  const telegramLink = `https://t.me/${TELEGRAM_USERNAME}`;

  return (
    <div className="tgs-floating-contact">
      {/* WhatsApp Button */}
      <a
        href={whatsappLink}
        className="tgs-floating-contact-btn tgs-whatsapp-btn"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact TGS on WhatsApp"
        title="Chat with us on WhatsApp"
      >
        <MessageCircle size={19} strokeWidth={2} />

        <span>WhatsApp</span>

        <span className="tgs-contact-external">↗</span>
      </a>

      {/* Telegram Button */}
      <a
        href={telegramLink}
        className="tgs-floating-contact-btn tgs-telegram-btn"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact TGS on Telegram"
        title="Contact us on Telegram"
      >
        <Send size={17} strokeWidth={2} />

        <span>Telegram</span>

        <span className="tgs-contact-external">↗</span>
      </a>
    </div>
  );
}