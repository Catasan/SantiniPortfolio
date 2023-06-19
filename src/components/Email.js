
export const EmailButton = () => {
  const email = 'santinicatalina@gmail.com';
  const subject = 'Inquiry';
  const body = 'Hello, I would like to make an inquiry.';
  const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  return (
    <button>
         <button className="vvd">
        <a href={mailtoUrl} style={{ textDecoration: 'none', color: 'inherit' }}>
          Send Email
        </a>
        <span>Let’s Connect</span>
      </button>
    </button>
  )
}
