import { CONTACT_INFO } from "@/constants/site";
import { getDictionary } from "@/i18n/server";

/**
 * Phone first (the most used channel locally), then Telegram and WhatsApp,
 * optionally email, and the working hours.
 */
export async function ContactChannels({ showEmail = false }: { showEmail?: boolean }) {
  const t = await getDictionary();
  const channels = [
    { icon: "fa-solid fa-phone", label: t.contactBand.callUs, value: CONTACT_INFO.phone.label, href: CONTACT_INFO.phone.href },
    { icon: "fa-brands fa-telegram", label: t.contactBand.telegram, value: CONTACT_INFO.phone.label, href: CONTACT_INFO.telegram },
    { icon: "fa-brands fa-whatsapp", label: t.contactBand.whatsapp, value: CONTACT_INFO.phone.label, href: CONTACT_INFO.whatsapp },
    ...(showEmail
      ? [{ icon: "fa-solid fa-envelope", label: t.contact.emailLabel, value: CONTACT_INFO.email.label, href: CONTACT_INFO.email.href }]
      : []),
  ];

  return (
    <div className="contact-channels">
      <ul className="contact-channel-list">
        {channels.map((channel) => (
          <li key={channel.label}>
            <a href={channel.href} className="contact-channel">
              <span className="contact-channel-icon">
                <i className={channel.icon} aria-hidden="true" />
              </span>
              <span className="contact-channel-text">
                <span className="contact-channel-label">{channel.label}</span>
                <span className="contact-channel-value">{channel.value}</span>
              </span>
            </a>
          </li>
        ))}
      </ul>
      <p className="contact-channel-hours">
        <i className="fa-regular fa-clock" aria-hidden="true" /> {t.contactBand.hoursLabel}: {t.common.hours}
      </p>
    </div>
  );
}
